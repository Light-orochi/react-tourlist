import React, { Component } from 'react'
import  './tour.scss';



export default class Tour extends Component {
    state = {
        showInfo: false
};
    handleInfo = () => {
        this.setState({
        showInfo: !this.state.showInfo
        });
    };
    render() { 

        
        const {id ,city ,img ,name,info}=this.props.tour;
        const {removeTour} = this.props;
        return (
            <div>
            <div className="row mt-4 bg-light">
            <div className="col-md-4 p-1">
            <img className="img-fluid data-img" src={img} alt="" />
            <span className="close-button" onClick={ () => removeTour(id)}>
                <i className="fas fa-window-close"></i>
            </span>
            </div> 
            <div className="col-md-8">
            <div ><h1> {city}</h1></div>
            <div><h5>{name}</h5> </div>
            <h5>
            info{" "}
            <span onClick={this.handleInfo}>
            <i className="fas fa-caret-square-down text-success" />
            </span>
        </h5>
        {this.state.showInfo && <p>{info}</p>}
            </div>
            </div><hr/></div>
        )
    }
}
