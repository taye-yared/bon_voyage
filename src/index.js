import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Route path="/" component={null} />
            </div>
        )
    }

}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));