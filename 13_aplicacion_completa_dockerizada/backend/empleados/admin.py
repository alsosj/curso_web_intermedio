from django.contrib import admin

# Register your models here.
from empleados.models import Employee

admin.site.register(Employee)  # Damos de alta los Employee en el portal de administración
