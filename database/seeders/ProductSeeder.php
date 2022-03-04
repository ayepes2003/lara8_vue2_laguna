<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert(
            [
                'id'             => 1,
                'name'           => 'Albaca',
                'status_id'    => 1,
                'user_id'    => 1,
            ],


        );
    }
}
