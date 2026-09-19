/* =========================================================
   AXSYS DEVS
   PREMIUM DARK TECHNOLOGY STUDIO
   ========================================================= */

:root {

    --black: #050708;
    --black-2: #090b0c;
    --card: #101315;

    --border: #25282a;

    --white: #f5f5f5;
    --gray: #969a9d;
    --muted: #64696d;

    --ease: cubic-bezier(.22, 1, .36, 1);

}


* {
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    margin: 0;

    min-width: 320px;

    background: var(--black);
    color: var(--white);

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Arial,
        sans-serif;

    overflow-x: hidden;
}


body.modal-open {
    overflow: hidden;
}


a {
    color: inherit;
    text-decoration: none;
}


button,
input,
textarea {
    font: inherit;
}


button {
    cursor: pointer;
}


img {
    max-width: 100%;
    display: block;
}


::selection {
    background: white;
    color: black;
}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {

    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    z-index: 100;

    height: 78px;

    display: flex;
    align-items: center;

    padding: 0 32px;

    border-bottom: 1px solid transparent;

    transition:
        background .4s ease,
        border-color .4s ease,
        backdrop-filter .4s ease;

}


.navbar.scrolled {

    background: rgba(5, 7, 8, .78);

    border-color: rgba(255,255,255,.08);

    backdrop-filter: blur(20px);

}


.brand {

    width: 94px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    background: white;

    border-radius: 7px;

}


.brand img {

    width: 115px;
    height: 115px;

    max-width: none;

    object-fit: contain;

}


.desktop-nav {

    margin-left: auto;

    display: flex;

    gap: 30px;

}


.desktop-nav a {

    color: var(--gray);

    font-size: 12px;

    transition: color .25s ease;

}


.desktop-nav a:hover {
    color: white;
}


.nav-cta {

    margin-left: 32px;

    font-size: 12px;

    color: white;

}


.nav-cta span {
    margin-left: 7px;
}


.menu-button {

    display: none;

    width: 42px;
    height: 42px;

    margin-left: auto;

    background: transparent;

    border: 0;

    position: relative;

}


.menu-button span {

    position: absolute;

    left: 10px;

    width: 22px;
    height: 1px;

    background: white;

    transition: .3s var(--ease);

}


.menu-button span:first-child {
    top: 17px;
}


.menu-button span:last-child {
    top: 25px;
}


.menu-button.open span:first-child {

    top: 21px;

    transform: rotate(45deg);

}


.menu-button.open span:last-child {

    top: 21px;

    transform: rotate(-45deg);

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

.mobile-menu {

    position: fixed;

    inset: 0;

    z-index: 90;

    background: rgba(5,7,8,.98);

    transform: translateY(-100%);

    transition: transform .55s var(--ease);

    padding-top: 100px;

}


.mobile-menu.open {
    transform: translateY(0);
}


.mobile-menu-links {

    display: flex;

    flex-direction: column;

    padding: 25px 30px;

}


.mobile-menu-links a {

    display: flex;

    justify-content: space-between;

    padding: 24px 0;

    border-bottom: 1px solid var(--border);

    font-size: clamp(34px, 8vw, 65px);

    letter-spacing: -.05em;

}


.mobile-menu-links span {
    color: var(--muted);
}


/* =========================================================
   GLOBAL
   ========================================================= */

.section {

    width: min(1400px, calc(100% - 64px));

    margin: auto;

}


.section-number {

    color: var(--muted);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .16em;

}


h1,
h2,
h3 {

    margin: 0;

    font-weight: 600;

    letter-spacing: -.06em;

}


h2 span,
h1 span {

    color: var(--gray);

}


p {
    line-height: 1.5;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--border);

    overflow: hidden;

}


.hero-grid {

    position: absolute;

    inset: 0;

    background-image:

        linear-gradient(
            rgba(255,255,255,.025) 1px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            rgba(255,255,255,.025) 1px,
            transparent 1px
        );

    background-size: 96px 96px;

    mask-image:
        linear-gradient(
            to bottom,
            transparent,
            black 25%,
            black 70%,
            transparent
        );

}


.hero-content {

    position: relative;

    z-index: 5;

    width: 100%;

    padding:
        130px
        7vw
        120px;

}


.hero-brand {

    display: flex;

    align-items: center;

    gap: 17px;

    margin-bottom: 100px;

}


.hero-logo {

    width: 95px;
    height: 42px;

    overflow: hidden;

    display: flex;

    align-items: center;
    justify-content: center;

    background: white;

    border-radius: 7px;

}


.hero-logo img {

    width: 125px;
    height: 125px;

    max-width: none;

    object-fit: contain;

}


.hero-brand strong {

    display: block;

    font-size: 10px;

    letter-spacing: .18em;

}


.hero-brand small {

    display: block;

    margin-top: 5px;

    color: var(--muted);

    font-size: 8px;

    letter-spacing: .15em;

}


.eyebrow {

    color: var(--muted);

    font-size: 11px;

    letter-spacing: .16em;

    font-weight: 700;

    margin-bottom: 24px;

}


.hero h1 {

    font-size: clamp(
        72px,
        12.5vw,
        190px
    );

    line-height: .87;

}


.hero-text > p {

    max-width: 560px;

    margin-top: 45px;

    color: var(--gray);

    font-size: 18px;

}


.hero-buttons {

    display: flex;

    gap: 14px;

    margin-top: 32px;

    flex-wrap: wrap;

}


.button {

    min-height: 50px;

    padding: 0 21px;

    border: 1px solid var(--border);

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: .12em;

    transition:
        transform .3s var(--ease),
        background .3s ease,
        color .3s ease,
        border-color .3s ease;

}


.button:hover {
    transform: translateY(-2px);
}


.button-primary {

    color: #050708;

    background: white;

    border-color: white;

}


.button-secondary {

    color: white;

    background: transparent;

}


.button-secondary:hover {

    border-color: #555b5e;

}


.hero-bottom {

    position: absolute;

    left: 7vw;
    right: 7vw;

    bottom: 30px;

    display: flex;

    align-items: center;

    gap: 15px;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

}


.hero-bottom i {

    width: 70px;

    height: 1px;

    background: var(--border);

}


/* =========================================================
   HERO GEOMETRY
   ========================================================= */

.hero-geometry {

    position: absolute;

    width: min(50vw, 650px);

    aspect-ratio: 1;

    right: 2vw;

    bottom: 7vh;

    opacity: .5;

    transition: transform .8s var(--ease);

}


.geo {

    position: absolute;

    border: 1px solid rgba(255,255,255,.10);

}


.geo-one {

    inset: 13% 25%;

    border-radius: 35% 0 35% 0;

    transform: rotate(30deg);

}


.geo-two {

    inset: 25% 13%;

    border-radius: 0 35% 0 35%;

    transform: rotate(-30deg);

}


.geo-three {

    inset: 31%;

    border-radius: 50%;

}


.node {

    position: absolute;

    width: 5px;
    height: 5px;

    background: #8f969b;

    border-radius: 50%;

}


.node-one {
    top: 13%;
    left: 25%;
}


.node-two {
    right: 12%;
    top: 46%;
}


.node-three {
    bottom: 13%;
    left: 43%;
}


/* =========================================================
   STUDIO
   ========================================================= */

.studio {

    padding:
        20vh
        7vw;

    display: grid;

    grid-template-columns:
        1fr
        3fr;

    gap: 6vw;

}


.studio-content h2 {

    font-size: clamp(
        58px,
        8vw,
        125px
    );

    line-height: .9;

}


.studio-content p {

    max-width: 650px;

    margin:

        55px
        0
        0
        20%;

    color: var(--gray);

    font-size: 21px;

}


/* =========================================================
   SECTION TITLES
   ========================================================= */

.section-title {

    margin:

        35px
        0
        90px
        25%;

}


.section-title h2 {

    font-size: clamp(
        58px,
        8vw,
        125px
    );

    line-height: .9;

}


/* =========================================================
   SERVICES
   ========================================================= */

.services {

    padding-bottom: 15vh;

}


.services-list {

    border-top: 1px solid var(--border);

}


.service {

    min-height: 370px;

    padding: 45px 0;

    display: grid;

    grid-template-columns:
        80px
        1fr
        38%;

    gap: 30px;

    border-bottom: 1px solid var(--border);

}


.service-number {

    color: var(--muted);

    font-size: 11px;

}


.service-content h3 {

    font-size: clamp(
        42px,
        5.5vw,
        80px
    );

    line-height: .92;

}


.service-content p {

    max-width: 480px;

    color: var(--gray);

    margin-top: 28px;

}


.service-link {

    display: inline-block;

    margin-top: 27px;

    font-size: 10px;

    letter-spacing: .12em;

    text-transform: uppercase;

}


.service-link:hover {
    opacity: .65;
}


/* =========================================================
   SERVICE VISUALS
   ========================================================= */

.service-visual {

    min-height: 270px;

    border: 1px solid var(--border);

    background: var(--card);

    position: relative;

    overflow: hidden;

}


.ai-visual {

    display: flex;

    align-items: center;
    justify-content: center;

}


.ai-circle {

    position: absolute;

    width: 130px;
    height: 130px;

    border: 1px solid #34393b;

    border-radius: 50%;

    animation: rotate 14s linear infinite;

}


.ai-circle.second {

    width: 190px;
    height: 190px;

    animation-direction: reverse;

}


.ai-circle.third {

    width: 250px;
    height: 250px;

}


@keyframes rotate {

    to {
        transform: rotate(360deg);
    }

}


/* BROWSER */

.browser-small {
    padding: 14px;
}


.browser-top {

    height: 25px;

    display: flex;

    gap: 5px;

    align-items: center;

    border-bottom: 1px solid var(--border);

}


.browser-top i {

    width: 5px;
    height: 5px;

    border: 1px solid #666;

    border-radius: 50%;

}


.browser-body {

    padding: 25px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 8px;

}


.browser-body div {

    height: 70px;

    background: #191d1f;

}


.browser-body div:first-child {

    grid-column: span 2;

    height: 100px;

    background: #e9e9e9;

}


/* PHONES */

.phones-small {

    display: flex;

    align-items: flex-end;
    justify-content: center;

    gap: 15px;

}


.phone {

    width: 105px;
    height: 215px;

    border:
        1px solid
        #454a4d;

    border-radius: 18px 18px 0 0;

    background: #080a0b;

}


.phone-front {

    transform:
        translateY(-25px)
        rotate(-2deg);

}


.phone-back {

    transform:
        rotate(8deg);

}


/* GAME */

.game-small {

    display: grid;

    place-items: center;

}


.game-square {

    width: 55%;

    aspect-ratio: 16 / 9;

    border: 1px solid #555b5e;

    display: grid;

    place-items: center;

    font-size: 9px;

    letter-spacing: .18em;

    transform:
        perspective(500px)
        rotateX(20deg)
        rotateZ(-5deg);

}


/* =========================================================
   SHOWCASES
   ========================================================= */

.showcase {

    min-height: 100vh;

    width: min(1400px, calc(100% - 64px));

    margin: auto;

    padding:
        16vh
        0;

    display: grid;

    grid-template-columns:
        38%
        62%;

    gap: 5vw;

    align-items: center;

    border-top: 1px solid var(--border);

}


.showcase-text h2 {

    margin-top: 30px;

    font-size: clamp(
        55px,
        7vw,
        105px
    );

    line-height: .9;

}


.showcase-text p {

    max-width: 480px;

    margin-top: 35px;

    color: var(--gray);

    font-size: 17px;

}


.text-link {

    display: inline-block;

    margin-top: 30px;

    font-size: 10px;

    letter-spacing: .12em;

    text-transform: uppercase;

}


.showcase-art {

    min-height: 620px;

    border: 1px solid var(--border);

    background: var(--card);

    overflow: hidden;

    position: relative;

}


/* =========================================================
   AI SHOWCASE
   ========================================================= */

.ai-art {

    display: grid;

    place-items: center;

}


.network {

    width: 70%;

    aspect-ratio: 1;

    position: relative;

}


.network::before,
.network::after {

    content: "";

    position: absolute;

    inset: 15%;

    border: 1px solid rgba(255,255,255,.10);

    border-radius: 50%;

    animation: rotate 18s linear infinite;

}


.network::after {

    inset: 28%;

    animation-direction: reverse;

}


.network span {

    position: absolute;

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #8d9497;

}


.network span:nth-child(1) {
    top: 8%;
    left: 48%;
}


.network span:nth-child(2) {
    top: 23%;
    right: 10%;
}


.network span:nth-child(3) {
    right: 5%;
    top: 50%;
}


.network span:nth-child(4) {
    right: 17%;
    bottom: 15%;
}


.network span:nth-child(5) {
    bottom: 5%;
    left: 48%;
}


.network span:nth-child(6) {
    bottom: 20%;
    left: 12%;
}


.network span:nth-child(7) {
    left: 5%;
    top: 50%;
}


.network span:nth-child(8) {
    top: 20%;
    left: 17%;
}


.network-core {

    position: absolute;

    inset: 43%;

    border:
        1px solid
        #656b6e;

    border-radius: 50%;

    display: grid;

    place-items: center;

    font-size: 10px;

    letter-spacing: .15em;

}


/* =========================================================
   WEB SHOWCASE
   ========================================================= */

.web-art {

    display: grid;

    place-items: center;

}


.large-browser {

    width: 82%;

    aspect-ratio: 1.45;

    background: #e7e7e5;

    color: #080a0b;

    box-shadow:
        0 50px 100px
        rgba(0,0,0,.45);

    transform:
        perspective(1000px)
        rotateX(7deg)
        rotateY(-4deg);

}


.browser-header {

    height: 35px;

    padding: 0 12px;

    display: flex;

    align-items: center;

    gap: 5px;

    border-bottom:
        1px solid
        #c4c4c2;

}


.browser-header i {

    width: 5px;
    height: 5px;

    border:
        1px solid
        #999;

    border-radius: 50%;

}


.browser-header span {

    margin-left: auto;

    font-size: 6px;

    letter-spacing: .12em;

}


.browser-content {

    padding: 8%;

}


.browser-content small {

    font-size: 7px;

    letter-spacing: .15em;

}


.browser-content h3 {

    margin-top: 15px;

    font-size: clamp(
        35px,
        5vw,
        65px
    );

    line-height: .9;

}


.browser-lines {

    display: flex;

    gap: 8px;

    margin-top: 30px;

}


.browser-lines i {

    height: 2px;

    width: 25%;

    background: #aaa;

}


/* =========================================================
   APP SHOWCASE
   ========================================================= */

.app-art {

    display: grid;

    place-items: center;

}


.device {

    position: absolute;

    width: 230px;
    height: 470px;

    border:
        1px solid
        #454a4d;

    border-radius: 32px;

    padding: 9px;

    background: #080a0b;

    box-shadow:
        0 40px 80px
        rgba(0,0,0,.5);

}


.device-one {

    transform:
        rotate(-5deg);

    left: 18%;

}


.device-two {

    transform:
        rotate(10deg);

    right: 14%;

    top: 15%;

}


.device-screen {

    height: 100%;

    border-radius: 24px;

    padding: 25px 18px;

    background: #e9e9e7;

    color: #080a0b;

}


.device-screen small {

    font-size: 7px;

    letter-spacing: .15em;

}


.device-screen strong {

    display: block;

    margin-top: 210px;

    font-size: 30px;

    line-height: .9;

}


.device-two .device-screen {

    background:
        linear-gradient(
            160deg,
            #171b1d,
            #080a0b
        );

}


/* =========================================================
   GAME SHOWCASE
   ========================================================= */

.games-art {

    position: relative;

}


.game-world {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            #111517,
            #050708
        );

    overflow: hidden;

}


.game-grid {

    position: absolute;

    width: 150%;

    height: 65%;

    left: -25%;

    bottom: -20%;

    transform:
        perspective(500px)
        rotateX(65deg);

    background-image:

        linear-gradient(
            #252a2c 1px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            #252a2c 1px,
            transparent 1px
        );

    background-size: 50px 50px;

}


.game-object {

    position: absolute;

    width: 170px;

    height: 170px;

    left: 50%;

    top: 48%;

    transform:
        translate(-50%,-50%)
        rotate(45deg);

    border:
        1px solid
        #747a7d;

}


.game-label,
.game-enter {

    position: absolute;

    font-size: 9px;

    letter-spacing: .15em;

    color: var(--gray);

}


.game-label {

    top: 25px;
    left: 25px;

}


.game-enter {

    right: 25px;
    bottom: 25px;

}


/* =========================================================
   WORK
   ========================================================= */

.work {

    padding:
        16vh
        0;

    border-top: 1px solid var(--border);

}


.project {

    padding:
        30px 0 65px;

    border-top: 1px solid var(--border);

}


.project-visual {

    min-height: 620px;

    position: relative;

    overflow: hidden;

    border: 1px solid var(--border);

    background: #0d1011;

    padding: 25px;

    display: flex;

    justify-content: space-between;

    align-items: flex-start;

}


.project-visual > span {

    font-size: 9px;

    color: var(--gray);

    letter-spacing: .15em;

}


.project-visual > strong {

    font-size: 10px;

    color: var(--muted);

}


.project-visual::before {

    content: "";

    position: absolute;

    inset: 0;

    background-image:

        linear-gradient(
            rgba(255,255,255,.025) 1px,
            transparent 1px
        ),

        linear-gradient(
            90deg,
            rgba(255,255,255,.025) 1px,
            transparent 1px
        );

    background-size: 80px 80px;

}


.project-shape {

    position: absolute;

    width: 40%;

    aspect-ratio: 1;

    border: 1px solid #454a4d;

    left: 50%;

    top: 50%;

    transform:
        translate(-50%,-50%)
        rotate(45deg);

}


.project-browser {

    position: absolute;

    width: 65%;

    aspect-ratio: 16 / 9;

    border: 1px solid #666;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%,-50%);

}


.project-ai {

    position: absolute;

    width: 35%;

    aspect-ratio: 1;

    border:
        1px solid
        #777;

    border-radius: 50%;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%,-50%);

    box-shadow:
        0 0 100px
        rgba(255,255,255,.05);

}


.project-details {

    padding-top: 28px;

    display: flex;

    justify-content: space-between;

    gap: 40px;

}


.project-details small {

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

}


.project-details h3 {

    max-width: 800px;

    margin-top: 15px;

    font-size: clamp(
        32px,
        4vw,
        58px
    );

}


.project-details p {

    max-width: 600px;

    color: var(--gray);

    margin-top: 15px;

}


.project-button {

    align-self: flex-end;

    min-width: 160px;

    height: 46px;

    background: transparent;

    color: white;

    border: 1px solid var(--border);

    font-size: 9px;

    letter-spacing: .12em;

    transition: .3s ease;

}


.project-button:hover {

    color: black;

    background: white;

    border-color: white;

}


/* =========================================================
   PROCESS
   ========================================================= */

.process {

    padding:
        12vh
        0
        18vh;

    border-top: 1px solid var(--border);

}


.process-grid {

    margin-top: 100px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

}


.process-step {

    min-height: 220px;

    padding:
        22px
        25px
        0 0;

    border-top: 1px solid var(--border);

}


.process-step + .process-step {

    padding-left: 25px;

    border-left: 1px solid var(--border);

}


.process-step span {

    color: var(--muted);

    font-size: 10px;

}


.process-step h3 {

    margin-top: 45px;

    font-size: 25px;

}


.process-step p {

    max-width: 240px;

    color: var(--gray);

    margin-top: 15px;

}


/* =========================================================
   ABOUT
   ========================================================= */

.about {

    padding:
        10vh
        0
        18vh;

}


.about-line {

    height: 1px;

    background: var(--border);

    margin-bottom: 70px;

}


.about-grid {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 7vw;

}


.about-grid h2 {

    font-size: clamp(
        50px,
        7vw,
        105px
    );

    line-height: .9;

}


.about-grid p {

    color: var(--gray);

    font-size: 22px;

    margin: 0;

}


.about-grid p + p {

    margin-top: 28px;

}


/* =========================================================
   FINAL CTA
   ========================================================= */

.final-cta {

    min-height: 100vh;

    padding:
        15vh
        0
        10vh;

    display: grid;

    grid-template-columns:
        1fr
        1.2fr;

    gap: 7vw;

    align-content: center;

    border-top: 1px solid var(--border);

    position: relative;

    overflow: hidden;

}


.final-content {

    position: relative;

    z-index: 2;

}


.final-content h2 {

    font-size: clamp(
        62px,
        9vw,
        140px
    );

    line-height: .88;

}


.final-content p {

    color: var(--gray);

    font-size: 18px;

    margin-top: 30px;

}


.final-geometry {

    position: absolute;

    width: 600px;

    height: 600px;

    right: -120px;

    top: 50px;

    opacity: .25;

}


.contact-form {

    position: relative;

    z-index: 5;

}


.form-row {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    gap: 25px;

}


.form-group {

    margin-bottom: 30px;

}


.form-group label {

    display: block;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .14em;

    margin-bottom: 10px;

}


.form-group input,
.form-group textarea {

    width: 100%;

    padding:
        12px 0;

    color: white;

    background: transparent;

    border: 0;

    border-bottom:
        1px solid
        var(--border);

    outline: none;

    resize: vertical;

}


.form-group input:focus,
.form-group textarea:focus {

    border-color: #888;

}


.form-message {

    margin-top: 20px;

    color: #aab0b3;

    font-size: 11px;

}


/* =========================================================
   FOOTER
   ========================================================= */

.footer {

    width: min(1400px, calc(100% - 64px));

    margin: auto;

    padding:
        55px
        0
        30px;

    border-top:
        1px solid
        var(--border);

}


.footer-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

}


.footer-logo {

    width: 105px;
    height: 43px;

    display: flex;

    overflow: hidden;

    align-items: center;

    justify-content: center;

    background: white;

    border-radius: 7px;

}


.footer-logo img {

    width: 130px;
    height: 130px;

    max-width: none;

}


.footer-top > span {

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

}


.footer-links {

    display: grid;

    grid-template-columns:
        1fr
        1fr;

    max-width: 400px;

    gap: 30px;

    margin: 70px 0;

}


.footer-links div {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 11px;

}


.footer-links small {

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

    margin-bottom: 7px;

}


.footer-links a {

    font-size: 12px;

    color: var(--gray);

    transition: color .25s ease;

}


.footer-links a:hover {
    color: white;
}


.footer-bottom {

    padding-top: 20px;

    border-top:
        1px solid
        var(--border);

    display: flex;

    justify-content: space-between;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .1em;

}


/* =========================================================
   MODAL
   ========================================================= */

.modal {

    position: fixed;

    inset: 0;

    z-index: 200;

    display: none;

    place-items: center;

    padding: 25px;

    background:
        rgba(0,0,0,.75);

    backdrop-filter: blur(15px);

}


.modal.active {
    display: grid;
}


.modal-box {

    width: min(760px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    background: #0a0d0e;

    border: 1px solid #303436;

    padding:
        55px;

    position: relative;

}


.modal-close {

    position: absolute;

    right: 20px;
    top: 15px;

    border: 0;

    background: transparent;

    color: var(--gray);

    font-size: 30px;

}


.modal-box > small {

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

}


.modal-box > span {

    display: block;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

    margin-top: 12px;

}


.modal-box h2 {

    font-size: clamp(
        42px,
        6vw,
        75px
    );

    margin-top: 30px;

}


.modal-box p {

    color: var(--gray);

    margin-top: 25px;

    line-height: 1.55;

}


.modal-visual {

    height: 260px;

    margin: 35px 0;

    border:
        1px solid
        var(--border);

    display: grid;

    place-items: center;

}


.modal-visual span {

    color: var(--muted);

    font-size: 9px;

    letter-spacing: .15em;

}


/* =========================================================
   REVEALS
   ========================================================= */

.reveal {

    opacity: 0;

    transform: translateY(25px);

    animation:
        reveal .9s var(--ease)
        forwards;

}


.reveal:nth-child(2) {
    animation-delay: .15s;
}


@keyframes reveal {

    to {

        opacity: 1;

        transform:
            translateY(0);

    }

}


/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 900px) {

    .section,
    .showcase,
    .footer {

        width:
            min(
                100% - 40px,
                720px
            );

    }


    .desktop-nav,
    .nav-cta {

        display: none;

    }


    .menu-button {

        display: block;

    }


    .hero-content {

        padding:
            120px
            0
            100px;

    }


    .hero-geometry {

        right: -20%;

        width: 75vw;

        opacity: .3;

    }


    .studio {

        grid-template-columns: 1fr;

        gap: 45px;

        padding:
            15vh
            0
            17vh;

    }


    .studio-content p {

        margin-left: 0;

    }


    .section-title {

        margin-left: 0;

    }


    .service {

        grid-template-columns:
            55px
            1fr;

    }


    .service-visual {

        grid-column: 2;

    }


    .showcase {

        grid-template-columns:
            1fr;

        padding:
            13vh
            0;

    }


    .showcase-art {

        min-height: 500px;

    }


    .project-visual {

        min-height: 480px;

    }


    .project-details {

        flex-direction: column;

    }


    .project-button {

        align-self: flex-start;

    }


    .process-grid {

        grid-template-columns:
            1fr
            1fr;

    }


    .about-grid {

        grid-template-columns:
            1fr;

        gap: 45px;

    }


    .final-cta {

        grid-template-columns:
            1fr;

    }

}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 560px) {

    .section,
    .showcase,
    .footer {

        width:
            calc(100% - 32px);

    }


    .navbar {

        height: 70px;

        padding:
            0 16px;

    }


    .hero {

        min-height: 800px;

    }


    .hero-content {

        padding:
            100px
            0
            100px;

    }


    .hero-brand {

        margin-bottom: 80px;

    }


    .hero h1 {

        font-size:
            clamp(
                56px,
                16vw,
                90px
            );

    }


    .hero-text > p {

        font-size: 15px;

        margin-top: 30px;

    }


    .hero-buttons {

        flex-direction:
            column;

        align-items:
            stretch;

    }


    .button {

        width: 100%;

    }


    .hero-bottom {

        left: 0;
        right: 0;

        bottom: 20px;

    }


    .studio-content h2,
    .section-title h2 {

        font-size:
            clamp(
                48px,
                14vw,
                75px
            );

    }


    .studio-content p {

        font-size: 17px;

        margin-top: 35px;

    }


    .service {

        grid-template-columns:
            1fr;

        gap: 20px;

        padding:
            34px 0
            42px;

    }


    .service-visual {

        grid-column: 1;

        min-height: 240px;

    }


    .service-content h3 {

        font-size:
            clamp(
                38px,
                11vw,
                58px
            );

    }


    .showcase-text h2 {

        font-size:
            clamp(
                48px,
                13vw,
                70px
            );

    }


    .showcase-art {

        min-height: 390px;

    }


    .device {

        width: 155px;

        height: 315px;

        border-radius: 24px;

    }


    .device-screen {

        border-radius: 17px;

    }


    .device-screen strong {

        margin-top: 150px;

        font-size: 22px;

    }


    .project-visual {

        min-height: 360px;

    }


    .project-details h3 {

        font-size: 34px;

    }


    .process-grid {

        grid-template-columns:
            1fr;

    }


    .process-step,
    .process-step + .process-step {

        border-left: 0;

        padding-left: 0;

        min-height: 175px;

    }


    .about-grid h2 {

        font-size:
            clamp(
                45px,
                13vw,
                68px
            );

    }


    .final-content h2 {

        font-size:
            clamp(
                54px,
                15vw,
                80px
            );

    }


    .form-row {

        grid-template-columns:
            1fr;

    }


    .footer-top {

        flex-direction:
            column;

        align-items:
            flex-start;

        gap: 20px;

    }


    .footer-bottom {

        flex-direction:
            column;

        gap: 10px;

    }


    .modal-box {

        padding:
            30px;

    }

}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {

        animation-duration:
            .001ms !important;

        animation-iteration-count:
            1 !important;

        scroll-behavior:
            auto !important;

        transition-duration:
            .001ms !important;

    }

}