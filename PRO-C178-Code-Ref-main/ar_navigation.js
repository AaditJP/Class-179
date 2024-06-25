let coordinates = {}
$(document).ready(function(){
    getCoordinates()
})
function getCoordinates(){
    let searchParam = new URLSearchParams(window.location.search)
    if (searchParam.has("source")&&searchParam.has("destination")){
        let source = searchParam.get('source')
        let destination = searchParam.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = source.split(";")[0]
        coordinates.destination_lon = source.split(";")[1]
    }else{
        alert("Coordinates Not Selected")
        window.history.back()
    }
}