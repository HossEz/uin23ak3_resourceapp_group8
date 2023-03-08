
import Header from './components/Header';
import './css/main.css';
import resources from './components/Resources';
import Penger from './components/Resources';

function App() {
    return (
    <div className="container">
        <Header/>
        <Penger resources={resources} /> 
    </div>
    )
}

export default App;
