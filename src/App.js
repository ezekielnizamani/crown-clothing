import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/./Authentication";
const Shop = () => {
  return <h1>I am shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation/>>
        
        <Route path="/" element=<Home /> />
        <Route path="/shop" element=<Shop /> />
        <Route path="/signIn" element=<Authentication /> />

      </Route>
    </Routes>
  );
};

export default App;
