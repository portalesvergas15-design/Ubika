import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function PropertyCard({id,title,price,location,area,rooms,image}){
  return (
    <motion.article whileHover={{y:-6}} className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full card-img" />
        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">{price}</div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="text-sm text-gray-500">ID {id}</div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{location} · {area} · {rooms} dorms</p>
        <div className="mt-3 flex items-center justify-between">
          <button className="px-3 py-2 border rounded-lg text-sm">Ver detalle</button>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm">Contactar</button>
        </div>
      </div>
    </motion.article>
  )
}
