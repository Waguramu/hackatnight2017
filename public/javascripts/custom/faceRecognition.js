(function(apigClient){

    function getVehicles(apigClient) {
        apigClient.vehiclesGet().then(function(vehicles){
            console.log(vehicles.data[0].vin);
        });
    }

    window.getVehicles = getVehicles;
})();
    
    