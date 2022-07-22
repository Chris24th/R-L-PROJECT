<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\AttachmentMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Notifications\TestEnrollment;
use Illuminate\Support\Facades\Notification;

class EmailController extends Controller
{
}
