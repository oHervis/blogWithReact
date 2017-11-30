import React from 'react'
export default props => {

    if (props.show) {
        console.log(props)
        return props.children

    } else {

        return false

    }
}