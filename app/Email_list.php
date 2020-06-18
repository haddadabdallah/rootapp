<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email_list extends Model
{
    protected $fillable = ['name', 'cat', 'created_at', 'updated_at'];
}
