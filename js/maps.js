 // Kode fra Google sin dokumentasjon om hvordan embedde Google Maps på en webside: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
// Initialize and add the map
let map;

async function initMap() {
// The location of Høgskolen i Østfold, Halden
    const position = { lat: 59.12934101633533, lng: 11.353586517141622 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("maps"), {
        zoom: 13,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Høgskolen i Østfold, Remmen
    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Remmen",
    });
}

initMap();