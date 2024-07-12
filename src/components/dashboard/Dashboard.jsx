import ChatMessages from "./ChatMessages";
import DashHeader from "./DashHeader";
import Sidenav from "./Sidenav";

const Dashboard = ({ handleLogout }) => {    return ( 
        <>
        <div className="dashboard flex flex-col md:flex-row h-screen">
        <Sidenav handleLogout={handleLogout}/>
        <div className="content flex flex-col w-full">
        <DashHeader />
        <div className="chats flex flex-row px-6 divide-x divide-neutral h-screen w-full">
        <ChatMessages />
        <div className="allMessages w-1/2">

        </div>
        </div>
        </div>
        </div>
        </>
     );
}
 
export default Dashboard;