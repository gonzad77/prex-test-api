# prex-test-api

Tome la decision de crear una pequeña api sencilla para interactuar con la app principal. 

# Install

Clonar el repositorio y correr `npm i` para instalar las dependencias.

El proyecto usa una base de datos de mongo. Para inicializarlo debemos descargar MongoDBCompass en el siguiente ling https://www.mongodb.com/try/download/community.

En este proyecto el nombre de la base de datos debe ser prex-test. El string connect es el siguiente: 'mongodb://localhost:27017/prex-test'.

Una vez creada la base de datos vamos a generar dos collection: films y users. En el proyecto dejo dos .json files para cargar la data inicial. En total son 10 films y un usuario (username: prex, password: prex123)

Ingresando a cada una de las collections vamos a tener un boton para agregar data, el cual nos va a permitir seleccionar un archivo .json.


# Run

Primero corremos el comando `npm run build`

Y luego `npm run start`

El servidor deberia estar corriendo en http://localhost:8000


# Importante

Correr la api primero y luego la app.
