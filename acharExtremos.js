function acharExtremos(v) {
    if (v === null) {
        throw new Exception("vetor nulo")
    }

    if (v.length === 0) {
        throw new Exception("vetor sem elementos")
    }

    menor = v[0], maior = v[0];
    indiceMenor = 0, indiceMaior = 0;

    for (i = 1; i < v.length; i++) {
        if (v[i] < menor) {
            menor = v[i];
            indiceMaior = i;
        }
    }

    return {
        menor: menor,
        indiceMenor: indiceMenor,
        maior: indiceMaior,
        indiceMaior: indiceMaior
    }

}

module.exports = acharExtremos;
