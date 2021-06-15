import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import User from "./components/User"


const App=()=>{
  return(
    <BrowserRouter>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
