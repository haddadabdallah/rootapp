<?php

namespace App\Http\Controllers;

use App\Cmnt;
use App\Post_proj;
use App\Post_s;
use App\rh_info;
use Illuminate\Http\Request;

class CmntController extends Controller
{
        public function index()
        {
           $data = Cmnt::all();

           return response()->json([
               'status' => true,
                'data'=> $data
           ]);
        }



        public function where ($path='',$id='')
        {

            $data = Cmnt::where('user',$path)->where('id_post',$id)->get();
            return response()->json([
                'status' => true,
                 'data'=> $data,

            ]);


        }


        public function store(Request $request)
        {
            $username= $request->input('username');
            $id_post =$request->input('id_post');
            $id_user= $request->input('id_user');
            $comm= $request->input('comnt');
            $user= $request->input('user');
            $title= $request->input('title');
            $id_post = $request->input('id_post');
            $date_diff = $request->input('date_diff');
            $photo = $request->input('photo');
            if(Cmnt::create(['username'=>$username,'id_post'=>$id_post,'id_user'=>$id_user,'comm'=>$comm,'user'=>$user,'title'=>$title,'date_diff'=>$date_diff,'photo'=>$photo]))
            {

                if($user == 'actualites')
                {
                    $last_count =   Post_s::where('id', $id_post)->get('comm');
                   $new_count =   $last_count[0]->comm +1;
                    Post_s::where('id', $id_post)->update(['comm' => $new_count]);
                }


                if($user == 'project')
                {
                    $last_count =  Post_proj::where('id', $id_post)->get('comm');
                   $new_count =   $last_count[0]->comm +1;
                   Post_proj::where('id', $id_post)->update(['comm' => $new_count]);
                }


                if($user == 'rhinfo')
                {
                    $last_count =  rh_info::where('id', $id_post)->get('comm');
                   $new_count =   $last_count[0]->comm +1;
                   rh_info::where('id', $id_post)->update(['comm' => $new_count]);
                }



            }



            return response()->json([
                "status" => true
            ]);

        }



        public function delete(Request $request)
        {

            $id = $request->input('id');
            $id_post = $request->input('id_post');
            $path = $request->input('path');

            if(Cmnt::where('id', $id)->delete()){

                if($path == 'actualites')
                {
                    $last_count =   Post_s::where('id', $id_post)->get('comm');
                    $new_count =   $last_count[0]->comm -1;
                     Post_s::where('id', $id_post)->update(['comm' => $new_count]);
                }

                if($path == 'project')
                {
                    $last_count =   Post_proj::where('id', $id_post)->get('comm');
                    $new_count =   $last_count[0]->comm -1;
                    Post_proj::where('id', $id_post)->update(['comm' => $new_count]);
                }


                if($path == 'rhinfo')
                {
                    $last_count =   rh_info::where('id', $id_post)->get('comm');
                    $new_count =   $last_count[0]->comm -1;
                    rh_info::where('id', $id_post)->update(['comm' => $new_count]);
                }





                return response()->json([
                    "status" => true,
                    "id_post" => $id_post
                ]);

            }else{

                return response()->json([
                    "status" => false,

                ]);

            }



        }


}
