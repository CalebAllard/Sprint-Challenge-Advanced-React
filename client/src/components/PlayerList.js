import React from 'react';
import Player from './Player';
import styled from 'styled-components';
import {useHighContrast} from '../hooks/useHighContrast';

const PlayerLists = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;


`;

const PlayerList = (props) => {
    const [contrast, setContrast] = useHighContrast(false);
    const handleClick = (e) => {
        e.preventDefault();
        setContrast(!contrast);
    }
    
    return(
        <div>        
    <h3>Players With Google Searches</h3>
    <button onClick={handleClick}>high contrast Toggle</button>
    <PlayerLists>
        
    <Player data={props.data} />
    </PlayerLists>
        </div>
    
    );


}

export default PlayerList;