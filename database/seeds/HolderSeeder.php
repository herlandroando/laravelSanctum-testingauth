<?php

use Illuminate\Database\Seeder;
use App\Holder;

class HolderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Holder::create([
            'name'      => 'Pemerintah',
            // 'abbreviation'     => 'herlandrotri@gmail.com',
        ]);
        Holder::create([
            'name'      => 'Swasta',
            // 'abbreviation'     => 'herlandrotri@gmail.com',
        ]);
    }
}
