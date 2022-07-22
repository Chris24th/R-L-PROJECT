<?php

use App\Http\Controllers\EmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::post('signup', [UserController::class,'signup']);
Route::post('signin', [UserController::class,'signin']);
Route::post('forgotpassword', [UserController::class,'forgotpassword']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
