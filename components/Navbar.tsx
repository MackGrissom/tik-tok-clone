import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
    return (
        <div>
            <Link href='#'>
<div>
    <Image 
    src='#'
    className='cursor-pointer'
    
    />
</div>
            </Link>

        </div>





    )
}

export default Navbar