const filtro = data =>{

const dropdown = document.getElementById('seleccionar')

dropdown.addEventListener('change', ()=>{
    console.log(dropdown.value);
    const query = dropdown.value

    if(query == ""){
        pintarBanderas(data)
    }else{
        const arrayFiltrado = data.filter(itemn => itemn.continent === query)
        pintarBanderas(arrayFiltrado)
    }
})
}