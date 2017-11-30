import React, {Component} from 'react'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import { requestAllPosts } from '../../controller/service'


export default class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        this.getPosts()
        this.renderRows = this.renderRows.bind(this);
    }

    getPosts(){
        let postList = requestAllPosts();
        postList.then(response => {
            this.setState({
                ...this.state,
                list :response
            })                      
            
        })
    }

    renderRows(){
        const list = this.state.list

        return list.map(item => (
            <article key={item.sys.id} className="12u$ 12u$(xsmall) work-item " >
                <Link to={{ pathname: `/reader/${item.fields.slug}`, hash: item.sys.id }}>
                   <h3>{item.fields.title}</h3>
                    <p>{item.fields.description}</p>
                    <small>{item.fields.body.substring(0,200)}</small>
                </Link>
            </article> 
    
        ))
    }

    render(){
        return(
            <div>
                <Header />
                <div id="main">
                    <section id="posts">
                    <div className="row">
                        {this.renderRows()}
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}



