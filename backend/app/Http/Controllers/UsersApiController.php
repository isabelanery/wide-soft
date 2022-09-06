<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Url;

class UsersApiController extends Controller
{
    public function list() {
        return User::all();
    }
    
    protected function create() {
        return User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => Hash::make(request('password')),
        ]);
    }

    public function urlList($userId) {
        // return User::find($id);
        // return User::find($userId)->urlList();
        return Url::where('user_id', $userId);
    }
}
