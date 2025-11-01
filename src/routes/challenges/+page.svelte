<script>
	import { glbVars } from "../../stores";
    import challengesData from "../../data/challenges.json";
    import Spinner from "../../lib/components/shared/Spinner.svelte";
    import PlaceholderImage from "../../lib/components/shared/PlaceholderImage.svelte";
    import { onMount } from "svelte";
    
    const projectUrl = "/challenges/";
    
    // Available levels from the data
    const allLevels = ["all", "newbie", "intermediate", "junior", "soon"];
    
    // State
    let selectedLevel = "all";
    let viewMode = "grid"; // grid, list, card
    let searchQuery = "";
    let currentPage = 1;
    let itemsPerPage = 12;
    let isLoading = true;
    
    // Sort and filter challenges
    const sortedChallenges = challengesData.sort((a, b) => b.order - a.order);
    
    // Simulate loading time (in real app, this would be an async data fetch)
    onMount(() => {
        setTimeout(() => {
            isLoading = false;
        }, 500);
    });
    
    // Get unique levels from data
    $: availableLevels = ["all", ...new Set(sortedChallenges.map(c => c.level))];
    
    // Combined filtering (level + search)
    $: filteredChallenges = sortedChallenges.filter(challenge => {
        const matchesLevel = selectedLevel === "all" || challenge.level === selectedLevel;
        const matchesSearch = searchQuery === "" || 
            challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLevel && matchesSearch;
    });
    
    // Pagination calculations
    $: totalPages = Math.ceil(filteredChallenges.length / itemsPerPage);
    $: paginatedChallenges = filteredChallenges.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    
    // Reset to page 1 when filters or search change
    $: {
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = 1;
        }
    }
    
    /**
     * @param {string} level
     */
    function setLevel(level) {
        selectedLevel = level;
        currentPage = 1;
    }
    
    /**
     * @param {string} mode
     */
    function setView(mode) {
        viewMode = mode;
    }
    
    /**
     * @param {any} event
     */
    function handleSearch(event) {
        searchQuery = event.target?.value || '';
        currentPage = 1;
    }
    
    /**
     * @param {number} page
     */
    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    function previousPage() {
        if (currentPage > 1) {
            currentPage--;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
</script>

<section class="header">
    <h1 class="gradient-text">Frontend Challenges</h1>
    <p class="subtitle">Practice your skills with real-world frontend challenges</p>
</section>

<section class="container" role="main">
    <div class="controls">
        <div class="search-container">
            <div class="search-wrapper">
                <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="9" r="6"/>
                    <path d="m15 15-3-3"/>
                </svg>
                <input 
                    type="text"
                    class="search-input"
                    placeholder="Search challenges..."
                    value={searchQuery}
                    on:input={handleSearch}
                />
                {#if searchQuery}
                    <button class="clear-search" on:click={() => { searchQuery = ''; currentPage = 1; }} aria-label="Clear search">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M12.854 3.146a.5.5 0 0 0-.708 0L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146a.5.5 0 0 0 0-.708z"/>
                        </svg>
                    </button>
                {/if}
            </div>
        </div>
        
        <div class="controls-row">
            <div class="filters">
                <span class="filter-label">Filter by level:</span>
                <div class="filter-buttons">
                    {#each availableLevels as level}
                        <button 
                            class="filter-btn {selectedLevel === level ? 'active' : ''}"
                            on:click={() => setLevel(level)}
                            aria-pressed={selectedLevel === level}
                        >
                            {level === "all" ? "All" : level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
        {/each}
                </div>
            </div>
            
            <div class="view-controls">
                <span class="view-label">View:</span>
                <div class="view-buttons">
                    <button 
                        class="view-btn {viewMode === 'grid' ? 'active' : ''}"
                        on:click={() => setView('grid')}
                        aria-label="Grid view"
                        title="Grid view"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="1" y="1" width="6" height="6" rx="1"/>
                            <rect x="9" y="1" width="6" height="6" rx="1"/>
                            <rect x="1" y="9" width="6" height="6" rx="1"/>
                            <rect x="9" y="9" width="6" height="6" rx="1"/>
                        </svg>
                    </button>
                    <button 
                        class="view-btn {viewMode === 'card' ? 'active' : ''}"
                        on:click={() => setView('card')}
                        aria-label="Card view"
                        title="Card view"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="1" y="1" width="14" height="14" rx="1"/>
                        </svg>
                    </button>
                    <button 
                        class="view-btn {viewMode === 'list' ? 'active' : ''}"
                        on:click={() => setView('list')}
                        aria-label="List view"
                        title="List view"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="1" y="1" width="14" height="3" rx="0.5"/>
                            <rect x="1" y="6" width="14" height="3" rx="0.5"/>
                            <rect x="1" y="11" width="14" height="3" rx="0.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    {#if isLoading}
        <div class="loading-container">
            <Spinner size={60} color="#ffffff" />
            <p class="loading-text">Loading challenges...</p>
        </div>
    {:else}
        <div class="results-info">
            <span>
                {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''} found
                {filteredChallenges.length > itemsPerPage ? ` (Page ${currentPage} of ${totalPages})` : ''}
            </span>
        </div>
        
        <div class="challenges view-{viewMode}">
            {#each paginatedChallenges as item (item.slug + '-' + item.order)}
                {#if item.level === 'soon'}
                    <div class="challenge-item soon disabled" title="{item.title} - Coming Soon">
                        <div class="challenge-image">
                            <PlaceholderImage 
                                src="{`${$glbVars.cdnUrl}${item.thumb}`}" 
                                alt="{item.title} Preview"
                                className="challenge-img"
                            />
                            <div class="soon-badge">Coming Soon</div>
                        </div>
                        <div class="challenge-content">
                            <h3 class="challenge-title">{item.title}</h3>
                        </div>
                    </div>
                {:else}
                    <a href="{projectUrl}{item.slug}" class="challenge-item" title="View {item.title}">
                        <div class="challenge-image">
                            <PlaceholderImage 
                                src="{`${$glbVars.cdnUrl}${item.thumb}`}" 
                                alt="{item.title} Preview"
                                className="challenge-img"
                            />
                        </div>
                        <div class="challenge-content">
                            <h3 class="challenge-title">{item.title}</h3>
                            <span class="challenge-level level-{item.level}">{item.level}</span>
                        </div>
                    </a>
                {/if}
            {/each}
        </div>
    {/if}
    
    {#if !isLoading && filteredChallenges.length === 0}
        <div class="empty-state">
            <p>No challenges found{searchQuery ? ` for "${searchQuery}"` : ''}.</p>
            <button class="reset-btn" on:click={() => { setLevel('all'); searchQuery = ''; }}>Show All Challenges</button>
        </div>
    {/if}
    
    {#if !isLoading && filteredChallenges.length > itemsPerPage}
        <div class="pagination">
            <button 
                class="pagination-btn {currentPage === 1 ? 'disabled' : ''}"
                on:click={previousPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10 12L6 8l4-4"/>
                </svg>
                Previous
            </button>
            
            <div class="pagination-numbers">
                {#if totalPages > 7}
                    {#if currentPage <= 4}
                        {#each Array(5) as _, i}
                            {@const page = i + 1}
                            <button 
                                class="pagination-number {currentPage === page ? 'active' : ''}"
                                on:click={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        {/each}
                        <span class="pagination-ellipsis">...</span>
                        <button 
                            class="pagination-number"
                            on:click={() => goToPage(totalPages)}
                        >
                            {totalPages}
                        </button>
                    {:else if currentPage >= totalPages - 3}
                        <button 
                            class="pagination-number"
                            on:click={() => goToPage(1)}
                        >
                            1
                        </button>
                        <span class="pagination-ellipsis">...</span>
                        {#each Array(5) as _, i}
                            {@const page = totalPages - 4 + i}
                            <button 
                                class="pagination-number {currentPage === page ? 'active' : ''}"
                                on:click={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        {/each}
                    {:else}
                        <button 
                            class="pagination-number"
                            on:click={() => goToPage(1)}
                        >
                            1
                        </button>
                        <span class="pagination-ellipsis">...</span>
                        {#each Array(3) as _, i}
                            {@const page = currentPage - 1 + i}
                            <button 
                                class="pagination-number {currentPage === page ? 'active' : ''}"
                                on:click={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        {/each}
                        <span class="pagination-ellipsis">...</span>
                        <button 
                            class="pagination-number"
                            on:click={() => goToPage(totalPages)}
                        >
                            {totalPages}
                        </button>
                    {/if}
                {:else}
                    {#each Array(totalPages) as _, i}
                        {@const page = i + 1}
                        <button 
                            class="pagination-number {currentPage === page ? 'active' : ''}"
                            on:click={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    {/each}
                {/if}
            </div>
            
            <button 
                class="pagination-btn {currentPage === totalPages ? 'disabled' : ''}"
                on:click={nextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            >
                Next
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6 12l4-4-4-4"/>
                </svg>
            </button>
        </div>
    {/if}
</section>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

    :global(body) {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
    }

    .header {
        text-align: center;
        padding: 60px 20px 40px;
        color: white;
    }

    .gradient-text {
        font-family: 'Outfit', sans-serif;
        font-size: 3rem;
        font-weight: 700;
        margin: 0 0 10px;
        background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .subtitle {
    font-family: 'Outfit', sans-serif;
        font-size: 1.1rem;
        opacity: 0.9;
        margin: 0;
}

.container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px 60px;
        font-family: 'Outfit', sans-serif;
    }

    .controls {
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .search-container {
        width: 100%;
    }

    .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        max-width: 500px;
    }

    .search-icon {
        position: absolute;
        left: 16px;
        color: #6b7280;
        pointer-events: none;
    }

    .search-input {
        width: 100%;
        padding: 12px 16px 12px 44px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'Outfit', sans-serif;
        transition: border-color 0.2s ease;
    }

    .search-input:focus {
        outline: none;
        border-color: #667eea;
    }

    .clear-search {
        position: absolute;
        right: 8px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        border-radius: 4px;
        transition: all 0.2s ease;
    }

    .clear-search:hover {
        background: #f3f4f6;
        color: #111827;
    }

    .controls-row {
    display: flex;
        justify-content: space-between;
        align-items: center;
    flex-wrap: wrap;
        gap: 20px;
    }

    .filters,
    .view-controls {
        display: flex;
    align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }

    .filter-label,
    .view-label {
        font-weight: 600;
        color: #374151;
        font-size: 0.9rem;
    }

    .filter-buttons,
    .view-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .filter-btn,
    .view-btn {
        padding: 8px 16px;
        border: 2px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 600;
        color: #6b7280;
        transition: all 0.2s ease;
    font-family: 'Outfit', sans-serif;
    }

    .filter-btn:hover,
    .view-btn:hover {
        border-color: #667eea;
        color: #667eea;
        transform: translateY(-1px);
    }

    .filter-btn.active,
    .view-btn.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
    }

    .view-btn {
        padding: 8px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .results-info {
        color: white;
        margin-bottom: 20px;
        font-size: 0.9rem;
        opacity: 0.9;
}

.challenges {
        display: grid;
        gap: 24px;
    }

    /* Grid View - Large vertical cards */
    .challenges.view-grid {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 32px;
    }

    .challenges.view-grid .challenge-item {
        min-height: 400px;
    }

    /* Card View - Compact horizontal cards */
    .challenges.view-card {
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        gap: 16px;
    }

    .challenges.view-card .challenge-item {
        flex-direction: row;
        max-height: 180px;
        border-radius: 8px;
    }

    /* List View */
    .challenges.view-list {
        grid-template-columns: 1fr;
    }

    .challenge-item {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
        flex-direction: column;
    }

    .challenges.view-list .challenge-item {
        flex-direction: row;
        max-height: 200px;
    }

    .challenge-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .challenge-item.soon {
        opacity: 0.7;
        filter: grayscale(0.8);
}

    .challenge-item.disabled {
        cursor: not-allowed;
        pointer-events: none;
    }
    
    .challenge-item.disabled:hover {
        transform: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .challenge-image {
        position: relative;
        width: 100%;
        overflow: hidden;
        background: #f3f4f6;
    }

    /* Card view - smaller horizontal image */
    .challenges.view-card .challenge-image {
        width: 200px;
        flex-shrink: 0;
        height: 180px;
    }

    /* List view - larger horizontal image */
    .challenges.view-list .challenge-image {
        width: 300px;
        flex-shrink: 0;
    }

    /* Grid view - full width vertical image */
    .challenges.view-grid .challenge-image {
        aspect-ratio: 16 / 10;
        min-height: 240px;
    }

    .challenge-img {
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 0.3s ease;
        object-fit: cover;
    }
    
    .challenge-item:hover .challenge-img {
        transform: scale(1.05);
}

    /* Ensure placeholder container fills image area */
    .challenge-image :global(.placeholder-container) {
        width: 100%;
        height: 100%;
}

    .challenges.view-grid .challenge-image :global(.placeholder-container) {
        min-height: 240px;
}

    .challenges.view-card .challenge-image :global(.placeholder-container) {
        height: 180px;
    }
    
    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 20px;
        gap: 24px;
    }
    
    .loading-text {
        color: white;
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
        opacity: 0.9;
    }

    .soon-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
    }

    .challenge-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
}

    /* Card view - horizontal content layout */
    .challenges.view-card .challenge-content {
        padding: 16px;
        justify-content: space-between;
        flex: 1;
    }

    /* List view - horizontal content layout */
    .challenges.view-list .challenge-content {
        justify-content: center;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex: 1;
}

    .challenge-title {
        font-size: 1.25rem;
    font-weight: 700;
        margin: 0;
        color: #111827;
    }

    /* Card view - smaller title */
    .challenges.view-card .challenge-title {
        font-size: 1.1rem;
        line-height: 1.3;
}

    /* Grid view - larger title */
    .challenges.view-grid .challenge-title {
        font-size: 1.4rem;
    }

    .challenge-level {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        align-self: flex-start;
    }

    .level-newbie {
        background: #dbeafe;
        color: #1e40af;
    }

    .level-intermediate {
        background: #fef3c7;
        color: #92400e;
    }

    .level-junior {
        background: #fce7f3;
        color: #831843;
    }

    .level-soon {
        background: #e5e7eb;
        color: #4b5563;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
        background: white;
        border-radius: 12px;
        color: #6b7280;
    }

    .reset-btn {
        margin-top: 16px;
        padding: 10px 24px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        font-family: 'Outfit', sans-serif;
        transition: transform 0.2s ease;
    }

    .reset-btn:hover {
        transform: translateY(-2px);
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 40px;
        flex-wrap: wrap;
}

    .pagination-btn {
        padding: 10px 16px;
        border: 2px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 600;
        color: #6b7280;
        transition: all 0.2s ease;
        font-family: 'Outfit', sans-serif;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .pagination-btn:hover:not(.disabled) {
        border-color: #667eea;
        color: #667eea;
    }

    .pagination-btn.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .pagination-numbers {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .pagination-number {
        min-width: 40px;
        height: 40px;
        padding: 0 8px;
        border: 2px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 600;
        color: #6b7280;
        transition: all 0.2s ease;
        font-family: 'Outfit', sans-serif;
    }

    .pagination-number:hover {
        border-color: #667eea;
        color: #667eea;
    }

    .pagination-number.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-color: #667eea;
        color: white;
    }

    .pagination-ellipsis {
        padding: 0 8px;
        color: #6b7280;
        font-weight: 600;
}

    @media screen and (max-width: 768px) {
        .gradient-text {
            font-size: 2rem;
        }

        .controls {
            padding: 20px;
        }

        .controls-row {
            flex-direction: column;
            align-items: stretch;
        }

        .filters,
        .view-controls {
            justify-content: center;
        }

        .search-wrapper {
            max-width: 100%;
        }

        .pagination {
            gap: 4px;
        }

        .pagination-btn {
            padding: 8px 12px;
            font-size: 0.8rem;
        }

        .pagination-number {
            min-width: 36px;
            height: 36px;
            font-size: 0.8rem;
        }

        .challenges.view-grid {
            grid-template-columns: 1fr;
        }

        .challenges.view-grid .challenge-item {
            min-height: auto;
        }

        .challenges.view-grid .challenge-image {
            aspect-ratio: 16 / 10;
            min-height: 200px;
    }

        .challenges.view-card {
            grid-template-columns: 1fr;
        }

        .challenges.view-card .challenge-item {
            flex-direction: column;
            max-height: none;
        }

        .challenges.view-card .challenge-image {
            width: 100%;
            height: 200px;
        }

        .challenges.view-card .challenge-content {
            justify-content: flex-start;
        }

        .challenges.view-list .challenge-item {
            flex-direction: column;
            max-height: none;
        }

        .challenges.view-list .challenge-image {
            width: 100%;
        }

        .challenges.view-list .challenge-content {
            flex-direction: column;
            align-items: flex-start;
    }
}

@media screen and (max-width: 480px) {
        .header {
            padding: 40px 16px 30px;
        }

        .container {
            padding: 0 16px 40px;
        }

        .controls {
            padding: 16px;
        }

        .filter-btn {
            padding: 6px 12px;
            font-size: 0.8rem;
    }
}
</style>
