<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function signup(Request $req)
    {
        //
        $user = new User;
        $user->email=$req->input('email');
        $user->username=$req->input('username');
        $user->password=Hash::make($req->input('password'));
        $user->fname=$req->input('fname');
        $user->lname=$req->input('lname');
        $user->sex=$req->input('sex');
        $user->save();

        return $user;
    }

    function signin(Request $req){

        $user = User::where('email', $req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password)){
            return ["error"=>"Email or password is not matched"];
        }
        return $user;
    }
}
