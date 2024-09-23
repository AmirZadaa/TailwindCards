import React from 'react'

export default function TshirtCard() {
  return (
    <section className="flex justify-center items-center">
      <KfcCard></KfcCard>
      <div className="flex py-2 px-5 rounded-[12px] mt-7 border-2 justify-center items-center gap-4 max-lg:flex-col shadow-lg">
        <img src={cardData.img} alt="" width={300} className="rounded-md hover:scale-75 duration-100" />
        <div className="max-lg:mt-5">
          <div className="flex justify-between gap-20">
            <div className="">
              <h2 className="font-bold text-2xl">Classic Utility Jocket</h2>
              <p className="mt-1 ">In stock</p>
            </div>
            <h2 className="text-[green] text-2xl">$110.00</h2>
          </div>

          <div className="flex mt-10">
            {cardData.sizes.map((size) => (
              <button
                className={`mx-3 py-2 px-4 bg-${
                  size == "SM" ? "black" : "bg-gray-200"
                } border rounded-[12px] text-${
                  size == "SM" ? "white" : "black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="border mt-10 p-4 shadow-md rounded-[20px]">
            <div className="flex mt-10 gap-2 max-md:flex-col">
              <button className="flex py-4 px-7 bg-black text-white rounded-[10px] justify-center">
                Buy Now
              </button>
              <button className="flex py-4 px-7 border rounded-[10px] mx-10 justify-center">
                Add to bag
              </button>
              <button className="flex py-4 px-4 rounded-[10px] mx-10 border justify-center items-center">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <p className="mt-10 font-semibold">
              Free Shopping On all continental US Order
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
