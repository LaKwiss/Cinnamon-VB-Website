import './App.css'

export default function App() {
    return (
        <>
            <header><h1><a href="https://">Cinnamon</a></h1></header>
            <Card title={"2242"} desc={"Kocher"}/>
            <Card title={"le leadership"} desc={"battlefield"}/>
            <Card title={"C++ tutourial"} desc={"made by testo numeor uno quentin pozner"}/>
        </>
    )
}

function Card({title, desc}) {
    return (
        <div style={CardStyle}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

const CardStyle = {
    background: '#007AFF',
    borderRadius: '55px',
    padding: '30px',
    marginTop: '30px'
}