<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
    
    $: bgTopMobile = `${$glbVars.cdnUrl}bg-pattern-top-mobile.svg`;
    $: bgTopDesktop = `${$glbVars.cdnUrl}bg-pattern-top-desktop.svg`;
    $: bgBottomMobile = `${$glbVars.cdnUrl}bg-pattern-bottom-mobile.svg`;
    $: bgBottomDesktop = `${$glbVars.cdnUrl}bg-pattern-bottom-desktop.svg`;
    
    $: bgStyles = `
        --bg-top-mobile: url('${bgTopMobile}');
        --bg-top-desktop: url('${bgTopDesktop}');
        --bg-bottom-mobile: url('${bgBottomMobile}');
        --bg-bottom-desktop: url('${bgBottomDesktop}');
    `;
</script>

<svelte:head>
    {@html `<style>
        .container {
            --bg-top-mobile: url('${bgTopMobile}');
            --bg-top-desktop: url('${bgTopDesktop}');
            --bg-bottom-mobile: url('${bgBottomMobile}');
            --bg-bottom-desktop: url('${bgBottomDesktop}');
        }
    </style>`}
</svelte:head>

<main class="container">
    <div class="top-section">
        <div class="intro">
            <h1>10,000+ of our users love our products.</h1>
            <p>
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
            </p>
        </div>

        <div class="ratings">
            <div class="rating-item">
                <div class="stars">
                    {#each Array(5) as _}
                        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                        </svg>
                    {/each}
                </div>
                <p>Rated 5 Stars in Reviews</p>
            </div>
            <div class="rating-item">
                <div class="stars">
                    {#each Array(5) as _}
                        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                        </svg>
                    {/each}
                </div>
                <p>Rated 5 Stars in Report Guru</p>
            </div>
            <div class="rating-item">
                <div class="stars">
                    {#each Array(5) as _}
                        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z" fill="#EF9546" fill-rule="nonzero"/>
                        </svg>
                    {/each}
                </div>
                <p>Rated 5 Stars in BestTech</p>
            </div>
        </div>
    </div>

    <div class="testimonials">
        <article class="testimonial-card">
            <div class="testimonial-header">
                <img src="{$glbVars.cdnUrl}image-colton.jpg" alt="Colton Smith" class="avatar" />
                <div class="testimonial-info">
                    <h2 class="testimonial-name">Colton Smith</h2>
                    <p class="testimonial-verified">Verified Buyer</p>
                </div>
            </div>
            <p class="testimonial-text">
                "We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                Excellent!"
            </p>
        </article>

        <article class="testimonial-card">
            <div class="testimonial-header">
                <img src="{$glbVars.cdnUrl}image-irene.jpg" alt="Irene Roberts" class="avatar" />
                <div class="testimonial-info">
                    <h2 class="testimonial-name">Irene Roberts</h2>
                    <p class="testimonial-verified">Verified Buyer</p>
                </div>
            </div>
            <p class="testimonial-text">
                "Customer service is always excellent and very quick turn around. Completely
                delighted with the simplicity of the purchase and the speed of delivery."
            </p>
        </article>

        <article class="testimonial-card">
            <div class="testimonial-header">
                <img src="{$glbVars.cdnUrl}image-anne.jpg" alt="Anne Wallace" class="avatar" />
                <div class="testimonial-info">
                    <h2 class="testimonial-name">Anne Wallace</h2>
                    <p class="testimonial-verified">Verified Buyer</p>
                </div>
            </div>
            <p class="testimonial-text">
                "Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!"
            </p>
        </article>
    </div>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap');

    :root {
        /* Primary */
        --sps-color-very-dark-magenta: hsl(300, 43%, 22%);
        --sps-color-soft-pink: hsl(333, 80%, 67%);

        /* Neutral */
        --sps-color-dark-grayish-magenta: hsl(303, 10%, 53%);
        --sps-color-light-grayish-magenta: hsl(300, 24%, 96%);
        --sps-color-white: hsl(0, 0%, 100%);

        --sps-font-league-spartan: 'League Spartan', sans-serif;
    }

    .container {
        font-family: var(--sps-font-league-spartan);
        font-size: 15px;
        background-color: var(--sps-color-white);
        background-image: var(--bg-top-mobile), var(--bg-bottom-mobile);
        background-repeat: no-repeat;
        background-position: top left, bottom right;
        min-height: 100vh;
        padding: 80px 24px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-section {
        max-width: 1110px;
        width: 100%;
        margin-bottom: 48px;
    }

    .intro {
        text-align: center;
        margin-bottom: 40px;
    }

    .intro h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 1;
        color: var(--sps-color-very-dark-magenta);
        margin: 0 0 24px;
        letter-spacing: -1px;
    }

    .intro p {
        font-size: 19px;
        font-weight: 500;
        line-height: 1.4;
        color: var(--sps-color-dark-grayish-magenta);
        margin: 0;
    }

    .ratings {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .rating-item {
        background-color: var(--sps-color-light-grayish-magenta);
        border-radius: 8px;
        padding: 16px 32px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .stars {
        display: flex;
        gap: 8px;
    }

    .rating-item p {
        font-size: 17px;
        font-weight: 700;
        color: var(--sps-color-very-dark-magenta);
        margin: 0;
    }

    .testimonials {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 1110px;
        width: 100%;
    }

    .testimonial-card {
        background-color: var(--sps-color-very-dark-magenta);
        border-radius: 8px;
        padding: 32px;
    }

    .testimonial-header {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-bottom: 24px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: block;
    }

    .testimonial-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .testimonial-name {
        font-size: 17px;
        font-weight: 700;
        color: var(--sps-color-white);
        margin: 0;
    }

    .testimonial-verified {
        font-size: 17px;
        font-weight: 400;
        color: var(--sps-color-soft-pink);
        margin: 0;
    }

    .testimonial-text {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.5;
        color: var(--sps-color-white);
        margin: 0;
    }

    /* Desktop Styles */
    @media (min-width: 768px) {
        .container {
            background-image: var(--bg-top-desktop), var(--bg-bottom-desktop);
            padding: 120px 24px;
        }

        .top-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
            margin-bottom: 72px;
        }

        .intro {
            text-align: left;
            margin-bottom: 0;
        }

        .intro h1 {
            font-size: 56px;
            margin-bottom: 16px;
        }

        .ratings {
            gap: 16px;
        }

        .rating-item {
            flex-direction: row;
            text-align: left;
            padding: 20px 32px;
            max-width: 445px;
        }

        .rating-item:nth-child(1) {
            align-self: flex-start;
        }

        .rating-item:nth-child(2) {
            align-self: center;
        }

        .rating-item:nth-child(3) {
            align-self: flex-end;
        }

        .testimonials {
            flex-direction: row;
            gap: 30px;
        }

        .testimonial-card:nth-child(2) {
            margin-top: 16px;
        }

        .testimonial-card:nth-child(3) {
            margin-top: 32px;
        }
    }

    @media (min-width: 1110px) {
        .container {
            padding: 120px 32px;
        }
    }
</style>

