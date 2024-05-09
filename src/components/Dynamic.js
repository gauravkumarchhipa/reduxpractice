import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TestContext } from '../context/PracticeContext';
const Dynamic = () => {
    const { value } = useContext(TestContext);
    const { id } = useParams();
    return (
        <div>Dynamic {id}<br />
            value : {value}
        </div>
    )
}

export default Dynamic 