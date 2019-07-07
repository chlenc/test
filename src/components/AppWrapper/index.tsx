import {Provider} from "react-redux";
import App from "../App";
import React from "react";
import configureStore from "../../store/configureStore";

const store = configureStore();

export default class AppWrapper extends React.Component {

    render() {
        return <Provider store={store}>
            <App/>
        </Provider>;
    }

}
