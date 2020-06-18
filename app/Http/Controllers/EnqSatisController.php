<?php

namespace App\Http\Controllers;

use App\EnqSatis;
use Illuminate\Http\Request;

class EnqSatisController extends Controller
{
    public function Store(Request $request)
    {
        $link = $request->input('link');
        EnqSatis::create(['name' => 'enq', 'link' => $link]);
    }


    public function show()
    {
        $data = EnqSatis::all()->last();
        return response()->json([
            'status' => true,
            'data' => $data
        ]);

    }


    public function update(Request $request)
    {
        $link = $request->input('link');
        $id = $request->input('id');
        EnqSatis::where('id', 1)->update(['name' => 'name', 'link' => $link]);
    }
}
