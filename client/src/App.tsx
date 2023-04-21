import React, { useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/About/AboutMe';
import './App.scss';
import Tiles from './components/Tiles/Tiles';
// import config from '../../config/config';

const App = () => {

    const send = async () => {
        
        // let url = `${config.apiUrl}/api/greeting`;
        let headers = new Headers()
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');

        const formData = new FormData()
        formData.append('name', 'Jill');
        formData.append('email', 'someone@someone.com');
        formData.append('subject', 'Hey Jill');
        formData.append('message', 'its an email');

        // console.log('url', url);
        await fetch(`http://localhost:8080/api/greeting?name=${encodeURIComponent('Jill')}`)
        .then(response => response.json())
        .then(state => {
            console.log('state', state);
        });
    }

    useEffect(() => {
        send();
    }, [])


    return (
        <>
            <Navigation />
            <AboutMe />
            <Tiles />
        </>
    )
}

export default App;