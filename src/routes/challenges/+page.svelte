<script>    
    const projectUrl = "/challenges/"
    const challenges = [
        {
            order: 1,
            title: "QR Code Component",
            thumb: "",
            slug: "qr-code"
        },
        {
            order: 2,
            title: "Product Preview Card",
            thumb: "",
            slug: "product-preview-card"
        },
        {
            order: 3,
            title: "Results Summary Component",
            thumb: "",
            slug: "results-summary"
        },
    ]
</script>
<section class="container" role="main">
    <div class="challenges">
        {#each challenges as item (item.title)}
            <div class="type {item.title.toLowerCase()}">
                <p>{item.title}</p>
                <a href="{projectUrl}{item.slug}" title="Project URL">View</a>
            </div>
        {/each}
    </div>
</section>
<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    min-height: 100vh;
    text-align: center;
}
</style>