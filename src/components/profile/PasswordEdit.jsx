const PasswordEdit = ({isEditing}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const password = user.password;
    return ( 
        <div className="grid-item flex flex-col gap-4 rounded">
        <h2 className="text-xl">Password</h2>
        <input
                type="text"
                placeholder={password}
                className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                disabled={!isEditing}
                />
    </div>
     );
}
 
export default PasswordEdit;