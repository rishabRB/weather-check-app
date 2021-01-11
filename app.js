
const geoCode=require('./utlis/geocode')
const weatherUpdate = require('./utlis/wheather-update')

const address=process.argv[2]

if(!address)
{
    return console.log('Please provide an address !')
}


geoCode(address,(error,data)=>{
    if(error)
    {
        return console.log(error)
    }
    console.log(data)
      
    weatherUpdate(data.latitude,data.longitude,(error,data)=>{

        if(error)
        {
            return console.log(error)
        }
       console.log(data)
     })

})

