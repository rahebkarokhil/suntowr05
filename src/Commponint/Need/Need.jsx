import React from 'react'
import { FaCheck } from 'react-icons/fa';

function Need() {
  return (
    <div>
      <div>
        <div className="flex justify-between px-28 flex-wrap ">
          <div>
            <div className="w-[600px] py-10  h-32 flex flex-col  pl-6 justify-center  hover:shadow-md">
              <h1 className="text-lg font-bold">
                Why Choose Us for Your House Needs?
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                nam reprehenderit inventore facere non totam, suscipit, eius
                omnis eveniet, mollitia unde
              </p>
            </div>
            <div className="w-[600px] h-32 flex flex-col  pl-6 justify-center  shadow-md">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>

            <div className="w-[600px] h-32 flex flex-col  pl-6 justify-center hover:shadow-md ">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>

            <div className="w-[600px] h-32 flex flex-col  pl-6 justify-center hover:shadow-md  ">
              <div className="flex items-center gap-2 ">
                <FaCheck className="px-2 py-2 bg-black text-white rounded-full text-3xl" />
                <h1 className="text-2xl font-bold">Comporteble Home Design</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta, sed debitis corporis quo hic quos architecto labore
                minima aliquid
              </p>
            </div>
          </div>

          <div className="w-[40%] ">
            <img
              className="w-[100%] h-[auto]"
              src="/about/houseWithAPool-BPZ8KaHT.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Need
