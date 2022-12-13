from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from escuela.forms import ContactoForm




# Create your views here.
# Carga de templates.

def index(request):
    return render(request, "escuela/index.html")

def cursos(request):
    return render(request, "escuela/cursos.html")

def inscripcion(request):
    return render(request, "escuela/inscripcion.html")
 
def sucursales(request):
    return render(request, "escuela/sucursales.html")
 
def contacto(request):
    if request.method == "POST":
        contacto_form = ContactoForm(request.POST)
    else:
        contacto_form = ContactoForm()   
    return render(request, "escuela/contacto.html", {'contacto_form' : contacto_form})   