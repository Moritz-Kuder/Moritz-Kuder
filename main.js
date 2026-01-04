/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #1a365d;
    --secondary-color: #2d3748;
    --accent-color: #3182ce;
    --accent-light: #4299e1;
    --light-color: #f7fafc;
    --dark-color: #1a202c;
    --gray-light: #edf2f7;
    --gray: #a0aec0;
    --success-color: #38a169;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --box-shadow-hover: 0 10px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', 'Roboto', sans-serif;
    line-height: 1.6;
    color: var(--secondary-color);
    background-color: #fff;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
}

.bg-light {
    background-color: var(--light-color);
}

.bg-dark {
    background-color: var(--primary-color);
    color: white;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--primary-color);
}

.section-title.light {
    color: white;
}

.section-subtitle {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--gray);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.section-subtitle.light {
    color: rgba(255, 255, 255, 0.8);
}

/* Typography */
h1, h2, h3, h4 {
    font-weight: 600;
    line-height: 1.2;
}

p {
    margin-bottom: 1.5rem;
}

a {
    text-decoration: none;
    color: inherit;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    text-align: center;
}

.btn-primary {
    background-color: var(--accent-color);
    color: white;
}

.btn-primary:hover {
    background-color: var(--accent-light);
    transform: translateY(-2px);
    box-shadow: var(--box-shadow-hover);
}

.btn-secondary {
    background-color: transparent;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);
}

.btn-secondary:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-2px);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.nav-brand {
    display: flex;
    flex-direction: column;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
}

.logo-tax {
    color: var(--accent-color);
}

.tagline {
    font-size: 0.8rem;
    color: var(--gray);
    margin-top: -5px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 30px;
}

.nav-menu a {
    font-weight: 500;
    color: var(--secondary-color);
    transition: var(--transition);
}

.nav-menu a:hover {
    color: var(--accent-color);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--primary-color);
    cursor: pointer;
}

/* Hero Section */
.hero {
    padding: 160px 0 100px;
    background: linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%);
    margin-top: 70px;
}

.hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.hero-content {
    flex: 1;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
    color: var(--secondary-color);
}

.hero-cta {
    display: flex;
    gap: 20px;
}

.hero-visual {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cloud-architecture {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.cloud-icon, .anytax-icon, .partner-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    box-shadow: var(--box-shadow);
}

.cloud-icon {
    background-color: #4285f4;
    color: white;
}

.anytax-icon {
    background-color: var(--accent-color);
    color: white;
}

.partner-icon {
    background-color: var(--success-color);
    color: white;
}

.architecture-line {
    width: 60px;
    height: 4px;
    background-color: var(--gray-light);
    margin: 0 10px;
}

.architecture-label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    font-weight: 500;
    color: var(--secondary-color);
}

/* Overview Section */
.overview-content {
    display: flex;
    gap: 50px;
    align-items: flex-start;
    margin-top: 40px;
}

.overview-text {
    flex: 2;
}

.overview-stats {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.stat-card {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 25px;
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover);
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 5px;
}

.stat-label {
    font-weight: 500;
    color: var(--secondary-color);
}

/* Solutions Section */
.solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.solution-card {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 30px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    text-align: center;
}

.solution-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover);
}

.solution-icon {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin-bottom: 20px;
}

.solution-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--primary-color);
}

/* Google Cloud Integration */
.gcp-intro {
    max-width: 800px;
    margin: 0 auto 50px;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
}

.gcp-services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
}

.gcp-service {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 25px;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    text-align: center;
}

.gcp-service:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-hover);
}

.gcp-service h4 {
    margin: 15px 0 10px;
    color: var(--primary-color);
}

.service-icon {
    font-size: 2.2rem;
    color: var(--accent-color);
}

.gcp-benefits {
    background-color: white;
    border-radius: var(--border-radius);
    padding: 40px;
    box-shadow: var(--box-shadow);
}

.benefits-list {
    list-style: none;
}

.benefits-list li {
    margin-bottom: 15px;
    padding-left: 35px;
    position: relative;
    font-size: 1.05rem;
}

.benefits-list li i {
    position: absolute;
    left: 0;
    top: 5px;
    color: var(--success-color);
    font-size: 1.2rem;
}

/* Contact Section */
.contact-content {
    display: flex;
    gap: 60px;
    margin-top: 40px;
}

.contact-info {
    flex: 1;
}

.contact-form {
    flex: 1;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.contact-icon {
    font-size: 1.5rem;
    color: var(--accent-light);
    margin-right: 15px;
    margin-top: 5px;
}

.contact-item h4 {
    margin-bottom: 5px;
    color: white;
}

.contact-item a {
    color: var(--accent-light);
    transition: var(--transition);
}

.contact-item a:hover {
    color: white;
    text-decoration: underline;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border-radius: var(--border-radius);
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-light);
    background-color: rgba(255, 255, 255, 0.15);
}

.form-group textarea {
    resize: vertical;
}

/* Footer */
.footer {
    background-color: var(--dark-color);
    color: white;
    padding: 60px 0 30px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-brand p {
    margin-top: 15px;
    color: var(--gray);
    max-width: 300px;
}

.footer-links h4,
.footer-partner h4 {
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: var(--gray);
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--accent-light);
}

.gcp-badge {
    display: inline-flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 8px 15px;
    margin-bottom: 15px;
}

.gcp-badge i {
    font-size: 1.5rem;
    margin-right: 10px;
    color: #4285f4;
}

.footer-copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--gray);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero .container {
        flex-direction: column;
        text-align: center;
    }
    
    .hero-cta {
        justify-content: center;
    }
    
    .overview-content {
        flex-direction: column;
    }
    
    .contact-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.3rem;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        flex-direction: column;
        background-color: white;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        padding: 20px 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 15px 0;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .architecture-label {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    .footer-content {
        flex-direction: column;
    }
}
