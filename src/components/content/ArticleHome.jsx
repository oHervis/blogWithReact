import React from 'react'
import { Link } from 'react-router-dom'
export default props => {
    
    const renderArticle = () =>{
        
        const list = props.content || []

        return list.map(item=>(
            <article key={item.sys.id} className="6u 12u$(xsmall) work-item" >
                <Link  to={{ pathname: `/reader/${item.fields.slug}`, hash: item.sys.id }}>                    
                        <div className="image fit thumb">
                            <img src={item.image} alt={`Imagem do post ${item.fields.title}`} />
                        </div>
                        <h3>{item.fields.title}</h3>
                        <p>{item.fields.description}</p>
                </Link>
            </article>                    

        ))
    }

        return(
            <div>
                <section id="two">
                    <h2>Ultimas publicações</h2>
                    <div className="row">
                            {renderArticle()}     
                    </div>
                    
                </section>
            </div>
        )
}