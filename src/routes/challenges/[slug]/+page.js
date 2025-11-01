import { error } from '@sveltejs/kit';
import { getChallengeBySlug } from '$lib/config/challenge-data';
import { importComponent } from '$lib/config/challenge-routes';

/**
 * Server-side validation and component loading for challenge routes
 * Loads component on server for proper SSR rendering
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
    
    // Load component server-side for SSR
    let componentModule = null;
    try {
        componentModule = await importComponent(slug, challenge.level);
    } catch (err) {
        console.error(`Failed to load component for ${slug}:`, err);
        throw error(500, {
            message: `Failed to load component for "${slug}"`
        });
    }
    
    return {
        slug,
        challenge,
        componentModule
    };
}

