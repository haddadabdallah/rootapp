<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empm extends Model
{
    protected $fillable = ['name','p_name','str','post','mois','ann','photo','fill','content','created_at','updated_at','post_id'];

}
