import { useEffect, useState } from 'react';
import Banner from '../components/banner';
import PostItem from '../components/postitem';
import useFetch from '../hooks/useFetch';

const Blogs = () => {

    const {data:posts} = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <div id="blogs_page">
            <Banner imgSrc="images/1.jpg" bannerTitle="Blogs" />

            <div className="postSection">
                <div className="container">
                     {posts && <PostItem posts={posts} /> }   
                </div>
            </div>
        </div>
    );
}

export default Blogs;