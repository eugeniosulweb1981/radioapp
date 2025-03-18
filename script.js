{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Debugging: Ensure script runs\
console.log("Fire TV Web App Loaded");\
\
// Get player and button elements\
const radioPlayer = document.getElementById("radioPlayer");\
const playStopBtn = document.getElementById("playStopBtn");\
const volumeDisplay = document.getElementById("volumeDisplay");\
\
// Initial Volume\
radioPlayer.volume = 0.5; // 50% default volume\
updateVolumeDisplay();\
\
// Toggle Play/Stop function\
function toggleRadio() \{\
    if (radioPlayer.paused) \{\
        radioPlayer.play();\
        playStopBtn.innerText = "\uc0\u9632  Stop";\
    \} else \{\
        radioPlayer.pause();\
        radioPlayer.currentTime = 0; // Reset stream\
        playStopBtn.innerText = "\uc0\u9654  Play";\
    \}\
\}\
\
// Update Volume Display\
function updateVolumeDisplay() \{\
    volumeDisplay.innerText = `\uc0\u55357 \u56586  Volume: $\{Math.round(radioPlayer.volume * 100)\}%`;\
    volumeDisplay.style.opacity = "1";\
    setTimeout(() => (volumeDisplay.style.opacity = "0"), 2000); // Hide after 2 sec\
\}\
\
// Adjust Volume\
function adjustVolume(change) \{\
    radioPlayer.volume = Math.max(0, Math.min(1, radioPlayer.volume + change)); // Keep volume between 0-1\
    updateVolumeDisplay();\
\}\
\
// Fire TV Remote Support\
document.addEventListener("keydown", function(event) \{\
    switch (event.code) \{\
        case "Enter": // Play/Stop\
        case "Space":\
            toggleRadio();\
            break;\
        case "ArrowUp": // Volume Up\
            adjustVolume(0.1);\
            break;\
        case "ArrowDown": // Volume Down\
            adjustVolume(-0.1);\
            break;\
    \}\
\});\
}