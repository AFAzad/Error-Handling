
try{
    console.log('Now start for trying.');
    // Data();
    console.log('Here is the end for trying.');
}catch(error){
    // console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
};

/* Different Types of Error in JavaScript
1. Evalerror
2. Range Error
3. Refference Error (Mostly use)
4. SyntaxError  (This also most use)
5.TypeError
6. URIError
7. AggregateError */

try{
    let json = '{"name":"ABUL AZAD","age":45, "class":"B.A"}';
    let user = JSON.parse(json);
    if(!user.name){
        throw new Error("Incomplete Data Format");
    }

    console.log(user.name);
    console.log(user.age);
    console.log(user.class);
}catch(error){
    console.log(error);
}finally{
    console.log("final Call for code");
};
