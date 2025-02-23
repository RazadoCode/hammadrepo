import React from 'react';
import '../../(client)/globals.css';
import Link from 'next/link';


const AdminForm = () => {
  return (
    <div className="bg-gray-50 font-[sans-serif]  cursor-pointer">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">

          <div className="p-8 rounded-2xl bg-white shadow-xl border-2">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign In</h2>
            <p className="text-gray-500 text-sm mt-10 leading-relaxed">Sign in to your Admin Pannel .</p>
            <form className="mt-5 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">UserName</label>
                <div className="relative flex items-center">
                  <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                 
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-black  border-gray-300 rounded" />
                  <label  className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="#" className="text-black hover:underline font-semibold">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div className="!mt-8">
                <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-black hover:bg-slate-900 focus:outline-none">
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <Link href="#" className="text-black hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminForm