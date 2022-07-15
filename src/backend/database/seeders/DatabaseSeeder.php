<?php

namespace Database\Seeders;

use App\Models\Listing;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(5)->create();

        Listing::factory(6)->create();
        // Listing::create(
        //     [
        //         'title' => 'Laravel Sr. Dev',
        //         'tags' => 'laravel, react',
        //         'company' => 'Sprobe',
        //         'location' => 'Ayala',
        //         'email' => 'email@email.com',
        //         'website' => 'www.blabla.com',
        //         'description' => 'Sunt magna do amet sunt id cupidatat nulla dolore ut sunt. Elit anim ipsum cupidatat minim aute reprehenderit exercitation cupidatat aliquip minim fugiat. Proident do consequat sunt qui aliqua velit ea qui deserunt ipsum non occaecat commodo sint. Reprehenderit proident dolore ut aliquip qui esse amet irure mollit excepteur anim et deserunt.'
        //     ]
        // );
        // Listing::create(
        //     [
        //         'title' => 'React Sr. Dev',
        //         'tags' => 'node, react',
        //         'company' => 'Sprobe',
        //         'location' => 'Ayala',
        //         'email' => 'email@email.com',
        //         'website' => 'www.blabla.com',
        //         'description' => 'Consequat est elit adipisicing est cupidatat mollit voluptate reprehenderit et duis. Eu sunt amet ut ad consectetur aliqua non laboris in. Dolor sunt elit incididunt nostrud commodo sit velit dolor veniam sunt id nostrud. Qui ut eiusmod incididunt culpa minim ut tempor eu. Tempor excepteur sit eiusmod ullamco ex exercitation sit reprehenderit deserunt sunt nisi anim labore. Magna deserunt qui nisi consequat non laborum occaecat minim id.'
        //     ]
        // );


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
