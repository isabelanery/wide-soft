<?php


namespace App\Http\Controllers;

use App\Models\Url;
use Illuminate\Http\Request;

class UrlApiController extends Controller
{
    public function list() {
        return Url::all();
    }
    
    public function create() {
        request()->validate([
            'url' => 'required|url|unique:urls',
        ]);
        
        return Url::create([
            'url' => request('url'),
        ]);
    }
    
    public function update(Url $url) {
        request()->validate([
            'url' => 'required|url',
        ]);
        
        $success = $url->update([
            'url' => 'required',
        ]);
    
        return [
            'success' => $success,
        ];
    }
    
    public function destroy(Url $url) {
        $success = $url->delete();
    
        return [
            'success' => $success,
        ];
    }
}
