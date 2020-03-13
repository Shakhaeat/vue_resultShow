<template>
	<!-- Content Wrapper. Contains page content -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-around">
          <!-- left column -->
          <div class="col-md-8">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h6 class="card-title">Please provide your Exam and corresponding Info <router-link to="/">(App Home)</router-link></h6>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="getResult" role="form">

                <div class="card-body">


                  <div class="form-group row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Degree: </label>
                    <div class="col-sm-10">
                      <select required v-model="form.degree" id="degree" class="form-control text">
                        <option value="" disabled>Choose One</option>
                	    <option selected value="ssc">SSC</option>
                	    <option value="hsc">HSC</option>
                      </select>
                   </div>
                  </div> 

                  <div class="form-group row">
                  	<label for="colFormLabel" class="col-sm-2 col-form-label">Year:</label>
                    <div class="col-sm-10">
                      <select required v-model="form.year" id="year" class="form-control text">
                        <option value="" disabled>Choose One</option>  
                    	<option selected value="2008">2008</option>
                    	<option value="2009">2009</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                  	<label for="colFormLabel" class="col-sm-2 col-form-label">Board:</label>
                    <div class="col-sm-10">
                      <select required v-model="form.board" id="board" class="form-control text">
                        <option value="" disabled>Choose One</option>
                    	<option selected value="dhaka">Dhaka</option>
                    	<option value="cumilla">Cumilla</option>
                      </select>
                  </div>
              </div>

              <div class="form-group row">
                  	<label for="colFormLabel" class="col-sm-2 col-form-label">Roll:</label>
                    <div class="col-sm-10">
                    	<input required type="text" value="2" v-model="form.roll" id="roll" class="form-control text" placeholder="Enter Your Roll">
                    </div>
                </div>




                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                <div class="row justify-content-around">
                	<button class="btn btn-success">Get Result</button>
                  <!-- <router-link class="btn btn-success" :to="`/get/${degree}/${year}/${board}/${roll}`">Get Result</router-link>-->
                  </div> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
            <!-- /.card -->

</template>

<script>
	// import axios from 'axios';
	export default{
		data () {
            return {
                // Create a new form instance
                form: new Form({
                    degree: '',
                    year: '',
                    board: '',
                    roll: null
                })
            }
        },

        methods:{
		    getResult () {
                const formData = {
                    degree: this.form.degree,
                    year: this.form.year,
                    board: this.form.board,
                    roll: this.form.roll
            }
            console.log(formData)

            this.$router.push('get/'+formData.degree+'/'+formData.year+'/'+formData.board+'/'+formData.roll)
               
           }
       }





		// data() {
	 //      return {
  //           degree: '',
  //           year: '',
  //           board: '',
  //           roll: 2
  //         }
	 //    },

		// methods:{
		//   getResult () {
  //           const formData = {
  //             degree: this.degree,
  //             year: this.year,
  //             board: this.board,
  //             roll: this.roll
  //           }
  //          // console.log(formData)

  //           this.form.post('get/'+formData.degree+'/'+formData.year+'/'+formData.board+'/'+formData.roll)
  //              .then(function (response) {
  //                 console.log(response);
  //               })
  //           // this.$store.dispatch('get', {
  //           // 	degree: formData.degree,
  //           // 	year: formData.year,
  //           // 	board: formData.board,
  //           // 	roll: formData.roll
  //           // })
  //           // axios.post('http://localhost:7010/get/'+formData.degree+'/'+formData.year+'/'+formData.board+'/'+formData.roll)
  //           //   .then(function (response) {
  //           //      console.log(response);
  //           //    })
  //          //   .catch(function (error) {
  //          //      console.log(error);
  //          //   });

  //         }
	 //    }
	}
	
</script>

<style>
</style>
