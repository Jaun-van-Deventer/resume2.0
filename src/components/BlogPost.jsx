import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostData } from '../lib/posts';
import ReactMarkdown from 'react-markdown';
import { useMenu } from '../components/MenuContext';

export default function BlogPost() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await getPostData(id);
                setPost(postData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    useEffect(() => {
        setMenuTitle("Jaun");
        setMenuItems([
            { label: "Home", link: "/" },
            { label: "Certificates", link: "/jauncert" },
            { label: "Projects", link: "/jaunprojects" },
            { label: "About Me", link: "/jaunresume" },
            { label: "Blog", link: "/blog" }
        ]);
        setMenuSocial({
            linkedin: "https://www.linkedin.com/in/jaun-van-deventer-51314628a/",
            github: "https://github.com/Jaun-van-Deventer",
        });
    }, [setMenuTitle, setMenuItems, setMenuSocial]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="blog-post">
            <h1>{post.title}</h1>
            <p className="blog-date">{post.date}</p>
            <img src={post.image} alt={post.title} className="blog-image" />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
    );
}