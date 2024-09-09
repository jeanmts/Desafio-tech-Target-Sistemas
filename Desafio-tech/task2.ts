const verificaPalavra = (palavra: string) => {
  return  palavra.split('').filter((letra) => letra == 'a').length
}


console.log(verificaPalavra('abacaxi'));