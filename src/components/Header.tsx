import Link from "next/link";


export default function Header() {
    return(      

        <header className="flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50">
          <div className='flex max-w-screen-xl mx-auto w-full'>
          
          <div className="flex lg:flex-1">
        <a href="#" className="flex items-center justify-center h-16 w-full md:justify-between">
          <span className="sr-only"></span>
          <img className="h-8 w-auto items-center" src="SHOP.CO.png" alt=""/>
        </a>
      </div>
  
            <div id="collapseMenu"
              className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
              <button id="toggleClose" className='flex justify-center items-center'></button>
  
              <ul
                className=' flex items-center justify-center h-16 w-full md:justify-between'>
                <li className='mb-6 hidden max-lg:block'>
                  <div className="flex items-center justify-between gap-4">
                    
                  </div>
                </li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <Link href=''>Shop</Link></li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <Link href=''>On Sale</Link></li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <Link href=''>New Arrival</Link></li>
                <li className='max-lg:border-b max-lg:py-3 px-3'>
                  <Link href=''>Brands</Link></li>
              </ul>
            </div>
  
            <div className="flex items-center justify-start w-[330px] h-[40px] gap-x-6 gap-y-4 ml-auto">
              <div
                className='flex bg-gray-50 border focus-within:bg-transparent focus-within:border-gray-400 rounded-full px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>
                <input type='text' placeholder='Search for products...' className='w-full text-sm bg-transparent outline-none pr-2' />
                <svg viewBox="0 0 192.904 192.904" width="16px"
                  className="cursor-pointer fill-gray-600">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              </div>
  
              
                 
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5 curso-pointer">
                  <div className="relative">
                    <svg width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                      viewBox="0 0 512 512">
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"></path>
                    </svg>
                  
                  </div>
                 
                </div>
  
                <div className='flex items-center sm:space-x-8 space-x-6'>
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative">
                  <svg  className="w-[20.25px] h-[20.25px] text-gray-600" viewBox="0 0 64 64">
                     <path d="M32 0a32 32 0 1 0 32 32A32 32 0 0 0 32 0zm0 6a26 26 0 1 1-26 26A26 26 0 0 1 32 6zm0 10a10 10 0 1 0 10 10A10 10 0 0 0 32 16zm0 36a20 20 0 0 1-16-8.22c.08-5.34 10.67-8.28 16-8.28s15.92 2.94 16 8.28A20 20 0 0 1 32 52z"></path>
                  </svg>
                              

                    
                  </div>
  
                <button id="toggleOpen" className='lg:hidden'>
                  <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

      </header>
    );
    
}

