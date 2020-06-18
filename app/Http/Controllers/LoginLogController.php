<?php

namespace App\Http\Controllers;

use App\Login_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginLogController extends Controller
{
    public function index($start = '', $end = '')
    {


        if ($start == '' && $end == '') {




            $data = DB::table('login_logs')



                ->orderBy('id', 'asc')->get();


            return response()->json([
                'data' => $data->groupBy('date'),
                'totel' => $data->count()
            ]);
        } else {



            $dt_start =   date('Y-m-d', strtotime('01-' . $start . '-2020'));

            $end_date = $end + 1;
            $dt_end =   date("Y-m-t", strtotime("2020-" . $end_date . "-00"));


            $data = DB::table('login_logs')

                ->whereBetween('created_at', [$dt_start, $dt_end])

                ->orderBy('id', 'asc')->get();


            return response()->json([
                'data' => $data->groupBy('date'),
                'totel' => $data->count()
            ]);
        }
    }


    public function store_login ()
    {
       

        DB::table('login_logs')->insert([
            'username' => 'abdallah',
            'fill' => 'groupe',
            'date' => date("o-m-d") ,
        ]);
    }


}
