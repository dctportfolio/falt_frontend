import {Tab, Tabs} from "react-bootstrap"
import Profile from "../data/profile.data"
import Settings from "./Settings"

const Account = () => {
    return (
        <section>
            <div className=" container mt-2">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-1">
                    <Tab eventKey="profile" title="Profile">
                        <Profile/>
                    </Tab>
                    <Tab eventKey="setting" title="Settings">
                        <Settings/>
                    </Tab>  
                </Tabs>   
            </div> 
           
        </section>
    )
}

export default Account