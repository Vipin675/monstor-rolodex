import React from "react";
import "./card-list.style.css";

const Cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monstorsList.map((mName) => {
        return (
          <div className="card-container" key={mName.id}>
            <img
              src={`https://robohash.org/${mName.id}?set=set2&size=180x180`}
              alt={`monstor ${mName.name}`}
            />
            <h2>{mName.name}</h2>
            <p>{mName.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;

// export default class Cardlist extends Component {
//   render() {
//     console.log(this.props.monstorsList);
//     return (
//       <div className="card-list">
//         {this.props.monstorsList.map((mName) => {
//           return (
//             <div className="card-container" key={mName.id}>
//               <img src={`https://robohash.org/${mName.id}?set=set2&size=180x180`} alt={`monstor ${mName.name}`} />
//                 <h2>{mName.name}</h2>
//                 <p>{mName.email}</p>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
