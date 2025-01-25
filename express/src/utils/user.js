const password=()=>
    {
        let chargene="mnnbvcxzlkjhgfdsapoiuytrewq1234567890"
        let password=""
        for(i=0;i<8;i++)
        {
           password=+chargene.charAt(Math.floor(Math.random()*chargene.length))
        }
        return password
    }
    module.exports=password