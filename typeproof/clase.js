var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var Prueba = (function () {
    function Prueba(nombre) {
        this.nombre = nombre;
    }
    Prueba.prototype.getSaludo = function (edad) {
        return "Hola " + this.nombre + " edad: " + edad;
    };
    ;
    return Prueba;
}());
;
var Testeo = (function (_super) {
    __extends(Testeo, _super);
    function Testeo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Testeo.prototype.setSaludo = function (nombre) {
        this.nombre = nombre;
    };
    return Testeo;
}(Prueba));
var nombre = "Juan";
var Saludo = new Testeo(nombre);
console.log(Saludo.getSaludo(22));
