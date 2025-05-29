from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('quiz/', views.quiz, name='quiz'),
    path('biden-gaffes/', views.biden_gaffes, name='biden-gaffes'),
    path('admin/', admin.site.urls),
    path('register/', views.register, name='register'),


    
]