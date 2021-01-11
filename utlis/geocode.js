const request=require('request')
const chalk=require('chalk')


const geoCode=(address,callback)=>{

  const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoicmlzaGFicmIiLCJhIjoiY2tpZm5oeGU1MWExajJxcnN0amlpZXNlNCJ9.lWBjIY6NgJoPCLqs2T47VQ'

  request({url,json:true},(error,request)=>{

    if(error){
      console.log('Unable to connects to internet !',undefined)

    }
    else if(request.body.message,undefined){
        console.log(chalk.green.inverse('Error : ')+request.body.message+' !')
    }
    else{
        callback(undefined,{
          latitude:request.body.features[0].center[1],
          longitude:request.body.features[0].center[0],
          location:request.body.features[0].place_name

        })
    
} 
})
}
  

module.exports = geoCode

  