import { getPostData, getSortedPostsData } from './posts';

// For BlogPage.jsx
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

// For BlogPost.jsx
export async function getPostStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const allPostsData = getSortedPostsData();
    const paths = allPostsData.map((post) => ({
        params: { id: post.id },
    }));

    return {
        paths,
        fallback: false,
    };
}