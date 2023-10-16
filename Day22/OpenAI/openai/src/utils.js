import moment from"moment";

export const analyze = (text) =>{
    if(text.includes ('hi') || text.includes ('hai') || text.includes('hello'))
        return "Hi, How can i help you?"
    else if(text.includes('change my profile picture'))
        return "To change your profile picture, go to settings, tap \"Edit Profile\" and then  upload a new photo."
    else if(text.includes("add caption"))
        return "To Add Caption,Go to settings,click on add Caption,then Add your Caption"
    else if(text.includes('date'))
        return moment().format('MMMM Do YYYY')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if(text.includes('thankyou'))
        return "Thank You for Contacting me!"
    else if(text.includes('not working'))
        return "Sorry for the inconvinience.kindly mail your problem to potataosupport@gamil.com";
    else if(text.includes('help'))
        return "yes!How may I help you?";
    return "I can't get you. Can you rephrase the message"

}