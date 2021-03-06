import React, { Fragment } from "react";

const DataLoader = props => WrappedComponent => {
  class HOC extends React.Component {
    state = {
      data: {},
      loading: true
    };

    componentDidMount() {
      this.fetchData(props.dataType);
    }

    fetchData(dataType) {
      try {
        let baseURL = "https://jsonplaceholder.typicode.com/" + dataType;
        fetch(baseURL)
          .then(res => res.json())
          .then(data => {
            console.log("data from fetch", data);
            const fetchData = data.splice(0, 10);
            this.setState({
              data: fetchData,
              loading: false
            });
          })
          .catch(err => {
            this.setState(state => {
              return { loading: !state.loading };
            });
          });
      } catch (error) {
        console.log("fetchRemoteData error : ", error);
      }
    }

    render() {
      const loader = <div className="loader"></div>;
      return (
        <Fragment>
          {this.state.loading ? (
            loader
          ) : (
            <WrappedComponent data={this.state.data} />
          )}
        </Fragment>
      );
    }
  }

  return HOC;
};

export default DataLoader;
