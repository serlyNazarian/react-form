// import { useState } from "react";
import "./App.css";
import List from "./components/products2/list";
// import MyButton from "./components/MyButton";
// import MyInput from "./components/MyInput";
// import SecondInput from "./components/SecondInput";
// import Home from "./Home/home";
// import Products from "./Products/products";
// import Header from "./components/header/header"
// import Banner from "./components/banner/banner"
// import Products from "./components/products/prodcuts"

function App() {
  // const [products, setProducts] = useState([
  //   {id:1, name:'apranq1'},
  //   {id:2, name:'apranq2'},
  //   {id:3, name:'apranq3'},
  //   {id:4, name:'apranq4'},
  // ])
  // const [info, setInfo] = useState({
  //   name:"",
  //   surname:"",
  // })
  // const [isShow, setIsShow] = useState(false)
  // const [width, setWidth] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  // const [inputInfo, setInputInfo] = useState(null);
  // const [menuColor, setMenuColor] = useState(null);
  // function showParagraph() {
  //   setIsShow(!isShow)
  // }
  // function openMenu() {
    // if (isOpen===false) {
    //   setWidth(400)
    // }else {
    //   setWidth(0)
    // }
  //   setWidth(isOpen ? 0 : inputInfo)
  //   setIsOpen(!isOpen)
  // }

  // function closeMenu() {
  //   setWidth(0)
  // }

  // let styleMenu = {
  //   width: width +'px',
  //   background: menuColor
  // }

  // function changedInfo(e) {
  //   setInfo({
  //     ...info,
  //     [e.target.id] : e.target.value
  //   })
  // }

  // function send() {
  //   console.log(info)
  // }

  return (
    <div className="App">
        <List/>
    </div>
  );
}

export default App;
