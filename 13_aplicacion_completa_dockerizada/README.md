# Puesta en marcha con Docker

Estando en esta carpeta en un terminal, con Docker y Docker Compose correctamente instalados y configurados, podemos utilizar los comandos 

### `docker-compose build`

Construye los contenedores de nuestra aplicación. No será necesario hacer más builds salvo que cambiemos la configuración de los contenedores o dependencias de los proyectos

### `docker-compose up`

Pone en marcha la aplicación. Si la añadimos el flag -f (es decir "docker-compose up -d"), arrancamos los servicios
en modo detached. Esto hace que se ejecuten en segundo plano, sin tener que mantener la terminal abierta.
 
Pasados unos segundos, debería de estar disponible en [http://localhost](http://localhost)

En caso de tener algún problema con permisos en sistemas Linux/macOS, ejecutad:

* En primer lugar, desde esta carpeta, el comando **sudo chmod -R 755 .** para otorgar los permisos necesarios a los ficheros
* Luego, un **docker-compose build --no-cache** para repetir la build (ignorando la caché, ya que el sistema no detecta cambios en los ficheros si únicamente cambiamos sus permisos)
* Para terminar, **docker-compose up** para arrancar los servicios