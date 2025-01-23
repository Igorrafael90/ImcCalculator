'use client'
import Food from "@/utils/interface";
import { useState } from "react";
import { handleCalcular } from "@/utils/function";

export default function Home() {
  const [Altura, setAltura] = useState('')
  const [Peso, setPeso] = useState('')
  const [Result, setResult] = useState('')
  const [Corpo, setCorpo] =useState('')
  const [Sexo, setSexo] = useState('')
  const [Response, setResponse] = useState('')
  const [Food, setFood] = useState<Food[]>([])
  const [Loading, setLoading] = useState(true)

  const fetchFood = () => {
    if(!Response){
      window.alert("Digita algum alimento")
    }else{
      fetch(`/api/calorias/?descricao=${Response.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setFood(data))
      setLoading(false)
    }
  }
  
  return (
    <>
      <main className="flex flex-col">
        <header className="sticky top-0 flex items-center justify-between bg-black text-white w-full h-10 rounded-sm">
          <h1 className="text-3xl">IMC Calculator</h1>
          <ul className="flex text-white space-x-5">
          <li><a href="#alimento"><h2>Calorias</h2></a></li>
            <li><a href="#o-que-é"><h2>O que é?</h2></a></li>
            <li><a href="#para-que-serve"><h2>Para que serve?</h2></a></li>
            <li><a href="#calculadora"><h2>Calculadora</h2></a></li>
          </ul>
        </header>
        <section className="flex mt-10 w-full h-auto min-h-80">
            <div className="space-y-2 w-1/2 text-left">
              <h1 id="o-que-é" className="text-4xl border-black border-b-2 self-start">O que é?</h1>
              <p className="text-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies auctor turpis eget congue. Phasellus odio quam, fringilla vel euismod facilisis, aliquet id mauris. Sed id quam a purus commodo viverra. Fusce fringilla elit sed lorem porttitor tristique. Sed eget elit vel massa luctus fermentum in in ipsum. Curabitur sit amet elit accumsan, ornare turpis ac, porttitor eros. Nam mollis nunc eu est pharetra dictum. Nullam bibendum in erat et auctor. In porttitor tempus magna quis dapibus. In eget lectus ac lorem imperdiet sollicitudin. Nunc commodo velit vitae metus feugiat, et interdum tortor pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac justo at eros ullamcorper fermentum. Donec dapibus pretium massa, vitae luctus enim. Etiam viverra ligula elit, sit amet pharetra mi pharetra iaculis.
                Phasellus iaculis arcu sed ipsum tincidunt, sed convallis urna suscipit. Donec pretium interdum viverra. Duis odio dolor, tristique eget ullamcorper at, bibendum in leo. Quisque consectetur urna nec nunc egestas, in commodo metus elementum. Proin in mollis turpis, iaculis sodales nisi. In lacinia vehicula vulputate. Nunc sit amet ligula non justo sagittis mollis. Aliquam erat volutpat. Phasellus turpis orci, consequat vitae risus id, consectetur condimentum ex. Aliquam vitae urna libero.</p>
            </div>
            <div className="flex w-1/2 justify-center items-start">
              <img className="w-64" src="./cerebro.gif" alt="" />
            </div>
        </section>
        <section className="flex h-auto min-h-80 bg-black text-white w-full justify-between items-center rounded-sm">
          <div className="flex w-1/2 justify-center items-start">
              <img className="w-64" src="./cerebro2.gif" alt="" />
            </div>
          <div className="space-y-2 text-right w-1/2 ">
              <h1 id="para-que-serve" className="text-4xl border-white border-b-2 self-end">Para que serve?</h1>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies auctor turpis eget congue. Phasellus odio quam, fringilla vel euismod facilisis, aliquet id mauris. Sed id quam a purus commodo viverra. Fusce fringilla elit sed lorem porttitor tristique. Sed eget elit vel massa luctus fermentum in in ipsum. Curabitur sit amet elit accumsan, ornare turpis ac, porttitor eros. Nam mollis nunc eu est pharetra dictum. Nullam bibendum in erat et auctor. In porttitor tempus magna quis dapibus. In eget lectus ac lorem imperdiet sollicitudin. Nunc commodo velit vitae metus feugiat, et interdum tortor pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac justo at eros ullamcorper fermentum. Donec dapibus pretium massa, vitae luctus enim. Etiam viverra ligula elit, sit amet pharetra mi pharetra iaculis.
                Phasellus iaculis arcu sed ipsum tincidunt, sed convallis urna suscipit. Donec pretium interdum viverra. Duis odio dolor, tristique eget ullamcorper at, bibendum in leo. Quisque consectetur urna nec nunc egestas, in commodo metus elementum. Proin in mollis turpis, iaculis sodales nisi. In lacinia vehicula vulputate. Nunc sit amet ligula non justo sagittis mollis. Aliquam erat volutpat. Phasellus turpis orci, consequat vitae risus id, consectetur condimentum ex. Aliquam vitae urna libero.</p>
            </div>
        </section>
        <section className="flex flex-col items-center w-full h-auto min-h-72 space-y-1">
          <h1 id="calculadora" className="slideright text-4xl border-black border-b-2 w-72 text-center">Calculadora</h1>
          <div className=" p-3 flex flex-col w-1/2 h-auto min-h-36 border-black border-4">
            <div>
              <p>Sexo:
                <label htmlFor="mas" form="mas"><input type="radio" value="Masculino" checked={Sexo === 'Masculino'} onChange={(e) => setSexo(e.target.value)}/>
                Masculino</label>
                <label htmlFor="fem" form="fem"><input type="radio" value="Feminino" checked={Sexo === 'Feminino'} onChange={(e) => setSexo(e.target.value)}/>
                Feminino</label>
              </p>
              <label>Altura: <input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Altura} onChange={(e) => setAltura(e.target.value)}/></label>
              <label>Peso: <input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Peso} onChange={(e) => setPeso(e.target.value)}/></label>
              <button className="ml-2 w-24 h-10 rounded-md bg-black text-white" onClick={() => handleCalcular(Altura, Peso, Sexo, setCorpo, setResult)}>Calcular</button>
            </div>
            <p>Seu Imc é: {Result}</p>
            <p>Você está em: {Corpo}</p>
          </div>
        </section>
        <section className="flex flex-col h-auto min-h-80 bg-black text-white w-full items-center rounded-sm">
        <h1 id="alimento" className="text-4xl border-white border-b-2 w-72 text-center">Alimentos</h1>
          <p className="text-xs">* Aqui mostrara a calorias por unidade do alimento pesquisado *</p>
          <div className="mt-1 flex justify-center w-full space-x-2">
            <input className="rounded-sm shadow-gray-700 shadow-lg text-black" value={Response} onChange={(e) => setResponse(e.target.value)} type="text"></input>
            <button className="text-black bg-white rounded-md p-1" onClick={fetchFood}>Buscar</button>
          </div>
            {Loading ? (
              <div>
                <img className="mt-2 w-24" src="/animate2.gif" alt="" />
              </div>
            ) : (
              <div className="grid grid-cols-2">
              {Food.map((Food) =>(
                <div key={`${Food.descricao}-${Food.calorias}-${Food.quantidade}`}  className="p-2 w-80 h-24 bg-white rounded-md my-2 mx-2 shadow-md shadow-gray-600">
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
