import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Create } from './components/Createmodal';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((data) => {
      return [...data, note]
    });
  };
  const onDelete = (id) => {
    setAddItem((oldData) => {
      oldData.filter((currdata, indx) => {
        return indx !== id;
      })
    })
  }
  return (
    <>
      <NavBar />
      <Create passNote={addNote} />
      {addItem.map((val, index) => {
        return <Card
          key={index}
          id={index}
          description={val.description}
          status={val.status}
          date={val.date}
          deleteItem={onDelete}
        />
      })}
    </>
  );
}

export default App;
