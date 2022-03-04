<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PackingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('packings')->insert(
            [
                [
                    'id'             => 1,
                    'name'           => 'Icopor',
                    'user_id'        => 1,
                    'status_id'      => 1,
                ],
                [
                    'id'             => 2,
                    'name'           => 'Canastilla',
                    'user_id'        => 1,
                    'status_id'      => 1,
                ],
            ]
        );
    }
}
