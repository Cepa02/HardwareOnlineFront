import Navegacion from "./components/Navegacion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/pages/Main";

import Productos from "./components/pages/Productos";
import Footer from "./components/Footer";
import SobreNosotros from "./components/pages/SobreNosotros";

const App = () => {
  return (
    <div>
      <Router>
        <Navegacion />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/sobre-nosotros" component={SobreNosotros} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
