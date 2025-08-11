import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Ubika Clone. Todos los derechos reservados.</div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600">Términos</a>
            <a href="#" className="hover:text-indigo-600">Privacidad</a>
            <a href="#" className="hover:text-indigo-600">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
