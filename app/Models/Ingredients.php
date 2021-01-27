<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingredients extends Model
{
    protected $fillable = ['name', 'product_fat', 'product_protein', 'product_carb', 'calorie'];
    public $timestamps = false;
    public $incrementing = true;
}
