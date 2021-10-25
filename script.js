//-------- horas e datas dos agendamentos ----------
function data(){
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let mostrar = document.querySelectorAll('.open')
    
    mostrar.forEach((n)=>{
        n.innerHTML = `${dia}/${mes+1}`
    })
}
data()

//---------------  abrir modal  ---------------------
let primeiroModal = document.querySelector('.modal-container')
let segundoModal = document.querySelector('.agendamentos-modal')

function agendarHorario(){
    primeiroModal.style.display = 'flex'
}
//---------------  fechar modal  ---------------------
function fechar(){
    primeiroModal.style.display = 'none'
    segundoModal.style.display = 'none'
}

// ------------ Selecionar cabeleireirs ---------------
let cabeleireiroSelecionado = document.querySelector('.selet h1')

function agendarComMarcos(){
    segundoModal.style.display = 'flex'
    cabeleireiroSelecionado.innerHTML = 'Você selecionou o Marcos!'
}

function agendarComDaniel(){
    segundoModal.style.display = 'flex'
    cabeleireiroSelecionado.innerHTML = 'Você selecionou o Daniel!'
}

function agendarComJoao(){
    segundoModal.style.display = 'flex'
    cabeleireiroSelecionado.innerHTML = 'Você selecionou o João!'
}

//----------------------------------------------------
var armazenamento = JSON.parse(localStorage.getItem('lista-marcos') || '[]')
var div = document.createElement('div')
var resultado = () => {div.innerHTML = armazenamento.map((l)=> 
        `
        <div class="pessoas-agendadas">
            <div>
                <h3>Nome: ${l.nome}</h3>
                <h3>Horário: ${l.hora}</h3>
            </div>
        </div>
        `
    ).join('')
    document.querySelector('.agendamentos-a').appendChild(div)
}
//----------------------------------------------------
var armazenamentoB = JSON.parse(localStorage.getItem('lista-daniel') || '[]')
var divB = document.createElement('div')
var resultadoB = () => {divB.innerHTML = armazenamentoB.map((m)=> 
    `
    <div class="pessoas-agendadas">
        <div>
            <h3>Nome: ${m.nome}</h3>
            <h3>Horário: ${m.hora}</h3>
        </div>
    </div>
    `
).join('')
document.querySelector('.agendamentos-b').appendChild(divB)
}
//----------------------------------------------------
var armazenamentoC = JSON.parse(localStorage.getItem('lista-Joao') || '[]')
var divC = document.createElement('div')
var resultadoC = () => {divC.innerHTML = armazenamentoC.map((n)=> 
        `
        <div class="pessoas-agendadas">
            <div>
                <h3>Nome: ${n.nome}</h3>
                <h3>Horário: ${n.hora}</h3>
            </div>
        </div>
        `
    ).join('')
    document.querySelector('.agendamentos-c').appendChild(divC)
}

// -------------- Agendar o horário ------------------
function marcarHorario(){

    if(cabeleireiroSelecionado.innerHTML === 'Você selecionou o Marcos!'){

        let recebeNome = document.querySelector('#nome')
        let recebeHora = document.querySelector('#hora')

        if(recebeNome.value !== '' && recebeHora.value !== ''){

        let armazenar = {nome: recebeNome.value, hora: recebeHora.value}

        armazenamento.push(armazenar)
        localStorage.setItem('lista-marcos', JSON.stringify(armazenamento))

        resultado()

        document.querySelector('.agendamentos-a').appendChild(div)
        
        recebeNome.value = ''
        recebeHora.value = ''
        primeiroModal.style.display = 'none'
        segundoModal.style.display = 'none'
        

        } else {
            alert('Adicione as informações corretamente!')
        }
    }
    if(cabeleireiroSelecionado.innerHTML === 'Você selecionou o Daniel!'){

        let recebeNomeB = document.querySelector('#nome')
        let recebeHoraB = document.querySelector('#hora')

        if(recebeNomeB.value !== '' && recebeHoraB.value !== ''){

        let armazenarB = {nome: recebeNomeB.value, hora: recebeHoraB.value}

        armazenamentoB.push(armazenarB)
        localStorage.setItem('lista-daniel', JSON.stringify(armazenamentoB))

        resultadoB()

        document.querySelector('.agendamentos-b').appendChild(divB)
        
        recebeNomeB.value = ''
        recebeHoraB.value = ''
        primeiroModal.style.display = 'none'
        segundoModal.style.display = 'none'
        

        } else {
            alert('Adicione as informações corretamente!')
        }
    }
    if(cabeleireiroSelecionado.innerHTML === 'Você selecionou o João!'){

        let recebeNomeC = document.querySelector('#nome')
        let recebeHoraC = document.querySelector('#hora')

        if(recebeNomeC.value !== '' && recebeHoraC.value !== ''){

        let armazenarC = {nome: recebeNomeC.value, hora: recebeHoraC.value}

        armazenamentoC.push(armazenarC)
        localStorage.setItem('lista-Joao', JSON.stringify(armazenamentoC))

        resultadoC()

        document.querySelector('.agendamentos-c').appendChild(divC)
        
        recebeNomeC.value = ''
        recebeHoraC.value = ''
        primeiroModal.style.display = 'none'
        segundoModal.style.display = 'none'
        

        } else {
            alert('Adicione as informações corretamente!')
        }
    }
}

//localStorage.clear()
window.addEventListener('load', resultado())
window.addEventListener('load', resultadoB())
window.addEventListener('load', resultadoC())