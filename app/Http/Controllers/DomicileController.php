<?php

namespace App\Http\Controllers;

use App\Domicile;
use Illuminate\Http\Request;

class DomicileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query=Domicile::all(["name","id"]);
        return response($query->toJson(),200);
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
     * @param  \App\Domicile  $domicile
     * @return \Illuminate\Http\Response
     */
    public function show(Domicile $domicile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Domicile  $domicile
     * @return \Illuminate\Http\Response
     */
    public function edit(Domicile $domicile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Domicile  $domicile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Domicile $domicile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Domicile  $domicile
     * @return \Illuminate\Http\Response
     */
    public function destroy(Domicile $domicile)
    {
        //
    }
}
