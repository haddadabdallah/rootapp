<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class rh_info extends Model
{
    protected $fillable = ['name','content','couverture','vin','view','created_at','updated_at','comm','date_diff'];
}
