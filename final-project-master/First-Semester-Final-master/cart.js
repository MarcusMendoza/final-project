class Cart{
  //What is the first part of every class? Type it below.
constructor (){
this.itemList=[];
this.itemQuantity=[];
}



  //Type the instance functions below this comment.
addItem(i,q)
this.itemlist.unshiift(i);
this.itemQuantity.unshift(q);

totalCart(){
let total = 0
for(var c=0;c <this.itemList[].length;c++){
total= total+this.itemList[c].price*this.itemQuantity[c];

}
return total;
}
subCart(days){
  let subCart = new Cart();
  for(var c=0;c <this.itemList[].length;a++)
  if(this.itemList[c].shipping == days){
    subCart.itemList.unshift(this.itemList[c]);
    subcart.itemQuantity.unshift(this.itemQuantity[c]);
  }
}
