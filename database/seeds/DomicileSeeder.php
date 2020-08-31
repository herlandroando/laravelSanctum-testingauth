<?php

use App\Domicile;
use Illuminate\Database\Seeder;

class DomicileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $name=['Cempuk','Mangunan','Sukorame','Lemahbang','Kediwung','Kanigoro'];
        foreach($name as $value){
            Domicile::create([
                'name'      => $value,
            ]);
        }

    }
}
