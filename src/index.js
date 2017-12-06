import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import MapView from './components/map_view/map_view.js'
import Interests from './components/interests/interests.js'
import PreferencesView from './components/preferences_view/preferences_view.js'
import WishListTable from './components/preferences_view/table.js';
import Menu from './components/common/menu'
import LandingView from './components/landing_view/landing_view'
import SignupView from './components/signup_view/signup_view'
import GlobeView from './components/globe_view/globe_view'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          weather:0
        }
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route path="/map-view" component={MapView} />
                        <Route path="/signup" render={(props) => (
                          <SignupView weatherState={this.state.weather}/>
                        )}/>
                        <Route path="/interests" component={Interests}/>
                        <Route path="/preferences" component={PreferencesView}/>
                        <Route path="/feeling-sponataneous" component={GlobeView}/>
                        <Route path="/" component={LandingView}/>  {/*This would be landing page*/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
