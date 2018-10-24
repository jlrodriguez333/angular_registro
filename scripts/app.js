angular.module('AppGestor', ['ui.bootstrap']);

function Mascota($scope, $dialog) {

    $scope.storeMascota = localStorage;
    $scope.filaActual = 0;
    $scope.mensaje = '';

    $scope.items = [];
    $scope.mascota = { id: '0', nombre: '', fechaNac: '', especie: '', raza: '', vacuna: '' };
    
    // funcion carga datos de fila a campos de formulario
    $scope.editar = function (item) {
        $scope.mascota.id = item.id;
        $scope.mascota.nombre = item.nombre;
        $scope.mascota.fechaNac = item.fechaNac;
        $scope.mascota.especie = item.especie;
        $scope.mascota.raza = item.raza;
        $scope.mascota.vacuna = item.vacuna;

        $scope.mensaje = '';
    };

    // registra datos de formulario
    $scope.registrar = function (mascota) {

        var registroId = 0;

        if (mascota.id > 0) { // existe
            registroId = mascota.id;
            console.log('edicion id: ' + registroId)

            for (var i = 0; i < $scope.items.length; i++) {
                if ($scope.items[i].id == mascota.id) {

                    var registro = $scope.items[i];
                    registro.id = mascota.id;
                    registro.nombre = mascota.nombre;
                    registro.fechaNac = mascota.fechaNac;
                    registro.especie = mascota.especie;
                    registro.raza = mascota.raza;
                    registro.vacuna = mascota.vacuna;
                    break;
                }
            }

        } else { // nuevo
            $scope.filaActual += 1;
            registroId = $scope.filaActual;
            console.log('adicion id: ' + registroId)

            // adiciona a lista de visualizacion
            $scope.items.push({ id: $scope.filaActual, nombre: mascota.nombre, fechaNac: mascota.fechaNac, especie: mascota.especie, raza: mascota.raza, vacuna: mascota.vacuna });
        }

        // registra en db store
        $scope.storeMascota.setItem(registroId + 'a', mascota.nombre);
        $scope.storeMascota.setItem(registroId + 'b', mascota.fechaNac);
        $scope.storeMascota.setItem(registroId + 'c', mascota.especie);
        $scope.storeMascota.setItem(registroId + 'd', mascota.raza);
        $scope.storeMascota.setItem(registroId + 'e', mascota.vacuna);

        console.log('datos: {nombre: ' + $scope.storeMascota.getItem(registroId + 'a') + ', fechaNac: ' + $scope.storeMascota.getItem(registroId + 'b') + ',especie: ' + $scope.storeMascota.getItem(registroId + 'c') + ', raza: ' + $scope.storeMascota.getItem(registroId + 'd') + ',vacuna: ' + $scope.storeMascota.getItem(registroId + 'e') + ' } ');

        $scope.mensaje = 'regstro correcto';
        $scope.limpiar();
    };

    $scope.limpiar = function () {
        $scope.mascota.id = '0';
        $scope.mascota.nombre = '';
        $scope.mascota.fechaNac = '';
        $scope.mascota.especie = '';
        $scope.mascota.raza = '';
        $scope.mascota.vacuna = '';
        
    };
    
}