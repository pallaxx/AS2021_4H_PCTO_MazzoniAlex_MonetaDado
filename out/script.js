var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var d = [0, 0, 0, 0, 0, 0, 0];
var m = [0, 0];
var Sorte = /** @class */ (function () {
    function Sorte() {
    }
    return Sorte;
}());
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dado.prototype.lanciaQualcosa = function () {
        var num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        return num;
    };
    return Dado;
}(Sorte));
var Moneta = /** @class */ (function (_super) {
    __extends(Moneta, _super);
    function Moneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moneta.prototype.lanciaQualcosa = function () {
        var num = Math.floor(Math.random() * (1 - 0 + 1)) + 0; //0 croce //1 testa
        return num;
    };
    return Moneta;
}(Sorte));
document.getElementById("silvia").addEventListener("click", function () {
    var e = (document.getElementById("cristina"));
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var selezionato = opt.value;
    if (selezionato == "dado") {
        var ProvaDado = new Dado();
        var tirato = ProvaDado.lanciaQualcosa();
        d[tirato] += 1;
        document.getElementById("n" + [tirato]).innerHTML = d[tirato].toString();
    }
    if (selezionato == "moneta") {
        var ProvaMoneta = new Moneta();
        var tirata = ProvaMoneta.lanciaQualcosa();
        m[tirata] += 1;
        document.getElementById("moneta" + [tirata]).innerHTML = m[tirata].toString();
    }
});
//# sourceMappingURL=script.js.map