import React from 'react'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
        <div className="custom-tooltip bg-opacity-80 bg-gray-100 p-2 rounded">
          <p className="label">{label}</p>
           {
            payload.map((data) => (
                <p key={data.color} style={{ color: data.color }} className={'intro'}>{data.name} {data.value}</p>
            ))
           }
          {/* <p className="desc">Anything you want can be displayed here.</p> */}
        </div>
    )
  }

  return null
}

export default CustomTooltip
