
function Chutar(){
    let numeroSecreto =parseInt(Math.random()*11);
    
      let elementoResultado=document.getElementById("resultado");
      let chute = parseInt(document.getElementById("valor").value)
    
        if(chute == numeroSecreto){
          elementoResultado.innerHTML =" você acertou ";
        }
         else if(chute>10 ||chute<0){
            elementoResultado.innerHTML =" você só pode escolher um numero entre 0 ou 10, positivo. ";
       
         }
        else{
          elementoResultado.innerHTML =" você errou, o número secreto era " + numeroSecreto;  
        }
     }