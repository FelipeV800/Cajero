var imagenes = [];
imagenes["2"] = "billete2.png";
imagenes["5"] = "billete5.png";
imagenes["10"] = "billete10.png";
imagenes["20"] = "billete20.png";
imagenes["50"] = "billete50.png";
imagenes["100"] = "billete100.png";

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var caja = [];
var dinero;
var div = 0;
var papeles = 0;

caja.push(new Billete(100,1));
caja.push(new Billete(50,1));
caja.push(new Billete(20,1));
caja.push(new Billete(10,0));
caja.push(new Billete(5,0));
caja.push(new Billete(2,0));

var resultado = document.getElementById("resultado");
var btn = document.getElementById("retirar");
btn.addEventListener("click", entregarDinero);
addEventListener("keyup", enter);

contar();

function entregarDinero() {
    var entregado = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if (total >= dinero) {
        for (bi of caja) {
            if (dinero > 0) {
                div = Math.floor(dinero / bi.valor);
                if (div > bi.cantidad) {
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
                bi.cantidad -= papeles;
                for (let i = 0; i < papeles; i++) {
                    entregado.push(new Billete(bi.valor, 1));
                }
                dinero -= (bi.valor * papeles);
            }
        }

        if (dinero == 0) {
            resultado.innerHTML += "Se ha retirado: <br />";
            for (let e of entregado) {
                resultado.innerHTML += "<img src=" + e.imagen.src + " />";
            }
            resultado.innerHTML += "<hr />";
            contar();
        } else {
            resultado.innerHTML = "Error de transaccion, intente otro valor <hr />";
        }
    } else {
        resultado.innerHTML += "No cuento con esa cantidad de dinero, intente mas tarde<hr />";
    }
}

function contar()
{
    let showDinero = document.getElementById("dineroencaja");
	total = 0
	for (let tot of caja)
	{
		total += tot.valor * tot.cantidad;
	}
    showDinero.innerHTML = total;
}

function enter(e){
    if (e.keyCode == 13) {
        entregarDinero();
    }
}