<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use App\Notifications\TestEnrollment;
use Illuminate\Support\Facades\Notification;

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
    
    function forgotpassword(Request $req)
    {
        $user = User::where('email', $req->email)->first();
        
        $enrollmentData = [
            'body' => 'You recieved a new notification',
            'enrollmentText' => 'You are allowed to enroll',
            'url' => url('/'),
            'thankyou' => 'You have 14 days to enroll'
        ];
        if(!$user || $req->email!=$user->email){
            return ["error"=>"Email not found"];
        }
        return $user;
        // $user->notify(new TestEnrollment($enrollmentData));
        Notification::send($user, new TestEnrollment($enrollmentData));
    }
}
