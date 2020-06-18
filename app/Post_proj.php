<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Post_proj extends Model
{
    protected $fillable = ['name','content','couverture','vin','view','created_at','updated_at','comm','date_diff'];

    public function getCreatedAtAttribute($date)
{
    return Carbon::createFromFormat('Y-m-d', $date)->format('Y-m-d');
}

public function getUpdatedAtAttribute($date)
{
    return Carbon::createFromFormat('Y-m-d ', $date)->format('Y-m-d');
}



}
