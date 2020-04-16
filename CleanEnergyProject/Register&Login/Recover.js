/* We will use this to verify if the email exists and then alert with success message */
function SentAlert() {
        $.ajax({url: "YOUR PHP FILE URL", success: function(result){
                if(result === 'sent') {
                    alert("We have sent you a link to recover your password");
                }
            }});
}