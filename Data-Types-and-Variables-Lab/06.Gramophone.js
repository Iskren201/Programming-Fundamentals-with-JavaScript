function slove(bandName, albumName, songName) {
  let time = (bandName.length * albumName.length * songName.length) / 2;
  let rotation = Math.ceil(time / 2.5);
  console.log(`The plate was rotated ${rotation} times.`);
}
