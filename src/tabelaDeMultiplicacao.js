function tabelaMultiplicacao(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e mostrar o restante da tabela no console.
    let multArr = [];
    
    for (let linha = 0; linha <= n; linha++) {
        multArr [linha] = [multArr.length]  
        
        for(let coluna = 0; coluna <= n; coluna++){
            multArr[linha][1]= multArr.length-1
        }
        }
        
    
        console.table(multArr);
       
} console.log(tabelaMultiplicacao(20));