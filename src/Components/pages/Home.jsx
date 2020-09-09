import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: null
    };
  }
  componentDidMount() {
    api.getStarships().then(starships => {
      this.setState({
        starships: starships
      });
    });
  }
  render() {
    return (
      <div className="Home">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Crew</th>
              <th scope="col">Length</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {this.state.starships ? (
              this.state.starships.map((starship, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{starship.name}</td>
                  <td>{starship.crew}</td>
                  <td>{starship.length}</td>
                  <td>
                    <Link className="btn btn-primary" to={"/" + starship.name}>
                      Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Loading....</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
