<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        //dd($request);
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'department' => 'required|string',
            'faculty' => 'required|string',
            'designation' => 'required|string',
            'role' => 'required|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'department' => $request->department,
            'faculty' => $request->faculty,
            'designation' => $request->designation,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        //event(new Registered($user));

        //Auth::login($user);
        //notify()->success('Welcome to Laravel Notify ⚡️');

        //toast()->success('User added successfully.');

        //return redirect()->route('workspace');
        //return redirect()->back()->with('success', 'HaHaHa');
        //return response()->json(['message' => 'User added successfully']);
        
        //return Inertia::render('UserAdding/UserAddSuccess');
        return back();
    }
}
