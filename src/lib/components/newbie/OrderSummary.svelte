<script>
    import Attr from "../Attr.svelte";
    import { glbVars } from "../../../stores";

</script>
<section class="container" role="main">
    <div class="order-summary">
        <img class="cover-photo" src="{$glbVars.cdnUrl}/illustration-hero.svg" alt="Order Summary Cover">
        <div class="summary">
            <div class="details">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!</p>
            </div>
            <div class="pricing">
                <span class="icon">
                    <img src="{$glbVars.cdnUrl}/icon-music.svg" alt="Music icon">
                </span>
                <div class="plan">
                    <h2 class="title">Annual Plan</h2>
                    <p class="price">$59.099/year
                </div>
                <button class="btn btn-change">Change</button>
            </div>
            <div class="buttons">
                <button class="btn btn-primary">Proceed to Payment</button>
                <button class="btn btn-cancel">Cancel Order</button>
            </div>
        </div>
    </div>
    <Attr/>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap');

:root {
    /* Primary */
    --os-color-pale-blue: hsl(225, 100%, 94%);
    --os-color-bright-blue: hsl(245, 75%, 52%);

    /* Neutral */
    --os-color-very-pale-blue: hsl(225, 100%, 98%);
    --os-color-desaturated-blue: hsl(224, 23%, 55%);
    --os-color-dark-blue: hsl(223, 47%, 23%);
}

.container {
    font-family: 'Red Hat Display',sans-serif;
    font-size: 16px;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--os-color-pale-blue);
} 

.order-summary {
    background: white;
    position: relative;
    width: 350px;
    border-radius: 14px;
    overflow: hidden;
}

.pricing {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
}

.icon img {
    width: 35px;
    height: 35px;
}

.details {
    text-align: center;;
}

.summary {
    padding: 20px;
}

.cover-photo {
    width: 100%;
}

.plan {
    text-align: left;
    padding: 0 20px;
}

.title {
    font-size: 16px;
}

.price {
    font-size: 14px;
}

.btn {
    cursor: pointer;
    border: 0;
    border-radius: 12px;
    padding: 0.75rem;
    width: 100%;
    margin-bottom: 15px;
    font-weight: 700;
}

.btn-primary {
    background-color: var(--os-color-bright-blue);
    color: white;
}

.btn-cancel {
    background: none;
    color: var(--os-color-desaturated-blue);
    margin-bottom: 0;
}

.btn-primary:hover{
    background: var(--os-color-pale-blue);
    color: var(--os-color-desaturated-blue);
}


.btn-cancel:hover{
    background: var(--os-color-bright-blue);
    color: white;
}

.btn-change {
    background: none;
    width: 100%;
    text-decoration: underline;
    color:  var(--os-color-bright-blue);
    text-align: right;
}

</style>