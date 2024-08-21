import { useState } from "react";

const UsernameEdit = ({isEditing}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = useState(user.user);
    
    return ( 
        <div className="grid-item flex flex-col gap-4 rounded w-full">
        <h2 className="text-xl">Username</h2>
        <input
                type="text"
                placeholder={username}
                className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                disabled={!isEditing}
                />
    </div>
     );
}
 
export default UsernameEdit;