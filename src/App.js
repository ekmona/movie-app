import {BrowserRouter as Router, 
        Switch,
        Route
} from "react-router-dom";
// import DataFetcher from "./DataFetcher";
// import DataFetcher from "./DataFetcherComponent";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/hi">
        <h1>hi~</h1>
      </Route>
      <Route path="/movie/:id">
       <Detail />
      </Route>
      <Route path="/"> 
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
