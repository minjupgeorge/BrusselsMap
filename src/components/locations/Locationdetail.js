import React from 'react'

function Locationdetail({Locations}) {
  return (
    <div>
        <h1>
            {Locations.name}
        </h1>
        <span>
            {Locations.description}
        </span>
    </div>
  )
}

export default Locationdetail