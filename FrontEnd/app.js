import UI from './UI';
// document.getElementById('cargar').addEventListener('click', e => {
//     const ui = new UI();
//     ui.renderAll();
// })

document.querySelector('#form')
    .addEventListener('submit', e => {
        const name = document.getElementById('name').value;
        const especialidad = document.getElementById('especialidad').value;
        const dir = document.getElementById('dir').value;
        const n_pac = document.getElementById('pacientes').value;
        const n_trabs = document.getElementById('trabajadores').value;

        const row = {
            name,
            dir,
            especialidad,
            n_trabs,
            n_pac

        }

        const ui = new UI();
        ui.save(row);
        e.preventDefault();

    })

document.querySelector('#registros').addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('_id');
        const ui = new UI();
        ui.delete(id);
     
    }

    e.preventDefault();
})