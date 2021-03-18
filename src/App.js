import React from 'react';
import ToDo from './todoformality/ToDo'; /*imports the ToDo js*/
import './mystyle.css'; /*imports the main css*/

export default function App() {
  return (
    <div id="app">
      <ToDo name="ToDo" />
    </div>
  );
}
