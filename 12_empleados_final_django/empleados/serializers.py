from rest_framework.serializers import HyperlinkedModelSerializer

from empleados.models import Employee


class EmployeeSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Employee  # Modelo con el que trabaja este serializador
        # Campos a incluir en los JSON, el campo pk es el campo "primary key" (clave primaria) de nuestra tabla de
        # la BBDD. Django lo crea por nosotros si no especificamos explicítamente un campo de este tipo
        fields = ['first_name', 'last_name', 'gender', 'full_time', 'birthday', 'salario', 'pk']
