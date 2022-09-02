<?php

use App\Http\Controllers\UrlApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/urls', [UrlApiController::class, 'list']);

Route::post('/urls', [UrlApiController::class, 'create']);

Route::put('/urls/{url}', [UrlApiController::class, 'update']);

Route::delete('/urls/{url}', [UrlApiController::class, 'destroy']);
