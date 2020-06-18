<?php

namespace App\Http\Controllers;

use App\Doc;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DocsContorller extends Controller
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
            'data' => Doc::all()
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


        $doc = $request->file('document');
        $name_doc = $doc->getClientOriginalname();
        $doc->move(public_path('/docs'), $name_doc);
        $doc  = new Doc;
        $doc->name = $request->title;
        $doc->cat = $request->Categorie;
        $doc->date_edit =  $request->data;
        $doc->img =  $request->img;
        $doc->doc_name = $name_doc;
        $doc->doc_view = 0;
        $doc->doc_download  = 0;
        $doc->fill  = 'services';

        $doc->save();
       return  response()->json([
            'status' =>true
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
            'data' => Doc::where('id',$id)->get()
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


        $doc_type = gettype($request->document);
        $title = $request->title;
        $date = $request->data;
        $cat = $request->Categorie;
         $img =   $request->img;

        if($doc_type === 'string')
        {

            Doc::where('id',$id)->update([
                'name' => $request->title,
                'date_edit' => $request->data,
                'cat' => $request->Categorie,
                'img' => $img
            ]);


            return response()->json([
                'status' => true
            ]);

        }


        if($doc_type === 'object')
        {

            $document = $request->file('document');
            $doc_name = $request->file('document')->getClientOriginalName();
            $document->move(public_path('/docs', $doc_name));

            Doc::where('id',$id)->update([
                'name' => $request->title,
                'date_edit' => $request->data,
                'cat' => $request->Categorie,
                'doc_name' => $doc_name,
                'img' => $img,
            ]);

            return response()->json([
                'status' => true
            ]);

        }


    }

    public function delete_c(Request $request)
    {
        $id = $request->input('id');


        DB::table('docs')->where('id',$id)->delete();

        return response()->json([
            "status" => true
        ]);
    }


    public function docserche(Request $request)
    {
       $serche =  $request->input('serche');

        $data =  Doc::where('name', 'like', "%". $serche . "%" )->get();

        return response()->json(
            [
                'status' => true,
                'data' => $data
            ]
            );


    }





}
