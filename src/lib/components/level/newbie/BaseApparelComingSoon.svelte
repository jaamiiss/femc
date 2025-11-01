<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    let email = "";
    let emailError = "";
    
    $: logo = `${$glbVars.cdnUrl}base-apparel-coming-soon/logo.svg`;
    $: heroMobile = `${$glbVars.cdnUrl}base-apparel-coming-soon/hero-mobile.jpg`;
    $: heroDesktop = `${$glbVars.cdnUrl}base-apparel-coming-soon/hero-desktop.jpg`;
    $: bgPatternDesktop = `${$glbVars.cdnUrl}base-apparel-coming-soon/bg-pattern-desktop.svg`;
    $: iconArrow = `${$glbVars.cdnUrl}base-apparel-coming-soon/icon-arrow.svg`;
    $: iconError = `${$glbVars.cdnUrl}base-apparel-coming-soon/icon-error.svg`;
    
    /**
     * @param {string} value
     * @returns {boolean}
     */
    function validateEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
    
    /**
     * @param {any} event
     */
    function handleSubmit(event) {
        event.preventDefault();
        emailError = "";
        
        if (!email.trim()) {
            emailError = "Please provide a valid email";
            return;
        }
        
        if (!validateEmail(email)) {
            emailError = "Please provide a valid email";
            return;
        }
        
        // Success - could show success message here
        email = "";
        emailError = "";
    }
</script>

<section 
    class="container" 
    role="main"
    style="--bg-pattern: url('{bgPatternDesktop}')"
>
    <header class="header">
        <img 
            src={logo}
            alt="Base Apparel"
            class="logo"
            on:error={(e) => {
                const img = e.currentTarget;
                if (img instanceof HTMLImageElement) {
                    img.style.display = 'none';
                }
            }}
        />
    </header>
    
    <div class="content-wrapper">
        <div class="content">
            <h1 class="title">
                <span class="title-accent">We're</span><br />
                coming soon
            </h1>
            <p class="description">
                Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            
            <form on:submit={handleSubmit} novalidate class="email-form">
                <div class="form-group">
                    <label for="email" class="sr-only">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        bind:value={email}
                        class="email-input"
                        class:error={!!emailError}
                        aria-invalid={emailError ? "true" : "false"}
                        aria-describedby={emailError ? "email-error" : ""}
                    />
                    {#if emailError}
                        <img 
                            src={iconError}
                            alt="Error"
                            class="error-icon"
                            aria-hidden="true"
                        />
                    {/if}
                    {#if emailError}
                        <span id="email-error" class="error-message">{emailError}</span>
                    {/if}
                </div>
                <button type="submit" class="submit-btn" aria-label="Submit email">
                    <img 
                        src={iconArrow}
                        alt=""
                        aria-hidden="true"
                        class="arrow-icon"
                    />
                </button>
            </form>
        </div>
        
        <div class="hero-image">
            <picture>
                <source media="(min-width: 768px)" srcset={heroDesktop} />
                <img 
                    src={heroMobile}
                    alt="Woman in fashion clothing"
                    class="hero-img"
                    on:error={(e) => {
                        const img = e.currentTarget;
                        if (img instanceof HTMLImageElement) {
                            img.style.display = 'none';
                        }
                    }}
                />
            </picture>
        </div>
    </div>
    <Attr/>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap');
    
    :root {
        /* Colors */
        --base-color-pink-400: hsl(0, 36%, 70%);
        --base-color-red-500: hsl(0, 93%, 68%);
        --base-color-gray-900: hsl(0, 6%, 24%);
        --base-color-white: hsl(0, 0%, 100%);
        
        /* Gradients */
        --base-gradient-light: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
        --base-gradient-dark: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
        
        /* Font */
        --base-font-family: 'Josefin Sans', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        font-family: var(--base-font-family);
        font-size: 16px;
        background: var(--base-gradient-light);
        color: var(--base-color-gray-900);
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .header {
        padding: 32px 32px 0;
    }
    
    .logo {
        height: 32px;
        width: auto;
        display: block;
    }
    
    .content-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    
    .content {
        padding: 64px 32px;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        order: 2;
    }
    
    .title {
        font-size: 40px;
        font-weight: 300;
        letter-spacing: 10px;
        line-height: 1.1;
        margin: 0 0 16px;
        color: var(--base-color-gray-900);
        text-transform: uppercase;
    }
    
    .title-accent {
        font-weight: 600;
        color: var(--base-color-pink-400);
    }
    
    .description {
        font-size: 14px;
        line-height: 1.7;
        color: var(--base-color-pink-400);
        margin: 0 0 32px;
    }
    
    .email-form {
        display: flex;
        position: relative;
        margin-top: 32px;
    }
    
    .form-group {
        flex: 1;
        position: relative;
    }
    
    .email-input {
        width: 100%;
        padding: 16px 24px;
        border: 1px solid var(--base-color-pink-400);
        border-radius: 28px;
        font-family: var(--base-font-family);
        font-size: 14px;
        color: var(--base-color-gray-900);
        background-color: var(--base-color-white);
        outline: none;
        transition: border-color 0.2s ease;
    }
    
    .email-input::placeholder {
        color: var(--base-color-pink-400);
        opacity: 0.5;
    }
    
    .email-input:focus {
        border-color: var(--base-color-gray-900);
    }
    
    .email-input.error {
        border-color: var(--base-color-red-500);
        border-width: 2px;
    }
    
    .error-icon {
        position: absolute;
        right: 72px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        pointer-events: none;
    }
    
    .error-message {
        display: block;
        color: var(--base-color-red-500);
        font-size: 13px;
        margin-top: 8px;
        text-align: left;
        padding-left: 24px;
    }
    
    .submit-btn {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 64px;
        border: none;
        border-radius: 28px;
        background: var(--base-gradient-dark);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        padding: 0;
    }
    
    .submit-btn:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
    
    .submit-btn:focus {
        outline: 2px solid var(--base-color-gray-900);
        outline-offset: 2px;
    }
    
    .arrow-icon {
        width: 24px;
        height: 24px;
        filter: brightness(0) invert(1);
    }
    
    .hero-image {
        width: 100%;
        order: 1;
    }
    
    .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
    
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    
    @media (min-width: 768px) {
        .container {
            flex-direction: row;
            align-items: stretch;
        }
        
        .container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: var(--bg-pattern);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: top left;
            pointer-events: none;
            z-index: 0;
        }
        
        .header,
        .content-wrapper {
            position: relative;
            z-index: 1;
        }
        
        .header {
            position: absolute;
            top: 64px;
            left: 64px;
            padding: 0;
        }
        
        .logo {
            height: 32px;
        }
        
        .content-wrapper {
            flex-direction: row;
            width: 100%;
        }
        
        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 120px;
            text-align: left;
            max-width: none;
            margin: 0;
            order: 1;
        }
        
        .title {
            font-size: 64px;
            letter-spacing: 17px;
            margin-bottom: 24px;
        }
        
        .description {
            font-size: 16px;
            margin-bottom: 40px;
        }
        
        .hero-image {
            width: 42%;
            min-height: 100vh;
            order: 2;
        }
        
        .hero-img {
            height: 100vh;
        }
        
        .email-form {
            max-width: 445px;
        }
    }
</style>

