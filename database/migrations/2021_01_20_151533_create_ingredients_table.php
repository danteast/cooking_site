<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->id();
            $table->string('name',255);
            $table->unsignedBigInteger('unit_id');
            $table->float('product_fat',4,2);
            $table->float('product_protein',4,2);
            $table->float('product_carb',4,2);
            $table->float('calorie',4,2);

            $table->foreign('unit_id')->references('id')->on('units')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients');
    }
}
