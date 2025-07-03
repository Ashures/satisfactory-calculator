import ItemManager from "./components/items/ItemManager";
import Navbar from "./components/main/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <ItemManager />
      </main>
    </>
  );
};

export default App;
