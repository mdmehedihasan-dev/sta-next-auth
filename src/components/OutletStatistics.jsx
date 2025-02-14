'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
  { month: 'Jan', value: 800 },
  { month: 'Feb', value: 1100 },
  { month: 'Mar', value: 950 },
  { month: 'Apr', value: 1200 },
  { month: 'May', value: 1150 },
  { month: 'Jun', value: 1400 },
  { month: 'Jul', value: 1300 },
  { month: 'Aug', value: 1500 },
  { month: 'Sept', value: 1600 },
  { month: 'Oct', value: 1800 },
  { month: 'Nov', value: 1750 },
  { month: 'Dec', value: 2000 },
];

export default function OutletStatistics() {
  const [year, setYear] = useState('2024');

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Total Outlet Statistics</h2>
        <select 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          className="border border-gray-300 rounded p-2"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 5000]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6b7280" dot={{ fill: 'green', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
