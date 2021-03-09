import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`,{
        comtext:this,
        state:'fishes'
    });
  }
  addFish = (fish) => {
    //copy of the existing state
    const fishes = { ...this.state.fishes };
    //add new fish to this variable of fishes
    fishes[`fish${Date.now()}`] = fish;

    //this.state.fishes.push(fish);
    //this.state.fishes.fish1= fish;
    //set new fishes object to a state:
    this.setState({
      fishes,
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="VNOMZ CAFE & FARMER MARKET" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
