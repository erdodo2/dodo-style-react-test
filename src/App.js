import {Button,Tag,DateTimeBox,ToastContainer,toast ,Dialog,Tooltip,MessageBox,Input,Carousel,Collapse,CollapseItem} from "dodo-style"

import './App.css'
import React from "react";
function App() {
    const [visible,setVisible] = React.useState(false)

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
  return (
    <div className="App">
        <span>Button</span>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
            <div style={{margin:"5px"}}>
                <Button type="primary" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="secondary" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="info" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="danger" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="success" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="warning" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="light" >Tıkla bana</Button>
            </div>
            <div style={{margin:"5px"}}>
                <Button type="dark" >Tıkla bana</Button>
            </div>
        </div>
        <span>DateTime</span>
        <DateTimeBox type={"datetime"} />




        <Collapse>
            <CollapseItem title="Başlık 1"  content="İçerik 1" />
            <CollapseItem title="Başlık 2" content="İçerik 2" />
        </Collapse>
    </div>
  );
}

export default App;
