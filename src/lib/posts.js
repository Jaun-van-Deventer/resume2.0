import frontMatter from 'front-matter';

// Fetch all blog posts
export async function getSortedPostsData() {
    try {
        // Fetch the list of blog post files
        const response = await fetch('/public/blog-posts/index.json');
        
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch index.json: ${response.status} ${response.statusText}`);
        }

        // Parse the response as JSON
        const fileNames = await response.json();

        // Fetch and process each blog post
        const allPostsData = await Promise.all(
            fileNames.map(async (fileName) => {
                const id = fileName.replace(/\.md$/, ''); // Remove .md extension
                const postResponse = await fetch(`/blog-posts/${fileName}`);

                // Check if the post response is OK
                if (!postResponse.ok) {
                    throw new Error(`Failed to fetch ${fileName}: ${postResponse.status} ${postResponse.statusText}`);
                }

                const fileContents = await postResponse.text();
                const matterResult = frontMatter(fileContents); // Use front-matter instead of gray-matter

                return {
                    id,
                    ...matterResult.attributes, // Spread metadata (title, date, excerpt, image)
                    content: matterResult.body, // Full content
                };
            })
        );

        // Sort posts by date
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) return 1;
            else return -1;
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}

// Fetch a single blog post by ID
export async function getPostData(id) {
    try {
        const response = await fetch(`/blog-posts/${id}.md`);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch ${id}.md: ${response.status} ${response.statusText}`);
        }

        const fileContents = await response.text();
        const matterResult = frontMatter(fileContents); // Use front-matter instead of gray-matter

        return {
            id,
            ...matterResult.attributes, // Spread metadata
            content: matterResult.body, // Full content
        };
    } catch (error) {
        console.error('Error fetching blog post:', error);
        throw error;
    }
}