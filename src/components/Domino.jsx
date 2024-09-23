
import domino from '../assets/domino.webp'

export default function Domino() {
  return (
    <div  className="min-h-screen flex items-center">

      <section className="flex flex-col w-60 mx-auto  border rounded-2xl shadow-md bg-[#f8f9fa]">
        <img src={domino} alt=""  width={300} className="rounded-md"/>
        <div className="flex flex-col gap-3 mt-3 p-3">
            <h4>Everyday Double Valu... <span><i className="fa-regular fa-heart text-red-600 text-2xl"/></span> </h4>
            <p className="text-slate-500 text-sm">2 Large Pizzas with FREE 1.5 Ltr Drink.</p>
            <h4 className="text-[#006991]">Rs. 2399</h4>
        <button className="bg-[#006991] rounded-md  text-white font-bold px-2 py-0.5 mt-3">Add</button>
        </div>
      </section>
    </div>
  )
}
