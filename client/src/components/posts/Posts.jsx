import Post from "../post/Post"
import "./posts.css"

export default function posts({posts}) {
  return (
    <div className="posts">
      {posts.map(post=>(
    <Post key={post.id} post={post}/>
    )) }
     </div>
  )
}
