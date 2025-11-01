import { error } from '@sveltejs/kit';
import { getChallengeBySlug } from '$lib/config/challenge-data';

/**
 * Server-side validation for challenge routes
 * Throws 404 if challenge doesn't exist (proper SvelteKit way)
 * @param {{ params: { slug: string } }} event
 */
export async function load({ params }) {
    const { slug } = params;
    
    const challenge = getChallengeBySlug(slug);
    
    // Check if challenge exists - throw error in load function (proper SvelteKit way)
    if (!challenge) {
        throw error(404, {
            message: `Challenge "${slug}" not found`
        });
    }
    
    return {
        slug,
        challenge
    };
}

