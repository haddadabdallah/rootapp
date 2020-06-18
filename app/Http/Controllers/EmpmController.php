<?php

namespace App\Http\Controllers;

use App\Empm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class EmpmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => true,
            'data' => Empm::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $name =  $request->name;
        $p_name =  $request->p_name;
        $str =  $request->str;
        $post =  $request->post;
        $mois =  $request->mois;
        $ann =  $request->ann;
        $content =  $request->content;
        $photo = $request->file('photo')->getClientOriginalName();
        $id_post =  $request->id_post;
        $img = $request->file('photo');


        $name_couverture = Str::random(10) . '.' . $img->getClientOriginalExtension();
        $img->move(public_path('/avatars'), $name_couverture);

        Empm::create(['name' => $name, 'p_name' => $p_name, 'str' => $str, 'post' => $post, 'mois' => $mois, 'ann' => $ann, 'photo' => $name_couverture, 'fill' => "services", 'content' => $content,'post_id'=>$id_post]);

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        return response()->json([
            'status' => true,
            'data' => Empm::where('id', $id)->get()
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



    /**
     * @param ini $id
     */

    public function update_c(Request $request, $id = '')
    {

        $name =  $request->name;
        $p_name =  $request->p_name;
        $str =  $request->str;
        $post =  $request->post;
        $mois =  $request->mois;
        $ann =  $request->ann;
        $content =  $request->content;
        $id_post =  $request->id_post;



        $photo =  $request->photo;
        $photo_type =  gettype($photo);






        if ($photo_type === 'object') {
            $photo = $request->file('photo')->getClientOriginalName();



            $img = $request->file('photo');


            $name_couverture = Str::random(10) . '.' . $img->getClientOriginalExtension();
            $img->move(public_path('/avatars'), $name_couverture);


            Empm::where('id', $id)->update(['name' => $name, 'p_name' => $p_name, 'str' => $str, 'post' => $post, 'mois' => $mois, 'ann' => $ann, 'photo' => $name_couverture, 'fill' => "services", 'content' => $content,'post_id' =>$id_post]);
        } elseif ($photo_type === 'string') {
            $photo =  $request->photo;

            Empm::where('id', $id)->update(['name' => $name, 'p_name' => $p_name, 'str' => $str, 'post' => $post, 'mois' => $mois, 'ann' => $ann, 'photo' => $photo, 'fill' => "services", 'content' => $content,'post_id' =>$id_post]);
        }
    }


    public function delete_c(Request $request)
    {
        $id = $request->input('id');


        DB::table('empms')->where('id', $id)->delete();

        return response()->json([
            "status" => true
        ]);
    }
}
