<?php

namespace App\Http\Controllers;

use App\KBProgram;
use Illuminate\Http\Request;

class KBProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query=KBProgram::all(["name", "abbreviation","id"]);
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
     * @param  \App\KBProgram  $kBProgram
     * @return \Illuminate\Http\Response
     */
    public function show(KBProgram $kBProgram)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\KBProgram  $kBProgram
     * @return \Illuminate\Http\Response
     */
    public function edit(KBProgram $kBProgram)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\KBProgram  $kBProgram
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KBProgram $kBProgram)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\KBProgram  $kBProgram
     * @return \Illuminate\Http\Response
     */
    public function destroy(KBProgram $kBProgram)
    {
        //
    }
}
