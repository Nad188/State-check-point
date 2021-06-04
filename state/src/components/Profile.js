import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 1,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <Card style={{ width: "55rem" }}>
          <Card.Img
            variant="top"
            src={this.props.info.image}
            style={{ width: "100%" }}
          />
          <Card.Body>
            <Card.Title>{this.props.info.fullName}</Card.Title>
            <Card.Title>{this.props.info.profession}</Card.Title>
            <Card.Text>{this.props.info.bio}</Card.Text>
            <div>{this.state.seconds}</div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
