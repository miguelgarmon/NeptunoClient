var app = angular.module('neptunoApp', ['ngRoute','neptunoControllers']);
app.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
$routeProvider.when('/', {
templateUrl: 'components/login/login.html',
controller: 'CtrlLogin'
}).when('/listaProducto', {
    templateUrl: 'components/producto/listaProducto.html',
    controller: 'CtrlListaProducto'
}).when('/listaProveedor', {
    templateUrl: 'components/proveedor/listaProveedor.html',
    controller: 'CtrlListaProveedor'
}).when('/listaCategoria', {
    templateUrl: 'components/categoria/listaCategoria.html',
    controller: 'CtrlListaCategoria'
}).when('/listaEmpleado', {
    templateUrl: 'components/empleado/listaEmpleado.html',
    controller: 'CtrlListaEmpleado'
}).when('/listaCliente', {
    templateUrl: 'components/cliente/listaCliente.html',
    controller: 'CtrlListaCliente'
}).when('/listaPedido', {
    templateUrl: 'components/pedido/listaPedido.html',
    controller: 'CtrlListaPedido'
}).when('/añadirProducto', {
    templateUrl: 'components/producto/guardarProducto.html',
    controller: 'CtrlAddProducto'
}).when('/añadirProveedor', {
    templateUrl: 'components/proveedor/guardarProveedor.html',
    controller: 'CtrlAddProveedor'
}).when('/añadirCliente', {
    templateUrl: 'components/cliente/guardarCliente.html',
    controller: 'CtrlAddCliente'
}).when('/añadirEmpleado', {
    templateUrl: 'components/empleado/guardarEmpleado.html',
    controller: 'CtrlAddEmpleado'
}).when('/añadirCategoria', {
    templateUrl: 'components/categoria/guardarCategoria.html',
    controller: 'CtrlAddCategoria'
}).when('/añadirPedido', {
    templateUrl: 'components/pedido/guardarPedido.html',
    controller: 'CtrlAddPedido'
}).when('/modificarProducto/:id', {
    templateUrl: 'components/producto/guardarProducto.html',
    controller: 'CtrlGuardarProducto'
}).when('/modificarCliente/:id', {
    templateUrl: 'components/cliente/guardarCliente.html',
    controller: 'CtrlGuardarCliente'
}).when('/modificarEmpleado/:id', {
    templateUrl: 'components/empleado/guardarEmpleado.html',
    controller: 'CtrlGuardarEmpleado'
}).when('/modificarProveedor/:id', {
    templateUrl: 'components/proveedor/guardarProveedor.html',
    controller: 'CtrlGuardarProveedor'
}).when('/modificarPedido/:id', {
    templateUrl: 'components/pedido/guardarPedido.html',
    controller: 'CtrlGuardarPedido'
}).when('/modificarCategoria/:id', {
    templateUrl: 'components/producto/guardarCategoria.html',
    controller: 'CtrlGuardarCategoria'
});
$locationProvider.html5Mode(false).hashPrefix('!');
}]);