<script>
    import Attr from "../../shared/Attr.svelte";
    import { glbVars } from "../../../../stores";
</script>

<main class="container">
    <header class="header">
        <h1>
            <span class="title-thin">Reliable, efficient delivery</span>
            <span class="title-bold">Powered by Technology</span>
        </h1>
        <p class="description">
            Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful
        </p>
    </header>

    <div class="cards-grid">
        <div class="card card-supervisor">
            <h2 class="card-title">Supervisor</h2>
            <p class="card-description">Monitors activity to identify project roadblocks</p>
            <div class="card-icon">
                <img src="{$glbVars.cdnUrl}icon-supervisor.svg" alt="Supervisor icon" />
            </div>
        </div>

        <div class="card card-team-builder">
            <h2 class="card-title">Team Builder</h2>
            <p class="card-description">Scans our talent network to create the optimal team for your project</p>
            <div class="card-icon">
                <img src="{$glbVars.cdnUrl}icon-team-builder.svg" alt="Team Builder icon" />
            </div>
        </div>

        <div class="card card-karma">
            <h2 class="card-title">Karma</h2>
            <p class="card-description">Regularly evaluates our talent to ensure quality</p>
            <div class="card-icon">
                <img src="{$glbVars.cdnUrl}icon-karma.svg" alt="Karma icon" />
            </div>
        </div>

        <div class="card card-calculator">
            <h2 class="card-title">Calculator</h2>
            <p class="card-description">Uses data from past projects to provide better delivery estimates</p>
            <div class="card-icon">
                <img src="{$glbVars.cdnUrl}icon-calculator.svg" alt="Calculator icon" />
            </div>
        </div>
    </div>
    <Attr/>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

    :root {
        /* Primary */
        --fcf-color-red: hsl(0, 78%, 62%);
        --fcf-color-cyan: hsl(180, 62%, 55%);
        --fcf-color-orange: hsl(34, 97%, 64%);
        --fcf-color-blue: hsl(212, 86%, 64%);

        /* Neutral */
        --fcf-color-grey-500: hsl(234, 12%, 34%);
        --fcf-color-grey-400: hsl(212, 6%, 44%);
        --fcf-color-white: hsl(0, 0%, 100%);

        --fcf-font-poppins: 'Poppins', sans-serif;
    }

    .container {
        font-family: var(--fcf-font-poppins);
        font-size: 15px;
        background-color: hsl(0, 0%, 98%);
        min-height: 100vh;
        padding: 80px 32px;
        position: relative;
    }

    .header {
        text-align: center;
        max-width: 540px;
        margin: 0 auto 64px;
    }

    .header h1 {
        font-size: 24px;
        font-weight: 200;
        color: var(--fcf-color-grey-500);
        line-height: 1.5;
        margin: 0 0 16px;
    }

    .title-bold {
        display: block;
        font-weight: 600;
        color: var(--fcf-color-grey-500);
    }

    .description {
        font-size: 15px;
        font-weight: 400;
        color: var(--fcf-color-grey-400);
        line-height: 1.6;
        margin: 0;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
        max-width: 1110px;
        margin: 0 auto;
    }

    .card {
        background-color: var(--fcf-color-white);
        border-radius: 8px;
        padding: 32px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        position: relative;
        border-top: 4px solid;
        display: flex;
        flex-direction: column;
    }

    .card-supervisor {
        border-color: var(--fcf-color-cyan);
    }

    .card-team-builder {
        border-color: var(--fcf-color-red);
    }

    .card-karma {
        border-color: var(--fcf-color-orange);
    }

    .card-calculator {
        border-color: var(--fcf-color-blue);
    }

    .card-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--fcf-color-grey-500);
        margin: 0 0 8px;
    }

    .card-description {
        font-size: 13px;
        font-weight: 400;
        color: var(--fcf-color-grey-400);
        line-height: 1.6;
        margin: 0 0 32px;
        flex: 1;
    }

    .card-icon {
        align-self: flex-end;
        margin-top: auto;
    }

    .card-icon img {
        width: 64px;
        height: 64px;
        display: block;
    }

    /* Desktop Layout - Cross Pattern */
    @media (min-width: 768px) {
        .container {
            padding: 80px 24px;
        }

        .header h1 {
            font-size: 36px;
        }

        .cards-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, auto);
            gap: 30px;
            align-items: center;
        }

        .card-supervisor {
            grid-column: 1;
            grid-row: 2 / 4;
        }

        .card-team-builder {
            grid-column: 2;
            grid-row: 1 / 3;
        }

        .card-karma {
            grid-column: 2;
            grid-row: 3 / 5;
        }

        .card-calculator {
            grid-column: 3;
            grid-row: 2 / 4;
        }
    }

    @media (min-width: 1110px) {
        .container {
            padding: 80px 32px;
        }
    }
</style>

