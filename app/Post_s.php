<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post_s extends Model
{
    protected $fillable = ['name','content','couverture','vin','view','created_at','updated_at','comm','date_diff'];
}
