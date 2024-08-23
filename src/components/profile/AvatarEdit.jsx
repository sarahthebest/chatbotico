import Avatar from "../dashboard/Avatar";

const AvatarEdit = ({ isEditing }) => {
    return (
        <>
            <div className="avatarEdit flex flex-col gap-4 mb-4 bg-slate-700 p-6 rounded shadow">
                <h1 className="text-2xl font-semibold">Avatar image</h1>
                <div className="wrapper flex flex-row">
                    <div className="avatarText">
                        <Avatar />
                        <p>Link to a new image.</p>
                    </div>
                    <div className="avatarActions flex flex-row gap-4">
                        <button className="btn ">Change image</button>
                        <button className="btn btn-warning">
                            Delete image
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AvatarEdit;