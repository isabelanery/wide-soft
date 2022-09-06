<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Url;

class UrlsApiController extends Controller
{
    public function list() {
        return Url::all();
    }
    
    public function findById(Url $id) {
        return Url::find($id);
    }
    
    public function create() {
        // request()->validate([
        //     'url' => 'required|url|unique:urls',
        //     'user_id' => 'required',
        // ]);
        
        return Url::create([
            'url' => request('url'),
            'user_id' => request('user_id'),
        ]);
    }
    
    public function update(Url $url) {
        request()->validate([
            'url' => 'required|url|unique:urls',
            'user_id' => 'required',
        ]);
        
        $success = $url->update([
            'url' => request('url'),
            'user_id' => request('user_id'),
        ]);

        return [
            'success' => $success 
        ];
    }

    public function destroy(Url $url) {
        $success = $url->delete();
    
        return [
            'success' => $success,
        ];
    }
}
