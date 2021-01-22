import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "../reducers";
import RootRouter from "../pages/RootRouter";
import Footer from "./Footer";
import Header from "./Header";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const App = () => {
    return (
        <>
            <main>
                <div className="wrapper">
                    <Header />
                    <RootRouter />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
