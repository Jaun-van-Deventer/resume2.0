export default function useReadingTime(content = '') {
    const WORDS_PER_MINUTE = 200;

    const plainText = content
        .replace(/```[\s\S]*?```/g, '')   
        .replace(/`[^`]*`/g, '')          
        .replace(/#{1,6}\s/g, '')         
        .replace(/[*_~>[\]()!]/g, '')     
        .replace(/https?:\/\/\S+/g, '')   
        .trim();

    const wordCount = plainText.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
    const text = `${minutes} min read`;

    return { minutes, text, wordCount };
}