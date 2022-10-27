class Add {
  constructor(...words) {
      this.words = words;
  }
  //your code goes here
  print()
  {
    let i ="";
    for(let j of this.words )
    {
      i = i+"$"+j; //the beginning of the string
    }
    console.log(i+'$'); //end of the string $
  }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
