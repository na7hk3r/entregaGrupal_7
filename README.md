# Entrega Grupal 7

![Captura](https://user-images.githubusercontent.com/104522465/205457236-938277b6-939a-4012-b87c-56542f6a24dd.png)

- 1 Boton "Buscar" debe mostrar como resultado el registro cuyo id haya sido solicitado.
En caso de dejar vacio el campo de id, debe mostrar como resultado la lista de todos los registros.

- 2 Botón "Agregar" debe enviar al servidor un objeto construido con los valores introducidos por el usuario en los campos nombre y apellido. (name y lastname respectivamente).
Deberá mostrar como reusltado el listado de registros, incluyendo el agregado.

- 3 Botón "Modificar" debe abrir un modal donde se muestren los campos name y lastname ya con los valores cargados, coincidentes con el registro de id que ingresó el usuario. El usuario debe poder modificar dichos valores, al presionar botón para guardar cambios se dee realizar la consulta para modificar el registro.
Cerrar modal y mostrar como resultado la lista con las modificaciones.

- 4 Botón "Borrar" debe realizar la consulta para eliminar el registro cuyo id coincida con el ingresado por el usuario, mostrar como resultado el listado de registros ya con este eliminado.

- 5 En todos los casos, excepeto el de "Buscar", los botones que realizan la consulta deben permanecerr desactivados, mientras alguno de los campos correspondientes se encuentre vacio.
En caso de que la solicitud genere una respuesta con un status 'no ok', por ej. si intentamos borrar, modificar o buscar un registro inexistente, se debera avisar al usuario por medio de una alerta.

## Referencias: (Donde SECRET se sustituye por el numero enviado al grupo)

- Listar: GET https://SECRET.mockapi.io/users
Devuelve un json con una lista que contiene todos los registros.

- Obtener 1: GET https://SECRET.mockapi.io/users/:id
Recibe un id en la url y devuelve un json con el registro cuyo id haya sido solicitado.

- Agregar: POST https://SECRET.mockapi.io/users
Recibe un json con un objeto con los atributos name y lastname, (en el body) lo agrega a la base de datos (asignándole un id) y devuelve un json con el registro creado.

- Modificar: PUT https://SECRET.mockapi.io/users/:id
Recibe un id en la url y un json con un objeto con los atributos name y lastname, (en el body), modifica con dichos datos el registro cuyo id coincida con el recibido, y devuelve un json con el registro modificado.

- Eliminar: DELETE https://SECRET.mockapi.io/users/:id
Recibe un id en la url, elimina el registro cuyo id coincida con el recibido, y devuelve un json con el registro eliminado.

## Realizado con compañeras de Jóvenes a Programar 2022 ##
