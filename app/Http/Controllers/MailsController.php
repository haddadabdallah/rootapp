<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class MailsController extends Controller
{

    public function index()
    {

   
        return response()->json([
            'status' => true,
            'data' =>  DB::table('mails')->get()
        ]);

    }


    public function store(Request $request)
    {

        $title = $request->title;
        $content = $request->title;
        $model = $request->model;
        $sig = $request->sig;
        $by = $request->by;


        DB::table('mails')->insert([
            'name' => $title,
            'content' => $content,
            'model' => $model,
            'sign' => $sig,
            'by' => $by
        ]);
        

    }


        public function where (Request $request)
        {
            $id = $request->id;

            if(Mail::where('id',$id )->get())
            {
                return response()->json([
                    'status' => true,
                    'data' => Mail::where('id',$id )->get()
                ]);
            }else{
                return response()->json([
                    'status' => false,
                ]);
            }

        }


        public function delete (Request $request)
        {
            $id = $request->id;
            
            if(Mail::where('id',$id)->delete())
            {
                return response()->json([
                    'status' => true,
                ]);
            }else{
                return response()->json([
                    'status' => true,
                ]);
            }

        }


}
