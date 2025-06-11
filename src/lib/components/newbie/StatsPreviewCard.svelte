<script>
    import Attr from "../Attr.svelte";
    import { glbVars } from "../../../stores";

</script>
<section class="container" role="main">
    <div class="stats-preview-card">
        <div class="content">
            <h1>Get <span class="highlight">insights</span> that help your business grow.</h1>
            <p>Discover the benefits of data analytics and make better decisions
                regarding revenue, customer experience, and overall efficiency.</p>
            <ul>
                <li>
                    <h2>10k+</h2>
                    <p>companies</p>
                </li>
                <li>
                    <h2>314</h2>
                    <p>templates</p>
                </li>
                <li>
                    <h2>12M+</h2>
                    <p>queries</p>
                </li>
            </ul>
        </div>
        <div class="image">
            <div class="overlay"></div>
            <img src="{$glbVars.cdnUrl}image-header-desktop.jpg" alt="Stats Preview Card" />
        </div>
    </div>
    <Attr/>
</section>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap');

:root {
    /* Primary */
    --spc-color-very-dark-blue: hsl(233, 47%, 7%);
    --spc-color-dark-saturated-blue: hsl(244, 38%, 16%);
    --spc-color-soft-violet: hsl(277, 64%, 61%);

    /* Neutral */
    --spc-color-white: hsl(0, 0%, 100%);
    --spc-color-slightly-transparent-white1: hsla(0, 0%, 100%, 0.75);
    --spc-color-slightly-transparent-white2: hsla(0, 0%, 100%, 0.6);

    --spc-font-inter: 'Inter',sans-serif;
    --spc-font-lex-deca: 'Lexend Deca',sans-serif;
}

.container {
    font-size: 15px;
    font-family: var(--spc-font-inter);
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--spc-color-very-dark-blue);
} 

.stats-preview-card {
    border-radius: 10px;
    overflow: hidden;
    width: 635px;
    background-color: var(--spc-color-dark-saturated-blue);
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 10px;
    overflow: hidden;
    margin: 2rem;
}

.content {
    color: var(--spc-color-white);    
    padding: 40px;
}

h1 {
    font-size: 2.25rem;
    margin-bottom: 0.75em;
    font-weight: 700;
}

.highlight {
    color: var(--spc-color-soft-violet)
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
  background: var(--spc-color-soft-violet);
  height: 100%;
}

</style>