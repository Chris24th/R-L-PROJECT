<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Post;
use App\Models\Comment;
use App\Models\Postreaction;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function createpost(Request $req)
    {
        $post = new Post;
        $post->username = $req->username;
        $post->fname = $req->fname;
        $post->lname = $req->lname;
        $post->textContent = $req->input('textContent');
        $post->reacts = $req->input('reacts');
        $post->save();

        if (!$post || (!$post->textContent && !$post->imageContent)) {
            return ["error" => "Please write a content."];
        }
    }

    function displaypost()
    {
        $maxID = Post::max('id');
        $postArr = array();
        for ($i = $maxID; $i > 0; $i--) {
            $data = Post::where('id', $i)->first();
            if ($data) {
                array_push($postArr, $data);
            }
        }
        return $postArr;
    }

    function createcomment(Request $req)
    {
        // $comment = Comment::where('id', $req->id);
        $comment = new Comment;
        $comment->postID = $req->postID;
        $comment->username = $req->username;
        $comment->fname = $req->fname;
        $comment->lname = $req->lname;
        $comment->textContent = $req->input('textContent');
        $comment->reacts = $req->input('reacts');
        $comment->save();

        return $comment;
    }

    function displaycomment()
    {
        $maxID = Comment::max('id');
        $commentArr = array();

        for ($i = $maxID; $i > 0; $i--) {
            $data = Comment::where('id', $i)->first();
            if ($data) {
                array_push($commentArr, $data);
            }
        }
        if ($commentArr)
            return $commentArr;
    }

    function deletepost(Request $req)
    {
        $post = Post::where('id', $req->id)->first();
        $post->delete();
    }

    function editpost(Request $req)
    {
        $date = Carbon::now();

        $post = Post::where('id', $req->id)->first();
        $post->textContent = $req->textContent;
        $post->updated_at = $date;
        $post->save();

        return $post->textContent;
    }

    function reaction(Request $req)
    {
        $react = new Postreaction();
        $react->id_post = $req->id_post;
        $react->id_user = $req->id_user;
        $react->save();
        
        $response = [
            'id_post' => $react->id_post,
            'id_user' => $react->id_user,
        ];
        return $response;
    }

    function displayreacts(Request $req)
    {
        $maxID = Postreaction::max('id');
        $reactArr = array();

        for ($i = $maxID; $i > 0; $i--) {
            $data = Postreaction::where('id', $i)->first();
            if ($data) {
                array_push($reactArr, $data);
            }
        }
        if ($reactArr)
            return $reactArr;
    }
}
