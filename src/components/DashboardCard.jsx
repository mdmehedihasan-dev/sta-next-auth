import React from 'react'

export  const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-gray-100 p-4 rounded-md justify-between flex items-center">
    <div className='flex  items-center'>
    <div className="text-2xl bg-white p-3 rounded-full mr-4">{icon}</div>
    <h4 className="text-black text-lg font-medium">{title}</h4>
    </div>
      <p className="text-xl font-bold text-[#ED1E79]">{value}</p>
  </div>
);


