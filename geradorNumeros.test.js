import geradorNumeros from 'geradorNumeros';

describe('geradorNumeros', () => {

    test('Inicio negativo', () => {
        expect(inicio).toBeGreaterThan(0);
    })

    test('Fim negativo', () =>{
        expect(fim).toBeGreaterThan(0);
    })

    test('Inicio igual a fim', () =>{
        expect(inicio).not.toBe(fim);
    })

    test('intervalo valido', () => {
        let res = gerarNumeroAleatorio(inicio, fim);
        expect(res).toBeGreaterThanOrEqual(200);
        expect(res).tobeLessThanOrEqual(3000);
    })

})