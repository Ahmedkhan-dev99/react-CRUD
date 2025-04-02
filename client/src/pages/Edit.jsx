import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router'

function Edit() {
  const [formData, setFormData] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/get', {
          method: 'POST', body: JSON.stringify({ _id: id }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setFormData(data[0]);
      } catch (error) {
        console.log("Get Data Error :" + error);
      }
    };

    getUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responce = await fetch('http://localhost:5000/update', {
        method: "put",
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      })
      navigate('/')

    } catch (error) {
      console.log('Update Data : ' + error);
      
    }

  }


  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="flex justify-between items-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Edit Item
          </h1>
        </div>

        <div className="w-full max-w-2xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-indigo-100 p-4 sm:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Name</label>
              <input name='name' value={formData.name || ''} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-indigo-100 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" type="text" placeholder="Enter your name" />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Email</label>
              <input name='email' value={formData.email || ''} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-indigo-100 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200" type="text" placeholder="Enter your email" />
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">Gender</label>
              <select name='gender' value={formData.gender || ''} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-indigo-100 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link to={`/`} className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold transition duration-200 ease-in-out text-center">Cancel</Link>

              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition duration-200 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5" type="submit">
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>

  )
}

export default Edit