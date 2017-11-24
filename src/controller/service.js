import axios from 'axios'
const URL = 'https://cdn.contentful.com/'
const accessToken = 'f67408173c39b1e03b39a934a88a6f2192747861dd446b666d34a34b6295b7be'
const contentType = 'content_type=2wKn6yEnZewu2SCCkus4as'
export function requestAllPosts() {
    
    const request = 'skip=0&limit=6&order=sys.createdAt'
    
    return axios.get(`${URL}spaces/vclm2qrxb2pi/entries/?access_token=${accessToken}&${contentType}&${request}`).then(resp => {
        
        let content = resp.data.items
        let includes = resp.data.includes.Asset     
        return getAllImage(content,includes)                
         
    })    
    function getAllImage(content, includes){       

        for(let i in content){
            let idContent = content[i].fields.featuredImage.sys.id
            for(let ItemInclude in includes){
                if (includes[ItemInclude].sys.id === idContent) {
                    content[i].image = includes[ItemInclude].fields.file.url
                }                
            }            
        }
        return content        
    }    
}


export function getPostWithId(id){
    return axios.get(`${URL}spaces/vclm2qrxb2pi/entries/${id}?access_token=${accessToken}`)
}

export function getPostWithSlug(slug) {
    return axios.get(`${URL}spaces/vclm2qrxb2pi/entries/?access_token=${accessToken}&${contentType}&fields.slug=${slug}`)
    
}

export function getImagePost(id){
    return axios.get(`${URL}spaces/vclm2qrxb2pi/assets/${id}?access_token=${accessToken}`)
}