function lengthOfLongestSubstring(s) {
    let charIndicesMap = {};
    let maxLength = 0;
    let windowBegging = 0;
    // Sliding Window example
    // Looping para processar a string
  for (let currCharIndex = 0; currCharIndex < s.length; currCharIndex++){
      // charIndicesMap[s[currCharIndex]] LETRA ATUAL adicionada no indice e deixa ela com um registro
      // "Thiago" charIndicesMap[s[currCharIndex == 1]] = "T" vai ficar assim no charIndicesMap = { "t" : 1 }
      // Verifica se o caracter já está na tabela, caso esteja recomeçe uma nova janela
      if(charIndicesMap[s[currCharIndex]]  !== undefined ){
          // atualizo o parametro para o proximo looping - com o inicio sendo chartIndice + 1 ou o windowBegging
          windowBegging = Math.max(charIndicesMap[s[currCharIndex]] + 1, windowBegging);
      }
      // Atualiza o index atual
      charIndicesMap[s[currCharIndex]] = currCharIndex
      // Tamanho da maior string sem letras repetidas
      maxLength = Math.max(maxLength, currCharIndex - windowBegging + 1);
  }
  return maxLength;
}