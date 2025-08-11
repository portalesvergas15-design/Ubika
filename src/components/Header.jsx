import React from 'react'

export default function Header(){
  return (
    <header className="bg-white header-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-indigo-600">Ubika<span className="text-gray-700">Clone</span></div>
            <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <a className="hover:text-indigo-600" href="#">Comprar</a>
              <a className="hover:text-indigo-600" href="#">Alquilar</a>
              <a className="hover:text-indigo-600" href="#">Proyectos</a>
              <a className="hover:text-indigo-600" href="#">Agentes</a>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="hidden md:inline px-4 py-2 border rounded-md text-sm">Ingresar</button>
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Publicar</button>
            <button className="md:hidden p-2 rounded-md border">☰</button>
          </div>
        </div>
      </div>
    </header>
  )
}
