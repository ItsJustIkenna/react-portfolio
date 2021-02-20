import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import Wrapper from "./Components/Wrapper";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/Projects" component={Projects} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
