import React from 'react'
import { explor } from './Explordata'

function Explor() {
  
  return (
    <div className="bg-[#F9F9F9] h-screen flex flex-col items-center ">
      <div className="text-center py-11 items-center ">
        <h1 className="text-5xl mb-5">Explore Cities</h1>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="grid grid-cols-1 px-5 md:grid md:grid-cols-2 lg:grid-cols-5 lg:px-52 gap-4  ">
        {explor.map((explorcard) => (
          <div className="rounded-lg">
            <div id='explor' >
              <img
                className="w-[100%] h-auto rounded-lg"
                src={explorcard.imgUrl}
                alt=""
              />
            </div>
            <div className="py-5 px-3">
              <h1 className="font-bold">{explorcard.title}</h1>
              <p className="font-extrabold">{explorcard.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explor
