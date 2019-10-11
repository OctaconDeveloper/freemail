<template>
    <div>
        <b-row style="margin:10px;">
            <b-button to="/simple_mail" style="margin-right:5px;">Simple Mail</b-button>
            <b-button to="/mail_attchement"  style="margin-right:5px;">Email Attachment</b-button>
            <b-button to="/mail_images" disabled="disabled" style="margin-right:5px;">Email with Images</b-button>
            <b-button to="/customize_mail" variant="success" style="margin-right:5px;">Customize Mail</b-button>
        </b-row>
        <h1>Customize Mail</h1>
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
            rows="5"
            size="lg" 
            no-resize
          ></b-form-textarea>
        </b-form-group>
        <b-form-group 
          id="input-group-4" 
          label="Attachment (Optional)" 
          label-for="file"       
          label-cols-sm="8"
          label-cols-lg="2"
          >
          <b-form-file
            id="file"
            v-model="form.file"
            type="file"
            size="lg" 
            ref="file"
            placeholder="Upload Attachment"
          ></b-form-file>
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
            <br/>
             <p class="dt">
               <span class="tt">Recepients :</span> <b>{{form.recepients}}</b>
            </p>
             <p class="dt">
               <span class="tt">Message Body : </span> {{form.message}}
            </p>
             <p class="dt">
               <span class="tt">Attachment : </span> <b> {{form.file.name}}</b>
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
          recepients: '',
          message: '',
          file: '',
        },
        show: true,
        
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        let sendingName = this.form.sender;
        let receiptMails = this.form.recepients;
        let receiptMessage = this.form.message
        let mailsArray = receiptMails.split(',')
        let mailFile = this.form.file
        this.errors = []
        if(!this.form.sender){
          this.errors.push('Sender ID is needed')
        }else if(!this.form.recepients){
          this.errors.push('Sending Email Address(es) is needed')
        }else if(!this.form.message){
          this.errors.push('Message to be sent is needed')
        }else if(!this.form.file){
          this.errors.push('Mail Attachment is needed')
        }else{
        //alert(JSON.stringify(receiptMessage));
        this.$http.post('bing/cretemessage.php',{
          sender: sendingName,
          emails: mailsArray,
          message: receiptMessage,
          file: mailFile
          })
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
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>