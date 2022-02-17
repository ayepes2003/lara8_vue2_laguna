<?php

namespace App\Http\Controllers;


use App\Models\CutControl;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use App\Http\Resources\CutControllResource;

class CutControlController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        //$cutcontrol =
        //->paginate(20)
        return CutControllResource::collection(
            CutControl::orderBy('id', 'desc')->get()
        );
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
        try {

            return (new CutControllResource(
                CutControl::create($request->post())
            ))->additional([

                'code' => Response::HTTP_OK,
                'msg' => 'Registro Guardado',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'cutControl' => "",
                'code' => 500,
                'message' => $th->getMessage(),
            ]);
        }
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



    public function get($page, $limit)
    {
        $cutcontrolpage = CutControl::offset(($page - 1) * $limit)->take($limit)->get();
        return response()->json($cutcontrolpage);
    }

    public function register_transdate(Request $request)
    {
        dd($request);
        $cutcontrol = CutControl::where('fecharegistro', '=', now())->get();
        return response()->json($cutcontrol);
    }
}
