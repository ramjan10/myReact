export default function Text ({addEmoji, addBracket}){
    let text = "this text is from Text componet";
    if(addEmoji){
        text =  addEmoji(text, '💙') ;
    }
    if(addBracket){
        text = addBracket(text);
    }
    return <div> {text} </div>;
}