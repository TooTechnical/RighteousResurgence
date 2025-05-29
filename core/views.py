from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm


def index(request):
    return render(request, 'core/index.html')


def quiz(request):
    return render(request, 'core/quiz.html')


def biden_gaffes(request):
    return render(request, 'core/biden-gaffes.html')


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('article_list')  # redirect after login
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})