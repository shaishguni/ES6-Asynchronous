let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };



let order = (Fruit_name,call_production)=>{
   setTimeout(()=>{
    console.log(`${stocks.Fruits[Fruit_name]} was selected`)
    call_production()
   },2000)
 
};

let production = ()=>{
    setTimeout(() => {
        console.log('production started')
        setTimeout(()=>{
            console.log("The food has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=>{
                    console.log("the machin has been stsarted")
                    setTimeout(()=>{
                        console.log(` ice cream was placed ${stocks.holder[0]} was seected`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0] } was selected as toppings`)
                            setTimeout(()=>{
                                console.log('served ice cream')
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    }, 0000);
}
order(2,production)
