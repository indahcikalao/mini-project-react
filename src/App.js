import Counter from "./Components/Counter";
import Hello from "./Components/Hello";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Hello name="User" />
      <Counter />
    </div>
  );
}

export default App;
