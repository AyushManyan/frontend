import React from 'react'
import { Link } from 'react-router-dom';
export default function ProfileCard() {
    return (

        <div className='p-2'>
            <div className={`shadow-lg p-4  rounded-lg`}>
                <div className='flex justify-center'>
                    <img src="./images/Avatar1.jpg" alt='profile' className='rounded-full cursor-pointer border-4 border-blue-500 shadow-lg hover:border-2' width='100' height='100' />
                </div>
                <div className='text-center'>
                    <h1 className='text-xl font-bold'>You Haven't Logged In</h1>

                    <div className='flex flex-col gap-2 justify-center mt-4'>

                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Login</button>

                    </div>
                </div>
            </div>
            <div>
         <div className={`shadow-lg p-4  rounded-lg mt-4`}>
          <ul className='space-y-3'>
            <li className='flex items-center space-x-2 text-lg hover:text-blue-500'>
              {/* <HomeIcon className='h-8 w-8' /> */}
              <Link to='/'>Home</Link>
            </li>
            <li className='flex items-center space-x-2  text-lg hover:text-blue-500'>
              {/* <ViewColumnsIcon className='h-8 w-8' /> */}
              <Link to='/yourconfession'>Confession</Link>
            </li>
            <li className='flex items-center space-x-2  text-lg hover:text-blue-500'>
              {/* <PlusCircleIcon className='h-8 w-8' /> */}
              <Link to='/addconfession'>Add</Link>
            </li>
          </ul>

        </div>
    </div>
            
        </div>
    )

}
