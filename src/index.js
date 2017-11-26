import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import MapView from './components/map_view/map_view'
import Menu from './components/common/menu'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <div>
                    <Menu />
                    <BrowserRouter>
                        <Switch>
                            <Route path="/map-view" component={MapView} />
                            <Route path="/signup" component={null}/>
                            <Route path="/interests" component={null}/>
                            <Route path="/preferences" component={null}/>
                            <Route path="/feeling-sponataneous" component={null}/>
                            <Route path="/" component={null}/>  {/*This would be landing page*/}
                        </Switch>
                    </BrowserRouter>
                </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));