import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from './Chat';

function App() {
  return (
    <div className="app">
     
     <h1>Whatsapp clone </h1>
     <div className="app__body">
   < Sidebar />
   <Chat/>
     {/* Chat */}


     </div>
    </div>
  );
}

export default App;
