import { useEffect, useState } from "react";
import { fetchUserDetails } from "../../hooks/users";

const Avatar = () => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {

    fetchUserDetails()
      .then((data) => {
        setAvatar(data.avatar);
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);

      });
  }, []);

    return ( 
        <div className="avatarWrapper">
          <img
          className="avatar"
           src={avatar} />
      </div>
     );
}
 
export default Avatar;