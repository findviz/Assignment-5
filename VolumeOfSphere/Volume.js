function volumeOfSphere() {
  let radius = document.getElementById("radius").value;
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
}
