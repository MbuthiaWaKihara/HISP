<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class SendMailController extends Controller
{
    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $info = array(
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        );
        
        $response = array(
            'message' => 'Your message has been sent. Thank you!',
        );

        $mail = new Mail;
        Mail::to('evansmbuthia97@gmail.com')->send(new SendMail($info));
        return $response;
        
    }
}
