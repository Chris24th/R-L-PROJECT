<?php

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Password;
use App\Http\Controllers\EmailController;
use Illuminate\Auth\Events\PasswordReset;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('test', function () {
    dd(Auth::user());
});

Route::get('/profile', function (Request $request) {
    return response()->json($request->user());
})->middleware('auth:sanctum');

Route::post('signup', [UserController::class, 'signup']);
Route::post('signin', [UserController::class, 'signin'])->name('login');
Route::post('verification', [UserController::class, 'verification']);
Route::post('forgotpassword', [UserController::class, 'forgotpassword']);
Route::post('resetpassword', [UserController::class, 'resetpassword']);
Route::post('createpost', [PostController::class, 'createpost']);
Route::get('displaypost', [PostController::class, 'displaypost'])->middleware('auth:sanctum');
Route::post('createcomment', [PostController::class, 'createcomment'])->middleware('auth:sanctum');
Route::get('displaycomment', [PostController::class, 'displaycomment'])->middleware('auth:sanctum');
Route::post('deletepost', [PostController::class, 'deletepost'])->middleware('auth:sanctum');
Route::post('editpost', [PostController::class, 'editpost'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user());
});

Route::post('login', function (Request $request) {
    $user = User::where('email', $request->email)->first();

    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required'],
    ]);

    if (Auth::attempt($credentials, true)) {
        return response()->json([
            'email' => $request->email,
        ]);
    } else {
        if (!$user || !Hash::check($request->password, $user->password)) {
            return ["error" => "Email or password is not matched."];
        }
        if (!$user->email_verified_at) {
            return ["error" => "Email not verified. Please check your email inbox."];
        }
    }
});
