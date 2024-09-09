const fibonacci =(numero: number) => {
    
    let fibonacciArray: number[] = [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    while (fibonacciArray[fibonacciArray.length - 1] < numero) {
        const proximoValor = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
        fibonacciArray.push(proximoValor);
    }
    
    if (fibonacciArray.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}
console.log(fibonacci(55));