const request = require('request')

const url = 'https://api.spacexdata.com/v3/launches?flight_number=65'    //a "?" is used if using query strings whcih the flight number on spaceX is
request({
    uri: url,
    json: true
}, (err, res) => {
    if(err) throw err;
    console.log(res.body[0].rocket.first_stage.cores[0].core_serial)

})


