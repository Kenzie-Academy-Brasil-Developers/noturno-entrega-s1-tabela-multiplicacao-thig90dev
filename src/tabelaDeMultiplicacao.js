function tabelaMultiplicacao(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e mostrar o restante da tabela no console.
    let multArr = [];
    for (let linha = 0; linha <= n; linha++) {
        multArr.push(linha);
        console.log(multArr)
        for (let coluna = 0; coluna <= n; coluna++) {
            multArr.push([coluna]);
            }
        }
        console.table(multArr);
} console.log(tabelaMultiplicacao(10));