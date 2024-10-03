import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={logo} alt=''/>
                <p>We are a family oriented meditarian restaurant, focused on traditional recipes served with a modern twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address <br/> 123 Towncity, USA</li>
                    <li>Phone <br/> +91 9605788637</li>
                    <li>EMail <br/> midhunmahesh2001@gmail.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>twiter</a></li>
                    <li><a href='/'>facebook</a></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer