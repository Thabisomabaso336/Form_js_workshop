export default class NumberWork {
  constructor(x) {
    this.num1 = x;
  }
  displayNumber() {
    console.log("This is num1: " + this.num1);
  }
  posOrNeg(){
    if (this.num1 > 0) {
    console.log("Positive");
} else{
    console.log("negative");
}
  }
}