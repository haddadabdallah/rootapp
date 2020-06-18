<?php

namespace App\Http\Controllers;

use App\Email_list;
use Illuminate\Http\Request;

class List_mailController extends Controller
{
        public function index ()
        {   

            return response()->json([
                'status'=>true,
                'data' => Email_list::all()
            ]);


        }



        public function where (Request $request,$id='')
        {   
            return response()->json([
                'status'=>true,
                'data' => Email_list::where('id',$id)->get()
            ]);


        }



        public function store (Request $request)
        {
            $name = $request->input('name');
            $cat = $request->input('cat');

            
            if(Email_list::create(['name'=>$name,'cat'=>$cat]))
            {

                return response()->json([
                    'status'=>true
                ]);

            }

        }


        public function update (Request $request)
        {
            $id = $request->input('id');
            $name = $request->input('name');
            $cat = $request->input('cat');


            if(Email_list::where('id',$id )->update(['name'=>$name,'cat'=>$cat]))
            {

                return response()->json([
                    'status'=>true
                ]);

            }
            
        }


        public function delete (Request $request)
        {
            $id = $request->input('id');
            Email_list::where('id',$id)->delete();  
        }


}
