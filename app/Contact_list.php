<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact_list extends Model
{
    protected $fillable = ['p_name', 'l_name', 'email', 'id_list', 'created_at', 'updated_at'];
}
