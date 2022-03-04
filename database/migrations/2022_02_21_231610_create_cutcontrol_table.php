<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCutcontrolTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cut_controls', function (Blueprint $table) {
            $table->id();
            $table->dateTime('transdate')->nullable();
            $table->foreignId('employees_id')->constrained();
            $table->foreignId('lots_id')->constrained();
            $table->foreignId('packings_id')->constrained();
            $table->foreignId('products_id')->constrained();
            $table->decimal('weight_total', 8, 2);
            $table->foreignId('status_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cutcontrol');
    }
}
