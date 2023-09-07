<script>
    import Attr from "./Attr.svelte";
    import { glbVars } from "../../stores";
    import { onMount } from 'svelte';

    let dynamicCSS = `
    .attribution, .attribution a { color: white }`

    onMount(() => {
        const currentPage = window.location.pathname;
        const specificPages = ['/challenges/profile-card'];

        if (specificPages.includes(currentPage)) {
            const styleElement = document.createElement('style');
            styleElement.textContent = dynamicCSS;
            document.head.appendChild(styleElement);
        }
    });
</script>
<section class="container" role="main">
    <div class="profile-card">
        <div class="top-bg"></div>
        <div class="bottom-bg"></div>
        <div class="card">
          <div class="cover-photo"></div>
          <div class="profile-info">
            <div class="profile">
              <div class="pic">
                <img src="{$glbVars.cdnUrl}/image-victor.jpg" alt="Victor Crest" />
              </div>
              <h1 class="name"><span>Victor Crest</span> 26</h1>
              <h2 class="location">London</h2>
            </div>
            <div class="stats">
              <div class="followers">
                <p class="number">80K</p>
                <p class="label">Followers</p>
              </div>
              <div class="likes">
                <p class="number">803K</p>
                <p class="label">Likes</p>
              </div>
              <div class="photos">
                <p class="number">1.4K</p>
                <p class="label">Photos</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Attr/>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

:root {
    --pc-color-dark-cyan: hsl(185, 75%, 39%);
    --pc-color-very-dark-desaturated-blue: hsl(229, 23%, 23%);
    --pc-color-dark-grayish-blue: hsl(227, 10%, 46%);
    --pc-color-dark-gray: hsl(0, 0%, 59%);
    --pc-color-light-gray: hsla(0, 0%, 59%, 0.2);
}

.container {
    font-family: 'Kumbh Sans',sans-serif;
    font-size: 18px;
    height: 100vh;
    position: relative;
    background: var(--pc-color-dark-cyan);
    color: var(--pc-color-very-dark-desaturated-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.top-bg {
    position: absolute;
    background: url("https://ik.imagekit.io/ivw8jbdbt/FEMC/bg-pattern-top.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 978px;
    width: 978px;
    top: -528px;
    left: -284px;
}

.bottom-bg {
    position: absolute;
    background: url("https://ik.imagekit.io/ivw8jbdbt/FEMC/bg-pattern-bottom.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 978px;
    width: 978px;
    bottom: -600px;
    right: -220px;
}

.card {
    background: white;
    font-size: 18px;
    height: auto;
    width: 350px;
    border-radius: 20px;
    z-index: 99;
    position: relative;
}

.card .cover-photo {
    height: 142px;
    background: url("https://ik.imagekit.io/ivw8jbdbt/FEMC/bg-pattern-card.svg");
    border-radius: 20px 20px 0 0;
    z-index: 99;
}

.profile .pic {
    left: 50%;
    transform: translateX(-50%);
    top: 94px;
    background: white;
    position: absolute;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.profile .pic img {
    border-radius: 50%;
}

.profile-info {
    margin-top: 74px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.profile {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--pc-color-light-gray);
    padding-bottom: 25px;
}

.stats {
    padding: 25px 0;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 12px;
}

.profile .name {
    font-size: 20px;
    margin-bottom: 13px;
    color: var(--pc-color-dark-grayish-blue);
}

.profile .name span {
    font-weight: 700;
    padding: 0 5px;
    color: var(--pc-color-very-dark-desaturated-blue);
}

.profile .location {
    color: var(--pc-color-dark-grayish-blue);
    font-size: 16px;
}

.stats p {
    color: var(--pc-color-dark-grayish-blue);
}

.stats .number {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--pc-color-very-dark-desaturated-blue);
}

.stats .label {
    letter-spacing: 2px;
}

@media(max-width: 375px) {
    .top-bg {
        height: 375px;
        width: 375px;
        top:-160px;
        left:-167px;
    }

    .bottom-bg {
        height: 375px;
        width: 375px;
        bottom: -79px;
        right: -167px;
    }
}
</style>