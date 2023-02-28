import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hello from "./Components/Hello";

function App() {
  return (
    <div>
      <Header />
      <div className="flex items-center flex-col w-full pt-2">
        <Hello name="User" />
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
