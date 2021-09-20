var entradaList = [];


function addEntradaToSystem(pproveedor, pfecha, ptipo, pcodigo, pproducto, pcantidad, pprecio, ptotal){
    var newEntrada = {
        prov : pproveedor,
        date : pfecha,
        type : ptipo,
        id : pcodigo,
        product : pproducto,
        cant : pcantidad,
        price : pprecio,
        total : ptotal
    };
    console.log(newEntrada);
    entradaList.push(newEntrada);
    localStorageList(entradaList);
}

function getEntradas(){
    var storedlist = localStorage.getItem('localelist');
    if (storedlist == null) {
        entradaList = [];
    }else{
        entradaList = JSON.parse(storedlist);
    }
    return entradaList;
}

function localStorageList(slist){
    localStorage.setItem('localelist', JSON.stringify(slist));

}