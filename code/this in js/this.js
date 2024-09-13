const student={
    name:"Ritika",
    age:23,
    eng:45,
    math:98,
    phy:70,
    getavg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got an avg marks ${avg}`);
    }
    

    }
// function getavg(){
//     console.log(this);
// }