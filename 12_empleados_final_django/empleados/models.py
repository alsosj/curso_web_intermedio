from django.db import models

# Create your models here.


class Employee(models.Model):
    first_name = models.TextField()  # Campo de texto "sin límite" de longitud
    last_name = models.TextField()  # Campo de texto "sin límite" de longitud
    gender = models.CharField(max_length=8)  # Campo de texto de longitud máxima 8
    full_time = models.BooleanField()  # Campo bool que almacena si el empleado está contratado a tiempo completo
    birthday = models.DateField()  # Campo de tipo fecha que almacena la fecha de nacimiento del empleado
    salario = models.PositiveIntegerField(default=0)  # Campo entero positivo que almacena el salario

    def __str__(self):
        """
        Devuelve la representación en string de este tipo de objeto (Employee)
        :return: str de la forma "Apellido, Nombre"
        """
        # Forma más tradicional, concatenando strings
        # return self.last_name + ', ' + self.first_name

        # Forma intermedia, utilizando el método format
        # return '{}, {}'.format(self.last_name, self.first_name)

        # Forma moderna (desde Python 3.5 o 3.6) interpolando el string con un fstring
        return f'{self.last_name}, {self.first_name}'
