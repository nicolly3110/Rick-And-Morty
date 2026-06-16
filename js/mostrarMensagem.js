export function mostrarMensagem(texto) {

    const container = 
       document.querySelector('#characters-container');

    container.innerHTML = `
       <div class="col-12">
         <div class="alert alert-info text-center">
              ${texto}
         </div>
       </div>
    `;
}