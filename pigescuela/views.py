from django.http import HttpResponse


# Create your views here.
def url_invalida(request):
    return HttpResponse ("url INVÁLIDA", status=404)
