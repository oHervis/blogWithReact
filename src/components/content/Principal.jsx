import React from 'react'
import { Link } from 'react-router-dom'
export default props => {

	const renderPost = () =>{
		let post = props.principal || []
		if (post.fields) {
			return(
					<section id="one">
						<header className="major">
							<h2>{post.fields.title} </h2>
							<br /> <p>{post.fields.description}</p>
						</header>
						<p>{post.fields.body.substring(0, 350)}</p>
						<ul className="actions">
							<Link className="button" to={{ pathname: `/reader/${post.fields.slug}`, hash:post.sys.id }}>Ler Post Completo</Link>
						</ul>					
					</section>
			)
		}
	}
return(
		<div>
		{renderPost()}
		</div>

	)
}