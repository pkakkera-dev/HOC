import React from "react";
import "../styles/style.scss";

const Home = props => {
  return (
    <div className="home">
      <h3> Higher Order Component </h3>
      <article>
        Higher-Order Components (HOC) As briefly mentioned before a HOC is a
        pattern to reuse (class) component logic across your React application.
        That way you don't have to duplicate logic that's in example based on
        state updates, like data fetching or routing. The React docs describe a
        HOC as a "function that takes a component and returns a new component",
        roughly meaning the component that is used as input for the HOC will be
        enhanced and returned as a different component. HOCs are very commonly
        used in React by packages like react-router or react-redux.
      </article>
      <article>
        Examples of HOCs in these packages are the withRouter and connect HOCs.
        The first one lets you access routing props in any component that you
        pass to it, while the latter makes it possible to connect to the Redux
        state from the input component. Creating a HOC isn't that hard and is
        very well explained in the documentation on the official React website,
        which I'll demonstrate by creating a new HOC that's called
        withDataFetching. This will add basic data fetching features using state
        and lifecycles to any component that you pass to this HOC. Using the
        Github API a component will be created that renders a list of my public
        repositories.
      </article>
    </div>
  );
};

export default Home;
