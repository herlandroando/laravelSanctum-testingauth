<?php
namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            return response()->json(Auth::user(), 200);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.']
        ]);
    }

    public function logout()
    {
        Auth::logout();
    }
}

// class LoginController extends Controller
// {
//     /**
//      * index
//      *
//      * @param  mixed $request
//      * @return void
//      */
//     public function index(Request $request)
//     {
//         $request->validate([
//             'email' => 'required|email',
//             'password' => 'required',
//         ]);

//         $user= User::where('email', $request->email)->first();

//             if (!$user || !Hash::check($request->password, $user->password)) {
//                 return response([
//                     'success'   => false,
//                     'message' => ['These credentials do not match our records.']
//                 ], 404);
//             }

//             $token = $user->createToken('ApiToken')->plainTextToken;

//             $response = [
//                 'success'   => true,
//                 'user'      => $user,
//                 'token'     => $token
//             ];

//         return response($response, 201);
//     }

//     /**
//      * logout
//      *
//      * @return void
//      */
//     public function logout()
//     {
//         auth()->logout();
//         return response()->json([
//             'success'    => true
//         ], 200);
//     }

// }
