import { useEffect } from 'react';

const SITE_NAME = 'Jaun van Deventer';

/**
 * Sets the browser tab title for a page.
 * Usage: usePageMeta('Projects')
 * Result: "Projects | Jaun van Deventer"
 *
 * Pass no argument on the home page to just show the site name.
 */
export default function usePageMeta(pageTitle) {
    useEffect(() => {
        document.title = pageTitle
            ? `${pageTitle} | ${SITE_NAME}`
            : SITE_NAME;

        // Restore on unmount
        return () => {
            document.title = SITE_NAME;
        };
    }, [pageTitle]);
}