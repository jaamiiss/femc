<script>
    import Attr from "../Attr.svelte";

</script>
<section class="container" role="main">
    <div class="stats-preview-card">
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
    --spc-color-slightly-transparent-white2: hsla(0, 0%, 100%, 0.6)
;

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
}
</style>