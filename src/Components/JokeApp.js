import React,{useEffect, useState,useContext} from 'react';
import axios from "axios";
import Navbar from './Navbar';
import Joke from './Joke';
import '../Styles/JokeApp.css';
import {ThemeContext} from '../Contexts/ThemeContext';

function JokeApp(){
    const { isDarkMode } = useContext(ThemeContext);
    let initVal = {
        jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
        unique: new Set(),
    }
    let [state,setState] = useState(initVal);
    
    // Api request
    useEffect(()=>{
        let {jokes} = state; 
        if (!jokes) getMore();
    });
    async function getMore(){
        try{
            let {jokes,unique} = state;
            let joke = [];
            let res = await axios.get("https://official-joke-api.appspot.com/jokes/programming/ten")
            res.data.forEach(i =>{
                if(!unique.has(i.id)){
                    joke.push({...i,votes:0});
                    unique.add(i.id);
                }
            })
            jokes = [...jokes,...joke];
            setState({jokes,unique:unique});
            window.localStorage.setItem("jokes", JSON.stringify(jokes))
        }catch (e) {
            alert(e);
          }
    }
    //handleVote
    function handleVote(id,del){
        let {jokes} = state;
        jokes = jokes.map(i=>
            (i.id===id) ? {...i,votes:i.votes+del} : i 
        )
        setState({...state,jokes});
        window.localStorage.setItem("jokes", JSON.stringify(jokes))
    }

    let {jokes} = state;

    const classname = {
        'mainContainer': isDarkMode ? "main-container-dark" : "main-container-light",
        'btnStyle': isDarkMode ? "btn-style-dark" : "btn-style-light",
    };
    
    return(
        <div className={classname['mainContainer']}>
            <Navbar/>
            <button className={classname['btnStyle']} onClick={()=>getMore()}>Get More Jokes</button>
            <Joke items={jokes} handleVote={handleVote}/>
        </div>
    );
    
}

export default JokeApp;