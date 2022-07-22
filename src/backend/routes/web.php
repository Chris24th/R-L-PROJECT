<?php

use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    
    return 'hello world';
});

//Route for mailing
Route::get('/email', function() {
    Mail::to('espenida.c@sprobe.com')->send(new WelcomeMail());
    return new WelcomeMail();
});

// Route::get('/email', [EmailController::class, 'email']);

// Route::get('/forgotpassword', [EmailController::class, 'forgotpassword']);

