import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../redux/actions/search";
import { getRobots } from "../redux/actions/robot";
import Header from "../components/Header";

export const App = ({ searchField, setSearchField, robot, getRobots }) => {
  const { robots, pending } = robot;

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return pending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={e => setSearchField(e.target.value)} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export const mapStateToProps = state => ({
  searchField: state.search.searchField,
  robot: state.robot
});

export default connect(mapStateToProps, { setSearchField, getRobots })(App);
