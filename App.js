import React from "react";
import ReactDOM from "react-dom";

//using core react
const head = React.createElement("h1", {}, "hello");

//using JSX
const Header = (
    <div id="div">
     <h1 id="head">From JSX</h1>
     <h2 className="heading">multi lines</h2>
     </div>
);


//using function compo===js function which returns ReactElement or jsx


const add = 100+800;
const Account = () => {
    return  <div id="div">
    <h1 id="head">From account {add} JSX</h1>
    <h2 className="heading">multi lines</h2>
    <Branch></Branch>
    </div>
}

const Branch = () => {
    return  <div id="div">
    <h1 id="head">From branch JSX</h1>
    <h2 className="heading">multi lines</h2>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);

// root.render(Header);

root.render(<Account/>);