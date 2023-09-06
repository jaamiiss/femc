<script>
	import Attribution from "./Attribution.svelte";
    const imageSrc = "https://ik.imagekit.io/ivw8jbdbt/FEMC/image-product-desktop"
    const imageSrcM = "https://ik.imagekit.io/ivw8jbdbt/FEMC/image-product-mobile"
    const iconCart = "https://ik.imagekit.io/ivw8jbdbt/FEMC/icon-cart.svg";
</script>
<section class="container" role="main">
    <div class="product-card">
        <div class="product-image">
            <picture>
                <source media="(min-width: 640px)" srcset="{imageSrc}.avif,
                    {imageSrc}.jpg" />
                <source type="image/avif" srcset="{imageSrcM}.avif">
                <source type="image/webp" srcset="{imageSrcM}.webp">
                <source type="image/jpg" srcset="{imageSrcM}.jpg">          
                <img src="{imageSrcM}.png" alt="A product bottle of Chanel perfume">
            </picture>            
        </div>
        <div class="product-details">
            <h3 class="category">Perfume</h3>
            <h1 class="title">Gabrielle Essence Eau De Parfum</h1>
            <p class="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <ul>
                <li class="price">$149.99</li>
                <li><s>$169.99</s></li>
            </ul>
            <button class="btn">
                <img src="{iconCart}" alt="Cart Icon" /> Add to Cart
            </button>
        </div>
    </div>
    <Attribution/>
</section>
<style> 
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap');

:root {
    --ppc-color-dark-cyan: hsl(158, 36%, 37%);
    --ppc-color-darker-cyan: hsl(158, 38%, 20%);
    --ppc-color-cream: hsl(30, 38%, 92%);
    --ppc-color-very-dark-blue:: hsl(212, 21%, 14%);
    --ppc-color-dark-grayish-blue: hsl(228, 12%, 48%);
    --ppc-color-white: hsl(0, 0%, 100%);
}

section {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    background-color: var(--ppc-color-cream);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 0.1px);
}

.product-card {
    max-width: 600px;
    padding: 15px;
}

.product-image img {
    border-radius: 1rem 1rem 0 0;
}

.product-details {
    background-color: var(--ppc-color-white);
    padding: 1.5rem;
    border-radius: 0 0 1rem 1rem;
    margin-top: -1rem;
}

img {
    max-width: 100%;
}

.category {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--ppc-color-dark-grayish-blue);
    margin-top: 1rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.5rem;
}

.title {
    color: var(--ppc-color-very-dark-blue);
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1;
}

.price {
    color: var(--ppc-color-dark-cyan);
}

.title, .price {
    font-family: "Fraunces", sans-serif;
}

.description {
    color: var(--ppc-color-dark-grayish-blue);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

ul {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    list-style-type: none;
}

ul li:first-child {
    font-size: 2rem;
    margin-right: 1rem;
}

ul li:nth-child(2) {
    color: var(--ppc-color-dark-grayish-blue);
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ppc-color-dark-cyan);
    color: var(--ppc-color-white);
    font-weight: 700;
    font-size: 1rem;
    padding: 1rem 2rem;
    width: 100%;
    border: none;
    border-radius: 0.625rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: var(--ppc-color-darker-cyan);
}

.btn img {
    margin-right: 0.5rem;
}

@media (min-width: 640px) {
    .product-card  {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0
    }

    .product-image img {
        border-radius: 0.625rem 0 0 0.625rem;
        width: 100%;
    }

    .product-details {
        border-radius: 0 0.625rem 0.625rem 0;
        margin-top: 0;
        padding: 1.5rem 2rem 1.5rem;
    }

    picture img {
      height: 100%;
    }

    .description {
      margin-bottom: 1rem;
    }
}
</style>