import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Post from './pages/Post';
import { useState } from 'react';

function App() {

  const [auth,setAuth] = useState(true);

  return (
    // <BrowserRouter basename="xyx"> /xyx/about , /xyx
    // <BrowserRouter forceRefresh> {/* will refresh like <a></a> */}
    // <BrowserRouter getUserConfirmation={(message,callback) => callback(window.confirm()) }>
    <BrowserRouter >

      <div className="App">
        <Header />
      </div>


      <main style={styles.main}>
        
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />

        {/* START conditional redirect */}
        {/* ONE WAY */}
        {/* <Route path='/profile'> {auth ? <Profile/> : <Redirect to="/"/> } </Route> */}
        {/* ANOTHERONE WAY */}
        <Route path='/profile'> <Profile auth={auth} /></Route>
        {/* END conditional redirect */}
        
        <Route path='/post/:id' component={Post} /> {/* fetch data from url */}
        <Route component={NotFound}></Route>
      </Switch>
      </main>

    </BrowserRouter>
  );
}

const styles = {
    main : {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
}

export default App;
