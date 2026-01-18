//  create the pure functon that alaways  return the  same output for thhe given  input      and impure     function using the global variable


function pure  (a,b)
{
    console.log(a+b);
}

pure(2,5);
pure(2,5);

let global = 0;

function impure (a){

    global++;

    console.log(a+global);

}
impure(2);
impure(2);