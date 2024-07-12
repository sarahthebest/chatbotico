import { useEffect, useState } from "react";
import { fetchUserDetails } from "../../hooks/users";

const Avatar = () => {
  const [avatar, setAvatar] = useState("src/assets/img/default.png");

  useEffect(() => {

    fetchUserDetails()
      .then((data) => {
        console.log(data);  
        setAvatar(data.avatar);
      })
      .catch((err) => {
        console.error("Error fetching avatar:", err);

      });
  }, []);

    return ( 
        <div className="avatarWrapper">
          <img
          className="avatar w-full"
           src={avatar}
           alt="Avatar image" />
      </div>
     );
}
 
export default Avatar;