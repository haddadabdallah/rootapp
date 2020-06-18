<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doc extends Model
{
    public function getCreated_timestampAttribute()
    {
        return $this->created_at->timestamp();
    }
}
