function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lKw1hDavKF":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="Backsound.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

