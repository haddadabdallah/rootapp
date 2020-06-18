<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnnuController extends Controller
{
    public function index(Request $request)
    {

        $name = $request->input('name');
        $fill = $request->input('fill');


        $users = DB::table('user_intra')->where('Filiales','CHIALI SERVICES');



        if($name == '')
        {
        }else{
          $users =  $users->where('p_name','like','%'.$name.'%')->orWhere('l_name','like','%'.$name.'%')->where('Filiales','CHIALI SERVICES');
        }


        if($fill == '')
        {
        }else{
          $users =  $users->where('Structure','like','%'.$fill.'%')->where('Filiales','CHIALI SERVICES');
        }



        return $users->get();



     $users = DB::table('user_intra')->where('Filiales','CHIALI SERVICES')->get();














        return $users;
    }

}
