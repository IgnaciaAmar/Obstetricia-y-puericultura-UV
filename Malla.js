const ramos = [
    {id: "MAT111", nombre: "Anatomía", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT112", nombre: "Química General y Orgánica", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT113", nombre: "Biología", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT114", nombre: "Histología", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT115", nombre: "Psicología General", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT116", nombre: "Introducción a la Matronería", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT117", nombre: "Autorregulación", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT118", nombre: "Lenguaje y Comunicación", semestre: 1, prerequisitos: [], aprobado: false},
    {id: "MAT121", nombre: "Embriología", semestre: 2, prerequisitos: ["MAT111", "MAT113"], aprobado: false},
    {id: "MAT122", nombre: "Bioquímica", semestre: 2, prerequisitos: ["MAT112"], aprobado: false},
    {id: "MAT123", nombre: "Microbiología", semestre: 2, prerequisitos: ["MAT113", "MAT114"], aprobado: false},
    {id: "MAT124", nombre: "Fisiología", semestre: 2, prerequisitos: ["MAT111", "MAT113", "MAT114"], aprobado: false},
    {id: "MAT125", nombre: "Atención a la Matronería I", semestre: 2, prerequisitos: ["MAT111", "MAT113", "MAT116"], aprobado: false},
    {id: "MAT126", nombre: "Matemática Aplicada en Salud", semestre: 2, prerequisitos: [], aprobado: false},
    {id: "MAT127", nombre: "Inglés I", semestre: 2, prerequisitos: [], aprobado: false},
    {id: "MAT128", nombre: "Educación en Salud e Interculturalidad", semestre: 2, prerequisitos: [], aprobado: false},
    {id: "MAT211", nombre: "Fisiopatología", semestre: 3, prerequisitos: ["MAT123", "MAT124"], aprobado: false},
    {id: "MAT212", nombre: "Salud Fetal y Neonatal I", semestre: 3, prerequisitos: ["MAT121", "MAT124"], aprobado: false},
    {id: "MAT213", nombre: "Salud Ginecológica I", semestre: 3, prerequisitos: ["MAT121", "MAT124"], aprobado: false},
    {id: "MAT214", nombre: "Salud Obstétrica I", semestre: 3, prerequisitos: ["MAT121", "MAT124"], aprobado: false},
    {id: "MAT215", nombre: "Atención de Matronería II", semestre: 3, prerequisitos: ["MAT124", "MAT125"], aprobado: false},
    {id: "MAT216", nombre: "Farmacología Aplicada", semestre: 3, prerequisitos: ["MAT122", "MAT124"], aprobado: false},
    {id: "MAT217", nombre: "Salud Pública", semestre: 3, prerequisitos: ["MAT126", "MAT128"], aprobado: false},
    {id: "MAT218", nombre: "Inglés II", semestre: 3, prerequisitos: ["MAT127"], aprobado: false},
    {id: "MAT221", nombre: "Salud Familiar y Comunitaria", semestre: 4, prerequisitos: ["MAT213", "MAT214"], aprobado: false},
    {id: "MAT222", nombre: "Salud Fetal y Neonatal II", semestre: 4, prerequisitos: ["MAT211", "MAT212", "MAT216"], aprobado: false},
    {id: "MAT223", nombre: "Salud Ginecológica II", semestre: 4, prerequisitos: ["MAT211", "MAT213", "MAT216"], aprobado: false},
    {id: "MAT224", nombre: "Salud Obstétrica II", semestre: 4, prerequisitos: ["MAT211", "MAT214", "MAT216"], aprobado: false},
    {id: "MAT225", nombre: "Atención de Matronería III", semestre: 4, prerequisitos: ["MAT215", "MAT216"], aprobado: false},
    {id: "MAT226", nombre: "Módulo Práctico Obstétrico", semestre: 4, prerequisitos: ["MAT212", "MAT214", "MAT215"], aprobado: false},
    {id: "MAT227", nombre: "Sexualidad y Afectividad", semestre: 4, prerequisitos: ["MAT211", "MAT213"], aprobado: false},
    {id: "MAT228", nombre: "Bioestadística para el Diseño de Investigación", semestre: 4, prerequisitos: ["MAT217", "MAT218"], aprobado: false},
    {id: "MAT311", nombre: "Salud Familiar Aplicada I", semestre: 5, prerequisitos: ["MAT221", "MAT223", "MAT224"], aprobado: false},
    {id: "MAT312", nombre: "Salud Neonatal Aplicada I", semestre: 5, prerequisitos: ["MAT222", "MAT225"], aprobado: false},
    {id: "MAT313", nombre: "Salud Ginecológica Aplicada I", semestre: 5, prerequisitos: ["MAT223", "MAT227"], aprobado: false},
    {id: "MAT314", nombre: "Salud Obstétrica Aplicada I", semestre: 5, prerequisitos: ["MAT224", "MAT225"], aprobado: false},
    {id: "MAT315", nombre: "Módulo Práctico Integrado I", semestre: 5, prerequisitos: ["MAT224", "MAT225", "MAT226"], aprobado: false},
    {id: "MAT316", nombre: "Gerontología", semestre: 5, prerequisitos: ["MAT223", "MAT225"], aprobado: false},
    {id: "MAT317", nombre: "Metodología de la Investigación I", semestre: 5, prerequisitos: ["MAT228"], aprobado: false},
    {id: "MAT318", nombre: "TIPE I", semestre: 5, prerequisitos: ["MAT221", "MAT223", "MAT227"], aprobado: false},
    {id: "MAT321", nombre: "Salud Familiar Aplicada II", semestre: 6, prerequisitos: ["MAT311"], aprobado: false},
    {id: "MAT322", nombre: "Salud Neonatal Aplicada II", semestre: 6, prerequisitos: ["MAT312"], aprobado: false},
    {id: "MAT323", nombre: "Salud Ginecológica Aplicada II", semestre: 6, prerequisitos: ["MAT313"], aprobado: false},
    {id: "MAT324", nombre: "Salud Obstétrica Aplicada II", semestre: 6, prerequisitos: ["MAT314"], aprobado: false},
    {id: "MAT325", nombre: "Módulo Práctico Integrado I", semestre: 6, prerequisitos: ["MAT315"], aprobado: false},
    {id: "MAT326", nombre: "Metodología de la Investigación II", semestre: 6, prerequisitos: ["MAT317"], aprobado: false},
    {id: "MAT327", nombre: "Gerenciamiento y Liderazgo I", semestre: 6, prerequisitos: ["MAT117", "MAT218"], aprobado: false},
    {id: "MAT411", nombre: "Salud Familiar Integrada I", semestre: 7, prerequisitos: ["MAT321", "MAT323"], aprobado: false},
    {id: "MAT412", nombre: "Salud Neonatal Integrada I", semestre: 7, prerequisitos: ["MAT322"], aprobado: false},
    {id: "MAT413", nombre: "Salud Gineco-Obstétrica Integrada I", semestre: 7, prerequisitos: ["MAT323", "MAT324"], aprobado: false},
    {id: "MAT414", nombre: "Módulo Práctico Integrado II", semestre: 7, prerequisitos: ["MAT321", "MAT322", "MAT323", "MAT325"], aprobado: false},
    {id: "MAT415", nombre: "Seminario de Tesis I", semestre: 7, prerequisitos: ["MAT326"], aprobado: false},
    {id: "MAT416", nombre: "Gerenciamiento y Liderazgo II", semestre: 7, prerequisitos: ["MAT327"], aprobado: false},
    {id: "MAT421", nombre: "Salud Familiar Integrada II", semestre: 8, prerequisitos: ["MAT411"], aprobado: false},
    {id: "MAT422", nombre: "Salud Neonatal Integrada II", semestre: 8, prerequisitos: ["MAT412"], aprobado: false},
    {id: "MAT423", nombre: "Salud Gineco-Obstétrica Integrada II", semestre: 8, prerequisitos: ["MAT413"], aprobado: false},
    {id: "MAT424", nombre: "Módulo Práctico Integrado III", semestre: 8, prerequisitos: ["MAT321", "MAT322", "MAT323", "MAT325"], aprobado: false},
    {id: "MAT425", nombre: "Seminario de Tesis II", semestre: 8, prerequisitos: ["MAT415"], aprobado: false},
    {id: "MAT426", nombre: "TIPE II", semestre: 8, prerequisitos: ["MAT318", "MAT416"], aprobado: false},
    {id: "MAT511", nombre: "Internado Intrahospitalario I", semestre: 9, prerequisitos: ["MAT421", "MAT422", "MAT423", "MAT425", "MAT426"], aprobado: false},
    {id: "MAT512", nombre: "Internado en Salud Familiar y Gestión I", semestre: 9, prerequisitos: ["MAT421", "MAT422", "MAT423", "MAT425", "MAT426"], aprobado: false},
    {id: "MAT521", nombre: "Internado Intrahospitalario II", semestre: 10, prerequisitos: ["MAT421", "MAT422", "MAT423", "MAT425", "MAT426"], aprobado: false},
    {id: "MAT522", nombre: "Internado en Salud Familiar y Gestión II", semestre: 10, prerequisitos: ["MAT421", "MAT422", "MAT423", "MAT425", "MAT426"], aprobado: false}
];

// Cargar estado guardado
const guardado = JSON.parse(localStorage.getItem('mallaUV')) || {};
ramos.forEach(r => { if(guardado[r.id]) r.aprobado = true; });

const contenedor = document.getElementById('contenedor-malla');

function renderizar() {
    contenedor.innerHTML = '';
    const tabla = document.createElement('table');
    tabla.className = 'tabla-malla';
    tabla.innerHTML = `<thead><tr><th colspan="2">1° AÑO</th><th colspan="2">2° AÑO</th><th colspan="2">3° AÑO</th><th colspan="2">4° AÑO</th><th colspan="2">5° AÑO</th></tr><tr><th>1° Sem</th><th>2° Sem</th><th>3° Sem</th><th>4° Sem</th><th>5° Sem</th><th>6° Sem</th><th>7° Sem</th><th>8° Sem</th><th>9° Sem</th><th>10° Sem</th></tr></thead><tbody id="cuerpo-tabla"></tbody>`;
    const tbody = tabla.querySelector('#cuerpo-tabla');

    for (let fila = 0; fila < 12; fila++) {
        const tr = document.createElement('tr');
        for (let sem = 1; sem <= 10; sem++) {
            const td = document.createElement('td');
            const ramo = ramos.filter(r => r.semestre === sem)[fila];
            if (ramo) {
                const div = document.createElement('div');
                div.className = 'ramo';
                const requisitosCumplidos = ramo.prerequisitos.length === 0 || ramo.prerequisitos.every(preId => ramos.find(r => r.id === preId && r.aprobado));
                if (ramo.aprobado) div.classList.add('aprobado');
                else if (requisitosCumplidos) div.classList.add('disponible');
                else div.classList.add('bloqueado');
                div.innerHTML = `<strong>${ramo.nombre}</strong><br>${ramo.id}`;
                div.onclick = () => {
                    if (ramo.aprobado || requisitosCumplidos) {
                        ramo.aprobado = !ramo.aprobado;
                        // Guardar en localStorage
                        const estado = {};
                        ramos.forEach(r => { if(r.aprobado) estado[r.id] = true; });
                        localStorage.setItem('mallaUV', JSON.stringify(estado));
                        renderizar();
                    } else { alert('¡Primero debes aprobar los prerrequisitos!'); }
                };
                td.appendChild(div);
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    contenedor.appendChild(tabla);
}
document.addEventListener('DOMContentLoaded', renderizar);
