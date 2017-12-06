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
          weather:-1,
          activity:-1,
          region:-1
        }
        this.updateWeather=this.updateWeather.bind(this)
        this.updateActivity=this.updateActivity.bind(this)
        this.updateRegion=this.updateRegion.bind(this)
    }

    updateWeather(newWeather){
      this.setState({weather:newWeather})
    }
    updateActivity(newActivity){
      this.setState({activity:newActivity})
    }
    updateRegion(newRegion){
      this.setState({region:newRegion})
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route path="/map-view" component={MapView} />
                        <Route path="/signup" render={(props) => (
                          <SignupView {...props} weatherState={this.state.weather} activityState={this.state.activity} regionState={this.state.region} updateWeather={this.updateWeather} updateActivity={this.updateActivity} updateRegion={this.updateRegion}/>
                        )}/>
                        <Route path="/interests" render={(props) => (
                          <Interests {...props} weatherState={this.state.weather} activityState={this.state.activity} regionState={this.state.region} updateWeather={this.updateWeather} updateActivity={this.updateActivity} updateRegion={this.updateRegion}/>
                        )}/>
                        <Route path="/preferences" component={PreferencesView}/>
                        <Route path="/feeling-sponataneous" render={(props) => (
                          <GlobeView {...props}weatherState={this.state.weather} activityState={this.state.activity} regionState={this.state.region} updateWeather={this.updateWeather} updateActivity={this.updateActivity} updateRegion={this.updateRegion}/>
                        )}/>
                        <Route path="/" component={LandingView}/>  {/*This would be landing page*/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));
