class Password{
  //The first part of the class.
constructor(k,p){
  this.privatekey=k
  this.publickey=p
}


  //Instance functions below this comment.
ValidPublickey(){
if(this.publickey.length >=8 && this.publickey.length <=25){
return true

else{
return false;
}

}
}
ValidPrivatekey(){
  if(this.privatekey.char([4]&& this.privatekey[9]=="-")){
  return true;

}
else{
  return false;
}
  //Static function below this comment.
makePrivateKey(){
  let key = [];
  let limit = 14;
  for(c = 0;c <= 3; c++){
  }
