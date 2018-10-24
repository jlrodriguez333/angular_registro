# README.md
### Es un ejemplo de como realizar registros de mascota

---

Para el ejemplo se utilizo :

* angular v1.0.5
* ui bootstrap v0.1.0

**Estructura** cuenta con el index.html donde esta toda la parte de la vista y dos carpetas script donde se encuentran los js y app.js la programacion de angular esta centrada en este archivo, la carpeta style contiene los estilos de bootstrap:

**Funcionalidad** en la vista se puede apreciar un formulario en la parte de arriba que permite la adicion y edicion, en la parte de abajo estan dos botones nuevo que limpia el formulario y registrar que almacena los datos del formulario este boton se lo utiliza para ambas operaciones. En la parte de abajo esta la lista de datos y en la parte izquierda una columna con el boton editar para cargar los datos de la fila seleccionada al formulario y poder editarlo.

La variable que almacena los datos en el local storage es la siguiente:

```js
  $scope.storeMascota = localStorage;
```

---

