<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();

        foreach ($articles as $article) {
            $article->image = url("storage", $article->image);
        };
        return Inertia::render('Articles', [
            'articles' => $articles,
        ]);
    }
    // Top 10 new articles

    public function newArticles() 
    {
        $articles = Article::latest()->take(1)->get();

        foreach ($articles as $article) {
            $article->image = url("storage", $article->image);
        }

        return Inertia::render('NewArticles', [
            'articles' => $articles,
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
    public function store(StoreArticleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $article = Article::findOrFail($id);
        $article->image = url('storage', $article->image);

        return Inertia::render('Article', [
            'article' => $article,
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
