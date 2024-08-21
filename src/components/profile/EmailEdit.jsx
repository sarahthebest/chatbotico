const EmailEdit = ({isEditing}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.email;

    return (
        <div className="grid-item flex flex-col gap-4 rounded">
            <h2 className="text-xl">Email</h2>
            <input
                type="text"
                placeholder={email}
                className={`input input-bordered w-full max-w-md ${!isEditing ? 'input-disabled' : ''}`}
                disabled={!isEditing}
                />
        </div>
    );
};

export default EmailEdit;
