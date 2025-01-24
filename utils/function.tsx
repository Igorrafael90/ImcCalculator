import Food from "./interface";

export const handleCalcular = (
    Altura: string,
    Peso: string,
    Sexo: string,
    setCorpo: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>
) => {
      if (!Altura || !Peso || !Sexo) {
        window.alert("Preencha todos os campos");
      }

      const altura = parseFloat(Altura);
      const peso = parseFloat(Peso);
      const imc = peso / (altura * altura);

      setResult(imc.toFixed(1));

      if(Sexo === 'Masculino'){
        if(imc <= 18.4){
          setCorpo('Abaixo do normal')
        }else if(imc >= 18.6 && imc < 24.9){
          setCorpo('Normal')
        }else if(imc >= 25.0 && imc < 29.9){
          setCorpo('Sobrepeso')
        }else if(imc >= 30.0 && imc < 34.9){
          setCorpo('Obesidade Grau |')
        }else if(imc >= 35.0 && imc < 39.9){
          setCorpo('Obesidade Grau ||')
        }else if(imc > 39.9){
          setCorpo('Obesidade Grau |||')
        }
      }else{
        if(imc <= 18.5){
          setCorpo('Abaixo do normal')
        }else if(imc >= 18.6 && imc < 24.9){
          setCorpo('Normal')
        }else if(imc >= 25.0 && imc < 29.9){
          setCorpo('Sobrepeso')
        }else if(imc >= 30.0 && imc < 34.9){
          setCorpo('Obesidade Grau |')
        }else if(imc >= 35.0 && imc < 39.9){
          setCorpo('Obesidade Grau ||')
        }else if(imc > 39.9){
          setCorpo('Obesidade Grau |||')
        }
      }
    }

export const fetchFood = (
  Response:string,
  setFood: React.Dispatch<React.SetStateAction<Food[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
      if (!Response) {
        window.alert("Digita algum alimento")
      } else {
        fetch(`/api/calorias/?descricao=${Response.toLowerCase()}`)
          .then((response) => response.json())
          .then((data) => {
            // Adiciona um ID único baseado no índice por conta que a API não possui id unico para cada alimento
            const dataWithIds = data.map((item: Food, index: number) => ({
              ...item,//Faz o spreed operator para destrinchar e adicionar o id com a combinação
              id: `${item.descricao}-${index}`, // Combina a descrição com o índice
            }));
            setFood(dataWithIds);
          });
        setLoading(false);
      }
    }
