<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service;

class ServicesController extends Controller
{
    public function index()
    {
        return Service::all();
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $service = Service::find($id);
        $service->delete();
        return 200;
    }

    public function new(Request $request)
    {
        $service = new Service;
        $service->title = $request->title;
        $service->body = $request->body;
        $service->save();
        return 200;
    }

    public function updateService(Request $request)
    {
        $id = $request->id;
        $service = Service::find($id);
        $service->title = $request->title;
        $service->body = $request->body;
        $service->save();
        return 200;
    }
}
