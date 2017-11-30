import React from 'react'

export default props =>{
    console.log(props)
    if (props.content.fields) {       
        console.log(1)
        return (
            <article >
                <section>
                    <header>
                        <h1>{props.content.fields.title}</h1>
                        <h4>{props.content.fields.description}</h4>
                    </header>
                    
                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    <hr />
                    <h2>Heading Level 2</h2>
                    <h3>Heading Level 3</h3>
                    <h4>Heading Level 4</h4>
                    <h5>Heading Level 5</h5>
                    <h6>Heading Level 6</h6>
                    <hr />
                    <h5>Blockquote</h5>
                </section>
            </article>
        )    
    }else{
        return(
            <div>
                <h1>{props.error}</h1>
            </div>
        )
    }
    
}
