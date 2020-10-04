from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from empleados.models import Employee
from empleados.serializers import EmployeeSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()  # Objetos con los que va a trabajar este ModelViewSet (todos los Employee)
    serializer_class = EmployeeSerializer  # Clase de serializador a utilizar
    permission_classes = (AllowAny, )  # Permisos estas views: acceso libre (lectura/escritura… para todos)

    def destroy(self, request, *args, **kwargs):
        """
        Este método se llama cuando intentamos borrar un Employee desde la API.
        En vez de utilizar el destoy por defecto que nos proporciona Django Rest Framework, lo sobrescribimos para que,
        además de borrar el Employee deseado, nos devuelva la lista de empleados que siguen existiendo desde el borrado.
        Esto en realidad no es necesario, ya que el cliente podría calcular fácilmente qué empleados quedan después del
        borrado, pero lo hemos hecho así para trastear un poco con los métodos de los ModelViewSet
        :param request: Petición entrante
        :return: JSON con el listado de empleados de la BBDD, después del borrado
        """
        # Para saber qué empleado nos están pidiendo borrar, tenemos que obtener la url
        url = request.build_absolute_uri()
        # la url tiene el formato http://…/api/empleado/ID/
        # De forma muy rudimentaria, partimos el string de la url por las barras (/)
        # Esto nos genera un array del estilo ['http:', '', '…', 'api', 'empleado', 'ID', '']
        # Por lo tanto, necesitaríamos el elemento de la penúltima posición del array
        # En otros lenguajes, podíamos acceder a él mediante array[num_elementos - 2]
        # En Python, además de esta forma, tenemos otra más cómoda, que es utilizar un índice negativo
        # Los índices negativos empiezan desde el final del array, siendo -1 el último elemento

        employee_id = url.split('/')[-2]  # Obtenemo el penúltimo elemento
        Employee.objects.filter(pk=employee_id).delete()  # Borramos el Employee con esa ID

        # No estamos gestionando posibles errores como, por ejemplo, que el empleado no exista

        # Ahora, creamos un serializador, y le pasamos la lista de empleados junto con el flag many a True,
        # para que sepa que tiene que serializar varios objetos
        serializer = self.get_serializer_class()(Employee.objects.all(), many=True)

        # Devolvemos los datos del serializador, lo que no dará el JSON con la lista de empleados restantes
        return Response(serializer.data)
