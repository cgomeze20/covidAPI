const formulario = document.getElementById('formulario')
const buscarText = document.getElementById('formularioInput')

const formularioPais = data =>{
    formulario.addEventListener('keyup',async(e) =>{
        e.preventDefault();
        const textoPais = buscarText.value.toLowerCase();
        // console.log(textoPais);
        const arrayFiltrado = data.filter(item =>{
            const letraApi = item.country.toLowerCase()
            if(letraApi.indexOf(textoPais)!== -1){
                return item
            }
        })
        pintarBanderas(arrayFiltrado);
    })
    const unique = [... new Set(data.map(item => item.continent))]
    console.log(unique);
 
}


// const unique = [...new Set(array.map(item => item.age))];


