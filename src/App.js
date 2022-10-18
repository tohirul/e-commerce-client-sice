import React from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import useReactFontLoader from "react-font-loader";
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
    useReactFontLoader({
        url: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
    });

    // React.useEffect(() => {
    //     WebFont.load({
    //         google: {
    //             families: ["Poppins", "Droid Sans", "Roboto"],
    //         },
    //     });
    // }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
