const banderas = document.getElementById('banderas')

const query = new URLSearchParams(window.location.search)
const params = query.get('pais')
// console.log(params);


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
        const filtroData = data.filter(item => item.country === params)
        pintarBanderas(filtroData)
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
            <b>Muertes: </b> ${item.deaths}
            </p>

            <p>
            <b>Tests: </b> ${item.tests}
            </p>

        </div>
    </article>
        `
    });
    banderas.innerHTML = elementos
}