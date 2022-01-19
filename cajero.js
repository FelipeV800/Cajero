class Billete {
    constructor (v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
var entregado = [];
var dinero;
var div = 0;
var papeles = 0;

caja.push(new Billete (50, 3));
caja.push(new Billete (20, 2));
caja.push(new Billete (10, 2));

var resultado = document.getElementById("resultado");
var btn = document.getElementById("retirar");
btn.addEventListener("click", entregarDinero);

function entregarDinero () {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero  = dinero - (bi.valor * papeles);
        }
    }

    if (dinero > 0) {
        resultado.innerHTML = "Transaccion incorrecta!";
    } else {
        for (e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
            }
        }
    }
}