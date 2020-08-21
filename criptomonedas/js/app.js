const cotizador = new API('61d3c0d07de68b13adf34db5f0e42856e9e067e96f92d25449d755dc7c7676e4');
const ui = new Interfaz();

// leer el formulario

const formulario = document.querySelector('#formulario');
// eventlistener
formulario.addEventListener('submit', (e) => {
     e.preventDefault();

     // leer la moneda seleccionada
     const monedaSelect = document.querySelector('#moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.querySelector('#criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
     
     // comprobar que ambos campos tengan algo seleccionado
     if(monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
          // arrojar una alerta de error
          ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
     } else {
          // todo bien, consultar la api
          cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada) 
               .then(data => {
                    ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada, criptoMonedaSeleccionada );
               })
     }


})