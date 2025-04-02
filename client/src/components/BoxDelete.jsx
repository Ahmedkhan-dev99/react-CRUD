import React, { useState } from 'react'
import { FiAlertTriangle } from "react-icons/fi";


function BoxDelete() {
    const [toggle, setToggle] = useState(false)


    const handleClick = () => {
        setToggle(true)
        console.log('Click');

    }



    return (
        <div id="customAlert" className={`${!toggle ? "flex" : "hidden"} fixed inset-0 bg-gray-600 bg-opacity-50   items-center justify-center z-40`}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-auto border-2 border-red-100">
                <div className="flex items-center justify-center mb-6">
                    <div className="bg-red-100 rounded-full p-5 text-6xl text-red-600">
                        <FiAlertTriangle />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-gray-800">Delete Confirmation</h3>
                <p className="text-gray-600 text-center mb-8 text-lg">Are you sure you want to delete this item?</p>
                <div className="flex justify-center gap-4">
                    <button
                        className="px-8 py-3 bg-gray-100 text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition duration-200 shadow-lg">
                        Cancel
                    </button>
                    <button onClick={handleClick}
                        className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition duration-200 shadow-lg">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BoxDelete