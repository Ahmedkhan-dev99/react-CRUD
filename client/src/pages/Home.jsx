import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";

import { Link } from 'react-router'
import BoxDelete from '../components/BoxDelete'

function Home() {
    const [data, setData] = useState([])
    const [alert, setAlert] = useState(false)
    const [userId, setUserId] = useState('')

    useEffect(() => {
        const dataFetch = async () => {
            try {
                const respone = await fetch('http://localhost:5000');
                setData(await respone.json())
            } catch (error) {
                console.log('Server is Close : '+ error);
            }
        };
        dataFetch();
    }, [alert])

    const ShowAlert = (e) => {
        setUserId(e.target.value);
        setAlert(true)
    }

    const handleDelete = async () => {
        const responce = await fetch('http://localhost:5000/delete', {
            method: 'delete',
            body: JSON.stringify({ _id: userId }),
            headers: { "Content-Type": "application/json" }
        });
        setAlert(false);
        console.log(await responce.json());

    }


    return (

        <div className="bg-gray-50 font-['Inter']">

            {alert ? <div id="customAlert" className={`${alert ? "flex" : "hidden"} fixed inset-0 bg-gray-300/60    items-center justify-center z-40`}>
                <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 max-w-md mx-4 sm:mx-auto border-2 border-red-100">
                    <div className="flex items-center justify-center mb-4 sm:mb-6">
                        <div className="bg-red-100 rounded-full p-3 sm:p-5 text-4xl sm:text-6xl text-red-600">
                            <FiAlertTriangle />
                        </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-3 text-gray-800">Delete Confirmation</h3>
                    <p className="text-gray-600 text-center mb-4 sm:mb-8 text-base sm:text-lg">{userId}</p>
                    <p className="text-gray-600 text-center mb-4 sm:mb-8 text-base sm:text-lg">Are you sure you want to delete this item?</p>
                    <div className="flex justify-center gap-2 sm:gap-4">
                        <button onClick={() => setAlert((pre) => !pre)}
                            className="px-4 sm:px-8 py-2 sm:py-3 bg-gray-100 text-gray-700 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition duration-200 shadow-lg cursor-pointer">
                            Cancel
                        </button>
                        <button onClick={handleDelete}
                            className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-base sm:text-lg font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition duration-200 shadow-lg cursor-pointer">
                            Delete
                        </button>
                    </div>
                </div>
            </div> : ""}

            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
                    <h1 className="text-2xl sm:text-4xl font-bold text-indigo-900">Item Management</h1>
                    <Link to={`add`} className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-200 ease-in-out flex items-center justify-center gap-2">
                        <FaPlus />Add New Item
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-x-auto border border-gray-100">
                    <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-indigo-500 to-indigo-600">
                            <tr>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white">ID</th>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white">Name</th>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white">Email</th>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white">Status</th>
                                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">

                            {data.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-100 transition duration-150">
                                    <td className="px-4 sm:px-6 py-3 sm:py-5 whitespace-nowrap">
                                        <span className="text-xs sm:text-sm font-bold text-indigo-600">#{index + 1}</span>
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-5 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="text-sm sm:text-md font-medium text-gray-900 capitalize">{item.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-5 whitespace-nowrap">
                                        <div className="text-xs sm:text-sm text-gray-600">{item.email}</div>
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-5 whitespace-nowrap cursor-pointer">
                                        {item.gender === "male" ?
                                            <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-2xl text-xs font-medium bg-green-50 text-green-800 border border-green-600/50">Male</span>
                                            :
                                            <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-2xl text-xs font-medium bg-yellow-50 text-yellow-800 border border-yellow-600/50">Female</span>

                                        }
                                    </td>
                                    <td className="px-4 sm:px-6 py-3 sm:py-5 whitespace-nowrap text-xs sm:text-sm font-medium">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <Link to={`edit/${item._id}`} className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 transition-colors">
                                                <TbEdit />Edit
                                            </Link>
                                            <button value={item._id} onClick={ShowAlert} className="inline-flex cursor-pointer items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors">
                                                <RiDeleteBin5Line />Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home