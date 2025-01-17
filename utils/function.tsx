export interface CalculoIMCparams {
    Altura: number;
    Peso: number;
}

export const CalcularIMC = ({Altura, Peso}:CalculoIMCparams) => {
    if(!Altura || !Peso){
        window.alert("Preencha todos os campos")
    }
    return Peso / (Altura * Altura);
}