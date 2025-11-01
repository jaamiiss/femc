<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
</script>

<section class="container" role="main">
    <div class="card">
        <div class="image-wrapper">
            <div class="image-container">
                <img src="{$glbVars.cdnUrl}image-equilibrium.jpg" alt="Equilibrium #3429" />
                <div class="overlay">
                    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd">
                            <path d="M0 0h48v48H0z"/>
                            <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="content">
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            
            <div class="info">
                <div class="price">
                    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="currentColor"/>
                    </svg>
                    <span>0.041 ETH</span>
                </div>
                <div class="time">
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="currentColor"/>
                    </svg>
                    <span>3 days left</span>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="creator">
                <img src="{$glbVars.cdnUrl}image-avatar.png" alt="Jules Wyvern" class="avatar" />
                <p>
                    Creation of <span class="creator-name">Jules Wyvern</span>
                </p>
            </div>
        </div>
    </div>
    <Attr/>
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

    :root {
        /* Primary */
        --nft-color-blue-500: hsl(215, 51%, 70%);
        --nft-color-cyan-400: hsl(178, 100%, 50%);

        /* Neutral */
        --nft-color-blue-950: hsl(217, 54%, 11%);
        --nft-color-blue-900: hsl(216, 50%, 16%);
        --nft-color-blue-800: hsl(215, 32%, 27%);
        --nft-color-white: hsl(0, 0%, 100%);

        --nft-font-outfit: 'Outfit', sans-serif;
    }

    .container {
        font-size: 18px;
        font-family: var(--nft-font-outfit);
        background-color: var(--nft-color-blue-950);
        color: var(--nft-color-white);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px;
        position: relative;
    }

    .card {
        background-color: var(--nft-color-blue-900);
        border-radius: 15px;
        max-width: 350px;
        width: 100%;
        padding: 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .image-wrapper {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 24px;
        cursor: pointer;
    }

    .image-container {
        position: relative;
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--nft-color-cyan-400);
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .image-wrapper:hover .overlay {
        opacity: 0.5;
    }

    .overlay svg {
        opacity: 1;
    }

    .content h1 {
        font-size: 22px;
        font-weight: 600;
        margin: 0 0 16px;
        color: var(--nft-color-white);
        transition: color 0.3s ease;
    }

    .content h1:hover {
        color: var(--nft-color-cyan-400);
        cursor: pointer;
    }

    .content p {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.5;
        color: var(--nft-color-blue-500);
        margin: 0 0 24px;
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }

    .price,
    .time {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 16px;
        font-weight: 600;
    }

    .price {
        color: var(--nft-color-cyan-400);
    }

    .price svg {
        width: 11px;
        height: 18px;
    }

    .time {
        color: var(--nft-color-blue-500);
        font-weight: 400;
    }

    .time svg {
        width: 17px;
        height: 17px;
    }

    .divider {
        height: 1px;
        background-color: var(--nft-color-blue-800);
        margin-bottom: 16px;
    }

    .creator {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .avatar {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        border: 1px solid var(--nft-color-white);
    }

    .creator p {
        font-size: 16px;
        font-weight: 400;
        color: var(--nft-color-blue-500);
        margin: 0;
    }

    .creator-name {
        color: var(--nft-color-white);
        transition: color 0.3s ease;
    }

    .creator-name:hover {
        color: var(--nft-color-cyan-400);
        cursor: pointer;
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
        .card {
            max-width: 350px;
        }
    }
</style>

