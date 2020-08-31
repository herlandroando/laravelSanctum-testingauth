<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', 'Api\LoginController@login');
Route::get('/logout', 'Api\LoginController@logout');

Route::get('/', function () {
    return [
        'app' => config('app.name'),
        'version' => '0.1.0',
    ];
});

// Route::group(['prefix' => 'api/v1', 'namespace' => 'Api\v1'], function () {
//     Route::get('user',      'UserController@index');
//     Route::get('user/{id}', 'UserController@show');
//   });

Route::get('/holders', "HolderController@index");
Route::get('/reasons', "ReasonController@index");
Route::get('/welfares', "WelfareStageController@index");
Route::get('/domiciles', "DomicileController@index");
Route::get('/kbprograms', "KBProgramController@index");

Route::get("/populations","PopulationController@index");
Route::post("/populations","PopulationController@store");
// Route::get('/populations/{filter}/{filter_id}', "PopulationController@show");


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('auth:sanctum')->group(function (){
//     Route::get("/populations","PopulationController@index");
//     Route::post("/populations","PopulationController@store");
// });
