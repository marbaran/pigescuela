from django.urls import path
from . import views


urlpatterns = [
    path('index', views.index, name="index"),
    path('cursos', views.cursos, name="cursos"),
    path('inscripcion', views.inscripcion, name="inscripcion"),
    path('sucursales', views.sucursales, name="sucursales"),
    path('contacto', views.contacto, name="contacto"),
]