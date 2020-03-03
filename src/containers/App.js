import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from "../redux/actions/search";
import { getRobots } from "../redux/actions/robot";

export const App = ({ searchField, setSearchField, robot, getRobots }) => {
  const { robots, pending, error } = robot;

  useEffect(() => {
    getRobots();
  }, []);

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return pending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={e => setSearchField(e.target.value)} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

const mapStateToProps = state => ({
  searchField: state.search.searchField,
  robot: state.robot
});

export default connect(mapStateToProps, { setSearchField, getRobots })(App);
