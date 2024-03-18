<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $depts = [
            [
                'name'=>'Department of Computer Science and Engineering',
                'code'=>'CSE',
                'chairman'=>'2',
                'chairmanMessage'=>'Hello, I am chairman ;)',
                'faculty'=>'1'
            ],
            [
                'name'=>'Department of Electronics and Electrical Engineering',
                'code'=>'EEE',
                'chairman'=>'1',
                'chairmanMessage'=>'Hello, I am chairman ;)',
                'faculty'=>'1'
            ],
            [
                'name'=>'Department of Electronics and Communication Engineering',
                'code'=>'ECE',
                'chairman'=>'1',
                'chairmanMessage'=>'Hello, I am chairman ;)',
                'faculty'=>'1'
            ]
        ];

        DB::table('departments')->insert($depts);
    }
}
