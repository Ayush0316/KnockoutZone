import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/store";
import AllRoutes from "./routes";
import "./index.css";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
