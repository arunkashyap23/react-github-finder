import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { PropTypes } from 'prop-types'

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content text-white'>
        <div className='container mx-auto'>
            <div className='px-2 mx-2'>
                
                <Link to='/' className='text-lg font-bold align-middle flex'>
                <FaGithub className='inline pr-2 text-3xl' />
                    {title}
                </Link>
            </div>

            <div className='flex-1 px-2 mx-2'>
                <div className="flex justify-end">
                    <Link to='/' className='btn btn-ghost rounded-btn btn-sm'>Home</Link>
                    <Link to='/about' className='btn btn-ghost rounded-btn btn-sm'>About</Link>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.protoTypes = {
    title : PropTypes.string
}

export default Navbar
