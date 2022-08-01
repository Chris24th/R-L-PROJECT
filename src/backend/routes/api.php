<?php

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Password;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\PostController;
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


Route::get('/', function () {
    return response()->json([
        'description' => 'Sprobe OJT Laravel API',
        'version' => 1,
    ]);
});

Route::post('signup', [UserController::class, 'signup']);
Route::post('signin', [UserController::class, 'signin']);
Route::post('verification', [UserController::class, 'verification']);
Route::post('forgotpassword', [UserController::class, 'forgotpassword']);
Route::post('resetpassword', [UserController::class, 'resetpassword']);
Route::post('createpost', [PostController::class, 'createpost']);
Route::get('displaypost', [PostController::class, 'displaypost']);
Route::post('createcomment', [PostController::class, 'createcomment']);
Route::get('displaycomment', [PostController::class, 'displaycomment']);
Route::post('deletepost', [PostController::class, 'deletepost']);
Route::post('editpost', [PostController::class, 'editpost']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
