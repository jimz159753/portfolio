import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Routes from "./components/Routes";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => <Routes />;

export default App;
