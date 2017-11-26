import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import MapView from './components/map_view/map_view.js'
import Interests from './components/interests/interests.js'

class App extends React.Component {
    
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/map-view" component={MapView} />
                        <Route path="/signup" component={null}/>
                        <Route path="/interests" component={Interests}/>
                        <Route path="/preferences" component={null}/>
                        <Route path="/feeling-sponataneous" component={null}/>
                        <Route path="/" component={null}/>  {/*This would be landing page*/}
                    </Switch>
                </BrowserRouter>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
