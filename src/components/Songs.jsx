import React from "react";
import "../styles/style.scss";
import DataLoader from "./DataLoader";

const Songs = props => {
  return (
    <div className="songs">
      {props &&
        props.data &&
        props.data.length > 0 &&
        props.data.map(item => {
          return <span key={item.id}> {item.title}</span>;
        })}
    </div>
  );
};

export default DataLoader({ dataType: "photos" })(Songs);
