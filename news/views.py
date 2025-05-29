from django.shortcuts import render, get_object_or_404
from .models import NewsArticle


def article_detail(request, slug):
    article = get_object_or_404(NewsArticle, slug=slug, status='published')
    return render(request, 'news/article_detail.html', {'article': article})


def article_list(request):
    articles = NewsArticle.published.all()
    return render(request, 'news/article_list.html', {'articles': articles})
