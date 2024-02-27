import { useRef, useState } from 'react';
import './App.css';
import Header from './common/Header.js';
import Footer from './common/Footer.js';
import Main from './page/Main.js';

function App() {
    

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
