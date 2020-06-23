<?php

namespace App\Http\Controllers;

use App\Contact_list;
use App\ContactsLists;
use App\Mail;
use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail as FacadesMail;

class MailsController extends Controller
{

    public function index ()
    {

        return response()->json([
            'status' => true,
            'data' => Mail::all()
        ]);

    }


    public function store (Request $request)
    {   

        $name = $request->name;
        $objet = $request->objet;
        $model = $request->model;

        $email =  Mail::create(['name' =>$name,'object' =>$objet,'model' =>$model,'step' =>1]);

        return  response()->json([
            'status' => true,
            'id' => $email->id
        ]);


    }


    public function add_content (Request $request)
    {
        $id = $request->id;
        $content = $request->content;

        if(Mail::where('id',$id)->update(['content'=>$content,'step'=>2])){


            return response()->json([
                'status' => true,
                'step' => 2
            ]);
        }

    }


    public function sned_mail(Request $request)
    {
        
        $id = $request->id;
        $id_list = $request->id_list;

         $maildata =  Mail::where('id',$id)->get();

        $title =  $maildata[0]->name;
        $content = $maildata[0]->content;
        $date = $maildata[0]->date;
        $data = [$title,$content,$date];


        $list_users = ContactsLists::where('id_list',$id_list )->get();

        foreach($list_users as $row)
        {
            FacadesMail::to($row->password)->send(new WelcomeMail($data));
        }

        return response()->json([
            'status' => true
        ]);
      
  
       

    }


    public function delete_mail(Request $request)
    {

      $id = $request->id;
     

      if(Mail::where('id',$id)->delete())
      {
            return response()->json([
                'status' => true
            ]);
      }

    }



}
