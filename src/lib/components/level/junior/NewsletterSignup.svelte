<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    let email = "";
    let emailError = "";
    let submitted = false;
    let submittedEmail = "";
    
    $: illustrationMobile = `${$glbVars.cdnUrl}illustration-sign-up-mobile.svg`;
    $: illustrationDesktop = `${$glbVars.cdnUrl}illustration-sign-up-desktop.svg`;
    
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
            emailError = "Email is required";
            return;
        }
        
        if (!validateEmail(email)) {
            emailError = "Valid email required";
            return;
        }
        
        submittedEmail = email;
        submitted = true;
    }
    
    function dismissMessage() {
        submitted = false;
        email = "";
        emailError = "";
    }
</script>

<section class="container" role="main">
    {#if !submitted}
        <div class="signup-card">
            <div class="illustration">
                <picture>
                    <source media="(min-width: 768px)" srcset={illustrationDesktop} />
                    <img src={illustrationMobile} alt="Newsletter illustration" />
                </picture>
            </div>
            
            <div class="content">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul class="features">
                    <li>
                        <img src="{$glbVars.cdnUrl}icon-list.svg" alt="" />
                        <span>Product discovery and building what matters</span>
                    </li>
                    <li>
                        <img src="{$glbVars.cdnUrl}icon-list.svg" alt="" />
                        <span>Measuring to ensure updates are a success</span>
                    </li>
                    <li>
                        <img src="{$glbVars.cdnUrl}icon-list.svg" alt="" />
                        <span>And much more!</span>
                    </li>
                </ul>
                
                <form on:submit={handleSubmit} novalidate>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        {#if emailError}
                            <span class="error-message">{emailError}</span>
                        {/if}
                        <input
                            type="email"
                            id="email"
                            placeholder="email@company.com"
                            bind:value={email}
                            class={emailError ? "error" : ""}
                            aria-invalid={emailError ? "true" : "false"}
                            aria-describedby={emailError ? "email-error" : ""}
                        />
                        {#if emailError}
                            <span id="email-error" class="sr-only">{emailError}</span>
                        {/if}
                    </div>
                    <button type="submit" class="submit-btn">Subscribe to monthly newsletter</button>
                </form>
            </div>
        </div>
    {:else}
        <div class="success-card">
            <div class="success-icon">
                <img src="{$glbVars.cdnUrl}icon-success.svg" alt="Success icon" />
            </div>
            <h1>Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to <strong>{submittedEmail}</strong>. 
                Please open it and click the button inside to confirm your subscription.
            </p>
            <button on:click={dismissMessage} class="dismiss-btn">Dismiss message</button>
        </div>
    {/if}
    <Attr/>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    
    :root {
        /* Primary */
        --ns-color-red: hsl(4, 100%, 67%);
        
        /* Neutral */
        --ns-color-blue-800: hsl(234, 29%, 20%);
        --ns-color-blue-700: hsl(235, 18%, 26%);
        --ns-color-grey: hsl(0, 0%, 58%);
        --ns-color-white: hsl(0, 0%, 100%);
        
        --ns-font-fam: 'Roboto', sans-serif;
    }
    
    .container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        font-family: var(--ns-font-fam);
        background: var(--ns-color-blue-800);
    }
    
    .signup-card {
        background: var(--ns-color-white);
        border-radius: 24px;
        max-width: 928px;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .illustration {
        width: 100%;
        order: -1;
    }
    
    .illustration img {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .content {
        padding: 40px 24px;
    }
    
    .content h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--ns-color-blue-800);
        margin: 0 0 24px;
        line-height: 1;
    }
    
    .content > p {
        font-size: 1rem;
        color: var(--ns-color-blue-800);
        margin: 0 0 24px;
        line-height: 1.5;
    }
    
    .features {
        list-style: none;
        padding: 0;
        margin: 0 0 32px;
    }
    
    .features li {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 12px;
        font-size: 1rem;
        color: var(--ns-color-blue-800);
        line-height: 1.5;
    }
    
    .features li img {
        width: 21px;
        height: 21px;
        flex-shrink: 0;
        margin-top: 2px;
    }
    
    .form-group {
        margin-bottom: 24px;
    }
    
    .form-group label {
        display: block;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--ns-color-blue-800);
        margin-bottom: 8px;
    }
    
    .form-group input {
        width: 100%;
        padding: 16px;
        border: 1px solid var(--ns-color-grey);
        border-radius: 8px;
        font-size: 1rem;
        font-family: var(--ns-font-fam);
        color: var(--ns-color-blue-800);
        transition: border-color 0.2s ease;
    }
    
    .form-group input:focus {
        outline: none;
        border-color: var(--ns-color-blue-800);
    }
    
    .form-group input.error {
        border-color: var(--ns-color-red);
        background: hsla(4, 100%, 67%, 0.1);
        color: var(--ns-color-red);
    }
    
    .error-message {
        display: block;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--ns-color-red);
        margin-top: 8px;
        float: right;
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
    
    .submit-btn {
        width: 100%;
        padding: 16px;
        background: var(--ns-color-blue-800);
        color: var(--ns-color-white);
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 700;
        font-family: var(--ns-font-fam);
        cursor: pointer;
        transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    
    .submit-btn:hover {
        background: linear-gradient(135deg, var(--ns-color-red), hsl(14, 89%, 55%));
        box-shadow: 0 8px 24px hsla(4, 100%, 67%, 0.4);
    }
    
    .submit-btn:active {
        transform: translateY(1px);
    }
    
    /* Success card */
    .success-card {
        background: var(--ns-color-white);
        border-radius: 24px;
        padding: 48px 24px;
        max-width: 504px;
        width: 100%;
    }
    
    .success-icon {
        width: 64px;
        height: 64px;
        margin-bottom: 32px;
    }
    
    .success-icon img {
        width: 100%;
        height: auto;
    }
    
    .success-card h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--ns-color-blue-800);
        margin: 0 0 24px;
        line-height: 1.2;
    }
    
    .success-card p {
        font-size: 1rem;
        color: var(--ns-color-blue-800);
        line-height: 1.5;
        margin: 0 0 32px;
    }
    
    .success-card p strong {
        font-weight: 700;
    }
    
    .dismiss-btn {
        width: 100%;
        padding: 16px;
        background: var(--ns-color-blue-800);
        color: var(--ns-color-white);
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 700;
        font-family: var(--ns-font-fam);
        cursor: pointer;
        transition: background 0.2s ease, box-shadow 0.2s ease;
    }
    
    .dismiss-btn:hover {
        background: linear-gradient(135deg, var(--ns-color-red), hsl(14, 89%, 55%));
        box-shadow: 0 8px 24px hsla(4, 100%, 67%, 0.4);
    }
    
    .dismiss-btn:active {
        transform: translateY(1px);
    }
    
    @media (min-width: 768px) {
        .signup-card {
            flex-direction: row;
            padding: 24px;
            gap: 64px;
        }
        
        .illustration {
            width: 400px;
            order: 1;
            flex-shrink: 0;
        }
        
        .content {
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .content h1 {
            font-size: 3.5rem;
        }
        
        .success-card {
            padding: 64px;
        }
        
        .success-card h1 {
            font-size: 3.5rem;
        }
    }
</style>

