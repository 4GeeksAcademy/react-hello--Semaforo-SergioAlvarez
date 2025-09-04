import React from 'react'


function cronometro(segundos) {
    
    let intervalo = setInterval(() => {
        
        segundos --
        if (segundos < 10){
            console.log(segundos)
        }
        // segundos < 5 ? console.log("ya puedes pasar") : segundos = clearInterval(intervalo)
        if (segundos < 5) {
            console.log("Ya puedes pasar")
        }
        if (segundos == 0){
            segundos = clearInterval(intervalo)
        }
        return segundos
    }, 1000);
}


let cuentaAtras = cronometro(10)

export const Contador = () => {
  return (
    <div className=''><p>{cuentaAtras}</p></div>
  )
}
