<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faculties = [
            [
                'name'=>'Faculty of Computer Science and Engineering',
                'dean'=>'2',
                'deanMessage'=>'Hello, I am dean ;)'
            ]
        ];

        DB::table('faculties')->insert($faculties);
    }
}
