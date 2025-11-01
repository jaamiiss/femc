// @ts-nocheck
/**
 * Challenge route configuration
 * Maps slug to component information
 * 
 * Dynamic imports cannot be statically analyzed by TypeScript
 */

/**
 * Converts kebab-case slug to PascalCase component name
 * @param {string} slug - The slug (e.g., "qr-code")
 * @returns {string} - Component name (e.g., "QRCode")
 */
function slugToComponentName(slug) {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

/**
 * Special cases where slug doesn't match component name exactly
 */
const componentNameOverrides = {
    'qr-code': 'QRCode',
    'product-preview-card': 'ProductPreviewCard',
    'results-summary': 'ResultsSummary',
    'profile-card': 'ProfileCard',
    'order-summary': 'OrderSummary',
    'three-column-preview-card': 'ThreeColPreviewCard',
    'stats-preview-card': 'StatsPreviewCard',
    'single-price-grid': 'SinglePriceGrid',
    'nft-preview-card': 'NFTPreviewCard',
    'huddle-landing-page': 'HuddleLandingPage',
    'four-card-feature': 'FourCardFeatureSection',
    'social-proof': 'SocialProofSection',
    'interactive-rating': 'InteractiveRating',
    'newsletter-signup': 'NewsletterSignup',
    'faq-accordion': 'FAQAccordion',
    'social-links-profile': 'SocialLinksProfile',
    'recipe-page': 'RecipePage',
    'base-apparel-coming-soon': 'BaseApparelComingSoon'
};

/**
 * Get component name for a slug
 */
export function getComponentName(slug) {
    return componentNameOverrides[slug] || slugToComponentName(slug);
}

/**
 * Component import mapping for dynamic imports
 * Using direct slug mapping for cleaner code
 */
const componentImports = {
    'qr-code': () => import('$lib/components/level/newbie/QRCode.svelte'),
    'product-preview-card': () => import('$lib/components/level/newbie/ProductPreviewCard.svelte'),
    'results-summary': () => import('$lib/components/level/newbie/ResultsSummary.svelte'),
    'profile-card': () => import('$lib/components/level/newbie/ProfileCard.svelte'),
    'order-summary': () => import('$lib/components/level/newbie/OrderSummary.svelte'),
    'three-column-preview-card': () => import('$lib/components/level/newbie/ThreeColPreviewCard.svelte'),
    'stats-preview-card': () => import('$lib/components/level/newbie/StatsPreviewCard.svelte'),
    'single-price-grid': () => import('$lib/components/level/newbie/SinglePriceGrid.svelte'),
    'nft-preview-card': () => import('$lib/components/level/newbie/NFTPreviewCard.svelte'),
    'huddle-landing-page': () => import('$lib/components/level/newbie/HuddleLandingPage.svelte'),
    'four-card-feature': () => import('$lib/components/level/newbie/FourCardFeatureSection.svelte'),
    'social-proof': () => import('$lib/components/level/newbie/SocialProofSection.svelte'),
    'interactive-rating': () => import('$lib/components/level/newbie/InteractiveRating.svelte'),
    'newsletter-signup': () => import('$lib/components/level/junior/NewsletterSignup.svelte'),
    'faq-accordion': () => import('$lib/components/level/newbie/FAQAccordion.svelte'),
    'social-links-profile': () => import('$lib/components/level/newbie/SocialLinksProfile.svelte'),
    'recipe-page': () => import('$lib/components/level/newbie/RecipePage.svelte'),
    'base-apparel-coming-soon': () => import('$lib/components/level/newbie/BaseApparelComingSoon.svelte')
};

/**
 * Dynamically import component for a slug
 * @param {string} slug - The challenge slug
 * @param {string} level - The challenge level (for fallback)
 * @returns {Promise<{default: Component}>} - The imported component module
 */
export async function importComponent(slug, level) {
    // Check if we have a direct mapping (primary method)
    if (componentImports[slug]) {
        return componentImports[slug]();
    }
    
    // Fallback: construct import path based on level and component name
    // This allows automatic handling of new challenges if they follow naming conventions
    const componentName = getComponentName(slug);
    const fallbackKey = `${level}/${componentName}`;
    
    // Fallback import map (used only if slug not in primary map)
    const fallbackImports = {
        'newbie/QRCode': () => import('$lib/components/level/newbie/QRCode.svelte'),
        'newbie/ProductPreviewCard': () => import('$lib/components/level/newbie/ProductPreviewCard.svelte'),
        'newbie/ResultsSummary': () => import('$lib/components/level/newbie/ResultsSummary.svelte'),
        'newbie/ProfileCard': () => import('$lib/components/level/newbie/ProfileCard.svelte'),
        'newbie/OrderSummary': () => import('$lib/components/level/newbie/OrderSummary.svelte'),
        'newbie/ThreeColPreviewCard': () => import('$lib/components/level/newbie/ThreeColPreviewCard.svelte'),
        'newbie/StatsPreviewCard': () => import('$lib/components/level/newbie/StatsPreviewCard.svelte'),
        'newbie/SinglePriceGrid': () => import('$lib/components/level/newbie/SinglePriceGrid.svelte'),
        'newbie/NFTPreviewCard': () => import('$lib/components/level/newbie/NFTPreviewCard.svelte'),
        'newbie/HuddleLandingPage': () => import('$lib/components/level/newbie/HuddleLandingPage.svelte'),
        'newbie/FourCardFeatureSection': () => import('$lib/components/level/newbie/FourCardFeatureSection.svelte'),
        'newbie/SocialProofSection': () => import('$lib/components/level/newbie/SocialProofSection.svelte'),
        'newbie/InteractiveRating': () => import('$lib/components/level/newbie/InteractiveRating.svelte'),
        'newbie/FAQAccordion': () => import('$lib/components/level/newbie/FAQAccordion.svelte'),
        'newbie/SocialLinksProfile': () => import('$lib/components/level/newbie/SocialLinksProfile.svelte'),
        'newbie/RecipePage': () => import('$lib/components/level/newbie/RecipePage.svelte'),
        'newbie/BaseApparelComingSoon': () => import('$lib/components/level/newbie/BaseApparelComingSoon.svelte'),
        'junior/NewsletterSignup': () => import('$lib/components/level/junior/NewsletterSignup.svelte')
    };
    
    if (fallbackImports[fallbackKey]) {
        return fallbackImports[fallbackKey]();
    }
    
    throw new Error(`Component not found for slug: "${slug}" (level: ${level}, component: ${componentName})`);
}


