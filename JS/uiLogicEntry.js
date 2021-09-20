document.querySelector('#btnsave').addEventListener('click', saveEntrada);
drawEntradas();

    function saveEntrada(){
    var sProv = document.querySelector('#proveedor').value,
     sDate = document.querySelector('#fecha').value,
     sType = document.querySelector('#tipo').value,
     sCod = document.querySelector('#codigo').value,
     sProduct = document.querySelector('#producto').value,
     sCant = document.querySelector('#cantidad').value,
     sPrice = document.querySelector('#precio').value,
     sTotal = sCant*sPrice;
     addEntradaToSystem(sProv, sDate, sType, sCod, sProduct, sCant, sPrice, sTotal);
     drawEntradas();
    }



function drawEntradas(){
    var list = getEntradas(),
    tbody = document.querySelector('#tablaentradas tbody');

    tbody.innerHTML = ' ';
 
    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i),
            provCell = row.insertCell(0),
            fechaCell = row.insertCell(1),
            tipoCell = row.insertCell(2),
            codigoCell = row.insertCell(3),
            productCell = row.insertCell(4),
            cantCell = row.insertCell(5),
            precioCell = row.insertCell(6);
            totalCell = row.insertCell(7);

            provCell.innerHTML = list[i].prov;
            fechaCell.innerHTML = list[i].date;
            tipoCell.innerHTML = list[i].type;
            codigoCell.innerHTML = list[i].id;
            productCell.innerHTML = list[i].product;
            cantCell.innerHTML = list[i].cant;
            precioCell.innerHTML = list[i].price;
            totalCell.innerHTML = list[i].price*list[i].cant;

        tbody.appendChild(row );
    }
}