import Platform from "./components/Boards/Platform";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="bg-amber-200 h-screen overflow-auto flex flex-col gap-7 justify-center items-center">
      <Header />
      <Platform />
    </div>
  );
};

export default App;
