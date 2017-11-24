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
                contentPost = getPostWithSlug('terceiro-post')
                contentPost.then(item => {
                    this.setState({ ...this.state, content: item.item.data.items[0]})
                    let idImage = this.state.content.fields.featuredImage.sys.id
                    this.getImage(idImage)
                    console.log(item.data.items[0])
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

    showMenu(){

    }


    render(){
        
        return(
            <div id="reader">
                <Header/>
                <div className="close"><i className="fa fa-times"></i></div>
                <div id='main'>
                <Article image={this.state.image} content={this.state.content}/>           

                </div>
            </div>
          
        )
    }

}

