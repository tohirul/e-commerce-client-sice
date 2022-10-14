import "./App.css";
import Header from "./components/layout/Header/Header";
import React from "react";
import useReactFontLoader from "react-font-loader";

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
            <Header />
        </div>
    );
}

export default App;
