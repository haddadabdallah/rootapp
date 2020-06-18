<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CountService extends Model
{
    protected $fillable = ['id_user', 'id_Post','Path','created_at', 'updated_at'];
}
