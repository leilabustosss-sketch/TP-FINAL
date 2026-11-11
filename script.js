class Vehiculo {
    constructor(marca, modelo, año, matricula, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.matricula = matricula;
        this.kilometraje = kilometraje;
    }

    obtenerInfo() {
        return `<b>Marca:</b> ${this.marca}<br>` +
               `<b>Modelo:</b> ${this.modelo}<br>` +
               `<b>Año:</b> ${this.año}<br>` +
               `<b>Matrícula:</b> ${this.matricula}<br>` +
               `<b>Kilometraje:</b> ${this.kilometraje} km`;
    }

    actualizarKm(nuevoKm) {
        if (nuevoKm >= this.kilometraje) {
            this.kilometraje = nuevoKm;
            return true;
        }
        return false;
    }

    cambiarMatricula(nuevaMat) {
        this.matricula = nuevaMat;
    }
}


let auto = {};
let registrado = false; 


function registrar() {
    let añoIngresado = Number(document.getElementById("año").value);

    if (añoIngresado < 1886 || añoIngresado > 2026 ) {
        document.getElementById("error").innerText = "Error: El año debe estar entre 1886 y 2026.";
        return;
    }

    document.getElementById("error").innerText = "";

    let m = document.getElementById("marca").value;
    let mod = document.getElementById("modelo").value;
    let mat = document.getElementById("mat").value;
    let km = Number(document.getElementById("km").value);

   
    auto = new Vehiculo(m, mod, añoIngresado, mat, km);
    registrado = true;

    alert("¡Vehículo registrado correctamente!");
}


function ver() {
    if (registrado) {
        document.getElementById("info").innerHTML = auto.obtenerInfo();
    } else {
        document.getElementById("info").innerText = "No hay datos registrados.";
    }
}

function cambiarKm() {
    if (registrado) {
        let nuevo = Number(document.getElementById("nuevoKm").value);
        if (auto.actualizarKm(nuevo)) {
            alert("Kilometraje actualizado");
            ver();
        } else {
            alert("El nuevo Km no puede ser menor al actual");
        }
    } else {
        alert("Primero registra un vehículo");
    }
}


function cambiarMat() {
    if (registrado) {
        let nuevaMat = document.getElementById("nuevaMat").value;
        auto.cambiarMatricula(nuevaMat);
        alert("Matrícula actualizada");
        ver();
    } else {
        alert("Primero registra un vehículo");
    }
}