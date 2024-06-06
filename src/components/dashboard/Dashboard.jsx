import ChatMessage from "./ChatMessage";
import Sidenav from "./Sidenav";

const Dashboard = () => {
    return ( 
        <>
        <div className="dashboard flex flex-row">
        <Sidenav />
        <ChatMessage />
        </div>
        </>
     );
}
 
export default Dashboard;