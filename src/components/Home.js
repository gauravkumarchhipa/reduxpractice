import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAmount, subtractAmount, increment, decrement } from '../redux/reducer/CounterSlice';
import { fetchData, getApiUpdate } from "../redux/reducer/fetchApiSlice";
import axios from 'axios';
const Home = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const { data } = useSelector((state) => state.fetchApi);
    useEffect(() => {
        dispatch(fetchData());
        apiFetchHandler();
        apiAxiosHandler();
    }, [dispatch])

    const updateDataValue = (newValue) => {
        dispatch(getApiUpdate(newValue));
    };

    const apiFetchHandler = async () => {
        // const token = "sdfokskdfklsnkldfmn"
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            //     method: 'POST',
            //     header: {
            //         'Content-Type': "application/json",
            //         Authorization: `Bearer ${token}`
            //     },
            //     body: JSON.stringify({
            //         name: "Gaurav"
            //     })
            // }
            // );
            const resData = await response.json();
            console.log(resData)
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    const apiAxiosHandler = async () => {
        try {
            // const token = 'your_token_here'; // Replace 'your_token_here' with your actual token
            // const headers = {
            //     Authorization: `Bearer ${token}`,
            //     'Content-Type': 'application/json',
            // };
            // const data = { title: 'foo', body: 'bar', userId: 1 };

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            // const response = await axios.post("https://jsonplaceholder.typicode.com/posts/1", data, { headers });
            console.log(response?.data, "Äxios");
        } catch (error) {
            console.log(error);
        } finally {

        }
    }
    return (
        <div>
            {data?.title}
            <br />
            {counter?.value}
            <button onClick={() => updateDataValue("My name is gaurav")} className='bg-blue-600 p-3 m-3'>change data</button>
            <div>
                <button onClick={() => dispatch(increment())} className='bg-blue-600 p-3 m-3'>Increment </button>
            </div>
            <div>
                <button className='bg-blue-600 p-3 m-3' onClick={() => dispatch(decrement())}>Decrement </button>
            </div>
            <div>
                <button className='bg-blue-600 p-3 m-3' onClick={() => dispatch(addAmount(5))}>Increment 5</button>
            </div>
            <div>
                <button className='bg-blue-600 p-3 m-3' onClick={() => dispatch(subtractAmount(2))}>Decrement 2</button>
            </div>
        </div>
    )
}

export default Home