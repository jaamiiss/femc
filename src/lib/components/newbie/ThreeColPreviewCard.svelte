<script>
	import Attr from "../Attr.svelte"
    import { onMount } from "svelte";
    
    const iconCart = "https://ik.imagekit.io/ivw8jbdbt/FEMC/icon-cart.svg";

    let dynamicCSS = `
    .attribution { color: black } .attribution a { color: #006970 }`

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
            <img src="{iconCart}" alt="Car type icon">
            <h1 class="title">Sedans</h1>
            <p class="description">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip.</p>
            <button class="btn">Learn More</button>
        </div>
        <div class="column suvs">
            <img src="{iconCart}" alt="Car type icon">
            <h1 class="title">SUVs</h1>
            <p class="description">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures.</p>
            <button class="btn">Learn More</button>
        </div>
        <div class="column luxury">
            <img src="{iconCart}" alt="Car type icon">
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
    max-width: 70rem;
    overflow: hidden;
    }

.column {
    width: 33.333%;
    padding: 40px;
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
    padding: 13px 30px;
    border-radius: 30px;
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
    text-transform: uppercase;
}
</style>    