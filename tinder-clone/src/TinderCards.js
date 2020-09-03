import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {

    // Commenting hardcoded variables & arrays

    const [people, setPeople] = useState([        
        {
            name: 'Modi',
            url: 
                    "https://images.news18.com/ibnlive/uploads/2020/07/1595742622_modi.png",   		
            },
        {
            name: 'Trump',
            url: 
                    "https://newsinfo.inquirer.net/files/2020/08/AP20226667076368-scaled.jpg",
        },
        {
            name: 'Elizabeth',
            url: 
                    "https://images.news18.com/ibnlive/uploads/2019/04/QUEEN-ELIZABETH1.jpg",
        },        				
        {
            name: 'Putin',												
            url:
                    "https://www.abc.net.au/cm/rimage/12310228-16x9-xlarge.jpg?v=2",
        },
	]);
    
    // BAD way of initialization
    // const people =[];
    // people = people.push('Fazeel', 'Usmani');

    // GOOD way
    // Pushing in array --> React
    // setPeople([...people, 'Fazeel', 'Usmani']);

    // Piece of code which runs based on a condition
    // Connecting to a database
    useEffect(() => {
        // this is where the code runs...

        // Snapshot = taking picture of a DB
        database.collection('people').onSnapshot(snapshot => (
            // snapshot.docs = records in the DB
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        
        // effect
        return () => {
        	// cleanup
        }

        // this will run ONCE when the component loads, and never again
    }, []);


    return (
        <div>
            <h1>TinderCards</h1> 
            <div className="tinderCards__cardContainer">
				{people.map( (person) => (
                    <TinderCard
                            className="swipe"
                            // Allows REACT to efficiently re-render a LIST
                            // Makes your APP superfast
                            // Always do this in REACT (sometimes you might not see the benefit immediately)
                            // Will have a great impact when your app is huge
                            key={person.name}
                            preventSwipe={["up", "down"]}
                        >
                            <div 
                                style={{
                                    // backgroundImage: 'url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")',      
                                    // backgroundImage: 'url(./img/Fazeel.jpg)'      
                                    backgroundImage: `url(${person.url})`
                                    // backgroundImage: "url(" + "${person.url}" + ")"
                                }}																	
                                className="card"
                            >
                            <h2>{person.name}</h2>																																																											
                            </div>
                    </TinderCard>					
				))}
			</div>  
        </div>
    )}


export default TinderCards;