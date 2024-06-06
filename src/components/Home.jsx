import Sidebar from './landing/Sidebar';
import SignIn from './signin/SignIn'

const Home = () => {
    return ( 
        <div className="content flex flex-row overflow-hidden h-full">
            <SignIn />
            <Sidebar />
        </div>
     );
}
 
export default Home;