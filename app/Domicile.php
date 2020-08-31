<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Domicile extends Model
{
    protected $table = 'domiciles';

    public function populations(){
        return $this->hasMany("App\Population");
    }
}
