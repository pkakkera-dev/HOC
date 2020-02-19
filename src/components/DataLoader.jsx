import React from "react";

const DataLoader = props => WrappedComponent => {
  class HOC extends React.Component {
    state = {
      data: {}
    };

    componentDidMount() {
      console.log("componentDidMount");
      this.fetchData(props.dataType);
    }

    fetchData(dataType) {
      try {
        let baseURL = "https://jsonplaceholder.typicode.com/" + dataType;
        fetch(baseURL)
          .then(res => res.json())
          .then(data => {
            const fetchData = data.splice(0, 10);
            this.setState({
              data: fetchData
            });
          })
          .catch(err => console.log("something went wrong"));
      } catch (error) {
        console.log("fetchRemoteData error : ", error);
      }
    }
    render() {
      return <WrappedComponent data={this.state.data} />;
    }
  }

  return HOC;
};

export default DataLoader;
