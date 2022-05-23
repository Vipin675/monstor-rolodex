import React from "react";
import "./search-box.style.css";

const SearchBox = (props) => {
  return (
    <>
      <input
        className="search-box"
        type="search"
        name="searchBox"
        placeholder="Search Monstor"
        onChange={props.searchFunc}
      />
    </>
  );
};

export default SearchBox;

// export default class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className="search-box"
//         type="search"
//         name="searchBox"
//         placeholder="Search Monstor"
//         onChange={this.props.searchFunc}
//       />
//     );
//   }
// }
