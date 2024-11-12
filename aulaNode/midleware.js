const passo1 = (contexto, next) =>{
    contexto.valor1 = 'midleware'
    next()
}

const passo2 = (contexto, next) =>{
    contexto.valor2 = 'midleware2'
    next()
}
 const passo3 = contexto => contexto.valor3 = 'midleware3'

 const exec = (contexto, ...midds)=>{
    const execPassos = (indice) =>{
        midds && indice < midds.lenght && midds[indice](contexto, () => execPassos(indice+1))
    }
    execPassos(0)
 }

 const ctx = {}
 exec(ctx, passo1, passo2, passo3)
 console.log(ctx);
    