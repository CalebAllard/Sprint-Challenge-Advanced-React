import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import PlayerList from './components/PlayerList';
import Players from './components/Player';

test('it renders playerlist',() => {
  render(<PlayerList data={[[{name:'my name',id:0 },{name:'new name',id:1}]]}/>)

});

test('player renders',() => {
  render(<Players data={[[{name:'my name',id:0 },{name:'new name',id:1}]]}/>)
});

it('renders without crashing', () => {
 
  render(<App />);
  
});
