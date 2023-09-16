<script>
    import Attr from "../Attr.svelte";

</script>
<section class="container" role="main">
    <div class="single-price-grid">
       <div class="info-community">
            <h1>Join our community</h1>
            <p class="subtitle">30-day, hassle-free money back guarantee</p>
            <p class="description">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
       </div>
       <div class="info-pricing">
            <div class="monthly">
                <h2> Monthly Subscription</h2>
                <p class="price">$29<span>per month</span></p>
                <p>Full access for less than &dollar;1 a day</p>
                <button class="btn">Sign Up</button>
            </div>
            <div class="why-us">
                <h2>Why Us</h2>
                <div class="checklist">
                    <p>Tutorials by industry experts</p>
                    <p>Peer &amp; expert code review</p>
                    <p>Coding exercises</p>
                    <p>Access to our GitHub repos</p>
                    <p>Community forum</p>
                    <p>Flashcard decks</p>
                    <p>New videos every week</p>
                </div>
            </div>
       </div>
    </div>
    <Attr/>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');

:root {
    /* Primary */
    --spg-color-cyan: hsl(179, 62%, 43%);
    --spg-color-bright-yellow: hsl(71, 73%, 54%);

    /* Neutral */
    --spg-color-light-gray: hsl(204, 43%, 93%);
    --spg-color-grayish-blue: hsl(218, 22%, 67%);

    --spg-color-cyan-80: hsla(179, 62%, 43%, 0.8);
    --spg-color-by-80: hsla(71, 73%, 54%, 0.8);
    --spg-color-white: #ffffff;
    --spg-font-fam: 'Karla',sans-serif;
}

.container {
    font-size: 16px;
    font-family: var(--spg-font-fam);
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--spg-color-light-gray);
} 

.single-price-grid {
    border-radius: 10px;
    overflow: hidden;
    width: 635px;
}

.single-price-grid .info-community,
.info-pricing .monthly, 
.info-pricing .why-us {
    padding: 40px;
}

.info-community {
    background: var(--spg-color-white);
}

h1 {
    color: var(--spg-color-cyan);
}

.subtitle {
    color: var(--spg-color-bright-yellow);
}

.info-pricing {
    color: var(--spg-color-white);
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.monthly {
    background: var(--spg-color-cyan);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.btn {
    color: var(--spg-color-white);
    background: var(--spg-color-bright-yellow);
    border: none;
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    font-family: var(--spg-font-fam);
    cursor: pointer;
}

.btn:hover {
    background: var(--spg-color-by-80);
}

.why-us {
    background: var(--spg-color-cyan-80);
    width: 100%;
}

.price {
    font-size: 28px;
    font-weight: 700;
}

.price span {
    color: var(--spg-color-light-gray);
    font-size: 16px;
    padding-left: 10px;
}

.checklist p {
    font-size: 16px;
    line-height: 1.5;
}

@media (max-width: 1025px) {
    .container {
        overflow: unset;
    }
    .single-price-grid {
        width: 90%;
    }

    .info-pricing {
        flex-direction: column;
    }
}
</style>