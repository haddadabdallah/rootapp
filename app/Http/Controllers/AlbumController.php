<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AlbumController extends Controller
{


    public function getalbum($id="")
    {
        
        $albums = DB::table('albums_services')->where("post_id",$id)->get();
        return $albums ;

    }
}
