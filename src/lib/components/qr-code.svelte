<div class="container" role="main">
    <div class="card">
       <picture>
            <source type="image/avif" srcset="https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code.avif">
            <source type="image/webp" srcset="https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code.webp">
            <source type="image/jpg" srcset="https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code.jpg">          
            <img src="https://ik.imagekit.io/ivw8jbdbt/FEMC/image-qr-code.png" alt="QR Code">
       </picture>
       <div class="text-content">
            <h3 class="title">Improve your front-end skills by building projects</h3>
            <p class="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>     
    </div>
    <div class="attribution">
        Challenge by <a title="Frontend Mentor Challenge" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a title="Frontend Mentor Profile" href="https://www.frontendmentor.io/profile/jaamiiss">jaamiiss</a>.
    </div>
</div>
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
    margin-bottom: 3rem;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
}

picture {
    width: 100%;
    height: 288px;
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

.attribution {
    background-color: var(--qrc-color-light-gray);
    font-size: 11px;
    text-align: center;
    font-family: 'Outfit', sans-serif;
}
</style>