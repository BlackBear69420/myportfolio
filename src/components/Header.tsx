import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

function Header() {
  return (
    <header className='top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4'>
        {/* <nav>
           <ul>
            <li>
                <Link href='/' aria-label='Home Page'>
                    Sumit Nayak
                </Link>
            </li>
            <li>
              <Link href='/About'>
                About
              </Link>  
            </li>
            <li>
              <Link href='/Projects'>
                Projects
              </Link>  
            </li>
            </ul> 
        </nav> */}
        <NavBar/>
    </header>
  )
}

export default Header