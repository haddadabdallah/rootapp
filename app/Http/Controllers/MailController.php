<?php

namespace App\Http\Controllers;
use \Mailjet\Resources;



use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;



class MailController extends Controller
{


   public function send(Request $request)


   {

      $content = $request->input('content');
      $contacts = ['ama.haddad22@gmail.com','chiali.cm@gmail.com'];


      $data = [
          'first_name'=>'John', 
          'last_name'=>'Doe', 
          'email'=> $content,
          'password'=>'temp'
      ];
  
  
          Mail::to('ama.haddad22@gmail.com')->send(new WelcomeMail($data));
          
  
      return response()->json([
          'status' => true
      ]);


   }


}

