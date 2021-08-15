// numeros de um até 1000
/* 
   unidades= {um, dois, três, quatro, cinco, seis, sete, oito, nove,}
   dezenas = {vinte, trinta, quarenta, cinquenta, sessenta, setenta, oitenta, noventa}
   cem = {cem}
   centenas = {cento, duzentos, trezentos, quatrocentos, quinhentos, seiscentos, setecentos, oitocentos, novecentos}
   especiais = {dez, onze, doze, treze, quatorze, quinze, dezesseis, dezessete, dezoito, dezenove,}
   mil = {mil}
*/

//percorrer o vetor das unidades
//avançar para os especiais
//para cada dezena percorrer a sua unidade até 99
// cem
// percorrer o vetor das centenas e suas repectivas unidades até 999
// mil



function show(id, resultado){
	let destination = document.getElementById(id)
	destination.appendChild(resultado);

}




// function show(saida){
// 	let result = document.getElementById("resultado")
//     let ul = document.createElement ("ul")
//         ul.innerHTML = saida
        
// 	result.appendChild(ul);



// }


function numberToWords(){
    let output = []
    let aux = []
    let unidades = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", ]
    let especiais = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", ]
    let dezenas = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
    let centenas = ["cento"]
    let centenasDois = ["duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]
    
    
    
    
    
        for(let i = 0; i < unidades.length; i++){
            output.push(unidades[i])
       }
       for(let j = 0; j < especiais.length; j++){
            output.push(especiais[j])
        }
    
        for (let k = 0; k < dezenas.length; k++){
            output.push(dezenas[k])
            for (let i = 0; i < unidades.length; i++){
                output.push(dezenas[k] + ` e ` +unidades[i])
            }
        }
        for (let w = 0; w < output.length; w++){
            aux.push(output[w])
        }
        
        //console.log(aux)
        
        output.push("cem")

        for (let x = 0; x < centenas.length; x++){
            for (let z = 0; z < aux.length; z++) {
             output.push(centenas[x] + " e " + aux[z])
            }
        }


        for (let y = 0; y < centenasDois.length; y++){
            output.push(centenasDois[y])
            for (let z = 0; z < aux.length; z++) {
             output.push(centenasDois[y] + " e " + aux[z])
            }
        }

        output.push("mil")



        for(let s = 0; s<output.length; s++){
            let li = document.createElement("li")
            li.innerHTML = output[s]
            show("resultado", li)

        }
        
    
    
    return output
} 
numberToWords()



