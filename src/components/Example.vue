<template>
<div>
  <b-card class="text-center lg">
        <div class="bg-info text-light"><br/><br/>
        <h1>Examples</h1>
        <br/>
        <br/><br/>
        </div>
  </b-card>
 <b-card class="text-center lg">
    <b-row>
        <b-col md="6">
            <b-card bg-variant="success" id="simpleMail">
                <b-card-header>
                    <h2>Simple Email</h2>
                </b-card-header>
                <b-card-body>
                    <p>
                        Send Email to specific address(es) with zero formatting. Emails would be sent as plain html text.
                    </p>
                </b-card-body>
                <b-card-footer>
                    <b-button size="lg" to="/simple_mail" variant="danger" class="button">Try It!</b-button>
                </b-card-footer>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card bg-variant="warning"  id="MailAttach">
                <b-card-header>
                    <h2>Email Attachment</h2>
                </b-card-header>
                <b-card-body>
                    <p>
                        Send files to an email address(es), this examples illustrates how a file can be sent alongside text to email address(es)
                    </p>
                </b-card-body>
                <b-card-footer>
                    <b-button size="lg" to="/mail_images" disabled="disabled" variant="danger" class="button">Try It!</b-button>
                </b-card-footer>
            </b-card>
        </b-col>
    </b-row>
    <br/>
    <b-row>
        <b-col md="6">
            <b-card bg-variant="warning" id="MailImage">
                <b-card-header>
                    <h2>Email with Images</h2>
                </b-card-header>
                <b-card-body>
                    <p>
                        Send Email to specific address(es) with embedded images. Emails would be sent as plain html text with images also been part of the message.
                    </p>
                </b-card-body>
                <b-card-footer>
                    <b-button size="lg" to="/mail_images" disabled="disabled" variant="danger" class="button">Try It!</b-button>
                </b-card-footer>
            </b-card>
        </b-col>
        <b-col md="6">
            <b-card bg-variant="success" id="MailCustom">
                <b-card-header >
                    <h2>Customize Mail</h2>
                </b-card-header>
                <b-card-body>
                    <p>
                        Send a customize email to address(es), this mail has option to add a customer header and footer (of which may contain colors and images)
                    </p>
                </b-card-body>
                <b-card-footer>
                    <b-button size="lg" to="/customize_mail" disabled="disabled"  variant="danger" class="button">Try It!</b-button>
                </b-card-footer>
            </b-card>
        </b-col>
    </b-row>
  </b-card>
</div>
    
</template>
<script>
export default {
    
}
</script>