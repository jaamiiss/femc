<script>
    import { page } from '$app/stores';
    import { getLayoutConfig } from '$lib/config/challenge-layouts';
    import '../../app.css';
    
    $: slug = $page.params.slug;
    $: layoutConfig = getLayoutConfig(slug);
    $: fontFamily = layoutConfig.fontFamily || 'inherit';
    $: hasCustomFont = !!layoutConfig.fontFamily;
    $: isThreeColumn = slug === 'three-column-preview-card';
    
    // Generate CSS variables as a style block (no inline styles)
    $: cssVariables = `
        :root {
            --attr-text-color: ${layoutConfig.attrColors.text};
            --attr-link-color: ${layoutConfig.attrColors.link};
            --attr-link-hover-color: ${layoutConfig.attrColors.linkHover};
            --attr-font-family: ${fontFamily};
        }
    `;
</script>

<svelte:head>
    <title>{layoutConfig.title}</title>
    {#if layoutConfig.fontImport}
        {@html `<link rel="stylesheet" href="${layoutConfig.fontImport}">`}
    {/if}
    {@html `<style>${cssVariables}</style>`}
</svelte:head>

<div class="layout-wrapper" class:has-custom-font={hasCustomFont} class:three-column={isThreeColumn}>
    <slot />
</div>

<style>
    /* Ensure layout wrapper doesn't interfere with component backgrounds */
    .layout-wrapper {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background: transparent;
    }
    
    /* Ensure body/html don't have default white backgrounds that interfere with components */
    :global(body),
    :global(html) {
        background: transparent;
    }
    
    :global(.has-custom-font .container .attribution) {
        font-family: var(--attr-font-family);
    }
    
    @media (max-width: 1025px) {
        :global(.three-column .container .attribution) {
            position: relative;
        }
    }
</style>

