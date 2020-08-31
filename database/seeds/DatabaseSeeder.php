<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeeder::class);
        $this->call(DomicileSeeder::class);
        $this->call(HolderSeeder::class);
        $this->call(KBProgramSeeder::class);
        $this->call(ReasonSeeder::class);
        $this->call(WelfareStageSeeder::class);
        $this->call(PopulationSeeder::class);
    }
}
