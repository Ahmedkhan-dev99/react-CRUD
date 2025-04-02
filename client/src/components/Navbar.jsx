import React from 'react'
import {Link} from 'react-router'


function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl sm:text-4xl font-bold text-white hover:text-indigo-100 transition duration-200">
              CRUD MANAGER
            </Link>
          </div>
          
         
        </div>
      </div>
    </nav>
  )
}

export default Navbar