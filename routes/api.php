<?php

use App\Http\Controllers\Statis_controller;
use App\Mail\WelcomeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/upload', 'UpLoadeController@Upload');
Route::post('/upload_project', 'UpLoadeController_projet@Upload');
Route::post('/upload_rh_info', 'UpLoadeController_rh_info@Upload');


Route::resource('/post_s', 'get_all_post_s');
Route::resource('/project', 'get_all_project');
Route::resource('/rh_info', 'get_all_rh_info');
Route::resource('/docs', 'DocsContorller');



Route::post('/post_s/update/{id?}', 'get_all_post_s@update_c');
Route::post('/project/update/{id?}', 'get_all_project@update_c');
Route::post('/rh_info/update/{id?}', 'get_all_rh_info@update_c');
Route::post('/docs/update/{id?}', 'DocsContorller@update_c');
Route::post('/empm/update/{id?}', 'EmpmController@update_c');



Route::get('/login_log/{start?}/{end?}' , 'LoginLogController@index');
Route::post('/login_log', 'LoginLogController@add_log');

Route::post('/login_log/add', 'LoginLogController@store_login');

Route::post('/post_s/delete', 'get_all_post_s@delete_c');
Route::post('/project/delete', 'get_all_project@delete_c');
Route::post('/rh_info/delete', 'get_all_rh_info@delete_c');
Route::post('/docs/delete', 'DocsContorller@delete_c');
Route::post('/empm/delete', 'EmpmController@delete_c');

Route::get('/cmnt/', 'CmntController@index');
Route::post('/cmnt/add', 'CmntController@store');
Route::post('/cmnt/delete', 'CmntController@delete');
Route::get('/cmnt/{path?}/{id?}', 'CmntController@where');

Route::get('/all_statis', 'Statis_controller@all_statis');


Route::get('/mnth/{id?}', 'Statis_controller@get_statiq_by_mnth');
Route::get('/statis/page/{start?}/{end?}', 'Statis_controller@page_statis');
Route::resource('/empm', 'EmpmController');



Route::post('/mail', 'MailController@send');


// liste cat mail

Route::get('/cat_mail', 'List_mailController@index');
Route::get('/get_cat/{id?}', 'List_mailController@where');
Route::post('/add_cat_mail', 'List_mailController@store');
Route::post('/update_cat_mail', 'List_mailController@update');
Route::post('/cat_mail/delete', 'List_mailController@delete');

// Contacts list

Route::get('/contacts/{id?}', 'ContactsController@index');
Route::post('/contacts', 'ContactsController@store');
Route::post('/contacts/delete', 'ContactsController@delete');


Route::post('/userservices', 'CountServiceController@CheckAndStore');

Route::get('/album/{id?}','AlbumController@getalbum');


Route::post('/doc/serche/{value?}','DocsContorller@docserche');

Route::get('/enqsatis/{id?}','EnqSatisController@show');
Route::post('/enqsatis/add','EnqSatisController@Store');
Route::post('/enqsatis/modif','EnqSatisController@update');

Route::post('/anuu','AnnuController@index');
Route::post('/getuserinfo','UserController@GetUserInfo');

Route::post('/send_mail',function(Request $request){
    $data = [
        'title' => $request->input('title'),
        'body' => $request->input('content')
    ];
    Mail::to('abdallah.haddad@groupe-chiali.com')->send(new WelcomeMail($data));
});


Route::post('/add_list','UserListMailController@store');
Route::post('/get_all_site','UserListMailController@index');


Route::get('/get_mails','MailsController@index');
Route::POST('/add_mail','MailsController@store');