
import Mcdonal from '../assets/Mcdonal.jpg'
export default function McdonalCard() {
  return (
    <div className='flex items-center min-h-screen '>
      <section className='flex flex-col gap-1 w-[400px] mx-auto border rounded-xl shadow-md'> 
        <img src={Mcdonal} alt="" width={400} />
        <div className=' flex flex-col'>
            <h1 className='text-4xl text-red-600 text-center mt-2 font-extrabold'>McCafé</h1>
            <p className='mt-10 text-center p-7 text-lg'>Browse our menu for more information on topics such as our tasty coffee and espresso drinks.</p>
           <div className='flex justify-center items-center'>
           <button className='mt-10 py-4 px-7 bg-[#ffbc0d] flex justify-center rounded-md mb-4'>Order Now</button>
           </div>
        </div>
      </section>
    </div>
  )
}
