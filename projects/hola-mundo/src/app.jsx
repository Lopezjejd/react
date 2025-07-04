import './app.css';
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
 export function App(){
    const formatUserName = (userName) => `@${userName}`;
    const [name, setName] = useState('lopezx99');
    const changeName = () => {
        setName('unanime');
    };
    return(
        <section className="App">
     <TwitterFollowCard formatUserName={formatUserName} userName={name} name="lopez" initialIsFollowing={true}  />
     <TwitterFollowCard formatUserName={formatUserName} userName="lopez" name="lopezx99"  />
     <button onClick={changeName}  >cambiar nombre</button>
        </section>
    )
};