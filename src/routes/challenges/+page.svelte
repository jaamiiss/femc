<script>
	import { glbVars } from "../../stores";
    
    const projectUrl = "/challenges/"
    const challenges = [
        {
            order: 1,
            title: "QR Code",
            thumb: "1.jpg",
            slug: "qr-code",
            level: "newbie"
        },
        {
            order: 2,
            title: "Product Preview Card",
            thumb: "2.jpg",
            slug: "product-preview-card",
            level: "newbie"
        },
        {
            order: 3,
            title: "Results Summary",
            thumb: "3.jpg",
            slug: "results-summary",
            level: "newbie"
        },
        {
            order: 4,
            title: "Profile Card",
            thumb: "4.jpg",
            slug: "profile-card",
            level: "newbie"
        },
        {
            order: 5,
            title: "Order Summary",
            thumb: "5.jpg",
            slug: "order-summary",
            level: "newbie"
        },
        {
            order: 6,
            title: "3-Col Preview card",
            thumb: "6.jpg",
            slug: "three-column-preview-card",
            level: "newbie"
        },
        {
            order: 7,
            title: "Stats Preview Card",
            thumb: "7.jpg",
            slug: "#",
            level: "soon"
        },
        {
            order: 8,
            title: "Untitled",
            thumb: "7.jpg",
            slug: "#",
            level: "soon"
        }
    ]
    challenges.sort((a, b) => b.order - a.order);
</script>
<section class="patient0">
    <h1 class="gradient-text">Challenges</h1>
</section>
<section class="container" role="main">
    <div class="challenges">
        {#each challenges as item (item.title)}
            <div class="item challenge-{item.slug} {item.level === 'soon' ? 'soon' : ''}" >
                <picture>
                    <source type="image/jpg" srcset="{$glbVars.cdnUrl}/{item.thumb}">      
                    <img src="{$glbVars.cdnUrl}/{item.thumb}" alt="Challenge Preview"/>
                </picture>
                <p class="title">{item.title}</p>
                {#if item.level !== "soon"}
                    <p><span class="level">{item.level}</span></p>
                {/if}
                <a class="link" href="{projectUrl}{item.slug}" title="Project URL">View Solution</a>
            </div>
        {/each}
    </div>
</section>
<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.patient0 {
    display: flex;
    justify-content: center;
    font-family: 'Outfit', sans-serif;
    padding: 50px 50px 20px;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-height: 100vh;
    text-align: center;
    font-family: 'Outfit', sans-serif;
}

.challenges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
}

.challenges > div {
    flex-basis: calc(33.33% - 100px);
    margin: 10px;
    text-align: center;
    padding-bottom: 20px;
    background-color: #f5f5f5;
}

.challenges img {
    max-width: 100%;
    height: auto;
}

.challenges p {
    margin: 10px;
}

.challenges .soon {
    background-color: #cecece;
    color: white;
    filter: grayscale(1);
}

.challenges .soon a {
    visibility: hidden;
}

.title {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
}

.level {
    padding: 2px 8px;
    color: white;
    background-color: teal;
    line-height: 1;
    font-size: 14px;
}

.link {
    font-size: 14px;
    text-decoration: none;
    line-height: 1;
}

.link:hover {
    color: teal;
}

@media screen and (max-width: 1024px) {
    .challenges {
        max-width: 800px;
    }

    .challenges > div {
        flex-basis: calc(50% - 20px);
    }
}

@media screen and (max-width: 480px) {
    .challenges > div {
        flex-basis: 100%;
    }
}
</style>