import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    background:#f7f7f7;
    border:1px solid black;
    color:#373737;
    margin: 1.5rem;
    padding:1rem;
    box-shadow: 0 .5rem 1rem rgba(000,000,000,0.3);
    
`;


const Player = (props) => {
    

    return(
        <>
        {
            props.data.map((item) => 
               item.map(item => 
                <Card className='playerCard' key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.country}</p>
                    <p>{`Google Searches: ${item.searches}`}</p>
               </Card>
                )
               
            
            )
            
        }
        </>
    );

}
export default Player;