'use client'
import Food from "@/utils/interface";
import { useState } from "react";
import Imcconst, { fetchFood, handleCalcular } from "@/utils/function";

export default function Home() {
  const{Altura,setAltura,
        Peso,setPeso,
        Result,setResult,
        Corpo,setCorpo,
        Sexo,setSexo,
        Response,setResponse,
        Food,setFood,
        Loading,setLoading,
        fetchFood,
        handleCalcular,
  } = Imcconst()

  return (
    <>
      <main className="flex flex-col">
        <header className="z-10 sticky top-0 flex items-center justify-between bg-black text-white w-full h-10 rounded-sm">
          <h1 className="text-3xl">IMC Calculator</h1>
          <ul className="flex text-white space-x-5">
            <li><a href="#alimento"><h2 className="uppercase">Calorias</h2></a></li>
            <li><a href="#o-que-é"><h2 className="uppercase">O que é?</h2></a></li>
            <li><a href="#para-que-serve"><h2 className="uppercase">Para que serve?</h2></a></li>
            <li><a href="#calculadora"><h2 className="uppercase">Calculadora</h2></a></li>
          </ul>
        </header>
        <section className="Fade flex mt-5 w-full h-auto min-h-80">
          <div className="space-y-2 w-1/2 text-left">
            <h1 id="o-que-é" className="text-4xl border-black border-b-2 self-start">O que é?</h1>
            <p className="font-light">O Índice de Massa Corporal (IMC) é uma medida internacionalmente reconhecida que avalia a relação entre o peso e a altura de uma pessoa. Ele é amplamente utilizado como um indicador simples para identificar possíveis desvios no peso corporal que podem afetar a saúde, como baixo peso, sobrepeso ou obesidade. O IMC não mede diretamente a gordura corporal, mas serve como um parâmetro inicial para determinar a saúde nutricional e o risco de doenças associadas ao peso. O IMC é uma ferramenta simples e eficaz para avaliar o peso corporal em relação à altura. No entanto, ele deve ser usado como um ponto de partida para investigações mais detalhadas sobre a saúde de uma pessoa, complementado por outros exames e avaliações clínicas.</p>
          </div>
          <div className="flex w-1/2 justify-center items-start">
            <img className="w-64" src="./cerebro.gif" alt="" />
          </div>
        </section>
        <section className="Fade flex h-auto min-h-80 bg-black text-white w-full justify-between items-center rounded-sm">
          <div className="flex w-1/2 justify-center items-start">
            <img className="w-64" src="./cerebro2.gif" alt="" />
          </div>
          <div className="space-y-2 text-right w-1/2 ">
            <h1 id="para-que-serve" className="text-4xl border-white border-b-2 self-end">Para que serve?</h1>
            <p className="font-light">O IMC (Índice de Massa Corporal) serve para avaliar de forma inicial se uma pessoa está com um peso saudável em relação à sua altura. Ele é usado em diversos contextos médicos, de saúde pública e até em academias, mas vai além de uma simples medida. Seu propósito está relacionado à identificação de possíveis riscos à saúde associados ao peso corporal.Embora o IMC seja amplamente usado, ele não é perfeito e deve ser complementado com outros métodos, dependendo do objetivo:
              Não distingue massa muscular de gordura: Um atleta pode ter IMC elevado por causa de sua musculatura, e não por excesso de gordura.
              Não avalia a distribuição de gordura: A gordura abdominal, por exemplo, é mais prejudicial à saúde do que a gordura periférica.
              Não considera idade, sexo e etnia: O risco associado ao IMC pode variar entre diferentes grupos populacionais.Para uma avaliação mais detalhada da saúde
            </p>
          </div>
        </section>
        <section className="Fade flex flex-col items-center w-full h-auto min-h-72 space-y-1">
          <h1 id="calculadora" className="slideright text-4xl border-black border-b-2 w-72 text-center">Calculadora</h1>
          <div className=" p-3 flex flex-col w-1/2 h-auto min-h-36 border-black border-4">
            <div>
              <p>Sexo:
                <label htmlFor="mas" form="mas"><input type="radio" value="Masculino" checked={Sexo === 'Masculino'} onChange={(e) => setSexo(e.target.value)} />
                  Masculino</label>
                <label htmlFor="fem" form="fem"><input type="radio" value="Feminino" checked={Sexo === 'Feminino'} onChange={(e) => setSexo(e.target.value)} />
                  Feminino</label>
              </p>
              <label>Altura: <input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Altura} onChange={(e) => setAltura(e.target.value)} /></label>
              <label>Peso: <input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Peso} onChange={(e) => setPeso(e.target.value)} /></label>
              <button className="ml-2 w-24 h-10 rounded-md bg-black text-white hover:bg-gray-900" onClick={() => handleCalcular(Altura, Peso, Sexo, setCorpo, setResult)}>Calcular</button>
            </div>
            <p>Seu Imc é: {Result}</p>
            <p>Você está em: {Corpo}</p>
          </div>
        </section>
        <section className="Fade flex flex-col h-auto min-h-80 bg-black text-white w-full items-center rounded-sm">
          <h1 id="alimento" className="text-4xl border-white border-b-2 w-72 text-center">Alimentos</h1>
          <p className="text-xs">* Aqui mostrara a calorias por unidade do alimento pesquisado *</p>
          <div className="mt-1 flex justify-center w-full space-x-2">
            <input className="rounded-sm shadow-gray-700 shadow-lg text-black" value={Response} onChange={(e) => setResponse(e.target.value)} type="text"></input>
            <button className="text-black bg-white rounded-md p-1 hover:bg-gray-200" onClick={() => fetchFood(Response, setFood, setLoading)}>Buscar</button>
          </div>
          {Loading ? (
            <div>
              <img className="mt-2 w-24" src="/animate2.gif" alt="" />
            </div>
          ) : (
            <div className="grid grid-cols-2">
              {Food.map((Food) => (
                <div key={Food.id} className="p-2 w-80 hover:scale-105 transition-all duration-300 h-28 bg-white rounded-md my-2 mx-2 shadow-md shadow-gray-600">
                  <li className="text-black list-none">
                    <p><strong>Comida:</strong><i> {Food.descricao}</i></p>
                    <p><strong>Calorias:</strong><i> {Food.calorias}</i></p>
                    <p><strong>Quantidade:</strong><i> {Food.quantidade}</i></p>
                  </li>
                </div>
              ))
              }
            </div>
          )}
        </section>
      </main>
    </>
  );
}
