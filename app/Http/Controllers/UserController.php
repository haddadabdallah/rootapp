<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
        public function GetUserInfo(Request $request) 
        {
           return DB::table('user_intra')->where('username',$request->input('username'))->get();
        }
}
