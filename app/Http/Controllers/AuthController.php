<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {

       $user =  User::create([
            'name' => $request->full_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

       Auth::login($user);

        return redirect(route('home'));
    }


    public function login(RegisterRequest $request)
    {
        $user = User::firstWhere('email', $request->email);

        if(!$user || !Hash::check($request->password, $user->password)) {
            return redirect(route('login'))->withErrors([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        Auth::login($user);

        return redirect(route('home'));
    }
}
