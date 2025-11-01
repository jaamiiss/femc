/**
 * Challenge data access utilities
 * Separated from challenge-routes.js to avoid static/dynamic import conflicts
 */
import challengesData from '../../data/challenges.json';

/**
 * Get challenge data by slug
 * @param {string} slug - The challenge slug
 * @returns {object | undefined} - The challenge object or undefined if not found
 */
export function getChallengeBySlug(slug) {
    return challengesData.find(challenge => challenge.slug === slug);
}

/**
 * Check if challenge exists
 * @param {string} slug - The challenge slug
 * @returns {boolean} - True if challenge exists, false otherwise
 */
export function challengeExists(slug) {
    return challengesData.some(challenge => challenge.slug === slug);
}

/**
 * Get all unique slugs
 * @returns {string[]} - Array of all unique challenge slugs
 */
export function getAllSlugs() {
    return [...new Set(challengesData.map(c => c.slug))];
}

