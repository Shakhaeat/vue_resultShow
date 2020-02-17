<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
        <div class="card bg-success  mt-3">
          <div class="card-body text-white">
               <img src='./assets/bd_logo.png' width='60px' height='60px'>
              <span> WEB BASED RESULT PUBLICATION SYSTEM FOR EDUCATION BOARDS </span>
          </div>
        </div>
      </div>    
    </div>       
    <br><br>
  <router-view></router-view>
   </div>
 
</template>

<script>
    export default {
    }
</script>

<style>
.card.bg-success.mt-3 {
    width: 789px;
    text-align: center;
    margin-left: 162px;
}


@media screen and (max-width: 1250px){

.card-body{

  width:20%;
  margin: 20px;
  padding: 0px;
}


}
img{
    margin-right:150px;
}
span{
    margin-left:-149px;
}
</style>
