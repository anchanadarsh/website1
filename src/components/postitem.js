import { Link } from "react-router-dom";

const PostItem = ({ posts }) => {
    return (
        <div className="postWrap">
            {
                posts.map(post => (
                    <div className="postItem" key={post.id}>
                        <Link to={`/blogs/${post.id}`} className="postItemInner">
                            <h4 className="postTitle">{post.title}</h4>
                            <p className="postDesc">{post.body}</p>
                            <span className="author">Author: {post.userId}</span>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default PostItem;