import { describe, expect, test } from '@jest/globals';
import acharExtremos from 'acharExtremos';

let vetor1 = [1,2,3,4,5,6];
let vetor2 = [1,99,3,-5,8];
let vetor3 = [];
let vetor4 = null;
describe('AcharExtremos', () =>{
    
    test('vetor sequencial', () =>{
        expect(() =>{
            acharExtremos(vetor1).menor.toBe(1);
            acharExtremos(vetor1).maior.toBe(6);
            acharExtremos(vetor1).indiceMaior.toBe(0);
            acharExtremos(vetor1).indiceMenor.toBe(5);
        })
    })

    test('vetor aleatorio', () =>{
        expect(() => {
            acharExtremos(vetor2).menor.toBe(-5);
            acharExtremos(vetor2).maior.toBe(99);
            acharExtremos(vetor2).indiceMenor.toBe(3);
            acharExtremos(vetor2).indiceMaior.toBe(1);
        })
    })

    test('vetor vazio', () => {
        expect(vetor3).not.toBeUndefined();
    })

    test('vetor nulo', () => {
        expect(vetor4).not.toBeNull();
    })
})