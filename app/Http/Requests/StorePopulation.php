<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePopulation extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // public function authorize()
    // {
    //     return false;
    // }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $todayDate = date('Y-m-d');
        return [
            'wife_name'=>'required|max:255|unique:populations',
            'husband_name'=>'required|max:255',
            'wife_birthday'=>'required|date|before_or_equal:'.$todayDate,
            'lastchild_birthday'=>'required|date|before_or_equal:'.$todayDate,
            'total_child'=>'required|numeric',
            'pbi'=>'required|boolean',
            'jkn'=>'required|boolean',
            'welfare'=>'required',
            'domicile'=>'required',
        ];
    }
}
