<script>
	import Attr from "../Attr.svelte"
    import { glbVars } from "../../../stores";
    import { onMount } from "svelte";
    
    let dynamicCSS = `
    .attribution { color: black; } 
    .attribution a { color: #006970 }
    
    @media (max-width: 1025px) {
        .container .attribution {
            position: relative;
        }
    }`

    onMount(() => {
        const currentPage = window.location.pathname;
        const specificPages = ['/challenges/three-column-preview-card'];

        if (specificPages.includes(currentPage)) {
            const styleElement = document.createElement('style');
            styleElement.textContent = dynamicCSS;
            document.head.appendChild(styleElement);
        }
    });
</script>
<section class="container" role="main">
    <div class="tc-preview-card">
        <div class="column sedans">
            <img src="{$glbVars.cdnUrl}icon-sedans.svg" alt="Car type icon">
            <h1 class="title">Sedans</h1>
            <p class="description">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip.</p>
            <button class="btn">Learn More</button>
        </div>
        <div class="column suvs">
            <img src="{$glbVars.cdnUrl}icon-suvs.svg" alt="Car type icon">
            <h1 class="title">SUVs</h1>
            <p class="description">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures.</p>
            <button class="btn">Learn More</button>
        </div>
        <div class="column luxury">
            <img src="{$glbVars.cdnUrl}icon-luxury.svg" alt="Car type icon">
            <h1 class="title">Luxury</h1>
            <p class="description">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style.</p>
            <button class="btn">Learn More</button>
        </div>
    </div>
    <Attr/>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap');

:root {
    /* Primary */
    --tcpc-color-bright-orange: hsl(31, 77%, 52%);
    --tcpc-color-dark-cyan: hsl(184, 100%, 22%);
    --tcpc-color-very-dark-cyan: hsl(179, 100%, 13%);

    --tcpc-color-transparent-white: hsla(0, 0%, 100%, 0.75);
    --tcpc-color-very-light-gray: hsl(0, 0%, 95%);
}

.container {
	min-height: 100vh;
    display: flex;
    font-size: 15px;
    background: var(--tcpc-color-very-light-gray);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tc-preview-card {
    color: var(--tcpc-color-very-light-gray);
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    border-radius: 8px;
    width: 60rem;
    max-width: 100%;
    overflow: hidden;
}

.column {
    width: 33.333%;
    padding: 3rem;
    display: flex;
    flex-direction: column;;
    gap: 1.8rem;
}

.sedans {
    background: var(--tcpc-color-bright-orange);
}

.suvs {
    background: var(--tcpc-color-dark-cyan);
}

.luxury {
    background: var(--tcpc-color-very-dark-cyan);
}

img {
    width: 30%;
}

.sedans .btn {
    color: var(--tcpc-color-bright-orange);
}

.suvs .btn {
    color: var(--tcpc-color-dark-cyan);
}

.luxury .btn {
    color: var(--tcpc-color-very-dark-cyan);
}

.btn {
    width: fit-content;
    margin-top: 3rem;
    padding: 13px 30px;
    border-radius: 35px;
    border: 2px solid var(--tcpc-color-very-light-gray);
    cursor: pointer;
    background: var(--tcpc-color-very-light-gray);
}

.btn:hover {
    color: var(--tcpc-color-very-light-gray);
    background: transparent;
}

.title {
    font-family: 'Big Shoulders Display', sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
}

.description {
    line-height: 25px;
    padding-bottom: 40px;
}

@media screen and (max-width: 1025px) {
    .tc-preview-card {
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    .column {
        width: 100%;
    }

    .btn {
        margin-top: 0;
    }
}
</style>    