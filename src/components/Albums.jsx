import React from "react";
import "../styles/style.scss";
import DataLoader from "./DataLoader";

const Albums = props => {
  console.log(props);
  return (
    <div className="albums">
      {props && props.data && props.data.length > 0 ? (
        props.data.map(item => {
          return <span key={item.id}>{item.title}</span>;
        })
      ) : (
        <div> No Data Found </div>
      )}
    </div>
  );
};

const DataLoadAlbum = DataLoader({ dataType: "albums" })(Albums);
export default DataLoadAlbum;
