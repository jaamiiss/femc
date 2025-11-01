<script>
    import './app.css';
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    
    // Remove inline styles from SvelteKit announcer after mount
    onMount(() => {
        if (browser) {
            const announcer = document.getElementById('svelte-announcer');
            if (announcer) {
                // Remove inline style attribute to pass Frontend Mentor validation
                announcer.removeAttribute('style');
            }
        }
    });
</script>
<svelte:head>
    <title>Frontend Mentor Challenges</title>
    <meta name="description" content="Practice your frontend skills with real-world coding challenges" />
</svelte:head>

<slot />

