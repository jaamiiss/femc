<script>
	import Attr from "../../shared/Attr.svelte";
    const imageSrc = "https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code";
</script>
<main class="container">
    <div class="card">
       <picture>
            <source type="image/avif" srcset="{imageSrc}.avif">
            <source type="image/webp" srcset="{imageSrc}.webp">
            <source type="image/jpg" srcset="{imageSrc}.jpg">          
            <img src="{imageSrc}.png" alt="QR Code">
       </picture>
       <div class="text-content">
            <h1 class="title">Improve your front-end skills by building projects</h1>
            <p class="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>     
    </div>
    <Attr/>
</main>
<style>  
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

:root {
    --qrc-color-white: hsl(0, 0%, 100%);
    --qrc-color-light-gray: hsl(212, 45%, 89%);
    --qrc-color-grayish-blue: hsl(220, 15%, 55%);
    --qrc-color-dark-blue: hsl(218, 44%, 22%);    
}   

.container {
    background-color: var(--qrc-color-light-gray);
    min-height: 100vh;
    text-align: center;
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card {    
    background: var(--qrc-color-white);
    width: 320px;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
}

picture {
    width: 100%;
    height: 288px;
    display: block;
}

img {
    width: inherit;
    height: inherit;
    border-radius: 10px;
}

.title {
    font-size: 1.38rem;
    line-height: 1.7rem;
    font-weight: 700;
    padding-top: 13px;
    padding-bottom: 5px;
    margin: 10px 8px;
    color: var(--qrc-color-dark-blue);
}

.description {
    font-size: 15px;
    padding: 0 11.3px;
    margin-bottom: 24px;
    line-height: 1.2;
    color: var(--qrc-color-grayish-blue);
}
</style>