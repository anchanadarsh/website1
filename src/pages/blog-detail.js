import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:post} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return (
        <div id="blog_detail_page">
            <div className="container">
                <h1>blog detail - {id}</h1>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default BlogDetails;