<?php

namespace App\Http\Controllers;

use App\CountService;
use App\Post_proj;
use App\Post_s;
use App\rh_info;
use Illuminate\Http\Request;

class CountServiceController extends Controller
{
    public function CheckAndStore(Request $request)
    {
        $id_user = $request->input('IdUser');
        $id_post = $request->input('IdPost');
        $path = $request->input('Path');

        $user_status = CountService::where('id_user', $id_user)->where("id_Post", $id_post)->exists();

        if ($user_status > 0) {
            return 'true';
        } else {

            if(CountService::create(['id_user' => $id_user,'id_Post' => $id_post,'Path' => $path,]))
            {

                if($path === 'project')
                {

                    $lastCount = Post_proj::where('id',$id_post)->get('view');
                    $newcount = $lastCount[0]->view +1;

                    Post_proj::where('id',$id_post)->update(['view'=>$newcount]);

                     return response()->json([
                         'status' => true
                     ]);

                }



                if($path === 'actualites')
                {

                    $lastCount = Post_s::where('id',$id_post)->get('view');
                    $newcount = $lastCount[0]->view +1;

                    Post_s::where('id',$id_post)->update(['view'=>$newcount]);

                     return response()->json([
                         'status' => true
                     ]);

                }


                if($path === 'rhinfo')
                {

                    $lastCount = rh_info::where('id',$id_post)->get('view');
                    $newcount = $lastCount[0]->view +1;

                    rh_info::where('id',$id_post)->update(['view'=>$newcount]);

                     return response()->json([
                         'status' => true
                     ]);

                }






            }
        }
    }
}
