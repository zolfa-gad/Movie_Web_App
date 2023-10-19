import AppRouter from "./router/AppRouter";
import SetDataCongiguration from "./context/DataContextStore";

function App() {
  return (
    <div className=" bg-dark">
      <SetDataCongiguration>
        <AppRouter />
      </SetDataCongiguration>
    </div>
  );
}

export default App;
