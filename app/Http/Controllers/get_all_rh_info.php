<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class get_all_rh_info extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data =  DB::table('rh_infos')->get();

        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data =  DB::table('rh_infos')->where('id',$id)->get();

        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function update_c(Request $request,$id='')
    {

        $title = $request->title;
        $content = $request->content;

        $var_type_couverture = gettype($request->couverture);
        $var_type_vin = gettype($request->vin);
      

        if($var_type_couverture === 'string'  ){

            $name_couverture = $request->couverture;

        }elseif($var_type_couverture === 'object'   )
        {
          $couverture =  $request->couverture;
          $name_couverture = Str::random(10).'.'.$couverture->getClientOriginalExtension();
          $couverture->move(public_path('/post_image'),$name_couverture);
        }



        if( $var_type_vin === 'string' ){
           
            $name_vin = $request->vin;
        }elseif( $var_type_vin === 'object' )
         {
            $vin = $request->vin;
            $name_vin = Str::random(10).'.'.$vin->getClientOriginalExtension();
            $vin->move(public_path('/post_image'),$name_vin);
         }


        DB::table('rh_infos')
              ->where('id', $id)
              ->update(['name' => $title,'content'=>$content,'couverture'=>$name_couverture,'vin'=>$name_vin]);




            if($request->album)
            {

                $album = $request->file('album');


                 $count_album =  DB::table('albums_services')->where('post_id',$id)->count();


                if($count_album <= 0 ) 
                {
                
                    $album = $request->file('album');
                    foreach($album as $item ){
                        $name = Str::random(10).'.'.$item->getClientOriginalExtension();
                        DB::table('albums_services')->insert(
                            array('post_id' => $id,'name'=>$name,'id_admin'=> 2 )
                        ); 
                    };

                }else{
                     if(DB::table('albums_services')->where('post_id',$id)->delete())
                     {
                        $album = $request->file('album');
                    foreach($album as $item ){
                        $name = Str::random(10).'.'.$item->getClientOriginalExtension();
                        DB::table('albums_services')->insert(
                            array('post_id' => $id,'name'=>$name,'id_admin'=> 2 )
                        ); 
                    }; 
                     }
                }

            }


        return response()->json([
            'status' => true,
        ]);
        

    }


    public function delete_c(Request $request)
    {
        $id = $request->input('id');


        DB::table('rh_infos')->where('id',$id)->delete();

        return response()->json([
            "status" => true
        ]);
    }



}

