<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\About;

class AboutController extends Controller
{
    public function index()
    {
        $abouts_table = About::all();
        return $abouts_table[0];
    }

    public function updateMainContent(Request $request)
    {
        $abouts = About::find(1);
        $abouts->main_content = $request->mainContent;
        $abouts->save();
        return 200;
    }

    public function updateMission(Request $request)
    {
        $abouts = About::find(1);
        $abouts->mission = $request->mission;
        $abouts->save();
        return 200;
    }

    public function updateVision(Request $request)
    {
        $abouts = About::find(1);
        $abouts->vision = $request->vision;
        $abouts->save();
        return 200;
    }

    public function updatePlans(Request $request)
    {
        $abouts = About::find(1);
        $abouts->plans = $request->plans;
        $abouts->save();
        return 200;
    }
}
