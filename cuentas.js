var nombres = [];
var gastos = [];

function Cuentas () { 
        
    /*Cuentas generales*/
    let suma = 0;
    let pers = 0;
    for (let gast of gastos) {
        suma += gast;
    }
    pers = suma / gastos.length;
    document.getElementById("total").innerHTML = "Se gastaron $" + suma + " en total";
    document.getElementById("costo").innerHTML = "El costo es $" + pers.toFixed(2) + " por persona";
    
    /*Cuentas personales*/
    document.getElementById("diferencia").innerHTML = "";
    for (i = 0; i < gastos.length; i++) {
        diferencia = pers-gastos[i];
        if (diferencia>0) {
            document.getElementById("diferencia").innerHTML += `
            <li class="list-group-item">
            A ${nombres[i]} le falta aportar $ ${diferencia.toFixed(2)} 
            </li>
            `
        } else {
            document.getElementById("diferencia").innerHTML += `
            <li class="list-group-item">
            ${nombres[i]} debe recibir $ ${-diferencia.toFixed(2)} 
            </li>
            `
        }
    } 
} 

function Guardar(nombre, gasto) {
    nombres.push(nombre.value);
    gastos.push(parseInt(gasto.value));
    document.getElementById("datos").innerHTML += `
    <li class="list-group-item">
    ${nombre.value} gastó: ${gasto.value} 
    </li>
    `
    document.getElementById("nombre").value = "";
    document.getElementById("gasto").value = "";

    Cuentas();
}

/*
function Eliminar(){
    let name = prompt("Ingrese el nombre que quiere eliminar");
    let indice = nombres.indexOf(name);
    nombres.splice(indice, 1);
    gastos.splice(indice, 1);
    document.getElementById("diferencia").innerHTML -= `
            <li class="list-group-item">
            ${name} debe recibir $ ${gastos[indice]} 
            </li>
            `

    Cuentas();
}
*/



