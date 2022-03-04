<?php

use App\Http\Controllers\Api\Admin\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CutControlController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Route::apiresource('blog', App\Http\Controllers\BlogController::class)->only(['index', 'store', 'show', 'update', 'destroy']);


// Route::apiresource('cutcontrols', App\Http\Controllers\CutControlController::class)->only([
//     'index', 'store', 'show', 'update', 'destroy'

// ]);


// Route::group(['prefix' => 'cut'], function () {
//     Route::post('create', [CutControlController::class, 'store']);
//     Route::get('list', [CutControlController::class, 'index']);
//     Route::get('{page}/{limit}', [CutControlController::class, 'get']);
//     Route::get('transdate', [CutControlController::class, 'register_transdate']);
// });


Route::group(['prefix' => 'products'], function () {
    Route::post('create', [ProductsController::class, 'store']);
    Route::get('list', [ProductsController::class, 'index']);
    Route::get('{id}', [ProductsController::class, 'show'])->name('api.v1.products');
    Route::get('{page}/{limit}', [ProductsController::class, 'get']);
});
