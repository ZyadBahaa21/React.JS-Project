import "./rightbar.css";
import { Users } from "../../Data";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img alt="" src="/assets/gift.png" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tamem Bahaa</b> and <b>3 others friends</b> have a birthday today
          </span>
        </div>
        <img alt="" className="rightbarAd" src="assets/ad.jpg" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">Egypt</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">Sohag</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/2.jpg"
            />
            <span className="rightbarFollowingName">Ahmed Mohamed</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/4.jpg"
            />
            <span className="rightbarFollowingName">Khalid Mustafa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/5.jpg"
            />
            <span className="rightbarFollowingName">Tamem Bahaa</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/6.jpg"
            />
            <span className="rightbarFollowingName">Kareem Abdo</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/7.jpg"
            />
            <span className="rightbarFollowingName">Hossam Abdelmonem</span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt=""
              className="rightbarFollowingImg"
              src="assets/person/8.jpg"
            />
            <span className="rightbarFollowingName">Mohamed Karam</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightbarWrraper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
