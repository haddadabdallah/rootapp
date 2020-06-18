<?php

namespace App\Http\Controllers;

use App\rh_info;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class UpLoadeController_rh_info extends Controller
{
    public function Upload(Request $request)
    {

        $title = $request->title;
        $content = $request->content;
        $date_diff = $request->date_diff;

        $file_name_album = [];


        ///// vin //////

        $vin = $request->file('vin');
        $name_vin = Str::random(10) . '.' . $vin->getClientOriginalExtension();
        $vin->move(public_path('/post_image'), $name_vin);
        $file_name_vin = $name_vin;

        $couverture = $request->file('couverture');
        $name_couverture = Str::random(10) . '.' . $couverture->getClientOriginalExtension();
        $couverture->move(public_path('/post_image'), $name_couverture);
        $file_name_couverture = $name_couverture;


        $id = rh_info::create(['name' => $title, 'content' => $content, 'vin' => $file_name_vin, 'couverture' => $file_name_couverture, 'view' => 0,'comm'=>0,'date_diff' => $date_diff])->id;


        if ($request->file('album')) {

            $album = $request->file('album');
            foreach ($album as $item) {
                $name = Str::random(10) . '.' . $item->getClientOriginalExtension();
                $item->move(public_path('/album'), $name);
                array_push($file_name_album, $name);

                DB::table('albums_services')->insert(
                    array('post_id' => $id, 'name' => $name, 'id_admin' => 2)
                );
            };
        }

        return response()->json([
            "status" => true,
            "msg" => 'file added',
            "vin_name" => $file_name_vin,
            "couverture_name" => $file_name_couverture,
            'images_name' => $file_name_album,
            'id' => $id
        ]);
    }
}
