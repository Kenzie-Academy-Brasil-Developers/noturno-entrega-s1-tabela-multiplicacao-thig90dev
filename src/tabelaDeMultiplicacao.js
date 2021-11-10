function tabelaMultiplicacao(numero) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e mostrar o restante da tabela no console.
    let meuArr = [];
    
    for (let linha = 0; linha < numero; linha++) {
        meuArr.push([]);
        
        for(let coluna = 0; coluna < numero; coluna++){
            const multiplicacao = coluna * linha;

            meuArr[linha].push(multiplicacao);
        }
    }        
       console.table(meuArr);
       
} tabelaMultiplicacao(10);