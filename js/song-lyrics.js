// Variables
const lyrics01 = document.getElementById("lyrics-01");
const lyrics01Ext01 = document.getElementById("lyrics-01-ext-01");
const lyrics01Ext02 = document.getElementById("lyrics-01-ext-02");

const lyrics02 = document.getElementById("lyrics-02");
const lyrics02Ext01 = document.getElementById("lyrics-02-ext-01");
const lyrics02Ext02 = document.getElementById("lyrics-02-ext-02");
const lyrics02Ext03 = document.getElementById("lyrics-02-ext-03");

const lyrics03 = document.getElementById("lyrics-03");
const lyrics03Ext01 = document.getElementById("lyrics-03-ext-01");
const lyrics03Ext02 = document.getElementById("lyrics-03-ext-02");

const lyrics04 = document.getElementById("lyrics-04");
const lyrics04Ext01 = document.getElementById("lyrics-04-ext-01");
const lyrics04Ext02 = document.getElementById("lyrics-04-ext-02");

// Lyrics 01
const lyrics01MouseOver = () => {
    lyrics01Ext02.style.display = "block";
    lyrics02Ext01.style.display = "none";
    lyrics02Ext02.style.display = "none";
}

const lyrics01MouseOut = () => {
    lyrics01Ext02.style.display = "none";
    lyrics02Ext01.style.display = "block";
    lyrics02Ext02.style.display = "block";
}

lyrics01.addEventListener("mouseover", lyrics01MouseOver);
lyrics01.addEventListener("mouseout", lyrics01MouseOut);

// Lyrics 02
const lyrics02MouseOver = () => {
    lyrics01Ext01.style.display = "none";
    lyrics01Ext02.style.display = "none";
    lyrics02Ext02.style.display = "block";
    lyrics02Ext03.style.display = "block";
}

const lyrics02MouseOut = () => {
    lyrics01Ext01.style.display = "block";
    lyrics01Ext02.style.display = "none";
    lyrics02Ext02.style.display = "block";
    lyrics02Ext03.style.display = "none";
}

lyrics02.addEventListener("mouseover", lyrics02MouseOver);
lyrics02.addEventListener("mouseout", lyrics02MouseOut);

// Lyrics 03
const lyrics03MouseOver = () => {
    lyrics03Ext01.style.display = "block";
    lyrics04Ext01.style.display = "none";
    lyrics04Ext02.style.display = "none";
    lyrics04.style.paddingBottom = "3.8em";
}

const lyrics03MouseOut = () => {
    lyrics03Ext01.style.display = "none";
    lyrics04Ext01.style.display = "none";
    lyrics04Ext02.style.display = "block";
    lyrics04.style.paddingBottom = "0";
}

lyrics03.addEventListener("mouseover", lyrics03MouseOver);
lyrics03.addEventListener("mouseout", lyrics03MouseOut);

// Lyrics 04
const lyrics04MouseOver = () => {
    lyrics03Ext02.style.display = "none";
    lyrics04Ext01.style.display = "block";
    lyrics03.style.paddingBottom = "3.8em";
}

const lyrics04MouseOut = () => {
    lyrics03Ext02.style.display = "block";
    lyrics04Ext01.style.display = "none";
    // lyrics04Ext02.style.display = "block";
    lyrics03.style.paddingBottom = "0";
}

lyrics04.addEventListener("mouseover", lyrics04MouseOver);
lyrics04.addEventListener("mouseout", lyrics04MouseOut);