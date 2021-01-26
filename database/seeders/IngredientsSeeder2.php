<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsSeeder2 extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('ingredients')->insert($this->getData());
    }

    public function getData():array
    {
        $faker = Factory::create('ru_Ru');

        $units = DB::table('units')->select('id')->get();

        $data = [];
        for ($i = 0; $i < 200; $i++){
            $name =  $faker->sentence(mt_rand(1,2));
            $unit_id = ($units[Rand(0,count($units)-1)])->id;
            $product_fat = Rand(1,8);
            $product_protein = Rand(1,8);
            $product_carb = Rand(1,8);
            $calorie = Rand(1,8);
            $data[] =[
                'name' => $name,
                'unit_id' => $unit_id,
                'product_fat' => $product_fat,
                'product_protein' => $product_protein,
                'product_carb' => $product_carb,
                'calorie' => $calorie
            ];
        }
        return $data;
    }


}
