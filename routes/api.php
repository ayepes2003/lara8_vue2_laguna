<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CutControlController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiresource('blog', App\Http\Controllers\BlogController::class)->only(['index', 'store', 'show', 'update', 'destroy']);


Route::apiresource('cutcontrols', App\Http\Controllers\CutControlController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
