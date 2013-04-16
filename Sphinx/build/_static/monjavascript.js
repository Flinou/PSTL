// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var mypre = document.getElementById(prer);
    mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit(a,b,c) {
   var code = a;
   var identite = a + '_code'
   prer = a + '_pre'
   var prog = document.getElementById(identite).value;
   var mypre = document.getElementById(prer);
   mypre.innerHTML = '';
   Sk.canvas = "mycanvas";
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead});
    try{
    var eleve = Sk.importMainWithBody("<stdin>",false,prog);
  }catch(e){
    outf(e + '\n');
  }
}
