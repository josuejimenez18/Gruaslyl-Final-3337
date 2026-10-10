import { AgentFeedback } from "@runablehq/website-runtime";
import { Route, Switch } from "wouter";
import { Layout } from "./components/layout";
import { Provider } from "./components/provider";
import Contacto from "./pages/contacto";
import Cotizaciones from "./pages/cotizaciones";
import Flota from "./pages/flota";
import Index from "./pages/index";
import NotFound from "./pages/not-found";
import Nosotros from "./pages/nosotros";
import Proyectos from "./pages/proyectos";
import Seguridad from "./pages/seguridad";
import Servicios from "./pages/servicios";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/flota" component={Flota} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/seguridad" component={Seguridad} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/cotizaciones" component={Cotizaciones} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
