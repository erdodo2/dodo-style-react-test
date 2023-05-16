import {Button,Tag,DateTimeBox,ToastContainer,toast ,Dialog,Tooltip} from "dodo-style"
import * as All from "dodo-style"
import React from "react";
function App() {
    const [visible,setVisible] = React.useState(false)
  return (
    <div className="App">
        <Button type={"primary"} onClick={()=>{toast('sadfsd')}}>toast</Button>
        <Button type={"primary"} onClick={()=>{setVisible(true)}}>dialog</Button>
        <Tag>dsafasdfa</Tag>
        <DateTimeBox/>
        <ToastContainer/>
        <Dialog open={visible} onClose={()=>setVisible(false)}  >
            <div className={"p-4"}>
                <div className={"text-2xl"}>Dialog</div>
            </div>
        </Dialog>
        <Tooltip message={"sadfsdf"}>sadfsdf</Tooltip>
    </div>
  );
}

export default App;
