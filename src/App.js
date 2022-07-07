import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";
import EditUserForm from "./components/EditUserForm";
import EditUserPage from "./pages/EditUserPage";

function App() {
  return (
    <Routes>
      <Route path="/404" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      <Route path="/editUser/:id" element={<EditUserPage />} />
      <Route path="/addUser" element={<AddUserPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
