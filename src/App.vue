<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div class="col-md-8 ">
          <div class="card bg-success">
            <div class="card-body text-center">
              <img src='./assets/bd_logo.png' class="img-fluid" width="40px" height="40px">
              <span class="text-white"> WEB BASED RESULT PUBLICATION SYSTEM FOR EDUCATION BOARDS </span>
            </div>
          </div>
        </div> 
      </div>
      <br><br>
      <router-view></router-view>
    </div>
  </div>
 
</template>

<script>
    export default {
    }
</script>

<style>

.card.bg-success.mt-3 {
    /*width: 710px;*/
    margin-left: 0px;
}



/*samsung s5*/
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {
    .card.bg-success.mt-3 {
      margin-left: 16px;
      width: 300px;
    }

}
/*iPhone 5/SE*/
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    .card.bg-success.mt-3 {
      margin-left: 15px;
      width: 300px;
    }
    span.text{
      margin-left: 5px;
      font-size : 13px;
    }

}
/*Pixel 2*/
@media only screen 
  and (min-device-width: 411px) 
  and (max-device-width: 731px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
       .card.bg-success.mt-3 {
          margin-left: 15px;
          width: 488px;
        }
        span.text{
      margin-left: 5px;
      font-size : 12px;
    }
}
/*iPhoneX*/
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    .card.bg-success.mt-3 {
          margin-left: 129px;
          width: 300px;
        }
         span.text{
      margin-left: 5px;
      font-size : 10px;
    }
}
/*iPad*/
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
    .card.bg-success.mt-3 {
        margin-left: 130px;
        width: 432px;
    }
    span.text {
        margin-left: 5px;
        font-size: 11px;
    }
}
/*iPhone 6/7/8*/
@media only screen 
and (-webkit-min-device-pixel-ratio: 3) 
and (max-device-width: 812px) 
and (min-device-width: 375px) {
    .card.bg-success.mt-3 {
        margin-left: 13px;
        width: 330px;
    }
    span.text {
        font-size: 12px;
    }
}

/*Pixel 2 xl*/
@media only screen 
and (-webkit-min-device-pixel-ratio: 3) 
and (max-device-width: 823px) 
and (min-device-width: 411px) {
    .card.bg-success.mt-3 {
        margin-left: 13px;
        width: 352px;
    }
    span.text {
        font-size: 8px;
    }
}


</style>
