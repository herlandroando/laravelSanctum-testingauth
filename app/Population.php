<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Population extends Model
{
    protected $tables="populations";

    protected $guarded = [];

    protected $casts = [
        'pbi' => 'boolean',
        'jkn' => 'boolean',
    ];
        /**
     * Scope a query to only include active users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    // public function scopeActive($query)
    // {
    //     return $query->where('active', 1);
    // }

    public function getWifeBirthdayAttribute($value)
    {
        return Carbon::parse($value)->format('d/m/Y');
    }
    public function getLastchildBirthdayAttribute($value)
    {
        return Carbon::parse($value)->format('d/m/Y');
    }

    public function domicile(){
        return $this->belongsTo("App\Domicile");
    }
    public function welfare_stage(){
        return $this->belongsTo("App\WelfareStage");
    }
}
