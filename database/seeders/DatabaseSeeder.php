<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\StatusSeeder;
use Database\Seeders\EmployeeSeeder;
use Database\Seeders\JobTypesSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([UserSeeder::class]);
        $this->call([StatusSeeder::class]);
        $this->call([JobTypesSeeder::class]);
        $this->call([EmployeeSeeder::class]);
        $this->call([ProductSeeder::class]);
    }
}
