<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WelfareStage extends Model
{
    protected $table = 'welfare_stages';

    public function populations(){
        return $this->hasMany("App\Population");
    }
}
