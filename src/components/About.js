import React, { useContext } from 'react'
import { TestContext } from '../context/PracticeContext'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const { value, setValue } = useContext(TestContext);
    const router = useNavigate();
    return (
        <div>
            <button onClick={() => setValue((prev) => prev + 1)} className='bg-blue-600'>increment</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div onClick={() => router(`/about/${value}`)}>{value}</div>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setValue((prev) => prev - 1)} className='bg-blue-600'>decrement</button>
        </div>
    )
}

export default About