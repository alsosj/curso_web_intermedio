from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from empleados.models import Employee


def empleados_view_primitiva(request):
    """
    Este view nos genera un html de prueba que muestra el nombre del usuario que tiene la sesión iniciada
    y el número de empleados de la base de datos. Esto es un ejemplo muy básico y no debería de hacerse así.
    La view "empleados_template" hace lo mismo, pero de forma correcta
    :param request: Petición entrante
    :return: Una HttpResponse (respuesta http) con el contenido html deseado
    """
    contenido = f'''
<h1>Bienvenido {request.user}!</h1><br/>
<p>Nuestra empresa tiene {len(Employee.objects.all())} empleados</p>
'''
    return HttpResponse(contenido)


def empleados_template(request):
    """
    Este view nos lleva a la plantilla de prueba, que muestra el nombre del usuario que tiene la sesión iniciada
    y el número de empleados de la base de datos. Hace lo mismo que la view de encima, pero utilizando un template
    :param request: Petición entrante
    :return: Renderizamos la plantilla de prueba
    """
    username = request.user.username  # Obtenemos el string del nombre de usuario
    num_empleados = len(Employee.objects.all())  # Contamos la cantidad de empleados que tenemos en la BBDD
    return render(request, 'empleados.html', {'username': username, 'count': num_empleados})
