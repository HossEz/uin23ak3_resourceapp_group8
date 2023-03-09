import Header from './components/Header';
import './css/main.css';
import resources from './components/Resources';
import Resources from './components/Resources';

function App() {
    return (
    <div className="container">
        <Header/>
        <Resources resources={resources} /> 
    </div>
    )
}

export default App;
