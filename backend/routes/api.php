<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersApiController;
use App\Http\Controllers\UrlsApiController;

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

Route::get('/users', [UsersApiController::class, 'list']);

Route::post('/users', [UsersApiController::class, 'create']);

Route::get('/users/{id}', [UsersApiController::class, 'urlList']);

Route::post('/login', [UsersApiController::class, 'login']);

Route::get('/urls', [UrlsApiController::class, 'list']);

Route::get('/urls/{id}', [UrlsApiController::class, 'findById']);

Route::post('/urls', [UrlsApiController::class, 'create']);

Route::put('/urls/{url}', [UrlsApiController::class, 'update']);

Route::delete('/urls/{url}', [UrlsApiController::class, 'destroy']);