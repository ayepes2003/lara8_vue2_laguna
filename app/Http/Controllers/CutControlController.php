<?php

namespace App\Http\Controllers;

use App\Models\CutControl;
use Illuminate\Http\Request;

class CutControlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cutcontrol = CutControl::orderBy('id', 'desc')->get();


        return response()->json($cutcontrol);
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


        $CutControl = CutControl::create($request->post());

        return response()->json([
            'CutControl' => $CutControl
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CutControl  $cutControl
     * @return \Illuminate\Http\Response
     */
    public function show(CutControl $cutControl)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CutControl  $cutControl
     * @return \Illuminate\Http\Response
     */
    public function edit(CutControl $cutControl)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CutControl  $cutControl
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CutControl $cutControl)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CutControl  $cutControl
     * @return \Illuminate\Http\Response
     */
    public function destroy(CutControl $cutControl)
    {
        //
    }
}
