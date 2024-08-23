import ChatMessages from "../messages/ChatMessages";
import FakeChat from "../messages/FakeChat";
import DashHeader from "./DashHeader";
import Sidenav from "./Sidenav";

const Dashboard = ({ handleLogout }) => {
    return (
        <>
            <div className="dashboard flex flex-col md:flex-row h-screen">
                <Sidenav handleLogout={handleLogout} />
                <div className="content flex flex-col w-full">
                    <DashHeader />
                    <div className="chats flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x
                     divide-neutral h-screen w-full">
                        <ChatMessages />
                        <div className="allMessages">
                            <FakeChat />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
