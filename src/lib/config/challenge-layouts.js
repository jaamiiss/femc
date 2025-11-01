/**
 * Challenge layout configuration
 * Maps slug to layout-specific settings (title, attribution colors, etc.)
 */

export const challengeLayouts = {
    'qr-code': {
        title: 'QR Code',
        // Light gray background hsl(212, 45%, 89%) - use component's dark-blue hsl(218, 44%, 22%)
        attrColors: {
            text: 'hsl(220, 15%, 55%)', // Use component's grayish-blue for text
            link: 'hsl(218, 44%, 22%)', // Matches component's dark-blue
            linkHover: 'hsl(218, 44%, 18%)'
        }
    },
    'product-preview-card': {
        title: 'Product Preview Card',
        // Cream background hsl(30, 38%, 92%) - use component's dark-grayish-blue hsl(228, 12%, 48%)
        attrColors: {
            text: 'hsl(228, 12%, 48%)', // Matches component's dark-grayish-blue
            link: 'hsl(158, 36%, 37%)', // Use component's dark-cyan
            linkHover: 'hsl(158, 36%, 30%)'
        }
    },
    'results-summary': {
        title: 'Results Summary',
        // White background - use component's dark-gray-blue hsl(224, 30%, 27%)
        attrColors: {
            text: 'hsl(224, 30%, 27%)', // Matches component's dark-gray-blue
            link: 'hsl(234, 85%, 45%)', // Use component's cobalt-blue
            linkHover: 'hsl(234, 85%, 38%)'
        }
    },
    'profile-card': {
        title: 'Profile Card',
        // Dark cyan background hsl(185, 75%, 39%) - use white text with cyan accent
        attrColors: {
            text: 'hsl(0, 0%, 100%)', // White for contrast on dark cyan
            link: 'hsl(185, 75%, 65%)', // Lighter cyan matching component style
            linkHover: 'hsl(185, 75%, 75%)'
        }
    },
    'order-summary': {
        title: 'Order Summary',
        // Pale blue background hsl(225, 100%, 94%) - use component's dark-blue hsl(223, 47%, 23%)
        attrColors: {
            text: 'hsl(223, 47%, 23%)', // Matches component's dark-blue
            link: 'hsl(245, 75%, 52%)', // Use component's bright-blue
            linkHover: 'hsl(245, 75%, 45%)'
        }
    },
    'three-column-preview-card': {
        title: 'Three Column Preview Card',
        // Very light gray background hsl(0, 0%, 95%) - use component's very-dark-cyan hsl(179, 100%, 13%)
        attrColors: {
            text: 'hsl(179, 100%, 13%)', // Matches component's very-dark-cyan
            link: 'hsl(184, 100%, 22%)', // Use component's dark-cyan for link
            linkHover: 'hsl(184, 100%, 18%)'
        },
        fontImport: "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400&display=swap",
        fontFamily: "'Lexend Deca', sans-serif"
    },
    'stats-preview-card': {
        title: 'Stats Preview Card',
        // Very dark blue background hsl(233, 47%, 7%) - use lighter colors for WCAG compliance
        attrColors: {
            text: 'hsla(0, 0%, 100%, 0.9)', // Brighter white for better contrast on very dark bg
            link: 'hsl(277, 64%, 68%)', // Brighter purple for better visibility
            linkHover: 'hsl(277, 64%, 75%)'
        }
    },
    'single-price-grid': {
        title: 'Single Price Grid',
        // Light gray background hsl(204, 43%, 93%) - use component's grayish-blue hsl(218, 22%, 67%)
        attrColors: {
            text: 'hsl(218, 22%, 45%)', // Darker than component's grayish-blue for better contrast
            link: 'hsl(179, 62%, 43%)', // Use component's cyan
            linkHover: 'hsl(179, 62%, 35%)'
        }
    },
    'nft-preview-card': {
        title: 'NFT Preview Card',
        // Very dark blue background hsl(217, 51%, 10%) - use lighter colors for WCAG compliance
        attrColors: {
            text: 'hsl(215, 51%, 75%)', // Lighter cyan for better contrast on very dark bg
            link: 'hsl(178, 100%, 55%)', // Brighter cyan for better visibility
            linkHover: 'hsl(178, 100%, 65%)'
        }
    },
    'huddle-landing-page': {
        title: 'Huddle Landing Page',
        // Purple background hsl(257, 40%, 49%)
        attrColors: {
            text: 'hsl(0, 0%, 100%)',
            link: 'hsl(300, 69%, 71%)',
            linkHover: 'hsl(300, 69%, 80%)'
        }
    },
    'four-card-feature': {
        title: 'Four Card Feature Section',
        // Light gray background hsl(0, 0%, 98%) - use component's grey-500 hsl(234, 12%, 34%)
        attrColors: {
            text: 'hsl(234, 12%, 34%)', // Matches component's grey-500
            link: 'hsl(212, 86%, 64%)', // Use component's blue accent
            linkHover: 'hsl(212, 86%, 58%)'
        }
    },
    'social-proof': {
        title: 'Social Proof Section',
        // White background - use component's dark magenta hsl(300, 43%, 22%)
        attrColors: {
            text: 'hsl(300, 43%, 22%)', // Matches component's very-dark-magenta
            link: 'hsl(333, 80%, 60%)', // Use component's soft-pink as accent
            linkHover: 'hsl(333, 80%, 55%)'
        }
    },
    'interactive-rating': {
        title: 'Interactive Rating Component',
        // Very dark blue background hsl(216, 12%, 8%) - use lighter colors for WCAG compliance
        attrColors: {
            text: 'hsl(217, 12%, 80%)', // Light grey for better contrast on very dark bg (WCAG AA)
            link: 'hsl(25, 97%, 58%)', // Brighter orange for better visibility and contrast
            linkHover: 'hsl(25, 97%, 68%)'
        }
    },
    'newsletter-signup': {
        title: 'Newsletter Sign-up Form',
        // Dark blue background hsl(234, 29%, 20%) - matches component style
        attrColors: {
            text: 'hsl(0, 0%, 100%)', // White for contrast on dark bg
            link: 'hsl(4, 100%, 67%)', // Red accent matching component
            linkHover: 'hsl(4, 100%, 75%)'
        }
    }
};

/**
 * Get layout config for a slug
 */
export function getLayoutConfig(slug) {
    return challengeLayouts[slug] || {
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        attrColors: {
            text: 'hsl(224, 30%, 27%)',
            link: 'hsl(234, 85%, 35%)',
            linkHover: 'hsl(234, 85%, 28%)'
        }
    };
}

