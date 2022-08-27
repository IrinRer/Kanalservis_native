import { Provider } from "react-redux";
import CreateRoutes from "./container/Routes/index.js";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <CreateRoutes />
    </Provider>
  );
}

export default App;
