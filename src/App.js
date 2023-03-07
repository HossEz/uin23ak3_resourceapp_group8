import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import ResourceList from './components/ResourceList';
import './css/main.css';
import resources from './components/Resources';

function App() {
    return (
    <div className="container">
        <Header/>
        <ResourceList resources={resources} />
    </div>
    )
}

export default App;
