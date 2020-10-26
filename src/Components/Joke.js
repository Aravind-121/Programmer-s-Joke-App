import React,{useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../Styles/Joke.css';
import {ThemeContext} from '../Contexts/ThemeContext';

function Joke(props){
    let {items,handleVote} = props;
    console.log(items);

    const { isDarkMode } = useContext(ThemeContext);
    const classname = {
        'jokeContainer': isDarkMode ? "jokes-container-dark" : "jokes-container-light",
        'text': isDarkMode ? "text-dark" : "text-light",
        'votesContainer': isDarkMode ? "votes-container-dark" : "votes-container-light"
    };

    const getJokes = ()=>{
        let jokes = [];
        for(let i of items){
            jokes.push(
                <div key={uuidv4()} className={classname['jokeContainer']}>
                    <div className={classname['votesContainer']}>
                        <i className='fas fa-arrow-up' onClick={()=>handleVote(i.id,1)} />
                        <span>{i.votes}</span>
                        <i className='fas fa-arrow-down' onClick={()=>handleVote(i.id,-1)} />
                    </div>
                    <p className={classname['text']} ><b>{`${i.setup}, ${i.punchline}`}</b></p>
                </div>
            )
        }
        return jokes;
    }
    return(
        <div>
            {getJokes()}
        </div>
    )
}
export default Joke;