import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSortedPostsData } from '../lib/posts';
import { useMenu } from '../components/MenuContext';

export default function BlogPage() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getSortedPostsData();
                setPosts(posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
        <div className="blog-page">
            <h1>Blog</h1>
            <div className="blog-grid">
                {posts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h2>{post.title}</h2>
                            <p className="blog-date">{post.date}</p>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <Link to={`/blog/${post.id}`} className="btn btn-primary">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}