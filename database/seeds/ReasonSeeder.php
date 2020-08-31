<?php

use Illuminate\Database\Seeder;
use App\Reason;

class ReasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Reason::create([
            'name'      => 'Hamil',
            'abbreviation'     => '-',
        ]);
        Reason::create([
            'name'      => 'Ingin Anak Segera',
            'abbreviation'     => 'IAS',
        ]);
        Reason::create([
            'name'      => 'Ingin Anak Tunda',
            'abbreviation'     => 'IAT',
        ]);
        Reason::create([
            'name'      => 'Tidak Ingin Anak Lagi',
            'abbreviation'     => 'TIAL',
        ]);
    }
}
