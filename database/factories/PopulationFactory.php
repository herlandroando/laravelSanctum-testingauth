<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Population;
use Faker\Generator as Faker;

$factory->define(Population::class, function (Faker $faker) {
    return [
        'wife_name'=> $faker->name(),
        'husband_name'=> $faker->name(),
        'wife_birthday'=> $faker->date(),
        'lastchild_birthday'=> $faker->date(),
        'pbi' => $faker->boolean(),
        'jkn' => $faker->boolean(),
        'welfare_id' => $faker->numberBetween(1,3),
        'domicile_id' => $faker->numberBetween(1,6)
    ];
});
