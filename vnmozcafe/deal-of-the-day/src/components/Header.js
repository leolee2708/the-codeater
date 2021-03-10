import React from "react";

const Header = (props) => (
  <header className="top">
    <h1>
      {" "}
      Deals
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);
//Hard coding way/ Old codes way
// class Header extends React.Component {
// render(){
//     return(
//         <header className="top">
//             <h1> Catches

//                <span className="ofThe">
//                    <span className="of">Of</span>
//                    <span className="the">The</span>
//                    </span>
//                    Day
//                 </h1>
//             <h3 className="tageline">
//             <span>{this.props.tagline}</span>
//         </h3>
//         </header>

//     )
// }

// }
export default Header;
// VNOMZ CAFE & FARMER MARKET
