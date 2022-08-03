<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\ChangePass;
use App\Notifications\VerifyEmail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;

class UserController extends Controller
{
    function signup(Request $req)
    {
        $checkEmail = User::where('email', $req->email)->first();
        $checkUsername = User::where('username', $req->username)->first();

        if ($checkEmail && $checkEmail->email == $req->email) {
            if ($checkUsername && $checkUsername->username == $req->username) {
                return ["error" => "Email and Username already exist"];
            } else return
                ["error" => "Email already exists"];
        } else if ($checkUsername && $checkUsername->username == $req->username) {
            return ["error" => "Username already exists"];
        }

        $user = new User;
        $user->email = $req->input('email');
        $user->username = $req->input('username');
        $user->password = Hash::make($req->input('password'));
        $user->fname = $req->input('fname');
        $user->lname = $req->input('lname');
        $user->sex = $req->input('sex');
        $user->save();

        Notification::send($user, new VerifyEmail());

        return $user;
    }

    function signin(Request $req)
    {
        $user = User::where('email', $req->email)->first();

        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Email or password is not matched."];
        }
        if (!$user->email_verified_at) {
            return ["error" => "Email not verified. Please check your email inbox."];
        }
        return $user;
    }

    function forgotpassword(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        if (!$user || $req->email != $user->email) {
            return ["error" => "Email not found"];
        }
        Notification::send($user, new ChangePass());

        return $user->email;
    }

    function resetpassword(Request $req)
    {
        $date = Carbon::now();
        $user = User::where('email', $req->email)->first();
        $user->password = Hash::make($req->input('password'));
        $user->updated_at = $date;
        $user->save();
    }

    function verification(Request $req)
    {
        $date = Carbon::now();
        $user = User::where('email', $req->email)->first();
        $user->email_verified_at = $date;
        $user->save();

        return $user;
    }
}
