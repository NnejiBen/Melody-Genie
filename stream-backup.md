<!-- THE HTML CODES -->

        <!-- STREAMING SECTION -->
        <section class="section streaming">
            <div class="section streaming--cnt">
                <div class="streaming--left">
                    <div class="streaming--img-cnt">
                        <img src="images/streaming-img.svg" alt="">
                    </div>
                    <div class="streaming--song-title-cnt">
                        <h4 class="streaming--artist">Mary Jane</h4>
                        <h3 class="streaming--song-title">Our Future is Bright and Clear</h3>
                    </div>
                    <div class="streaming--progress-bar-cnt">
                        <img src="img/streaming-progress-bar.svg" alt="">
                    </div>
                    <div class="streaming--controls-cnt">
                        <div class="streaming--controls-col-01">
                            <img src="images/streaming-shuffle.svg" alt="">
                        </div>
                        <div class="streaming--controls-col-02">
                            <img src="images/streaming-back.svg" alt="" class="back-img">
                            <img src="images/streaming-play.svg" alt="" class="play-img">
                            <img src="images/streaming-forward.svg" alt="" class="forward-img">
                        </div>
                        <div class="streaming--controls-col-03">
                            <img src="images/streaming-heart.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="streaming--right">
                    <p>(Verse 1) <br>
                        In a world full of possibilities, <br>
                        We're standing tall, hearts set free. <br>
                        With hope in our eyes, and dreams in our hands, <br>
                        We'll pave the way, across distant lands.
                    </p>
                </div>
            </div>
        </section>


<!-- THE CSS CODES -->

/* STREAMING SECTION */

.streaming {
    background: var(--clr-green);
    padding: 3.5em 0 6em 0;
    overflow: hidden;
}

.streaming--cnt {
    display: flex;
    position: relative;
    left: 10em;
}

.streaming--left {
    max-width: 41em;
    display: flex;
    flex-direction: column;
    background: var(--clr-light);
    border-radius: 16px;
    box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14), 
                0px 8px 28px -6px rgba(24, 39, 75, 0.12);
}

.streaming--img-cnt {
    padding: 4em 3.5em 2em 3.5em;
}

.streaming--song-title-cnt,
.streaming--progress-bar-cnt {
    padding: 0 3.5em;
}

.streaming--controls-cnt {
    padding: 0 7em;
}

.streaming--artist {
    font-family: var(--ff-oswald);
    font-size: var(--fs-h4);
    font-weight: var(--fw-bold);
    color: var(--clr-dark-02);
    margin-bottom: .5em;
}

.streaming--song-title {
    font-family: var(--ff-arimo);
    font-size: var(--fs-h3);
    font-weight: var(--fw-normal);
    line-height: 120%;
    letter-spacing: 0.688px;
    color: var(--clr-dark-01);
    margin-bottom: .9em;
}

.streaming--progress-bar-cnt {
    margin-bottom: 1em;
}

.streaming--controls-cnt {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 4em;
}

.back-img,
.forward-img {
    width: 2.6em;
}

.play-img {
    width: 3em;
}

.streaming--controls-col-02 {
    display: flex;
    column-gap: 1.5em;
}

.streaming--right {
    position: absolute;
    left: 36em;
    top: 9em;
    background: var(--clr-light);
    padding: 2.25em 2em;
    border-radius: 24px;
    box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14), 
                0px 8px 28px -6px rgba(24, 39, 75, 0.12);
}

.streaming--right > p {
    font-family: var(--ff-arimo);
    font-size: var(--fs-p-small);
    font-weight: var(--fw-normal);
    line-height: 120%;
    letter-spacing: 0.5px;
    color: var(--clr-dark-02);
}