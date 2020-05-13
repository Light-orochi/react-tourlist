import React, { Component } from 'react'
import tourData from '../tourData';
import Tour from './Tour';


export default class Tourlist extends Component {
    constructor(props){
        super(props);
            this.state={
                data:tourData
            };
        
    }
   removeTour= id =>{
        const sorteData = this.state.data.filter((tour)=> tour.id !== id);
        this.setState({
            data:sorteData
        });
};
render() { 
       
            return (
                
            <div>
            { 
                this.state.data.map((tour)=>
                <Tour tour={tour} key={tour.id}  removeTour={this.removeTour} />
                )
            }
            </div>
        );
    }
}
