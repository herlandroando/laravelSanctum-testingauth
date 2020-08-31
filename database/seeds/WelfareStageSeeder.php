<?php

use Illuminate\Database\Seeder;
use App\WelfareStage;

class WelfareStageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        WelfareStage::create([
            'name'      => 'Keluarga Sejahtera I',
            'abbreviation'     => 'KS1',
        ]);
        WelfareStage::create([
            'name'      => 'Keluarga Sejahtera II',
            'abbreviation'     => 'KS2',
        ]);
        WelfareStage::create([
            'name'      => 'Keluarga Sejahtera III',
            'abbreviation'     => 'KS3',
        ]);
    }
}
