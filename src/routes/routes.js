import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CriarRepresentantes from "../components/CriarRepresentantes";
import MostrarRepresentantes from "../components/MostrarRepresentantes";
import EditarRepresentantes from "../components/EditarRepresentantes";
import DeletarRepres from "../components/DeletarRepresenantes";


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/criar" exact component={CriarRepresentantes} />
                <Route path="/mostrar" component={MostrarRepresentantes} />
                <Route path="/deletar" component={DeletarRepres} />
                <Route path="/editar" component={EditarRepresentantes} />

            </Switch>
        </Router>

    )
}