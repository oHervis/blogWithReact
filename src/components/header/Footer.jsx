import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li>
                    <a target="blank" href="https://www.linkedin.com/in/alexandro-willian-644300121" className="icon fa-linkedin">
                        <span className="label">Linkedin</span>
                    </a>
                </li>
                <li>
                    <a target="blank" href="https://github.com/AlexandroWillianHervis/" className="icon fa-github">
                        <span className="label">Github</span>
                    </a>
                </li>
                <li>
                    <a target="blank" href="https://www.facebook.com/alexandro.williandrummer.3" className="icon fa-facebook">
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <Link to='contato' className="icon fa-envelope-o">                        
                            <span className="label">Email</span>                        
                    </Link>                    
                </li>
            </ul>
            <ul className="copyright">
                <li>&copy; Feito com muito carinho e React :)</li>
                <li>Code la no :
					<a target="blank" href="https://github.com/AlexandroWillianHervis/blogWithReact">git</a>
                </li>
            </ul>
        </div>
    </footer>


)