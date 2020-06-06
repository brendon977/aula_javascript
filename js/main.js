/*var frase = "brendon melhor que pedro"
console.log(frase.replace("brendon", "joão")); //substitui brendon por joão//


var lista = ["maça","laranja","uva"]
console.log(lista.toString())          // transforma array em string//


console.log(lista.join("|"))     // adiciona algo no array

var frutas = [{nome:'maça', cor:'vermelho'},{nome:'uva', cor:'roxo'}]
alert(frutas[0].cor)   // imprime a cor vermelho na posição zero ou seja , imprime vermelho//
*/

/*var idade = prompt("qual sua idade?") // o que é respondido na pergunta é salvo na variavel idade

if( idade >= 18){
    alert("maior de idade")
}
else{
    alert("menor de idade")
}
*/

/*var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours())
alert(d.getMinutes()) 
*/


/*function soma(n1,n2){
    return n1+n2
}
alert(soma(10,10)) */

/*function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade))*/

function botao(){
  document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>" // tag <b> deixa em negrito
  // rr.innerHTML= "Obrigado por clicar" // colocando uma variavel (rr) para receber o valor do id, pode ser fazer dessa forma. ou sem a variavel fazer como acima.//
}


function redirecionar(){                                         // redireciona para uma outra página ,abre outra aba
    window.open("https://github.com/brendon977/aula_javascript");
   // window.location.href ="https://github.com/brendon977/aula_javascript" // outra forma de redirecionar para outra página porém abre na mesma página//
}

function trocar(elemento){      /* usando o this no html, ele se passa como parametro da função e no caso aqui no js, se escreve elemento dentro do parametro
                                   ou seja ele meio que individualiza cada botão, se passar no um so vai mudar o um , e assim por diante*/
    elemento.innerHTML= "Thank you for passing the mouse"
    //document.getElementById("mouse").innerHTML = "thank you for passing the mouse"
}

function voltar(elemento){
    elemento.innerHTML="Pass the mouse here"
    //document.getElementById("mouse").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")   // chama a função quando a página é carregada//
}

function funcaoChange(elemento){
    console.log(elemento.value)  // sempre que o valor for trocado, voce consgue coletar o valor com o onchange//
}