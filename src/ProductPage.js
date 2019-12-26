import React, { Component } from "react";
import { Collapse } from "react-collapse";

class InitiallyOpened extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpened: true };
  }

  render() {
    const { isOpened } = this.state;
    const height = 50;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input
              className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({ target: { checked } }) =>
                this.setState({ isOpened: checked })
              }
            />
          </label>
        </div>
        <Collapse isOpened={isOpened}>
          <div style={{ height }} className="blob">
            <h1>hi</h1>
          </div>
        </Collapse>
      </div>
    );
  }
}

class ProductPage extends Component {
  render() {
    const title = ( // () are optional
      <div>
        <h1>Project</h1>
      </div>
    );
    const subtitle = (
      <div>
        <h5>Team Name</h5>
      </div>
    );

    return (
      <>
        <div className="container">{title}</div>
        <div>{subtitle}</div>
        <section className="section">
          <h2>Initially opened</h2>
          <InitiallyOpened />
        </section>
      </>
    );
  }
}

export default ProductPage;
