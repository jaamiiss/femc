<script>
    import { glbVars } from "../../../stores";
    import challengesData from "../../../data/challenges.json";
    
    const sortedChallenges = challengesData.sort((a, b) => b.order - a.order);
    const totalChallenges = sortedChallenges.length;
    const completedChallenges = sortedChallenges.filter(c => c.level !== "soon").length;
</script>

<main class="landing">
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="gradient-text">Frontend Mentor</span>
                <span class="subtitle">Challenges</span>
            </h1>
            <p class="hero-description">
                Practice your frontend skills with {totalChallenges} real-world coding challenges.
                Build modern, responsive components and improve your CSS, HTML, and JavaScript abilities.
            </p>
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">{completedChallenges}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">{totalChallenges}</div>
                    <div class="stat-label">Total Challenges</div>
                </div>
            </div>
            <div class="cta-buttons">
                <a href="/challenges" class="btn btn-primary">View All Challenges</a>
                <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    Visit Frontend Mentor
                </a>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="features-content">
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M16 24L22 30L32 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Real-World Projects</h3>
                <p>Build actual components used in production websites</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4L30 18L44 20L34 30L36 44L24 38L12 44L14 30L4 20L18 18L24 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Multiple Difficulty Levels</h3>
                <p>From newbie to advanced, find challenges that match your skill level</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="40" height="40" rx="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M16 20L24 28L32 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3>Responsive Design</h3>
                <p>Learn to create layouts that work on all devices</p>
            </div>
        </div>
    </section>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

    .landing {
        font-family: 'Outfit', sans-serif;
        min-height: 100vh;
    }

    .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 120px 24px 80px;
        text-align: center;
    }

    .hero-content {
        max-width: 800px;
        margin: 0 auto;
    }

    .hero-title {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        margin: 0 0 24px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .gradient-text {
        background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .subtitle {
        font-size: 2.5rem;
        font-weight: 400;
        opacity: 0.95;
    }

    .hero-description {
        font-size: 1.25rem;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0 0 40px;
    }

    .stats {
        display: flex;
        gap: 48px;
        justify-content: center;
        margin-bottom: 48px;
        flex-wrap: wrap;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .stat-number {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
    }

    .stat-label {
        font-size: 1rem;
        opacity: 0.9;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .cta-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn {
        padding: 16px 32px;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
    }

    .btn-primary {
        background: white;
        color: #667eea;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }

    .btn-secondary {
        background: transparent;
        color: white;
        border: 2px solid white;
    }

    .btn-secondary:hover {
        background: white;
        color: #667eea;
        transform: translateY(-2px);
    }

    .features {
        padding: 80px 24px;
        background: white;
    }

    .features-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
    }

    .feature-card {
        text-align: center;
        padding: 40px 24px;
        border-radius: 12px;
        background: #f9fafb;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 24px;
        color: #667eea;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .feature-card h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #111827;
        margin: 0 0 12px;
    }

    .feature-card p {
        font-size: 1rem;
        color: #6b7280;
        line-height: 1.6;
        margin: 0;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 80px 24px 60px;
        }

        .hero-title {
            font-size: 2.5rem;
        }

        .subtitle {
            font-size: 1.75rem;
        }

        .hero-description {
            font-size: 1.1rem;
        }

        .stats {
            gap: 32px;
        }

        .stat-number {
            font-size: 2.5rem;
        }

        .cta-buttons {
            flex-direction: column;
        }

        .btn {
            width: 100%;
            text-align: center;
        }

        .features-content {
            grid-template-columns: 1fr;
        }
    }
</style>
