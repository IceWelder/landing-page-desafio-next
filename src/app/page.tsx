import Image from 'next/image'

export default function Home() {
  return (
    
    <>
      <header className='bg-white top-0 text-center   place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg '>
        <h1 className='text-3xl font-medium text-red-500 '>My Website</h1>
        <nav className='flex items-center justify-between flex-wrap  p-6'>
          <ul className='flex'>
            <li className='block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black mr-4 '>
                <a href="/">Home</a>
            </li>
              <li className='block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black mr-4  '>
              <a href="/">produtos</a>
              </li>
            <li className='block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black mr-47  '>
              <a href="/">sobre nós</a>
            </li>
          </ul>
          <button className='group/enter text-BLUE-500 text-left ml-10 rounded-md border border-blue-500 shadow-lg px-3 py-1 font-light hover:scale-77 hover:bg-sky-500/100 '>Login</button>
        </nav>
      </header>

      <section className="flex place-items-center h-[80vw] mt-5 bg-cover bg-[url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/manhattan_ny.jpg?w=1200&h=1200&crop=1')]">
        <div className=' bg-gradient-to-r flex  to-transparent  pl-10 text-9xl text-blue-700 font-extrabold '>
        <div>
          New York
          </div>

            <img
          src='./mg.webp'
          width={500}
          height={500}
          alt="Picture of the author"
          />
        
        </div>
      </section>
      
 
 
      <footer className="flex border-t bg-blue-200 justify-center gap-[20%]">
        <div className='flex flex-col '>
          <h1 className='font-bold'>Links</h1>
          <a href="/">lor</a>
          <a href="/">lor</a>
          <a href="/">lor</a>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold'>Links</h1>
          <a href="/">lor</a>
          <a href="/">lor</a>
          <a href="/">lor</a>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold'>Links</h1>
          <a href="/">lor</a>
          <a href="/">lor</a>
          <a href="/">lor</a>
        </div>
      </footer>




    </>

  )
}
 

{/* <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >FAQ</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Help</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Support</a
                >
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Terms</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Privacy</a
                >
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Facebook 
                   </a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Linkedin</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Twitter</a
                >
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Official Blog</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >About Us</a
                >
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                  >Contact
                  </a
                >
              </li>
            </ul>
          </div>
        </div>
      </div> */}