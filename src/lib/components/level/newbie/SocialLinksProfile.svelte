<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    const profile = {
        name: "Jessica Randall",
        location: "London, United Kingdom",
        bio: "Front-end developer and avid reader.",
        avatar: `${$glbVars.cdnUrl}/avatar-jessica.jpeg`,
        links: [
            { platform: "GitHub", url: "https://github.com" },
            { platform: "Frontend Mentor", url: "https://www.frontendmentor.io" },
            { platform: "LinkedIn", url: "https://www.linkedin.com" },
            { platform: "Twitter", url: "https://twitter.com" },
            { platform: "Instagram", url: "https://instagram.com" }
        ]
    };
    
    $: avatarSrc = profile.avatar;
</script>

<main class="container">
    <div class="profile-card">
        <div class="profile-header">
            <img 
                src={avatarSrc}
                alt={profile.name}
                class="avatar"
                on:error={(e) => {
                    const img = e.currentTarget;
                    if (img instanceof HTMLImageElement) {
                        img.style.display = 'none';
                    }
                }}
            />
            <h1 class="name">{profile.name}</h1>
            <p class="location">{profile.location}</p>
            <p class="bio">"{profile.bio}"</p>
        </div>
        
        <nav class="social-links" aria-label="Social links">
            {#each profile.links as link}
                <a 
                    href={link.url}
                    class="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                >
                    {link.platform}
                </a>
            {/each}
        </nav>
    </div>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    
    :root {
        /* Colors */
        --sl-color-green: hsl(75, 94%, 57%);
        --sl-color-white: hsl(0, 0%, 100%);
        --sl-color-grey-700: hsl(0, 0%, 20%);
        --sl-color-grey-800: hsl(0, 0%, 12%);
        --sl-color-grey-900: hsl(0, 0%, 8%);
        
        --sl-font-family: 'Inter', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: var(--sl-font-family);
        font-size: 14px;
        background-color: var(--sl-color-grey-900);
        color: var(--sl-color-white);
    }
    
    .profile-card {
        background-color: var(--sl-color-grey-800);
        border-radius: 12px;
        padding: 40px;
        max-width: 384px;
        width: 100%;
        text-align: center;
    }
    
    .profile-header {
        margin-bottom: 24px;
    }
    
    .avatar {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        margin: 0 auto 24px;
        display: block;
        object-fit: cover;
    }
    
    .name {
        font-size: 24px;
        font-weight: 600;
        color: var(--sl-color-white);
        margin: 0 0 4px;
        line-height: 1.2;
    }
    
    .location {
        font-size: 14px;
        font-weight: 700;
        color: var(--sl-color-green);
        margin: 0 0 24px;
        line-height: 1.4;
    }
    
    .bio {
        font-size: 14px;
        font-weight: 400;
        color: var(--sl-color-white);
        margin: 0;
        line-height: 1.5;
    }
    
    .social-links {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;
    }
    
    .social-link {
        display: block;
        padding: 12px;
        background-color: var(--sl-color-grey-700);
        color: var(--sl-color-white);
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        border-radius: 8px;
        transition: background-color 0.2s ease, color 0.2s ease;
        line-height: 1.5;
    }
    
    .social-link:hover,
    .social-link:focus {
        background-color: var(--sl-color-green);
        color: var(--sl-color-grey-900);
        outline: none;
    }
    
    .social-link:focus-visible {
        outline: 2px solid var(--sl-color-green);
        outline-offset: 2px;
    }
    
    @media (min-width: 768px) {
        .profile-card {
            padding: 40px;
        }
        
        .avatar {
            width: 88px;
            height: 88px;
        }
        
        .name {
            font-size: 24px;
        }
        
        .location {
            font-size: 14px;
        }
        
        .bio {
            font-size: 14px;
        }
        
        .social-link {
            padding: 12px;
            font-size: 14px;
        }
    }
</style>

