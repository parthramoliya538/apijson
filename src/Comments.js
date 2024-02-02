import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './Header';

function Comments() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
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
                <th className='bor'>POST ID</th>
                <th className='bor'>ID</th>
                <th className='bor'>NAME</th>
                <th className='bor'>EMAIL</th>
                <th className='bor'>BODY</th>
            </tr>
            {
                data.map((ele,ind)=>{
                    return(
                        <tr className='text-center'>
                            <td className='bor'>{ele.postId}</td>
                            <td className='bor'>{ele.id}</td>
                            <td className='bor'>{ele.name}</td>
                            <td className='bor'>{ele.email}</td>
                            <td className='bor'>{ele.body}</td>
                        </tr>
                    )
                })
            }
          </table>
        </>
    )
}
export default Comments;