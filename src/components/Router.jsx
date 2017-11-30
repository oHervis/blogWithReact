import React from 'react'
import Home from './Home'
import About from './content/About'
import Contato from './content/Contato'
import Post from './content/PostList'
import Reader from './content/Reader'
import Page404 from './content/404'
import { Switch, Route } from 'react-router-dom'
export default props =>{

    
    
    
    return(<Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contato' component={Contato} />       
        <Route exact path='/posts' component={Post} />     
        <Route path='/reader' render={(props) => (
            <Reader teste={props} id={props.location.hash}/>
        )} />  
        <Route component={Page404} />
        
        
    </Switch>
    )
}