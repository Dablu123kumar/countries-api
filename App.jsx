
import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./Contexts/TheamContext";

function App() {
  return (
      <ThemeProvider>
      <Header />
      <Outlet  />
      </ThemeProvider>
  );
}

export default App;
