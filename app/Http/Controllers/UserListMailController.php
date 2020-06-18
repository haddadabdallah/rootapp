<?php

namespace App\Http\Controllers;

use App\lists_user;
use Illuminate\Http\Request;

class UserListMailController extends Controller
{
    public function index ()
    {
         return response()->json([
             'status' => true,
             'data' =>  lists_user::all()
         ]);

    }


    public function store (Request $request)
    {
          $title =  $request->title;
           $count = $request->count;

         

            if(lists_user::create(['title'=>$title,'count'=>$count]))
            {

                return response()->json([
                    'status' => true,
                ]);
            }


    }

    public function delete(Request $request)
    {
        $id = $request->input('id');
        if(lists_user::where('id',$id)->delete())
        {
            return response()->json([
                "status" => true
            ]);
        }else{
            return response()->json([
                "status" => false
            ]);
        }

    }


    public function update(Request $request)
    {
        $id = $request->input('id');

            $title =  $request->title;
           $count = $request->count;
            if(lists_user::where('id',$id)->update(['title' => $title,'count' => $count]))
            {
                return response()->json([
                    "status" => true
                ]);
            }else{
                return response()->json([
                    "status" => false
                ]);
            }

    }


}
