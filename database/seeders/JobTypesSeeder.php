<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jobtypes')->insert(
            [
                [
                    'id'             => 1,
                    'name'           => 'Cortador',
                    'user_id'        => 1,
                    'status_id'      => 1,
                ],
                [
                    'id'             => 2,
                    'name'           => 'Empacador',
                    'user_id'        => 1,
                    'status_id'      => 1,
                ],
            ]
        );
    }
}
