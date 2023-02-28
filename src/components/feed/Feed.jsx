import Post from "../post/post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../Data";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {console.log(Posts)} */}
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        {/* <Post /> */}
      </div>
    </div>
  );
}
