import { Route, Switch } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
