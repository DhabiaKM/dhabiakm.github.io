// variables for the audio player and the play button 
       
       
    const goodPlayer = document.getElementById("good-player");
    const goodPlayBtn = document.getElementById("good-play");
        
        // On Click  play or pause Button => play the sound if it paused and pause it if it played
        goodPlayBtn.addEventListener("click", () => {
          if (goodPlayBtn.src.includes("images/play.png")) {
            goodPlayer.play();
            goodPlayBtn.src = "./images/pause.png";
          } else {
            goodPlayer.pause();
            goodPlayBtn.src = "./images/play.png";
          }
        });

        console.log('works')
