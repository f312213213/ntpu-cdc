import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import CustomTooltip from './CustomTooltip'

const Chart = ({ data, lines }) => {
  return (
      // FIXME
      // Container will not resize when width change
      <div className={'w-full md:w-2/3 h-96 '}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
            {
              lines.map((line) => (<Line type="monotone" key={line.type} name={line.text} dataKey={line.type} stroke={line.color} />))
            }
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  )
}

export default Chart
