import ChatMessages from "../messages/ChatMessages";
import ConversationTab from "../messages/ConversationTab";
import DashHeader from "./DashHeader";
import Sidenav from "./Sidenav";

const Dashboard = ({ handleLogout }) => {
    return (
        <>
            <div className="dashboard flex flex-col md:flex-row h-screen md:overflow-hidden overflow-auto">
                <Sidenav handleLogout={handleLogout} />
                <div className="content flex flex-col w-full">
                    <DashHeader />
                    <div className="chats flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-neutral h-screen w-full">
                        {/* <div className="chatMessages flex-1 h-full w-full">
                            <ChatMessages />
                        </div> */}
                        <div className="allMessages flex-1 h-full">
                            <ConversationTab />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
