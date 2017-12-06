import React from 'react'
import {Component} from 'react'
import Swipe from 'react-swipe-component'
import Menu from '../common/menu'
import TravelCard from './travel_card'
import CityData from './city_data.json';
const globeImg = require('./globe.jpg')
const json = {
  "city_list" : [
    {
      "city": "Miami",
      "state": "Florida",
      "warm": true,
      "active": true,
      "urban": true,
      "official_description": "Miami is an international city at Florida's southeastern tip. Its Cuban influence is reflected in the cafes and cigar shops that line Calle Ocho in Little Havana. On barrier islands across the turquoise waters of Biscayne Bay is Miami Beach, home to South Beach. This glamorous neighborhood is famed for its colorful art deco buildings, white sand, surfside hotels and trendsetting nightclubs.",
      "custom_description" : "The international port city of Miami is located on the Atlantic coast of Florida and is one of the top tourist spots in the U.S. Miami offers various tourist stops ranging from beaches like Miami Beach and South Beach where tourist can enjoy the subtropical weather, to the Art Deco District and Little Havana and Calle Ocho where tourists can appreciate the city’s history and Cuban influenced culture.",
      
      "activities": ["Clubbing", "Skydiving", "Deep sea fishing", "Snorkeling", "Sailing"]
    },
    {
      "city": "Everglades",
      "state": "Florida",
      "warm": true,
      "active": true,
      "urban": false,
      "official_description": "Everglades National Park is a 1.5-million-acre wetlands preserve on the southern tip of the U.S. state of Florida. Often compared to a grassy, slow-moving river, the Everglades is made up of coastal mangroves, sawgrass marshes and pine flatwoods that are home to hundreds of animal species. Among the Everglades' abundant wildlife are the endangered leatherback turtle, Florida panther and West Indian manatee",
      "custom_description" : "Everglades National Park is a wetland in the southern tip of Florida with a subtropical landscape and abundance of wildlife. Taking airboat or tram tours through the wetlands to places such as Shark Valley provides tourists an opportunity to see the more natural and wild side of Florida.",
      
      "activities": ["Airboat tours", "Biking", "Hiking", "Camping", "Kayaking", "Fishing"]
    },
    {
      "city": "Maui",
      "state": "Hawaii",
      "warm": true,
      "active": false,
      "urban": false,
      "official_description": "Maui is an island in the Central Pacific, part of the Hawaiian archipelago. Sprawling Haleakala National Park encompasses the island’s highest peak, volcanic Haleakala, as well as the pools and waterfalls of Ohe’o Gulch, accessed via scenic, winding Hana Highway. The island's 30 miles of beaches include golden-crescent Kapalua, sheltered from strong currents by lava-rock promontories.",
      "custom_description" : "The Hawaiian island of Maui, with its sunny weather and its 30 miles of tropical beaches is an ideal relaxing vacation spot. The Haleakala National Park and Waimoku Falls also make Maui a prime destination for nature lovers.",
      
      "activities": ["Sightseeing national parks", "Surfing", "Polynesian Hula dancing", "Snorkeling", "Whale watching", "Golf"]
    },
    {
      "city": "Marrakesh",
      "state": "Morocco",
      "warm": true,
      "active": false,
      "urban": true,
      "official_description": "Marrakesh, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks (marketplaces) sell traditional textiles, pottery and jewelry. A symbol of the city, and visible for miles, is the Moorish minaret of 12th-century Koutoubia Mosque.",
      "custom_description" : "The fourth largest city in Morocco, the warm city of Marrakesh is one with a rich history and is a prominent cultural, religious, and trading centre in northern Africa. To fully experience and appreciate its culture, a trip to Marrakesh’s medina and perusal of the various marketplaces or souks are a must for any traveller who wants to make the most of their trip.",
      
      "activities": ["Sightseeing", "Shopping", "Tour museums", "Camel riding", "Quad biking", "Hot air balloon rides"]
    },
    {
      "city": "Zurich",
      "state": "Switzerland",
      "warm": false,
      "active": false,
      "urban": true,
      "official_description": "The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history. Waterfront promenades like the Limmatquai follow the river toward the 17th-century Rathaus (town hall).",
      "custom_description" : "As Switzerland’s capital, Zurich is one of the most prominent tourist stops in the country. Tourists can leisurely enjoy the cool temperatures of this livable city as they sail down the Limmat River or explore the rich history and culture that it boasts of by exploring its numerous museums and art galleries.",
      
      "activities": ["Sailing", "Tour art galleries", "Shopping", "Boat rides", "Tour museums", "Clubbing"]
    },
    {
      "city": "Denali",
      "state": "Alaska",
      "warm": false,
      "active": false,
      "urban": false,
      "official_description": "Denali National Park and Preserve encompasses 6 million acres of Alaska’s interior wilderness. Its centerpiece is 20,310-ft.-high Denali (fka Mount McKinley), North America’s tallest peak. With terrain of tundra, spruce forest and glaciers, the park is home to wildlife including grizzly bears, wolves, moose, caribou and Dall sheep. Popular activities in summer include biking, backpacking, hiking and mountaineering.",
      "custom_description" : "Found in the Alaskan interior and centering around the highest mountain in North America is the Denali National Park and Preserve. Containing both chilly tundra and forests and home to many wildlife, tourists are sure to appreciate the landscape while taking part in the various outdoor activities Denali has to offer.",
      
      "activities": ["Backpacking", "Hiking", "Mountaineering", "Bear watching", "Tundra expedition"]
    },
    {
      "city": "Chicago",
      "state": "Illinois",
      "warm": false,
      "active": true,
      "urban": true,
      "official_description": "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works.",
      "custom_description" : "Known as the ‘Windy City,’ Chicago is the top stop for tourists in Illinois. This bustling city on Lake Michigan is known for its iconic tourist attractions such as Cloud Gate and Navy Pier. Tourists can also take in the towering skyscrapers while taking a walk along the Magnificent Mile.",
      
      "activities": ["Tour museums", "Taste of Chicago", "Kayaking", "Rooftop bars", "Shopping"]
    },
    {
      "city": "Denver",
      "state": "Colorado",
      "warm": false,
      "active": true,
      "urban": false,
      "official_description": "Denver, the capital of Colorado, is an American metropolis dating to the Old West era. Larimer Square, the city’s oldest block, features landmark 19th-century buildings. Museums include the Denver Art Museum, an ultramodern complex known for its collection of indigenous works, and the mansion of famed Titanic survivor Molly Brown. Denver is also a jumping-off point for ski resorts in the nearby Rocky Mountains.",
      "custom_description" : "Denver, the capital of Colorado, is found just east of the Front Range of the Rocky Mountains, which makes it a prime location for people who are enthusiasts of winter outdoor sports and recreational activities. In addition to its numerous outdoor activities, Denver is home to the Red Rocks Amphitheatre making it a famous music scene.",
      
      "activities": ["Skiing", "Snowboarding", "Hiking", "White water rafting", "Mountain biking"]
    }

  ]
}
export default class GlobeView extends React.Component{

    constructor(props){
        super(props)
        this.swipeListener = this.swipeListener.bind(this)
        this.state = {
            warm : true,
            active : true,
            urban : true,
            city : "",
            state : "",
            custom_description : "",
            activities : "",
            reason : ""
        }
    }
    swipeListener() {
        var matchingPlaces = [];
        var reason = "";
        var characteristic = Math.floor(Math.random()*3);
        var i;
        for(i = 0; i < json["city_list"].length; i++) {
            var currentCity = json["city_list"][i];
            if(characteristic === 0) {
                if(this.state.warm === true)
                    reason = "This location was selected due to your preference for warm weather";
                if(this.state.warm === false)
                    reason = "This location was selected due to your preference for cold weather";
                if(this.state.warm === currentCity["warm"])
                    matchingPlaces.push(currentCity)
            }
            if(characteristic === 1) {
                if(this.state.active === true)
                    reason = "This location was selected due to your preference for active trips";
                if(this.state.active === false)
                    reason = "This location was selected due to your preference for leisurely trips";
                if(this.state.active === currentCity["active"])
                    matchingPlaces.push(currentCity)
            }
            if(characteristic === 2) {
                if(this.state.urban === true)
                    reason = "This location was selected due to your preference for urban environments";
                if(this.state.urban === false)
                    reason = "This location was selected due to your preference for rustic rural environments";
                if(this.state.urban === currentCity["urban"])
                    matchingPlaces.push(currentCity)
            }
        }
        var randomCityIndex = Math.floor(Math.random()*(matchingPlaces.length))
        var randomCity = matchingPlaces[randomCityIndex];
        console.log(randomCity)
        var activities = "Activities include ";
        for(i = 0; i < randomCity["activities"].length; i++) {
            activities += randomCity["activities"][i] + ", ";
        }
        activities = activities.substring(0, activities.length - 2);

        this.setState({
            city : randomCity["city"],
            state : randomCity["state"],
            custom_description : randomCity["custom_description"],
            activities : activities,
            reason : reason
        })

    }
    render() {
    	return(
            <div>
                <Menu />
                <div>
                    <Swipe
                        onSwipedLeft = {this.swipeListener}
                        onSwipedRight = {this.swipeListener}
                        mouseSwipe = {true}>
                        <img id="globe-img"src={globeImg} />
                    </Swipe>
                </div>
                <div>
                    <TravelCard 
                        city = {this.state.city}
                        state = {this.state.state}
                        custom_description = {this.state.custom_description}
                        activities = {this.state.activities}
                        reason = {this.state.reason}
                        > 
                    </TravelCard>
                </div>
            </div>
    	)
    }
}
