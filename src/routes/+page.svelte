<script>
    import { onMount } from "svelte";

    let dynamicCSS = `
    .attribution, .attribution a { color: white }`

    onMount(() => {
        
        const currentPage = window.location.pathname;
        const specificPagePath = [
            '/profile-card',
        ];

        if (specificPagePath.includes(currentPage)) {
            const styleElement = document.createElement('style');
            styleElement.textContent = dynamicCSS;
            document.head.appendChild(styleElement);
        }
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
