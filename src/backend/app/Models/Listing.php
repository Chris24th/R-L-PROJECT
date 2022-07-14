<?php

namespace App\Models;

class Listing
{
    public static function all()
    {
        return [
            [
                'id' => 1,
                'title' => 'Listing One',
                'description' => 'Et ad anim incididunt non sit dolor cupidatat culpa excepteur ut labore ullamco. Tempor cillum do nisi et. Proident sit commodo Lorem adipisicing.'
            ],
            [
                'id' => 2,
                'title' => 'Listing Two',
                'description' => 'Ullamco duis culpa amet tempor sit voluptate. Adipisicing duis ex do sit. Occaecat proident est excepteur aliqua esse aute ad ullamco ad sit ullamco aute ea. Cupidatat duis laboris elit eiusmod. Deserunt occaecat dolore sit Lorem culpa veniam velit veniam est eiusmod commodo aliqua commodo.'
            ]
        ];
    }

    // public static function find($id)
    // {
    //     $listings = self::all();

    //     foreach ($listings as listing) {
    //         if ($listing('id') == $id) {
    //             return $listing;
    //         }
    //     }
    // }
}
