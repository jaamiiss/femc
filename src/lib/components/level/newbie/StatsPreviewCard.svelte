<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
</script>

<main class="container">
    <div class="card">
        <div class="image-container">
            <picture>
                <source media="(min-width: 768px)" srcset="{$glbVars.cdnUrl}image-header-desktop.jpg">
                <img src="{$glbVars.cdnUrl}image-header-mobile.jpg" alt="People working in an office">
            </picture>
        </div>
        
        <div class="content">
            <h1>
                Get <span class="highlight">insights</span> that help your business grow.
            </h1>
            
            <p>
                Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.
            </p>
            
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">10k+</div>
                    <div class="stat-label">companies</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">314</div>
                    <div class="stat-label">templates</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">12m+</div>
                    <div class="stat-label">queries</div>
                </div>
            </div>
        </div>
    </div>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca:wght@400&display=swap');

    :root {
        /* Primary */
        --spc-color-very-dark-blue: hsl(233, 47%, 7%);
        --spc-color-dark-saturated-blue: hsl(244, 37%, 16%);
        --spc-color-soft-violet: hsl(277, 64%, 61%);

        /* Neutral */
        --spc-color-white: hsl(0, 0%, 100%);
        --spc-color-slightly-transparent-white1: hsla(0, 0%, 100%, 0.75);
        --spc-color-slightly-transparent-white2: hsla(0, 0%, 100%, 0.6);

        --spc-font-inter: 'Inter', sans-serif;
        --spc-font-lex-deca: 'Lexend Deca', sans-serif;
    }

    .container {
        font-size: 15px;
        font-family: var(--spc-font-inter);
        background-color: var(--spc-color-very-dark-blue);
        color: var(--spc-color-white);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px;
        position: relative;
    }

    .card {
        background-color: var(--spc-color-dark-saturated-blue);
        border-radius: 8px;
        overflow: hidden;
        max-width: 1110px;
        width: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .image-container {
        position: relative;
        width: 100%;
        order: 1;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .image-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--spc-color-soft-violet);
        opacity: 0.75;
        mix-blend-mode: multiply;
    }

    .content {
        padding: 40px 32px;
        text-align: center;
        order: 2;
    }

    .content h1 {
        font-family: var(--spc-font-inter);
        font-size: 28px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 16px;
        color: var(--spc-color-white);
    }

    .content h1 .highlight {
        color: var(--spc-color-soft-violet);
    }

    .content p {
        color: var(--spc-color-slightly-transparent-white1);
        line-height: 1.6;
        margin-bottom: 40px;
    }

    .stats {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .stat-number {
        font-family: var(--spc-font-inter);
        font-size: 24px;
        font-weight: 700;
        color: var(--spc-color-white);
    }

    .stat-label {
        font-family: var(--spc-font-lex-deca);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--spc-color-slightly-transparent-white2);
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
        .card {
            flex-direction: row;
        }

        .image-container {
            width: 540px;
            flex-shrink: 0;
            order: 2;
        }

        .content {
            width: 570px;
            padding: 72px;
            text-align: left;
            order: 1;
        }

        .content h1 {
            font-size: 36px;
            margin-bottom: 24px;
        }

        .content p {
            margin-bottom: 72px;
        }

        .stats {
            flex-direction: row;
            gap: 60px;
        }

        .stat-number {
            font-size: 24px;
        }
    }

    @media (min-width: 1110px) {
        .content {
            padding: 72px;
        }
    }
</style>
