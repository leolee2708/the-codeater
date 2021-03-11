import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../database";
// import firebaseApp from '../database';
// import firebase, { app } from 'firebase';
// import withFirebaseAuth from 'react-with-firebase-auth';
// import'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/database'
// import favico from '../css/images/favico.ico';


// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

// const {
//   user,
//   signOut,
//   signInWithGoogle,
// } = this.props;




class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    };

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmout() {
    base.removeBinding(this.ref);
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

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };

    fishes[key] = updatedFish;

    this.setState({ fishes });
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
      // <div className="App">
      //   <header className="App-header">
      //     {/* <img src={favico} className="App-logo" alt="logo" /> */}
      //     {
      //       user
      //         ? <p>Hello, {user.displayName}</p>
      //         : <p>Please sign in.</p>
      //     }
      //     {
      //       user
      //         ? <button onClick={signOut}>Sign out</button>
      //         : <button onClick={signInWithGoogle}>Sign in with Google</button>
      //     }
      //   </header>

        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="LEO's FUSION CAFE & FARMER MARKET" />
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
            updateFish={this.updateFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
          />
        </div> 
      // </div>
    );
  }
}
//setting up authentication
// export default withFirebaseAuth({

//   providers,
//   firebaseAppAuth,
// })(App);

export default App;