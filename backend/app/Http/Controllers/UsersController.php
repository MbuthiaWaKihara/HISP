<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;
use Tymon\JWTAuth\Contracts\JWTSubject;

class UsersController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->json()->all();
        try{
            if(! $token = JWTAuth::attempt($credentials)){
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        }catch(JWTException $e){
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }
}
