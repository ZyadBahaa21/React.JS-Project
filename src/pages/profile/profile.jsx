import "./profile.css";
import React from "react";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
export default function Profile() {
  return (
    <div>
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  alt=""
                  className="profileCoverImg"
                  src="/assets//posts/3.jpg"
                />
                <img
                  alt=""
                  className="profileUserImg"
                  src="/assets//person/1.jpg"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Zyad Bahaa</h4>
                <span className="profileInfodesc">
                  Hello All! I'm Software Engineer
                </span>
              </div>
            </div>

            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
