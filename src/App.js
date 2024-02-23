import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ShoppingContext from "./context/ShoppingContext";

function App() {
  return (
    <>
    <ShoppingContext>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      </ShoppingContext>
    </>
  );
}

export default App;
