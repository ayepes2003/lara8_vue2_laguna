<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use app\models\status;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
            [
                "name"          => "Activo",
                "description"   => "Registro Disponible",
                "color"         => "#EAFAF1",
                "model"         => "All",
                'user_id'       => 1
            ],
            [
                "name" => "Inactivo",
                "description" => "Registro No Disponible",
                "color" => "#D7DBDD",
                "model" => "All",
                'user_id'       => 1
            ],
            [
                "name" => "Eliminado",
                "description" => "Registro Eliminado no disponible",
                "color" => "#A93226",
                "model" => "All",
                'user_id'       => 1
            ],
            [
                "name" => "Recibido",
                "description" => "Pedido recibido",
                "color" => "#EAFAF1",
                "model" => Order::class,
                'user_id'       => 1
            ],
        ]);
    }
}
