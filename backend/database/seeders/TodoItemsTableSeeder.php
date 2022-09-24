<?php

namespace Database\Seeders;

use App\Models\TodoItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TodoItem::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 30; $i++) {
            TodoItem::create([
                'name' => $faker->sentence(3),
                'done' => $faker->boolean(30),
                'urgent' => $faker->boolean(10),
            ]);
        }
    }
}
