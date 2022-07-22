<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Notifications\NewMessage;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;

class UserController extends Controller
{
    function signup(Request $req)
    {
        //
        $user = new User;
        $user->email = $req->input('email');
        $user->username = $req->input('username');
        $user->password = Hash::make($req->input('password'));
        $user->fname = $req->input('fname');
        $user->lname = $req->input('lname');
        $user->sex = $req->input('sex');
        $user->save();

        return $user;
    }

    function signin(Request $req)
    {

        $user = User::where('email', $req->email)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Email or password is not matched"];
        }
        return $user;
    }

    function forgotpassword(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || $req->email != $user->email) {
            return ["error" => "Email not found"];
        }
        // $user->notify(new TestEnrollment($enrollmentData));
        Notification::send($user, new NewMessage());
        return $user->email;
    }

    function resetpassword(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        $user->password = Hash::make($req->input('password'));
        $user->username = $req->input('username'); //line to be deleted
        $user->save();

        return $user;
    }
}
