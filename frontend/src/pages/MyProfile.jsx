import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Praveen",
    Image: assets.profile_pic,
    email: "praveen2192000@gmail.com",
    phone: "+91 729 795 4444",
    address: {
      line1: "57th Cross, Bilara",
      line2: "Circle, Jodhpur, Rajasthan",
    },
    gender: "male",
    dob: "2000-01-01",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.Image} alt="user image" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
