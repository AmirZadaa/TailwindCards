
import logo from '../assets/logo.jpg'
import hamburger from '../assets/hamburger.svg'

export default function Nav() {
  return (
    <div className=' px-10 flex justify-between border py-0.1 bg-blue-300 sticky top-0 z-10'>
      <header className='flex gap-52'>
        <img src={logo} alt="" width={60}  className='rounded-full'/>
        <ul className='flex space-x-3  items-center gap-10  max-lg:hidden text-xl font-sans'>
            <li><a href="/kfc">KFC Card</a></li>
            <li><a href="/mc">McDonld card</a></li>
            <li><a href="/do">Domino's Card</a></li>
        </ul>
      </header>
      <img src={hamburger} alt=""  width={40} className=' hidden max-lg:block'/>
    </div>
  )
}
