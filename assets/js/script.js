let form = document.getElementById("form-adedonha")
let display_letter = document.getElementById("letra_display")
let timer_display = document.getElementById("timer_display")
let selected_btn = document.querySelectorAll('.time_btn')
let IntervalID=null;
//Adiciona a letra no display e os segundos na tela
display_letter.innerText = random_letter()

function random_letter(){
  const chars = "ABCDEFGHIJLMNOPQRSTUVZ";
  let result = "";
  for(let i = 0; i<1; i++){
    result+= chars.charAt(Math.floor(Math.random() * chars.length))
  }
  console.log(result)
  return result
}

function timer(selected_timer){
    let contagem = selected_timer
    IntervalID  = setInterval(() =>{
        timer_display.innerText = (`00:${contagem -= 1}`)
        console.log(contagem)
        if (contagem == 0){
            clearInterval(IntervalID)
            console.log(`Deu os segundos`)
            selected_btn.forEach((btn)=>{
                btn.disabled = false
            })
        }
        return contagem
    },1000)
}

selected_btn.forEach((individual_btn)=>{
    individual_btn.addEventListener('click',function(){
        selected_btn.forEach((btn)=>{
            btn.disabled = true
            console.log('Botões travados')
        })
        let btn_int = parseInt(individual_btn.value)
        console.log(btn_int)
        timer(btn_int)
    })
})

function stop(){
    clearInterval(IntervalID)
    modal()
}

function modal(){
    document.getElementById("modal_verificacao").style.display = "block"
}






























// Evita que o formulário recarregue a página ao clicar em STOP
form.addEventListener('submit', (e) => {
    e.preventDefault();
    stop();
});