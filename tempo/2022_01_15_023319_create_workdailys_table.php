<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkdailysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workdailys', function (Blueprint $table) {
            $table->id();
            $table->dateTime('transdate')->nullable();

            $table->unsignedBigInteger('employe_id');
            $table->unsignedBigInteger('status_id');
            $table->unsignedBigInteger('lots_id');

            $table->foreignId('status_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('employe_id')->constrained();
            $table->foreignId('lots_id')->constrained();

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
        Schema::dropIfExists('workdailys');
    }
}
