function checkButtonLocation() {
    var LocationID = $('#LocationShown');
    var SpecLocationID = document.getElementById('specificLocation');
    console.log(LocationID);
    if (LocationID[0].checked == false) {
        SpecLocationID.style.display = 'block';
    }
    else {
        SpecLocationID.style.display = 'none';
    }
}
function ShowSomeClicked() {
    var ShowSomeID = $('#inlineFormCustomSelect');
    var CheckboxID = document.getElementById('showSpecificCategories');
    console.log(ShowSomeID);
    if (ShowSomeID[0].selectedOptions[0].innerText == "Show Some") {
        CheckboxID.style.display = "block";
    }
    else {
        CheckboxID.style.display = "none";
    }
}
function TextPressed() {
    var TextOnlyID = $('#TextVoicemailMessage');
    var ActualMessageID = document.getElementById('VoicemailMessage');
    var UploadMessageID = document.getElementById('upload-voice-message');
    console.log(TextOnlyID[0].checked);
    console.log(ActualMessageID.style.display);
    if (TextOnlyID[0].checked) {
        console.log("if loop works");
        ActualMessageID.style.display = "block";
        var UploadMessageID = document.getElementById('upload-voice-message');
    }
}
function UploadPressed() {
    var UploadOnlyID = $('#UploadVoicemailMessage');
    var ActualMessageID = document.getElementById('VoicemailMessage');
    var UploadMessageID = document.getElementById('upload-voice-message');
    var UMID = $('#upload-voice-message');
    console.log(UploadMessageID);
    if (UploadOnlyID[0].checked) {
        UploadMessageID.style.display = "block";
        ActualMessageID.style.display = "none";
    }
}