<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert(
            [
                [
                    'id'             => 1,
                    'documentid'     => 'A',

                    'firts_name'     => 'LEIDY JOHANA',
                    'last_name'      => 'PRADA ROJAS',
                    'jobtypes_id'    => 2,
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
                [
                    'id'             => 2,
                    'documentid'     => 'B',

                    'firts_name'     => 'YENNI ALEJANDRA',
                    'last_name'      => 'GARCIA GARCIA',
                    'jobtypes_id'    => 2,
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
                [
                    'id'             => 3,
                    'documentid'     => 'C',

                    'firts_name'     => 'JENNY',
                    'last_name'      => 'GUTIERREZ',
                    'jobtypes_id'    => 2,
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
                [
                    'id'             => 4,
                    'documentid'     => 'D',

                    'firts_name'     => 'LORENA',
                    'last_name'      => 'MAYORQUIN',
                    'jobtypes_id'    => 2,
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
                [
                    'id'             => 5,
                    'documentid'     => "E",
                    'jobtypes_id'    => 2,
                    'firts_name'     => 'YENNI',
                    'last_name'      => 'PAVA',
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
                [
                    'id'             => 6,
                    'documentid'     => "F",
                    'jobtypes_id'    => 2,
                    'firts_name'     => 'ISABEL',
                    'last_name'      => 'PERDOMO',
                    'status_id'      => 1,
                    'user_id'        => 1,
                ],
            ]
        );
    }
}
