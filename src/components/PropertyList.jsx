import React from 'react'
import PropertyCard from './PropertyCard'

const PROPS = Array.from({length:8}).map((_,i)=>({
  id: i+1,
  title: i%2===0? 'Departamento moderno con vista':'Casa amplia cerca al parque',
  price: i%2===0? 'S/ 420,000':'S/ 1,200,000',
  location: i%2===0? 'Miraflores, Lima':'Surco, Lima',
  area: `${80 + i*10} m²`,
  rooms: 2 + (i%3),
  image: `https://picsum.photos/seed/ubika${i+1}/800/600`
}))

export default function PropertyList(){
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Resultados</h2>
        <div className="text-sm text-gray-600">Mostrando {PROPS.length} propiedades</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPS.map(p=> <PropertyCard key={p.id} {...p} />)}
      </div>

      <div className="mt-6 flex justify-center">
        <nav className="inline-flex items-center space-x-2">
          <button className="px-3 py-1 border rounded">«</button>
          <button className="px-3 py-1 border rounded bg-indigo-50">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">»</button>
        </nav>
      </div>
    </section>
  )
}
