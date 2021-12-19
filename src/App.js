import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Image from "./components/Image";
import ButtonGroup from "./components/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SubHeader />
      <ButtonGroup />
      <Image/>
    </div>
  );
}

export default App;
