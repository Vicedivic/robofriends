import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import axios from "axios";
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res =>
        setRobots(
          res.data.filter(robot => ({
            id: robot.id,
            name: robot.name,
            email: robot.email
          }))
        )
      )
      .catch(err => console.log(err));
  }, []);

  const onSearchChange = e => setSearchField(e.target.value);

  const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
