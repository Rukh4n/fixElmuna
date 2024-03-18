<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use PhpParser\Node\Expr\FuncCall;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        foreach ($products as $product) {
            $product->image = url("storage", $product->image);
        }

        return Inertia::render('Products', [
            'products' => $products,
        ]);
    }

    // Get Category Name 
    public function categoryName()
    {
        $products = Product::all(); // Mengambil semua produk dari tabel produk

        return Inertia::render('Categories', [
            'products' => $products,
        ]);
    }


    // All Products by Category
    public function Categories(Request $request)
    {
        $categoryNames = $request->input('category'); // Menerima nama kategori dari permintaan

        $categories = Product::where('category', $categoryNames)->get(); // Mengambil produk berdasarkan kategori yang diberikan

        foreach ($categories as $category) {
            $category->image = url("storage", $category->image);
        }

        return Inertia::render('AllProductsCategories', [
            'categories' => $categories,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $sku)
    {
        $product = Product::where('sku', $sku)->firstOrFail();

        $product->image = url('storage', $product->image);

        return Inertia::render('Product', [
            'product' => $product,
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
