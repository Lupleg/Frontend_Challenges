import React from 'react'

export default function page() {
  return (
    <div>
         <form className="max-w-lg mx-auto p-4 bg-green-900 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>

            <div className="mb-4">
                <label className="black text-black-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                <input
                id="firstName"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} ></input>
            </div>
            <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="lastName">Last Name</label>
            <input
            id="lastName"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}></input>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="emailId">Email id</label>
                <input
                id="email"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}></input>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="Tel">Tel</label>
                <input
                id="phone" type="number"></input>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="Gender">Gender</label>
                <div className="flex-space-px-4">
                    <label className="flex items-center">
                        <input type="radio" value="male"></input>
                        Male</label>
                </div>
                <div className="flex-space-px-4">
                    <label className="flex items-center">
                        <input type="radio" value="female"></input>
                    Female</label>
                </div>
                <div className="flex-space-x-4">
                    <label className="flex items-center">
                        <input type="radio" value="other"></input>
                    Other</label>
            </div>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="dob">Date Of Birth</label>
                <input id="dob" type="date"></input>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="course">Course</label>
                <select value="">select Course</select>
                <select value="Computer Science">Computer Science</select>
                <select value="Data Science">Data Science</select>
                <select value="Business Analysis">Business Analysis</select>
            </div>
            <div className="mb-4">
                <label className="block text-black-700 text-sm font-bold mb-2"  htmlFor="qualification">Qualification</label>
                <select value="">Select Qualification</select>
                <select value="bachelors degree">Bachelors Degree</select>
                <select value="masters degree">Masters Degree</select>
                <select value="phd degree">PHD Degree</select>
                <select value="other">Other</select>
            </div>
            <div className="mb-6 text-center">
            <button type="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Register</button>
            </div>
        </form>
    </div>
  )
}