<?php

use Illuminate\Database\Seeder;
use App\KBProgram;

class KBProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        KBProgram::create([
            'name'      => 'Intrauterine Device',
            'abbreviation'     => 'IUD',
        ]);
        KBProgram::create([
            'name'      => 'Metode Operasi Wanita',
            'abbreviation'     => 'MOW',
        ]);
        KBProgram::create([
            'name'      => 'Metode Operasi Pria',
            'abbreviation'     => 'MOP',
        ]);
        KBProgram::create([
            'name'      => 'Kondom',
            'abbreviation'     => '-',
        ]);
        KBProgram::create([
            'name'      => 'Implant',
            'abbreviation'     => '-',
        ]);
        KBProgram::create([
            'name'      => 'Suntik',
            'abbreviation'     => '-',
        ]);
        KBProgram::create([
            'name'      => 'Pil',
            'abbreviation'     => '-',
        ]);
    }
}
