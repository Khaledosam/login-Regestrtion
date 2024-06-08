import SignUp from "./components/signup";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/regester" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
