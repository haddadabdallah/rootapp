<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cmnt extends Model
{
    protected $fillable = ['username','id_post','id_user','comm','created_at','updated_at','user','title','id_post','date_diff','photo'];


}
