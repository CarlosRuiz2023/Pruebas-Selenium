import { Route, Routes } from "react-router-dom";
import "./App.css";
import Confetti from "./Confetti";
import Header from "./components/Header";
import Login from "./pages/Login";
import Clientes from "./pages/Clientes";
import ClientesEdit from "./pages/ClientesEdit";
import Ventas from "./pages/Ventas";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <div className="App">
      {!user ? <Confetti /> : null}
      <Header />
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/cliente" element={<Clientes />} />
          <Route path="/cliente/:id" element={<ClientesEdit />} />
          <Route path="/cliente/nuevo/" element={<ClientesEdit />} />
          <Route path="/ventas" element={<Ventas />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
