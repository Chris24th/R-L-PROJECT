<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    function createpost(Request $req)
    {
        $post = new Post;
        $post->username = $req->username;
        $post->textContent = $req->input('textContent');
        $post->imageContent = $req->input('imageContent');
        $post->reacts = $req->input('reacts');

        if (!$post || !$post->username || (!$post->textContent && !$post->imageContent)) {
            return ["error" => "Please write a content."];
        }
        return $post;
    }
}
