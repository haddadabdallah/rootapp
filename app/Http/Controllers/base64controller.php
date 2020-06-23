<?php

namespace App\Http\Controllers;

use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class base64controller extends Controller
{
    
    public function index (Request $request)
    {
         
        $data_split = explode(',',$request->base);
 
      
        $str = $data_split[1];
        
        $data = base64_decode($str);
    


        $data = preg_split('/\r\n|\r|\n/',$data);
        
        
       
      
        
        
        $data_count =  count($data);
            $username = [];
            $password = [];
        
        for ($i=1; $i <$data_count ; $i++) { 
         $data_final =  explode(';',$data[$i]);
         if(isset($data_final[1])){
            mb_internal_encoding("utf-8");

            array_push($username,mb_decode_mimeheader($data_final[0]));
            array_push($password,mb_decode_mimeheader($data_final[1]));
         }
        
        }
        


    
        
        $username_obj = (object)$username;
        $password_obj = (object)$password;
        
        echo json_encode([
            'username' => $username_obj,
            'password' => $password_obj
        ]);
        


  

    }

}
