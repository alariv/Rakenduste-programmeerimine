import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import Heading from "./components/Heading";
import Login from "./pages/Login";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Footer } from "antd/lib/layout/layout";

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Route path="/" component={Heading}/>
          <Switch>
            <Route exact path="/" component={ShowMagic} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Footer dark>
            <h2 style={{}}>Footer</h2>
          </Footer>
        </Layout>
      
    </BrowserRouter>
  );
}

export default App;
