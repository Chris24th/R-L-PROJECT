<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Faker\Provider\Lorem;

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
        for ($i = 0; $i < $maxID; $i++) {
            $data = Post::where('id', $maxID)->first();
            if ($data) {
                $postArr[$i] = $data;
            }
            $maxID--;
        }
        return $postArr;
    }
}
