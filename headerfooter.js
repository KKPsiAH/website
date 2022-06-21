class psi_head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta name="description" content="Welcome to Kappa Kappa Psi, Alpha Eta Chapter at the University of Florida!">
            <meta name="keywords" content="Kappa Kappa Psi Alpha Eta, kappa kappa psi, kkp, kkpsi, psi, florida, UF, University of Florida, AH, alpha eta, alpha eta chapter, chapter, fraturnity">
            <meta name="author" content="Kappa Kappa Psi | Alpha Eta">
            <link rel="icon" href="img\\logos\\kkpsi-icon.png">
            <link rel="stylesheet" href="css/style.css">
            <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" data-auto-a11y="true"></script>
            <script src="scripts/script.js"></script>
        `
    }
}

class psi_header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div id="header-logo">
                <a href="index.html"><img src="img\\logos\\KappaKappaPsi.png" alt="Kappa Kappa Psi Logo"></img></a>
            </div>
            <div id="header-navi">
                <div id="header-navi-title">
                Alpha Eta Chapter of Kappa Kappa Psi
                </div>
                <div>
                <nav>
                    <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="whyKKY.html">Why KK&Psi;?</a></li>
                    <li><a href="officers.html">Our Officers</a></li>
                    <li><a href="brothers.html">Our Brothers</a></li>
                    <li><a href="alumni.html">Alumni</a></li>
                    <li><a href="news.html">AH News</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <!---
                    <li><a style="color:#faac37" href="gatorband5k.html">Gator Band 5K</a></li>
                    --->
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        `
    }
}

class psi_footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer-title">
                    Alpha Eta Chapter of Kappa Kappa Psi
                </div>
                <div id="footer-adress">
                    Steinbrenner Band Hall, 1556 Inner Road Gainesville, FL 32611
                </div>

                <div>
                    <br>
                    <a id="footer-social" href="https://www.facebook.com/KKPsiAH/" target="_blank"><i class="fab fa-facebook-square fa-3x" aria-hidden="true"></i></a>
                    <a id="footer-social" href="https://www.instagram.com/kkpsiah/" target="_blank"><i class="fab fa-instagram-square fa-3x" aria-hidden="true"></i></a>
                    <a id="footer-social" href="https://www.youtube.com/channel/UC2n2gXItInQz6vkEESNTHbA" target="_blank"><i class="fab fa-youtube-square fa-3x" aria-hidden="true"></i></a>
                </div>

                <div id="footer-navi">
                    <br>
                    <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="whyKKY.html">Prospective Members</a></li>
                        <li><a href="brothers.html">Our Brothers</a></li>
                        <li><a href="officers.html">Our Officers</a></li>
                        <li><a href="alumni.html">Alumni</a></li>
                        <li><a href="news.html">AH New</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                    </nav>
                </div>
                <div id="footer-copyright">
                    <br>©2022 Kappa Kappa Psi, Alpha Eta Chapter. (<a href="https://docs.google.com/forms/d/e/1FAIpQLSegENJAInXQ2jWl0D-xCNIUJyomQjdl3U6bLBLXkoTLfsgWlA/viewform?usp=sf_link">report an issue</a>)
                </div>
            </footer>
        `
    }
}

customElements.define('psi-head', psi_head)
customElements.define('psi-header', psi_header)
customElements.define('psi-footer', psi_footer)