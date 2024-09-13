const student={
    name:"riya",
    marks:98,
    prop:this,//global scope
    getname: function(){
        console.log(this);
        return this.name;
    },
    getmarks: ()=>{
        console.log(this);//parent's scope->window object.
        return this.marks;
    },
    getinfo1: function(){
        setTimeout(()=>{
            console.log(this);//student object
        },2000);
    },
    getinfo2: function(){
        setTimeout(function(){
            console.log(this);//window object,settimeout is a window object function so window is called.
        },3000);
    }

    };
    //arrow function is a parents scope whatever this will be of parents that same this having to the arrow function but in normal function this means calling of recent object function or value.

    //practice
    //question 1;-write an arrow function that return the square of a number 'n'.
    const squd=(n)=>{
       // return n*n;
       n*n
    };
    //question 2:-write a function that prints "hello world" 5 times at intervals of 2s each.
    let id=setInterval(()=>{
        console.log("hello world");
    },2000);

    setTimeout(()=>{
        clearInterval(id);
        console.log("clear interval ran");
    },12000);

