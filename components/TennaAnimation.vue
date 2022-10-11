
<template>
  <div class="relative" style="width: 100px; height: 100px;">
          <img class="fit-picture armWave"
            style="width: 80px; position: absolute;"
            src="assets/images/rightarm.png"
            alt="icon">
          <img class="fit-picture"
            style="width: 80px; position: absolute; right: 20px; top: 0px"
            src="assets/images/body.png"
            alt="icon">
          <img class="fit-picture"
            style="width: 80px; position: absolute; right: 16px; top: -69px"
            src="assets/images/face.png"
            alt="icon">
  </div>
</template>

<style>

.armWave {
    right: 60px; 
    top: -12px; 
    transform: rotate(120deg);
    animation: animate-armWave 1.5s linear alternate-reverse infinite;
    animation-delay: 1s;
}
@keyframes animate-armWave {
    100% {
      right: 56px; 
      top: -36px; 
      transform: rotate(170deg);
    }
}
.armWave::before {
    bottom: -8px;
}
.armWave::after {
    top: -8px;
}

</style>