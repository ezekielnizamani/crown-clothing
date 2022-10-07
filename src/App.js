import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/./Authentication";
import Shop from "./routes/shopRoute/Shop";
import CheckOut from "./routes/checkout/CheckOut";
import Admin from "./routes/Admin/Admin";
const App = () => {
  return (
    <Routes>
      <Route path="/" element=<Navigation />>
        <Route path="/" element=<Home /> />
        <Route path="/shop/*" element=<Shop /> />
        <Route path="/signIn" element=<Authentication /> />
        <Route path="/checkout" element=<CheckOut /> />
      </Route>
      <Route path="/admin" element=<Admin /> />
    </Routes>
  );
};

export default App;
