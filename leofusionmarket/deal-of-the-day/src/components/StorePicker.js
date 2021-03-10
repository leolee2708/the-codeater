import React from "react";
import { getFunName } from "../helpers";

//Page to pick out your restaurant name
class StorePicker extends React.Component {
  

  myInput = React.createRef();

  goToStore = (event) => {
    //1. Stop submitting constantly:
    event.preventDefault();
    //2. get the params storeId:
    //react just update from value to current!!! REMEMBER!!!
    const storeName = this.myInput.current.value;
    //3.Tell/ guide user to name of store they entered:
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h1>Please choose a name for your restaurant</h1>

          <input
            type="text"
            ref={this.myInput}
            // ref={(myInput) => this.myInput= myInput }
            required
            placeholder="Restaurant Name"
            defaultValue={getFunName()}
          />
          <button type="submit">See your restaurant! </button>
        </form>
      </React.Fragment>
    );
  }
}
export default StorePicker;
