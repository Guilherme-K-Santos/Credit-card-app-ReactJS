import '../styles/App.scss';
import '../styles/Mobile-design.scss'
import Form from './Form';
import Images from './Card-images';
import React, { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
    <Images 
      name={formData.holdername}
      number={formData.cardnumber}
      date={formData.date}
      cvc={formData.cvc}
    />
    <Form onFormSubmit={handleFormSubmit}/>
  </div>
  );
}

export default App;
