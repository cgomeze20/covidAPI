
const banderas = document.getElementById('banderas');

document.addEventListener('DOMContentLoaded',(e) =>{
    fetchData()
})

function numerosConComa(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
}

const fetchData = async () =>{
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data);
        pintarBanderas(data)
        formularioPais(data)
        filtro(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarBanderas = data => {

    let elementos = '';
    data.forEach(item => {
        elementos += `
        <article class="card">
        <img src="${item.countryInfo.flag}" alt="">
        <div class="card-content">
            <p>
                <b>Pais:</b> ${item.country}
            </p>
            <p>
                <b>Casos:</b> ${item.cases}
            </p>
            <p>
                <b>Casos Activos: </b> ${item.active}
            </p>
            <p>
                <a class="vinculo" href="pais.html?pais=${item.country}">Leer más...</a>
            </p>
        </div>
    </article>
        `
    });
    banderas.innerHTML = elementos
}