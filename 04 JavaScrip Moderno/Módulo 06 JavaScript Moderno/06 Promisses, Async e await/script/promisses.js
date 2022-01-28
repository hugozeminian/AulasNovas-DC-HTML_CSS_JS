/*
promisse
retorna algo desejado (resolvendo)
ou
retorna algo rejeitado (rejeita)
*/

//pode escrever da forma tradicional
    function testes0(){
        return new Promise(function(resolve,reject){

            const erro = false
            if(erro){
                reject('Erro....')
            }else{
                resolve("A promise foi resolvida com sucesso")
            }

        })
    }

//pode escrever na forma de arrow function
    function testes1(){
        return new Promise((resolve, reject) =>{

        })
    }

    testes0().then(function(res){
        console.log(res)
    }).catch(function(err){
        console.log(err)
    })




    function testes3(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                const erro = false
                if(erro){
                    reject('Erro....')
                }else{
                    resolve("A promisse 2 foi resolvida")
                }
            },2000)//aguarda 2 segundos

        })
    }

//funções assíncronas
    async function testes2(){
        await testes3().then(function(res){ //o await vai fazer que o "olá" apareça apenas depois que a "promise" for resolvida.
            alert(res)
        })
        alert('olá')
    }

    testes2()
