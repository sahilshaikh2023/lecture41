function twicerun(fn){

    fn();
    fn();
}
twicerun(function(){
    console.log("hello");
    
});



