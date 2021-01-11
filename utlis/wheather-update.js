const chalk=require('chalk')

const request=require('request')


const weatherUpdate=(latitude,longitude,callback)=>{


const url='http://api.openweathermap.org/data/2.5/weather?units=metric&lat='+ latitude +'&lon='+ longitude +'&appid=96aff875aa27beaf217e10bea326f18a'


request({url,json:true},(error,request)=>{

    if(error){

        console.log('Unable to connect with internet !')

    }
    else if(request.body.message)
    {
        console.log(chalk.red.inverse('Error:')+request.body.message+"!")
    }
     else{

    
          callback(undefined,{
              temperature:request.body.main.temp,
              feelsLike:request.body.main.feels_like,
              MaxTemp:request.body.main.temp_max,
              MinTemp:request.body.main.temp_min,
              cloud:request.body.clouds.all

          })
    }
    

})
}

module.exports=weatherUpdate