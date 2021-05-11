import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {BlogContent} from "./components/BlogContent";
import {Home} from "./components/Home";

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/blog">
                        <BlogContent/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;