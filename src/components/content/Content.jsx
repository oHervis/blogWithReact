import React, {Component} from 'react'
import Principal from './Principal'
import ArticleHome from './ArticleHome'
import {requestAllPosts} from '../../controller/service'
export default class Content extends Component{

    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        
        this.getContent()
       
    }

    getContent(){   
        
        let content = requestAllPosts()
        content.then(item=>{
            this.setState({
                ...this.state,
                list: item.reverse(),
            
            })

        })
        
    }


    render(){
        return(
            <div>
                <Principal  principal={this.state.list[0]} />
                <ArticleHome    content={this.state.list} />
                    
                
                   
            </div>
        )
    }
}