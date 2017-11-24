import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/images/avatar.jpg'
import Footer from './Footer'
export default props => (
    <div id="header">
    <header >
        <div className="inner">
            <a  className="image avatar"><img src={Avatar} alt="" /></a>
            <h1><strong>Alexandro Hervis</strong>
            {/* <hr className="lineHeader"/> */}
                    , dev Front-End, apaixonado por inovação. <br/>
                   
                Mais sobre mim? <a >Ve ai ;)</a>.</h1>
        </div>

        <div className="actions">
                <div className="inner">
                    <ul className="icons">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>Sobre</Link></li>
                        <li><Link to='/posts'>Blog</Link></li>
                        <li><Link to='/contato'>Contato</Link></li>
                    </ul>                    
                </div>          
                
        </div>
    </header>
    <Footer />
    </div>


)