<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DownloadController;


Route::get('/', function () {
    return view('app');
});

Route::inertia('/', 'Landing');
Route::inertia('/Dashboard', 'Dashboard');
Route::inertia('/Portal', 'Portal');

Route::post('/Portal/PDF', [DownloadController::class, 'downloadPdf']);
