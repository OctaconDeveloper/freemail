<template>
    <div>
  <b-card class="text-center lg">
    <div class="bg-info text-light"><br/><br/>
      <h1>Send Free Mail </h1> <h3> with custom sender and custom message body</h3>
      <br/>
      <p class="g">
          Keep your email address anonymous, use our in built custom email engine! Just provide receipt email address, custom message
          body and choose an email template. As a developer, you can also try our api for website embedding
      </p>
    <div class="container">
        <b-button pill  size="lg" to="/examples" variant="success" class="button">Examples</b-button>
        <b-button pill  size="lg" to="/docs" variant="success" class="button">API</b-button>
    </div>
    </div>
  </b-card>

  <b-card class="text-center lg">
    <b-row no-gutters>
      <b-col md="8" style="border-right:0.1em solid black;">
        <p v-html="apiResponse">
          
        </p>
        <p v-if="errors.length">
          <b-alert show variant="primary">Please fix the following error(s)</b-alert>
          
          <b-alert show variant="danger" v-for="error in errors" :key="error">{{error}}</b-alert>
          

        </p>
     <div class="container" md="9" >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
        
        <b-form-group
         id="input-group-1" 
         label="Sender ID:" 
         label-for="senderID"
         label-cols-sm="8"
          label-cols-lg="2">
          <b-form-input
            id="senderID"
            v-model="form.sender"
            size="lg" 
            placeholder="Provide Sender Name (Eg., FreeMail NG)"
          ></b-form-input>
        </b-form-group>

        <b-form-group
         id="input-group-1" 
         label="Email Subject:" 
         label-for="senderID"
         label-cols-sm="8"
          label-cols-lg="2">
          <b-form-input
            id="Subject"
            v-model="form.subject"
            size="lg" 
            placeholder="Email Subject"
          ></b-form-input>
        </b-form-group>


        <b-form-group
          id="input-group-2"
          label="Recepients:"
          label-for="recepients"          
          label-cols-sm="8"
          label-cols-lg="2"
        >
          <b-form-input
            id="recepients"
            v-model="form.recepients"
            type="text"
            size="lg" 
            placeholder="Enter recepients email (seperate multiple emails with ',' )"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-3" 
          label="Message" 
          label-for="message"       
          label-cols-sm="8"
          label-cols-lg="2"
          >
          <b-form-textarea
            id="message"
            v-model="form.message"
            placeholder="Enter message..."
            rows="8"
            size="lg" 
            no-resize
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" size="lg"  variant="primary">Send Mail</b-button>
        <b-button type="reset" size="lg"  variant="danger">Reset</b-button>
      </b-form>
     </div>

      </b-col>
      <b-col md="4">
        <b-card-body title="Message Preview" style="float:left">
          <b-card-text style="width:100%">
            <p class="dt">
              <span class="tt">SenderID : </span>  <b> {{form.sender}} </b>
            </p>
            <p class="dt">
              <span class="tt">Subject : </span>  <b> {{form.subject}} </b>
            </p>
             <p class="dt">
               <span class="tt">Recepients :</span> <b>{{form.recepients}}</b>
            </p>
             <p class="dt">
               <span class="tt">Message Body : </span> {{form.message}}
               </p>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>
<script>
  export default {
    data() {
      return {
        errors: [],
        apiResponse : '',
        form: {
          sender: '',
          subject: '',
          recepients: '',
          message: '',
        },
        show: true,
        
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let sendingName = this.form.sender;
        let sendingSubject = this.form.subject;
        let receiptMails = this.form.recepients;
        let receiptMessage = this.form.message
        this.errors = []
        if(!this.form.sender){
          this.errors.push('Sender ID is needed')
        }else if(!this.form.subject) {
          this.errors.push('Email Subject is needed')        
        }else if(!this.form.recepients){
          this.errors.push('Sending Email Address(es) is needed')
        }else if(!this.form.message){
          this.errors.push('Message to be sent is needed')
        }else{
        //alert(JSON.stringify(receiptMessage));
        var data = {
          senderSubject:sendingSubject,
          senderID: sendingName,
          emailArray : receiptMails,
          emailMessage : receiptMessage
        }
        this.$http.post('bing/mail.php','data='+JSON.stringify(data))
          .then((response) =>{
            //this.response = response.data;
            console.log(response.data);
            //res = false;
            this.apiResponse =
            `
            <b-alert show variant="success"><h6>`+response.data.status+`</h6> <h3>`+response.data.message+` </h3></b-alert>
            `;
          })
          .catch((error)=>{
           console.log(error);
          })
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.sender = ''
        this.form.recepients = ''
        this.form.message = ''
        this.form.subject = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style scoped>
.g{
    width: 80%;
    margin-left: 150px;
    align-self: auto;
    justify-content: flex-start;
}
.button{
    margin: 10px;
}
.tt{
  float: left;
  line-height: 45px;
  width: 100%;
}
 .dt{
   width: 400px;
  overflow:hidden;
  text-overflow: initial;
  text-align: justify;
}
</style>