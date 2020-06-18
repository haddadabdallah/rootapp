<?php

namespace App\Http\Controllers;

use App\Contact_list;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class ContactsController extends Controller
{
    public function index($id = '')
    {
        return response()->json([
            'status' => true,
            'data' => Contact_list::where('id_list', $id)->get()
        ]);
    }


    public function store(Request $request)
    {
        $l_name = $request->input('name');
        $p_name = $request->input('p_name');
        $email = $request->input('email');
        $id_list = $request->input('id_list');

        if (Contact_list::create(['p_name' => $p_name, 'l_name' => $l_name, 'email' => $email, 'id_list' => $id_list])) {
            return response()->json([
                'status' => true,
            ]);
        }
    }

    public function delete(Request $request)
    {

        $id = $request->input('id');


        if (Contact_list::where('id', $id)->delete()) {
            return response()->json([
                'status' => true,
            ]);
        } else {
            return response()->json([
                'status' => false,
            ]);
        }
    }
}
