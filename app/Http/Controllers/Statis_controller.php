<?php

namespace App\Http\Controllers;

use App\Cmnt;
use App\Page_statis;
use App\Statis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Statis_controller extends Controller
{
    public function get_statiq_by_mnth($id = '')
    {
        $data =  Statis::whereMonth('time', $id)->get();
        return $data->groupBy('time');
    }


    public function page_statis($start = '', $end = "")
    {


        if ($start == '' && $end == "") {



            $article =  Page_statis::where('page','article')->count();
            $doc =  Page_statis::where('page','article')->count();
            $videos =  Page_statis::where('page','videos')->count();
            $rh_info =  Page_statis::where('page','rh_info')->count();


              return response()->json([
                  'status' => true,
                  'article'=> $article,
                  'videos' => $videos,
                  'doc' => $doc,
                  'rh_info' => $rh_info
              ]);




        } else {


            $dt_start =   date('Y-m-d', strtotime('01-' . $start . '-2020'));

$end_date = $end + 1;
$dt_end =   date("Y-m-t", strtotime("2020-" . $end_date . "-00"));


              $article =  Page_statis::where('page','article')->whereBetween('created_at', [$dt_start, $dt_end])->count();
              $doc =  Page_statis::where('page','article')->whereBetween('created_at', [$dt_start, $dt_end])->count();
              $videos =  Page_statis::where('page','videos')->whereBetween('created_at', [$dt_start, $dt_end])->count();
              $rh_info =  Page_statis::where('page','rh_info')->whereBetween('created_at', [$dt_start, $dt_end])->count();


                return response()->json([
                    'status' => true,
                    'article'=> $article,
                    'videos' => $videos,
                    'doc' => $doc,
                    'rh_info' => $rh_info
                ]);




        }
    }


    public function all_statis()
    {

        $article =  DB::table('post_s')->count();
        $rh_info =  DB::table('rh_infos')->count();
        $project =  DB::table('post_projs')->count();
        $doc = DB::table('docs')->count();
        $comnt = DB::table('cmnts')->count();
        $empm = DB::table('empms')->count();
        $cmnt_art = Cmnt::where('user', 'actualites')->count();
        $cmnt_rhinfo = Cmnt::where('user', 'rhinfo')->count();
        $cmntproject = Cmnt::where('user', 'project')->count();



        return response()->json([
            'status' => true,
            'article' => $article,
            'comnt_article' => $cmnt_art,
            'rh_info' => $rh_info,
            'comnt_rhinfo' => $cmnt_rhinfo,
            'project' => $project,
            'comnt_project' => $cmntproject,
            'doc' => $doc,
            'comnt' => $comnt,
            'empm' => $empm
        ]);
    }
}
