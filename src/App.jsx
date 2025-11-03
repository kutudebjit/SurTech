import React from 'react'
import About from './components/About';
import RegistrationFeesTable from './components/RegistrationFeesTable';
import RegistrationForm from './components/RegistrationForm';
import ConferenceTracks from './components/ConferenceTracks';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <div>
      <About/>
      <RegistrationFeesTable/>
      <RegistrationForm/>
      <ConferenceTracks/>
      <ContactInfo/>
    </div>
  )
}

export default App;
