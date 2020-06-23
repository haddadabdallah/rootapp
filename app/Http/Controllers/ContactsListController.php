<?php

namespace App\Http\Controllers;

use App\Contact_list;
use App\ContactsLists;
use Illuminate\Http\Request;

class ContactsListController extends Controller
{
    public function index (Request $request){
        
        ContactsLists::create([
            'username' => $request->input('username'),
            'password' => $request->input('password'),
            'id_list' =>$request->input('id')
        ]);
    }

    public function getcontact(Request $request)
    {
        
        $id = $request->id;

        return response()->json([
            'status' => true,
            'data' => ContactsLists::where('id_list',$id)->get()
        ]);
    }

    public function deletall (Request $request)
    {

        $id = $request->id;
        
        if(ContactsLists::where('id_list',$id)->delete())
        {
            return response()->json([
                'status' => true,
            ]);
        }else{
            return response()->json([
                'status' => false,
            ]);
        }


    }


    public function delete_contact (Request $request)
    {

        $id = $request->id;
        
        if(ContactsLists::where('id',$id)->delete())
        {
            return response()->json([
                'status' => true,
            ]);
        }else{
            return response()->json([
                'status' => false,
            ]);
        }


    }


}


