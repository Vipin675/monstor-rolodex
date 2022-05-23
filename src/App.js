import React, { useEffect, useState } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-list/search-box.component";

const App = () => {
  const [monstors, setMonstors] = useState([]);
  const [searchedMonster, setSearchedMonster] = useState([]);
  const [title, setTitle] = useState('');


  console.log('render');

  const onSearchChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    const filteredArray = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchText);
    });
    setSearchedMonster(filteredArray);
  };
  const onTitleChange = (event) => {
    const searchText = event.target.value.toLocaleLowerCase();
    setTitle(searchText);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonstors(user));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setSearchedMonster(user));
  }, []);

  return (
    <>
      <div className="App">
        <h1>{title}</h1>
        <strong>Title : </strong> <SearchBox searchFunc={onTitleChange} />
        <br />
        <SearchBox searchFunc={onSearchChange} />
        <Cardlist monstorsList={searchedMonster} />
      </div>
    </>
  );
};
export default App;

// ---------------------------------------------------------------------------

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monstors: [],
//       searchedMonster: [],
//     };
//   }

//   onSearchChange = (event) => {
//     const searchText = event.target.value.toLocaleLowerCase();
//     const filteredArray = this.state.monstors.filter((monstor) => {
//       return monstor.name.toLocaleLowerCase().includes(searchText);
//     });
//     // console.log(filteredArray);
//     this.setState({ searchedMonster: filteredArray });
//   };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((user) => this.setState({ monstors: user, searchedMonster: user }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchBox searchFunc = {this.onSearchChange} />
//         <Cardlist monstorsList = {this.state.searchedMonster} />
//       </div>
//     );
//   }
// }
