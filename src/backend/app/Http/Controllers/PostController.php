<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Comment;
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
        $post->imageContent = $req->input('imageContent');
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
        $comment->imageContent = $req->input('imageContent');
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
}
