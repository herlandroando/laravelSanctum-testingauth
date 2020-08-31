<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePopulationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('populations', function (Blueprint $table) {
            $table->id();
            $table->string('wife_name', 255);
            $table->string('husband_name', 255);
            $table->date("wife_birthday");
            $table->date("lastchild_birthday");
            $table->boolean("pbi");
            $table->boolean("jkn");
            $table->foreignId('welfare_id')
                ->constrained("welfare_stages")
                ->onDelete('cascade');
            $table->foreignId('domicile_id')
                ->constrained("domiciles")
                ->onDelete('cascade');
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
        Schema::dropIfExists('populations');
    }
}
