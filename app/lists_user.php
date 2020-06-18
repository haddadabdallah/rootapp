<?php

namespace App;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Model;

class lists_user extends Model
{
    protected $fillable = ['title','count','created_at','updated_at'];
}
