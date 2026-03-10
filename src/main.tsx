import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode Basenme = {import.meta.env.BASE_URL}>
    <BrowserRouter>
      <Routes>
        <Route path = "*" element = {<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
