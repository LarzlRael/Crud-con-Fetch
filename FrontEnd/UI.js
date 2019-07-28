import Services from './services/services';
const services = new Services();
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();


    ui.renderAll();
    
})

class UI {
    async renderAll() {
        const registros = await services.getAll();
        console.log(registros);

        const registroCards = document.getElementById('registros');
        registroCards.innerHTML = "";

        registros.forEach(registro => {
            const div = document.createElement('div');
            div.className = "";
            div.className = "row"
            div.innerHTML = `
           
            <div class="col-md-4">
                <div class="card m-2">
                <div class="card-header text-center text-uppercase">
                    <h3>${registro.name}</h3>
                </div>
                <div class="card-body">
                    <h4>${registro.dir}</h4>
                    <h3>${registro.especialidad}</h3>
                </div>
                <div class="card-footer">
                    <div class="footer">
                    Numero de Trabajadores :${registro.n_trabs} <br>
                    Numero de Paciente :${registro.n_pac} <br>
                    <button class="btn btn-danger delete" _id="${registro._id}">Eliminar</button>

                    </div>
                </div>
            </div>
            </div>
           </div>

            `;
            registroCards.appendChild(div)
        });

    }
    async save(data) {
        await services.saveData(data);
        this.clearForm();
        this.renderAll();
        this.renderMessage('Added','info',3000)
        
    }

    clearForm() {
        document.getElementById('form').reset();
    }

    async delete(id) {
        if (confirm('¿Esta seguro que quiere eliminar este registro : ?')) {
            await services.delete(id);
            this.renderMessage('Deleted','danger',3000)
            this.renderAll();
        }


    }
    renderMessage(message, colorMessage, secondTime) {
        const div = document.createElement('div');
        // div.style.margin('10px')
        div.className = `text-center text-uppercase alert alert-${colorMessage} message`;
        
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const form = document.querySelector('#formulario');

        container.insertBefore(div,form);

        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondTime);
       
    }
}

export default UI;