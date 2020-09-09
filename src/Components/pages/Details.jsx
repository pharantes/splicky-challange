import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starship: null
    };
  }
  componentDidMount() {
    api.getOneStarship(this.props.match.params.id).then(starship => {
      this.setState({
        starship: starship[0]
      });
    });
  }
  handleClick() {
    this.props.history.push("/");
  }
  render() {
    return this.state.starship ? (
      <div className="Details">
        <p>
          <strong>Name:</strong> {this.state.starship.name}
        </p>
        <p>
          <strong>Crew:</strong> {this.state.starship.crew}
        </p>
        <p>
          <strong>Length:</strong> {this.state.starship.length}
        </p>
        <p>
          {" "}
          <strong>Manufacturer:</strong> {this.state.starship.manufacturer}
        </p>
        <p>
          {" "}
          <strong>Starship class:</strong> {this.state.starship.starship_class}
        </p>
        <p>
          <strong>Max atmosphering speed:</strong>{" "}
          {this.state.starship.max_atmosphering_speed}
        </p>
        <p>
          {" "}
          <strong>Passengers:</strong> {this.state.starship.passengers}
        </p>
        <button onClick={() => this.handleClick()}>Home</button>
      </div>
    ) : (
      <div>
        <strong>Loading...</strong>
      </div>
    );
  }
}
export default withRouter(Home);
