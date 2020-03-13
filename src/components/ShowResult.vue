<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content">
     <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <!-- Main content -->
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-md-2"></div> 
        <div class="col-md-8">
          <div class="card" v-if="infos!=null">
           
            <!-- /.card-header -->
            <div v-if="infos.data['roll_id']" class="card-body text-center">
              <h3 class="card-title">Result of SSC or Equivalent Examination {{infos.data['year']}}</h3>
              <hr>
              <br>
              <div class="container"> 
                <div class="text-center"> 
                  <router-link to="/stud" class="btn btn-info btn-sm"type="button" >Search Again</router-link> 
                </div> 
              </div>
              <br>
              <div class="container"> 
                <table class="table table-striped" width="100%">
                  <tbody v-if="infos!=null">
                    <tr>
                      <th>Roll No</th>
                      <td>{{JSON.stringify(infos.data['roll_id'])}}</td>
                    </tr>
                    <tr>
                      <th>Student Name</th>
                      <td>{{infos.data['std_name']}}</td>
                    </tr>
                    <tr>
                      <th>Father's Name</th>
                      <td>{{infos.data['father_name']}}</td>
                    </tr>
                    <tr>
                      <th>Mother's Name</th>
                      <td>{{infos.data['mother_name']}}</td>
                    </tr>
                    <tr>
                      <th>Degree</th>
                      <td>{{infos.data['degree']}}</td>
                    </tr>
                    <tr>
                      <th>Board</th>
                      <td>{{infos.data['board']}}</td>
                    </tr>
                    <tr>
                      <th>Institute</th>
                      <td>{{infos.data['institute']}}</td>
                    </tr>
                   </tbody>
                 </table>  
          </div>
           <!--  Grade -->
           <div>
            <hr>
             <h4 class="text-center">Subject-Wise Grade/Marks</h4>
           </div>
             <div class="container"> 
               <table class="table table-striped table-bordered" width="100%">
                <thead class="btn-success" style="width: 20%">
                   <tr>
                      <th>Subject Name</th>
                      <th>Mark</th>
                    </tr>
                </thead>
                  <tbody v-if="infos!=null">
                   
                    <tr>
                      <td>Bangla</td>
                      <td>{{JSON.stringify(infos.data['bangla'])}}</td>
                    </tr>
                    <tr>
                      <td>General Math</td>
                      <td>{{infos.data['general_math']}}</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>{{infos.data['eng']}}</td>
                    </tr>
                    <tr>
                      <td>History</td>
                      <td>{{infos.data['history']}}</td>
                    </tr>
                   </tbody>
                 </table>
          </div>
          <!--  End Grade -->
          <br>
              <div class="container"> 
                <div class="text-center"> 
                  <router-link to="/stud" class="btn btn-info btn-sm"type="button" >Search Again</router-link> 
                </div> 
              </div>
        </div>
        <!-- /.card-body -->
      </div>
      
        <div class="bs-example" v-if="infos!=null && infos.data['roll_id']==0"> 
          <div>
          <div class="card-header">Message From Server
          </div>
         <div class="card-body"> Result of your specified criteria is not found. Please check and try again..
          <router-link to="/stud"><button type="button" class="close" data-dismiss="alert">&times;</button></router-link></div>
          </div>
        
      </div>
    
          <!-- /.card -->
      </div>
      <div class="col-md-2"></div>  
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
</template>


<script>
  import axios from 'axios';
  // Import component
  import Loading from 'vue-loading-overlay';
  // Import stylesheet
  import 'vue-loading-overlay/dist/vue-loading.css';
  // Init plugin
  //Vue.use(VueLoading);
  export default{
    data(){
      return {
        infos:null,
        isLoading: false,
        fullPage: false
        //myobj:null
      }
    },
    components: {
      Loading
    },
    mounted(){
       this.isLoading = true;
                // simulate AJAX
                // setTimeout(() => {
                //   this.isLoading = false
                // },90),       
      axios.
        post('http://nixdev1.xhost.name:7010/get/'+this.$route.params.degree+'/'+this.$route.params.year+'/'+this.$route.params.board+'/'+this.$route.params.roll)
         .then(response => (
           this.isLoading = false,
          this.infos = response
         ))
         .then(function (response) {
              console.log(response);
          })
         // .then(
         //  console.log(this.infos)
         //  )
                    

         .catch(error => console.log(error))
  }
}
</script>

<style>
 
.table td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: .4rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    width: 40%;
}
.table th {
    font-weight: bold;
    border: 1px solid #dddddd;
    text-align: left;
    padding: .4rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    width: 40%;
}

.h4, h4 {
    font-size: 18px;
}

</style>
