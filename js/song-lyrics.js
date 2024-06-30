// Variables
const lyrics01 = document.getElementById("lyrics-01");
const lyrics01Ext01 = document.getElementById("lyrics-01-ext-01");
const lyrics01Ext02 = document.getElementById("lyrics-01-ext-02");

const lyrics02 = document.getElementById("lyrics-02");
const lyrics02Ext01 = document.getElementById("lyrics-02-ext-01");
const lyrics02Ext02 = document.getElementById("lyrics-02-ext-02");
const lyrics02Ext03 = document.getElementById("lyrics-02-ext-03");

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