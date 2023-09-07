import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
    return (
        <>
            <header><h1><a href="http://">Cinnamon</a></h1></header>
            <Card title={"2242"} desc={"Kocher"}/>
            <Card title={"le leadership"} desc={"battlefield"}/>
            <Card title={"C++ tutourial"} desc={"made by testo numeor uno quentin pozner"}/>
        </>
    )
}

function Card({title, desc}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{desc}</p>
        </>
    )
}


