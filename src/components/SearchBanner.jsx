import React from 'react'

export default function SearchBanner(){
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 -mt-20 shadow-lg text-gray-800">
          <h1 className="text-2xl font-bold mb-2">Encuentra tu próximo inmueble</h1>
          <p className="text-sm text-gray-600 mb-4">Busca por distrito, tipo, precio o palabra clave</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input className="col-span-2 px-4 py-3 border rounded-lg" placeholder="¿Dónde? (ej. Miraflores)" />
            <select className="px-4 py-3 border rounded-lg">
              <option>Comprar</option>
              <option>Alquilar</option>
            </select>
            <button className="px-4 py-3 bg-indigo-600 text-white rounded-lg">Buscar</button>
          </div>
          <div className="mt-4 text-sm text-gray-500">Filtros rápidos: <span className="font-medium">2 dorms</span> · <span className="font-medium">100 - 300 m²</span> · <span className="font-medium">Piscina</span></div>
        </div>
      </div>
    </section>
  )
}
