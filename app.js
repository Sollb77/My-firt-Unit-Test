



const fromDollarToYen =(dollar) =>{ 
    return 106.58*dollar;
    
};



 const fromEuroToDollar =(euro) =>{ 
    return euro*1.2;
    
};



 const fromYenToPound =(Yen) =>{ 
    return Yen*0.006;
    
};



module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};