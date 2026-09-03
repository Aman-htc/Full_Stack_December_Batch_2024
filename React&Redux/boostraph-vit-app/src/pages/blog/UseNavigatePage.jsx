import React from 'react'
import { Button } from 'react-bootstrap'
// import PropTypes from 'prop-types'
import {  useLocation, useNavigate, useParams } from 'react-router-dom'

function UseNavigatePage() {
    const Navigate = useNavigate()
    const parms = useParams()
    const location = useLocation()
    
    return (
        <div>
            <Button onClick={() => Navigate(-1)}>Back</Button>
            <pre>{JSON.stringify(parms, null, 2)}</pre>
            <pre>{JSON.stringify(location, null, 2)}</pre>
            path:{location.pathname}



        </div>
    )
}


export default UseNavigatePage

