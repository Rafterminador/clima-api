import React from 'react'
import { useParams } from 'react-router-dom'
import getData from '../utils/getData'
const Content = () => {
    const params = useParams()
    let data = getData(params.id)
    console.log(data)
    return (
        <div>Content{params.id}</div>
    )
}

export default Content