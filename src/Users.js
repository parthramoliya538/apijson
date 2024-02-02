import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './Header';

function Users() {

    let [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
            <Header />
            <table>
                <tr className='text-center'>
                    <th className='bor'>ID</th>
                    <th className='bor'>NAME</th>
                    <th className='bor'>USER NAME</th>
                    <th className='bor'>EMAIL</th>
                    <th className='bor'>
                        <table>
                            <tr>
                                <th className='bor'>STREET</th>
                                <th className='bor'>SUITE</th>
                                <th className='bor'>CITY</th>
                                <th className='bor'>ZIP CODE</th>
                                <th className='bor'>
                                    <table>
                                        <tr>
                                            <th className='bor'>LATITUDE</th>
                                            <th className='bor'>LONGITUDE</th>
                                        </tr>
                                    </table>
                                </th>
                            </tr>
                        </table>
                    </th>
                    <th className='bor'>PHONE</th>
                    <th className='bor'>WEBSITE</th>
                    <th className='bor'>
                        <table>
                            <tr>
                                <th className='bor'>NAME</th>
                                <th className='bor'>CATCHPHARES</th>
                                <th className='bor'>BS</th>
                            </tr>
                        </table>
                    </th>
                </tr>
                {
                    data.map((ele, ind) => {
                        return (
                            <tr className='text-center'>
                                <td className='bor'>{ele.id}</td>
                                <td className='bor'>{ele.name}</td>
                                <td className='bor'>{ele.username}</td>
                                <td className='bor'>{ele.email}</td>

                                <td className='bor'>
                                    <tr className='text-center'>
                                        <td className='bor'>{ele.address.street}</td>
                                        <td className='bor'>{ele.address.suite}</td>
                                        <td className='bor'>{ele.address.city}</td>
                                        <td className='bor'>{ele.address.zipcode}</td>
                                        <td className='bor'>
                                            <tr className='text-center'>
                                                <td className='bor'>{ele.address.geo.lat}</td>
                                                <td className='bor'>{ele.address.geo.lng}</td>
                                            </tr>
                                        </td>
                                    </tr>
                                </td>
                                <td className='bor'>{ele.phone}</td>
                                        <td className='bor'>{ele.website}</td>
                                <td className='bor'>
                                    <tr>
                                        <td className='bor'>{ele.company.name}</td>
                                        <td className='bor'>{ele.company.catchPhrase}</td>
                                        <td className='bor'>{ele.company.bs}</td>
                                    </tr>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}
export default Users;