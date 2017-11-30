import React, {Component} from 'react'
import { getPostWithId, getImagePost, getPostWithSlug } from '../../controller/service'
import Article from './Article'
import Header from '../header/Header'
export default class Reader extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id.substring(1), 
            content: '', 
            image:'', 
            error:''
        }
        this.getContentPost()
       
    }

    getContentPost(){
        let contentPost = ''

        try {
            if (this.state.id) {
                
                contentPost = getPostWithId(this.state.id)
                
                contentPost.then(item => {
                    
                    this.setState({ ...this.state, content: item.data })
                    
                })  


            } else{
                let slug = window.location.pathname.substring(8)
                contentPost = getPostWithSlug(slug)
                contentPost.then(item => {
                    if (item.data.items.length > 0) {
                        this.setState({ ...this.state, content: item.data.items[0]})
                        let idImage = this.state.content.fields.featuredImage.sys.id
                        this.getImage(idImage)                        
                    } else{
                        this.setState({ ...this.state, error:'Não encontramos essa página :( '})
                    }
                    
                }) 
            }
        } catch(err) {
            console.log(err)
        }
        
        
    }

    getImage(id){
        let image = getImagePost(id)
        image.then(item=>{
            this.setState({
                ...this.state,
                image:item.data.fields.file.url
            })
        })
    }
    
    render(){
        
        return(
            <div id="reader">
                <Header/>
                <div className="close"><i className="fa fa-times"></i></div>
                <div id='main'>
                <Article image={this.state.image} content={this.state.content} error={this.state.error}/>           

                </div>
            </div>
          
        )
    }

}

