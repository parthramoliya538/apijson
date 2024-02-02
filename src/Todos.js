import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './Header';

function Todos() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

    }, [])


    return (
        <>
        <Header/>
          <table>
            <tr className='text-center'>
                <th className='bor'>USER ID</th>
                <th className='bor'>ID</th>
                <th className='bor'>TITLE</th>
                <th className='bor'>COMPLETED</th>
            </tr>
            {
                data.map((ele,ind)=>{
                    return(
                        <tr className='text-center'>
                            <td className='bor'>{ele.userId}</td>
                            <td className='bor'>{ele.id}</td>
                            <td className='bor'>{ele.title}</td>
                            <td className='bor'>{ele.completed ? "True" : "False"}</td>
                        </tr>
                    )
                })
            }
          </table>
        </>
    )
}
export default Todos;