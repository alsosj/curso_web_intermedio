# Backend en Django

Para hacerlo funcionar, necesitamos Python versión 3.6 o posterior

Instalamos las dependencias del fichero requirements.txt desde terminal (con el comando **pip install -r requirements.txt** estando en esta carpeta con el entorno virtual activo)

A continuación ejecutamos los comandos

### `python manage.py migrate`

Aplica las migraciones en la base de datos. Esto creará el fichero db.sqlite3 con las tablas necesarias para el funcionamiento de la app.

### `python manage.py createsuperuser`

Inicial el proceso de creación de un superusuario, necesario si queremos acceder al portal de administración de Django
 
 ### `python manage.py runserver`

Pone en marcha el servidor de desarrollo, que estará disponible en [http://localhost:8000](http://localhost:8000)