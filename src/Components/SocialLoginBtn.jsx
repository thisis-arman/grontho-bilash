import React from 'react';
import { FaGoogle ,FaGithub} from "react-icons/fa";


const SocialLoginBtn = () => {
    return (
        <div>
            <div>
                <button className='flex btn  btn-primary text-white my-4 w-full'><FaGoogle className='mx-6 h-8 w-6  text-blue-200'/> <span>Sign in with Google</span></button>
                
            </div>
            <div>
                <button className='flex btn w-full'><FaGithub className='mx-6 h-8 w-6  text-blue-400'/> Sign in with GitHub</button>
                
            </div>
        </div>
    );
};

export default SocialLoginBtn;