<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePopulation;
use App\Population;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PopulationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $population = Population::orderBy("wife_name", "desc")->get();
        if ($population->count() > 0)
            return response($population->toJson(), 200);
        else
            return response(["content" => "empty"], 200);
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
    public function store(StorePopulation $request)
    {
        $validated = $request->validated();
        $time = strtotime($validated['wife_birthday']);
        $validated['wife_birthday'] = date("Y-m-d", $time);
        $time = strtotime($validated['lastchild_birthday']);
        $validated['lastchild_birthday'] = date("Y-m-d", $time);
        $population = new Population;
        $population->wife_name = $validated['wife_name'];
        $population->husband_name = $validated['husband_name'];
        $population->wife_birthday = $validated['wife_birthday'];
        $population->lastchild_birthday = $validated['lastchild_birthday'];
        $population->pbi = $validated['pbi'];
        $population->jkn = $validated['jkn'];
        $population->welfare_id = $validated['welfare'];
        $population->domicile_id = $validated['domicile'];
        $population->save();
        return response('', 204);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function show(Population $population, $filter, $filter_id)
    {
        if (!empty($filter_id)) {
            $ok = $population->where($filter.'_id', $filter_id)->orderBy('wife_name', "desc")->get();
            if ($population->count() > 0)
                return response($ok->toJson(), 200);
            else
                return response(["content" => "empty"], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function edit(Population $population)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Population $population)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Population  $population
     * @return \Illuminate\Http\Response
     */
    public function destroy(Population $population)
    {
        //
    }
}
