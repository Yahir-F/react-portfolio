import React from 'react';
import Contacts from './components/contact';
import AboutMe from './components/aboutMe';
const currentLocation = window.location.pathname
const Location = () => {
   if (currentLocation === '/Contact') { return <Contacts id='Contacts' /> }
  else if (currentLocation === '/AboutMe') { return <AboutMe id='aboutMe' /> }
  else { return <AboutMe id='aboutMe' /> }
}
function App() {
const currentLocation = window.location.pathname
console.log("user currently at" + currentLocation)
return (

 <div className="main" class="d-flex justify-content-center">`{Location()}`
 </div>
);
}
export default App;