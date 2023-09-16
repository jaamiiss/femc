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

    --os-color-light-gray: hsl(230, 75%, 98%);
    --os-font-fam: 'Red Hat Display',sans-serif;
}

.container {
    font-family: var(--os-font-fam);
    font-size: 16px;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url(https://ik.imagekit.io/ivw8jbdbt/FEMC/pattern-background-desktop.svg), var(--os-color-pale-blue);
    background-repeat: no-repeat;
    background-size: contain;
} 

.order-summary {
    background: white;
    position: relative;
    width: 450px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 15px 25px 0 hsla(245, 75%, 52%, .11);
}

.pricing {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 1.5rem;
    margin: 1rem 0 1.5rem;
    border-radius: .5rem;    
    background: var(--os-color-light-gray);
}

.icon img {
    width: 35px;
    height: 35px;
}

.details {
    text-align: center;
    padding: 0 10px;
}

.details h1 {
    color: var(--os-color-dark-blue);
    line-height: 2;
    font-weight: 900;
}

.details p {
    color: var(--os-color-desaturated-blue);
    line-height: 1.5;
}

.summary {
    padding: 20px 40px 30px;
}

.cover-photo {
    width: 100%;
}

.plan {
    text-align: left;
    padding: 0 20px 0 15px;
}

.title {
    font-size: 14px;
    color: var(--os-color-dark-blue);
    line-height: 1.5;
    font-weight: 900;
}

.price {
    font-size: 14px;
    color: var(--os-color-desaturated-blue);
}

.btn {
    font-family: var(--os-font-fam);
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    padding: 0.75rem;
    width: 100%;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 14px;
}

.btn-primary {
    background-color: var(--os-color-bright-blue);
    color: white;
    box-shadow: 0 15px 20px 0 hsla(245, 75%, 52%, .25);
    opacity: 1;
    transition: all .2s ease;
}

.btn-cancel {
    background: none;
    color: var(--os-color-desaturated-blue);
    margin-bottom: 0;
    transition: color .2s ease;
}

.btn-primary:hover{
    opacity: 0.6;
}

.btn-cancel:hover{
    color: var(--os-color-dark-blue);
}

.btn-change {
    background: none;
    width: 100%;
    text-decoration: underline;
    color:  var(--os-color-bright-blue);
    text-align: right;
    margin-bottom: 0;
}

@media screen and (max-width: 1025px) {
    .container {
        background: url(https://ik.imagekit.io/ivw8jbdbt/FEMC/pattern-background-mobile.svg), var(--os-color-pale-blue);
        background-repeat: no-repeat;
        background-size: contain;
    } 

    .order-summary {
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    .summary {
        padding: 20px;
    }

    .details {
        text-align: center;
        padding: 0 15px;
    }   

    .details p {
        font-size: 14px;
    }
}
</style>