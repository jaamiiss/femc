<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    $: bgMobile = `${$glbVars.cdnUrl}bg-mobile.svg`;
    $: bgDesktop = `${$glbVars.cdnUrl}bg-desktop.svg`;
</script>

<svelte:head>
    {@html `<style>
        .container {
            --bg-mobile: url('${bgMobile}');
            --bg-desktop: url('${bgDesktop}');
        }
    </style>`}
</svelte:head>

<main class="container">
    <header class="header">
        <img src="{$glbVars.cdnUrl}logo.svg" alt="Huddle logo" class="logo" />
    </header>

    <main class="main-content">
        <div class="illustration">
            <img src="{$glbVars.cdnUrl}illustration-mockups.svg" alt="Illustration mockups" />
        </div>
        
        <div class="content">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
                Create connections with your users as you engage in genuine discussion.
            </p>
            <button class="register-btn">Register</button>
        </div>
    </main>

    <footer class="footer">
        <div class="social-icons">
            <a href="https://facebook.com" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9 0H1.1C0.5 0 0 0.5 0 1.1v17.8c0 0.6 0.5 1.1 1.1 1.1h9.6v-7.7H8.1V9.2h2.6V7c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.2 0-1.5.6-1.5 1.4v1.9h3l-0.4 2.9h-2.6V20h5.1c0.6 0 1.1-0.5 1.1-1.1V1.1C20 0.5 19.5 0 18.9 0z"/>
                </svg>
            </a>
            <a href="https://twitter.com" class="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2.4c-0.7 0.3-1.5 0.5-2.3 0.6 0.8-0.5 1.4-1.3 1.7-2.2-0.8 0.5-1.6 0.8-2.5 1-0.7-0.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 0.3 0 0.6 0.1 0.9C6.4 6.8 3.4 5.1 1.4 2.6c-0.3 0.5-0.5 1.1-0.5 1.7 0 1.4 0.7 2.7 1.8 3.4-0.7 0-1.3-0.2-1.8-0.5v0.1c0 2 1.4 3.7 3.3 4.1-0.3 0.1-0.7 0.1-1 0.1-0.2 0-0.5 0-0.7-0.1 0.5 1.5 1.8 2.6 3.4 2.6-1.2 1-2.8 1.6-4.5 1.6-0.3 0-0.6 0-0.9 0 1.8 1.2 3.9 1.9 6.2 1.9 7.4 0 11.5-6.1 11.5-11.5 0-0.2 0-0.4 0-0.6 0.8-0.6 1.5-1.3 2-2.1z"/>
                </svg>
            </a>
            <a href="https://instagram.com" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C7.3 0 6.9 0 5.9 0.1c-1 0-1.8 0.2-2.4 0.4C2.8 0.8 2.3 1.1 1.9 1.5c-0.4 0.4-0.7 0.9-1 1.6C0.5 3.6 0.3 4.4 0.2 5.4 0.1 6.4 0 6.8 0 9.5s0 3.1 0.1 4.1c0 1 0.2 1.8 0.4 2.4 0.2 0.7 0.5 1.2 0.9 1.6 0.4 0.4 0.9 0.7 1.6 1 0.6 0.2 1.4 0.4 2.4 0.4 1 0.1 1.4 0.1 4.1 0.1s3.1 0 4.1-0.1c1 0 1.8-0.2 2.4-0.4 0.7-0.3 1.2-0.5 1.6-0.9 0.4-0.4 0.7-0.9 1-1.6 0.2-0.6 0.4-1.4 0.4-2.4 0.1-1 0.1-1.4 0.1-4.1s0-3.1-0.1-4.1c0-1-0.2-1.8-0.4-2.4C18.2 1.1 17.9 0.6 17.5 0.2c-0.4-0.4-0.9-0.7-1.6-1C15.3 0.5 14.5 0.3 13.5 0.2 12.5 0.1 12.1 0 9.4 0H10zm0 1.8c2.7 0 3 0 4 0.1 0.9 0 1.4 0.2 1.7 0.3 0.4 0.2 0.7 0.3 1 0.6 0.3 0.3 0.5 0.6 0.6 1 0.1 0.3 0.2 0.8 0.3 1.7 0.1 1 0.1 1.3 0.1 4s0 3-0.1 4c0 0.9-0.2 1.4-0.3 1.7-0.1 0.4-0.3 0.7-0.6 1-0.3 0.3-0.6 0.5-1 0.6-0.3 0.1-0.8 0.2-1.7 0.3-1 0.1-1.3 0.1-4 0.1s-3 0-4-0.1c-0.9 0-1.4-0.2-1.7-0.3-0.4-0.1-0.7-0.3-1-0.6-0.3-0.3-0.5-0.6-0.6-1-0.1-0.3-0.2-0.8-0.3-1.7-0.1-1-0.1-1.3-0.1-4s0-3 0.1-4c0-0.9 0.2-1.4 0.3-1.7 0.1-0.4 0.3-0.7 0.6-1 0.3-0.3 0.6-0.5 1-0.6 0.3-0.1 0.8-0.2 1.7-0.3 1-0.1 1.3-0.1 4-0.1zm0 3.7c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8zm0 9.6c-2.1 0-3.8-1.7-3.8-3.8S7.9 7.5 10 7.5s3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm6.2-10.4c-0.7 0-1.3-0.6-1.3-1.3s0.6-1.3 1.3-1.3 1.3 0.6 1.3 1.3-0.6 1.3-1.3 1.3z"/>
                </svg>
            </a>
        </div>
    </footer>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@400&display=swap');

    :root {
        /* Primary */
        --huddle-color-purple-700: hsl(257, 40%, 49%);
        --huddle-color-magenta-400: hsl(300, 69%, 71%);

        /* Neutral */
        --huddle-color-white: hsl(0, 0%, 100%);

        --huddle-font-poppins: 'Poppins', sans-serif;
        --huddle-font-open-sans: 'Open Sans', sans-serif;
    }

    .container {
        font-family: var(--huddle-font-open-sans);
        background-color: var(--huddle-color-purple-700);
        background-image: var(--bg-mobile);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 40px 24px 24px;
        position: relative;
        color: var(--huddle-color-white);
    }

    .header {
        margin-bottom: 60px;
    }

    .logo {
        height: 32px;
        width: auto;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        flex: 1;
        text-align: center;
    }

    .illustration {
        width: 100%;
        max-width: 600px;
    }

    .illustration img {
        width: 100%;
        height: auto;
        display: block;
    }

    .content {
        max-width: 520px;
        width: 100%;
    }

    .content h1 {
        font-family: var(--huddle-font-poppins);
        font-size: 24px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 0 24px;
        color: var(--huddle-color-white);
    }

    .content p {
        font-size: 16px;
        line-height: 1.75;
        margin: 0 0 32px;
        color: var(--huddle-color-white);
        opacity: 0.9;
    }

    .register-btn {
        background-color: var(--huddle-color-white);
        color: var(--huddle-color-purple-700);
        border: none;
        border-radius: 50px;
        padding: 12px 80px;
        font-family: var(--huddle-font-open-sans);
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    }

    .register-btn:hover {
        background-color: var(--huddle-color-magenta-400);
        color: var(--huddle-color-white);
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    .register-btn:active {
        transform: translateY(0);
    }

    .footer {
        margin-top: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
    }

    .social-icons {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .social-icon {
        width: 32px;
        height: 32px;
        border: 1px solid var(--huddle-color-white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--huddle-color-white);
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .social-icon:hover {
        color: var(--huddle-color-magenta-400);
        border-color: var(--huddle-color-magenta-400);
        transform: translateY(-2px);
    }

    .social-icon svg {
        width: 16px;
        height: 16px;
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
        .container {
            background-image: var(--bg-desktop);
            padding: 60px 80px 40px;
        }

        .header {
            margin-bottom: 80px;
        }

        .logo {
            height: 40px;
        }

        .main-content {
            flex-direction: row;
            align-items: flex-start;
            gap: 60px;
            text-align: left;
        }

        .illustration {
            flex: 1;
            max-width: none;
        }

        .content {
            flex: 1;
            max-width: none;
        }

        .content h1 {
            font-size: 40px;
            margin-bottom: 24px;
        }

        .content p {
            font-size: 18px;
            margin-bottom: 24px;
        }

        .register-btn {
            padding: 14px 64px;
            font-size: 18px;
        }

        .footer {
            justify-content: flex-end;
            margin-top: 40px;
        }
    }

    @media (min-width: 1440px) {
        .container {
            padding: 60px 100px 40px;
        }

        .main-content {
            gap: 100px;
        }

        .content h1 {
            font-size: 48px;
        }
    }
</style>

