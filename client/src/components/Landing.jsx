import React from 'react'
import {FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub} from 'react-icons/fa'
import './Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
        <div className='container'>
            <div className='content'>
                <div className='col-1'>
                    <h1> Title of Landing page</h1>
                    <h1><span className='primary-color'>Online Web application</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos magnam eos incidunt commodi quae non, ratione eveniet error quia.</p>
                
                    <div className='used-by'>
                        <p>USED BY</p>
                        <div className='icons'>
                            <span><FaDatabase /> Stack </span>
                            <span><FaAsterisk /> AI </span>
                            <span><FaAccusoft /> Accusoft </span>
                        </div>
                    </div>
                </div>
                {/* Right side of page */}
                <div className='col-2'>
                    <div className='form-layout'>
                        <div className='form-container'>
                            <p className='sign-in-txt'> Sign in with</p>
                            <div className='social-login'>
                                <span><FaFacebook size={20} /></span>
                                <span><FaTwitter size={20} /></span>
                                <span><FaGithub size={20} /></span>
                            </div>
                            <div className='divider'>
                                <p><span>Or</span></p>
                            </div>
                            <form action=''>
                                <input type='text' placeholder='Name' />
                                <input type='text' placeholder='Email' />
                                <input type='password' placeholder='Password' />
                                <button>Create Your Account</button>
                            </form>
                        </div>
                        <div className='form-footer'>
                            <p>
                                By signing up, you agree to our 
                                <span className='primary-color'> Terms, Data Policy</span>
                                and <span className='primary-color'> Cookies Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
