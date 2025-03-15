import { useEffect, useState } from "react";
import { useMenu } from "../components/MenuContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext";
import "../App.css";
import jaunImage from "/assets/jaun.jpg";
import { getSortedPostsData } from "../lib/posts";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function JaunProfile() {
    const { setMenuTitle, setMenuItems, setMenuSocial } = useMenu();
    const { isDarkMode } = useContext(DarkModeContext);
    const [blogPosts, setBlogPosts] = useState([]); // State to store blog posts
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    // Fetch blog posts on component mount
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const posts = await getSortedPostsData();
                setBlogPosts(posts);
                console.log('Fetched Blog Posts:', posts); // Debugging
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
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

    return (
        <div className={`modern-profile-page ${isDarkMode ? "dark-mode" : ""}`}>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <img src={jaunImage} alt="Jaun" className="profile-photo" />
                    <h1>Jaun Van Deventer</h1>
                    <p className="tagline">Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
                    <div className="cta-buttons">
                        <Link to="/jaunprojects" className="btn btn-primary">View My Work</Link>
                        <Link to="/jaunresume" className="btn btn-secondary">About Me</Link>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="about-section">
                <div className="glass-card">
                    <h2>About Me</h2>
                    <p>
                        Hi there! I’m Jaun, a self-taught developer passionate about building impactful applications. My expertise spans <strong>JavaScript, C#, Python, Node.js, React, PHP, and SQL</strong>. I specialize in creating intuitive front-end experiences with <strong>Bootstrap, CSS, and HTML5</strong>, and building efficient back-end systems using <strong>MongoDB and Node</strong>.
                    </p>
                    <p>
                        Check out my projects on GitHub, where I showcase my commitment to clean, maintainable code and open-source collaboration. I’m always eager to learn, tackle challenges, and contribute to meaningful tech solutions.
                    </p>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog-section">
                <h2>Blog</h2>
                {loading ? (
                    <div>Loading blog posts...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }} // Autoplay every 3 seconds
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                    }}
                    >
                        {blogPosts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <div className="blog-card">
                                    <img src={post.image} alt={post.title} className="blog-image" />
                                    <div className="blog-content">
                                        <h3>{post.title}</h3>
                                        <p className="blog-date">{post.date}</p>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <Link to={`/blog/${post.id}`} className="btn btn-primary">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                {/* Link to the full blog page */}
                <div className="view-all-blogs">
                    <Link to="/blog" className="btn btn-secondary">
                        View All Blog Posts
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2025 Jaun Van Deventer. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default JaunProfile;