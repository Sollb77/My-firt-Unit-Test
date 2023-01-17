



test("One euro should be 1.206 dollar", () =>{
    // importo la funcion desde app.js
    
     // use the function like its suppoed to be used
     
     const {fromEuroToDollar} =require('./app.js')
     
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 106.58 yens", () =>{
    // importo la funcion desde app.js
    
    
    const {fromDollarToYen} =require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58); 
})

test("One yen should be 0.006 GBP", function(){
    // importo la funcion desde app.js
   
    const {fromYenToPound} =require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.006); 
})
