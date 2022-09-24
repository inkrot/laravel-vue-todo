<?php

use App\Http\Controllers\TodoItemController;
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

Route::get('/todo-items', [TodoItemController::class, 'index']);
Route::post('/todo-items', [TodoItemController::class, 'create']);
Route::put('/todo-items/{todoItem}', [TodoItemController::class, 'update']);
Route::delete('/todo-items/{todoItem}', [TodoItemController::class, 'delete']);



