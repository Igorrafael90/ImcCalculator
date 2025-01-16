'use client'

import { useState } from "react";

export default function Home() {
  const [Idade, setIdade] = useState('')
  const [Altura, setAltura] = useState('')
  const [Peso, setPeso] = useState('')
  const [Sexo, setSexo] = useState(true)

  return (
    <>
      <main className="flex flex-col">
        <header className="flex items-center justify-between bg-black text-white w-full h-10 rounded-sm">
          <h1 className="text-3xl">IMC Calculator</h1>
          <ul className="flex text-white space-x-5">
            <li><h2>O que é?</h2></li>
            <li><h2>Para que serve?</h2></li>
            <li><h2>Calculadora</h2></li>
          </ul>
        </header>
        <section className="flex mt-10 w-full h-auto min-h-80">
            <div className="space-y-2 w-1/2">
              <h1 className="text-4xl border-black border-b-2 self-start">O que é?</h1>
              <p className="text-xs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies auctor turpis eget congue. Phasellus odio quam, fringilla vel euismod facilisis, aliquet id mauris. Sed id quam a purus commodo viverra. Fusce fringilla elit sed lorem porttitor tristique. Sed eget elit vel massa luctus fermentum in in ipsum. Curabitur sit amet elit accumsan, ornare turpis ac, porttitor eros. Nam mollis nunc eu est pharetra dictum. Nullam bibendum in erat et auctor. In porttitor tempus magna quis dapibus. In eget lectus ac lorem imperdiet sollicitudin. Nunc commodo velit vitae metus feugiat, et interdum tortor pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac justo at eros ullamcorper fermentum. Donec dapibus pretium massa, vitae luctus enim. Etiam viverra ligula elit, sit amet pharetra mi pharetra iaculis.
                Phasellus iaculis arcu sed ipsum tincidunt, sed convallis urna suscipit. Donec pretium interdum viverra. Duis odio dolor, tristique eget ullamcorper at, bibendum in leo. Quisque consectetur urna nec nunc egestas, in commodo metus elementum. Proin in mollis turpis, iaculis sodales nisi. In lacinia vehicula vulputate. Nunc sit amet ligula non justo sagittis mollis. Aliquam erat volutpat. Phasellus turpis orci, consequat vitae risus id, consectetur condimentum ex. Aliquam vitae urna libero.</p>
            </div>
            <div></div>
        </section>
        <section className="flex h-auto min-h-80 bg-black text-white w-full justify-between items-center rounded-sm">
          <div></div>
          <div className="space-y-2 text-right w-1/2 ">
              <h1 className="text-4xl border-white border-b-2 self-end">Para que serve?</h1>
              <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies auctor turpis eget congue. Phasellus odio quam, fringilla vel euismod facilisis, aliquet id mauris. Sed id quam a purus commodo viverra. Fusce fringilla elit sed lorem porttitor tristique. Sed eget elit vel massa luctus fermentum in in ipsum. Curabitur sit amet elit accumsan, ornare turpis ac, porttitor eros. Nam mollis nunc eu est pharetra dictum. Nullam bibendum in erat et auctor. In porttitor tempus magna quis dapibus. In eget lectus ac lorem imperdiet sollicitudin. Nunc commodo velit vitae metus feugiat, et interdum tortor pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce ac justo at eros ullamcorper fermentum. Donec dapibus pretium massa, vitae luctus enim. Etiam viverra ligula elit, sit amet pharetra mi pharetra iaculis.
                Phasellus iaculis arcu sed ipsum tincidunt, sed convallis urna suscipit. Donec pretium interdum viverra. Duis odio dolor, tristique eget ullamcorper at, bibendum in leo. Quisque consectetur urna nec nunc egestas, in commodo metus elementum. Proin in mollis turpis, iaculis sodales nisi. In lacinia vehicula vulputate. Nunc sit amet ligula non justo sagittis mollis. Aliquam erat volutpat. Phasellus turpis orci, consequat vitae risus id, consectetur condimentum ex. Aliquam vitae urna libero.</p>
            </div>
        </section>
        <section className="flex flex-col items-center w-full h-auto min-h-80 space-y-1">
          <h1 className="text-4xl border-black border-b-2 w-72 text-center">Calculadora</h1>
          <div className="flex flex-wrap w-1/2 h-36 border-black border-4">
            <label>Idade:<input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Idade} onChange={(e) => setIdade(e.target.value)}/></label>
            <label>Altura:<input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Altura} onChange={(e) => setAltura(e.target.value)}/></label>
            <label>Peso: <input className="w-32 border rounded-sm shadow-black shadow-sm" type="number" value={Peso} onChange={(e) => setPeso(e.target.value)}/></label>
            <button className="w-24 h-10 rounded-md bg-black text-white">Calcular</button>
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
}
