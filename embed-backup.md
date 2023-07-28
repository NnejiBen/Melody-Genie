SCRIPT

    <script src="js/embed-music.js"></script>


HTML

        <!-- EMBED SECTION -->
        <section class="section embed-section">
            <!-- Slideshow container -->
            <div class="slideshow-container">
                <!-- Previous button -->
                <div class="prev-container">
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                </div>
                <!-- Slides -->
                <div class="slides-container">
                    <!-- Slide 01 -->
                    <div class="mySlides fade">
                        <div class="embed-music-album">
                            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1Hkbu7nahDPjp2pLWWRcvo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                    <!-- Slide 02 -->
                    <div class="mySlides fade">
                        <div class="embed-music-album">
                            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/3YdT8QvV4QvY4DfVJhxdcZ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                    <!-- Slide 03 -->
                    <div class="mySlides fade">
                        <div class="embed-music-album">
                            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5ILrArfIV0tMURcHJN8Q07?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                    <!-- Slide 04 -->
                    <div class="mySlides fade">
                        <div class="embed-music-album">
                            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1bgvuzIjHq12cBsfXCoEBe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                    <!-- Slide 05 -->
                    <div class="mySlides fade">
                        <div class="embed-music-album">
                            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/710wXZlOutU4kV7BeLoVwl?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                <!-- Next button -->
                <div class="next-container">
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
            </div>

            <!-- The dots/circles -->
            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
            </div>
        </section>


CSS

/* EMBED SECTION */

.embed-section {
    background-color: var(--clr-green);
    padding: 3.5em 0 3em 0;
}

.slideshow-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slides-container {
    width: 45%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
}

.embed-music-album iframe {
    width: 100%;
}

/* Hide slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, 
.next {
  cursor: pointer;
  padding: 1em;
  color: #bbb;
  font-weight: bold;
  font-size: 1.5rem;
  user-select: none;
}

.prev:hover, 
.next:hover {
  color: #717171;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 1em;
  width: 1em;
  margin: .5em .2em;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}


CSS - RESPONSIVE

/* EMBED SECTION */

.slides-container {
    width: 100%;
    /* padding: 0 1em; */
}

.prev, 
.next {
  /* font-size: 3rem;
  padding: 0; */
  display: none;
}

.dot {
  height: 3em;
  width: 3em;
  margin: 1em;
}