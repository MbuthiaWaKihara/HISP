<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function(Request $request){
    return $request->user();
});

//mailing
Route::post('email','SendMailController@send');

//About Section
Route::get('about','AboutController@index');
Route::post('about/main','AboutController@updateMainContent');
Route::post('about/mission', 'AboutController@updateMission');
Route::post('about/vision', 'AboutController@updateVision');
Route::post('about/plans', 'AboutController@updatePlans');

//Services Section
Route::get('services', 'ServicesController@index');
Route::post('services/delete','ServicesController@delete');
Route::post('services/new','ServicesController@new');
Route::post('services/edit','ServicesController@updateService');

//Portfolio Section
Route::get('portfolio', 'PortfoliosController@index');
Route::post('portfolio/delete','PortfoliosController@delete');
Route::post('portfolio/new','PortfoliosController@new');
Route::post('portfolio/edit','PortfoliosController@update');

//authentication
Route::post('login', 'UsersController@login');
