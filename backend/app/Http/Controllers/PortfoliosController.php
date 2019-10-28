<?php

namespace App\Http\Controllers;
use App\Portfolio;

use Illuminate\Http\Request;

class PortfoliosController extends Controller
{
    public function index()
    {
        return Portfolio::all();
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $portfolio = Portfolio::find($id);
        $portfolio->delete();
        return 200;
    }

    public function new(Request $request)
    {
        $portfolio = new Portfolio;
        $portfolio->title = $request->title;
        $portfolio->link = $request->link;
        $portfolio->type = $request->type;
        $portfolio->save();
        return 200;
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $portfolio = Portfolio::find($id);
        $portfolio->title = $request->title;
        $portfolio->link = $request->link;
        $portfolio->type = $request->type;
        $portfolio->save();
        return 200;
    }

}
