const key = 'pk.eyJ1IjoibGF1cmVuaXN0YSIsImEiOiJja254djB4b3AwZGNwMm9wNnpuNmF6NGczIn0.wHrRB9-ln-FcfOWl5xvMqQ';

const options = {
  lat: 39.329239,
  lng: -82.101257,
  zoom: 2,
  style:'mapbox://styles/laurenista/cknxvhn700x6q18o5tlam4869',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;
let smoky;

function preload(){  smoky=loadImage('images/smoky.jpg'); }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
    meteorites = loadTable('Meteorite_Landings.csv', 'csv', 'header');
  
}


function draw() {
 clear();
  //noFill();
 stroke(255);
 strokeWeight(3);
 
   const gcanyon= myMap.latLngToPixel(36.1069, -112.1129);
 rect(gcanyon.x,gcanyon.y,20,20);
 if(dist(gcanyon.x,gcanyon.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
const arches = myMap.latLngToPixel(38.7331,-109.59);
 ellipse(arches.x,arches.y,20,20);
 if(dist(arches.x,arches.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{
    fill(255,100); }
  
  const acadia = myMap.latLngToPixel(44.3386,-68.2733);
 ellipse(acadia.x,acadia.y,20,20);
 if(dist(acadia.x,acadia.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{ fill(255,100); }
  
   const americansamoa = myMap.latLngToPixel(-14.2583,-170.683);
 ellipse(americansamoa.x,americansamoa.y,20,20);
 if(dist(americansamoa.x,americansamoa.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{fill(255,100); }
  
   const badlands = myMap.latLngToPixel(43.8554,-102.3397);
 ellipse(badlands.x,badlands.y,20,20);
 if(dist(badlands.x,badlands.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{fill(255,100); }
  
  const bigbend = myMap.latLngToPixel(29.2498,-103.2502);
 ellipse(bigbend.x,bigbend.y,20,20);
 if(dist(bigbend.x,bigbend.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{ fill(255,100); }
  
  const bryce = myMap.latLngToPixel(37.593,-112.187);
 ellipse(bryce.x,bryce.y,20,20);
 if(dist(bryce.x,bryce.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{
    fill(255,100); }

  const capreef = myMap.latLngToPixel(38.0877,-111.13);
 ellipse(capreef.x,capreef.y,20,20);
 if(dist(capreef.x,capreef.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{
    fill(255,100); }

  const carlsbad = myMap.latLngToPixel(32.1291,-104.55);
 ellipse(carlsbad.x,carlsbad.y,20,20);
 if(dist(carlsbad.x,carlsbad.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{
    fill(255,100); }

  const channelislands= myMap.latLngToPixel(34.0069, -119.7785);
 ellipse(channelislands.x,channelislands.y,20,20);
 if(dist(channelislands.x,channelislands.y,mouseX,mouseY)<100){
   fill(0,100); 
  }else{ fill(255,100); }

  const congaree= myMap.latLngToPixel(33.82, -80.82);
 ellipse(congaree.x,congaree.y,20,20);
 if(dist(congaree.x,congaree.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

 const canyonlands= myMap.latLngToPixel(38.2136, -109.9025);
 ellipse(canyonlands.x,canyonlands.y,20,20);
 if(dist(canyonlands.x,canyonlands.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const craterlake= myMap.latLngToPixel(42.8684, -122.1685);
 ellipse(craterlake.x,craterlake.y,20,20);
 if(dist(craterlake.x,craterlake.y,mouseX,mouseY)<100){
  fill(0,100);  }else{ fill(255,100); }

  const cuyahogvalley= myMap.latLngToPixel(41.2808, -81.5678);
 ellipse(cuyahogvalley.x,cuyahogvalley.y,20,20);
 if(dist(cuyahogvalley.x,cuyahogvalley.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100) }
  
  const deathvalley= myMap.latLngToPixel(36.5323, -116.9325);
 ellipse(deathvalley.x,deathvalley.y,20,20);
 if(dist(deathvalley.x,deathvalley.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const denali= myMap.latLngToPixel(63.1148, -151.1926);
 ellipse(denali.x,denali.y,20,20);
 if(dist(denali.x,denali.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
 const DryTortugas= myMap.latLngToPixel(24.6285, -82.8732);
 ellipse(DryTortugas.x,DryTortugas.y,20,20);
 if(dist(DryTortugas.x,DryTortugas.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
   const Blackcanyonguns= myMap.latLngToPixel
   (38.57, -107.74); ellipse( Blackcanyonguns.x, Blackcanyonguns.y,20,20);
 if(dist( Blackcanyonguns.x, Blackcanyonguns.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
    const Biscayne= myMap.latLngToPixel
   (25.48, -80.20); ellipse( Biscayne.x, Biscayne.y,20,20);
 if(dist( Biscayne.x, Biscayne.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const everglades= myMap.latLngToPixel(25.2866, -80.8987);
 ellipse( everglades.x, everglades.y,20,20);
 if(dist( everglades.x, everglades.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const gatesofthearctic= myMap.latLngToPixel(67.8819, -153.1861);
 ellipse(gatesofthearctic.x,gatesofthearctic.y,20,20);
if(dist(gatesofthearctic.x,gatesofthearctic.y,mouseX,mouseY)<100){ fill(0,100);  }else{ fill(255,100); }
  
 const gatewayarch= myMap.latLngToPixel(38.63, -90.19);
 ellipse(gatewayarch.x,gatewayarch.y,20,20);
if(dist(gatewayarch.x,gatewayarch.y,mouseX,mouseY)<100){ fill(0,100);  }else{ fill(255,100); }
  
  
  const glacier = myMap.latLngToPixel(48.7596, -113.7870);
 ellipse(glacier.x,glacier.y,20,20);
 if(dist(glacier.x,glacier.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const glacierbay = myMap.latLngToPixel(58.6658, -136.9002);
 ellipse(glacierbay.x,glacierbay.y,20,20);
 if(dist(glacierbay.x,glacierbay.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
   const gteton= myMap.latLngToPixel(43.7904, -110.6818);
 ellipse(gteton.x,gteton.y,20,20);
 if(dist(gteton.x,gteton.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const greatbasin= myMap.latLngToPixel(38.9300, -114.2634);
 ellipse(greatbasin.x,greatbasin.y,20,20);
 if(dist(greatbasin.x,greatbasin.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  //can't believe i'm only on g parks
  
   const greatsandunes= myMap.latLngToPixel(37.7330, -105.5125);
 ellipse(greatsandunes.x,greatsandunes.y,20,20);
 if(dist(greatsandunes.x,greatsandunes.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const greatsmoky= myMap.latLngToPixel(35.65,-83.50);
 rect(greatsmoky.x,greatsmoky.y,20,20);
 if(dist(greatsmoky.x,greatsmoky.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const GuadalupeMountains= myMap.latLngToPixel( 31.9231, -104.8645);
 ellipse(GuadalupeMountains.x,GuadalupeMountains.y,20,20);
 if(dist(GuadalupeMountains.x,GuadalupeMountains.y,mouseX,mouseY)<100){fill(0,100);  }else{ fill(255,100); }

const Haleakalā = myMap.latLngToPixel(20.7204, -156.15);
 ellipse(Haleakalā.x,Haleakalā.y,20,20);
 if(dist(Haleakalā.x,Haleakalā.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const HawaiʻiVolcanoes= myMap.latLngToPixel(19.419, -155.28);
 ellipse(HawaiʻiVolcanoes.x,HawaiʻiVolcanoes.y,20,20);
 if(dist(HawaiʻiVolcanoes.x,HawaiʻiVolcanoes.y,mouseX,mouseY)<100){fill(0,100);  }else{ fill(255,100); }

const hotsprings =myMap.latLngToPixel(34.5217, -93.04);
 ellipse(hotsprings.x,hotsprings.y,20,20);
 if(dist(hotsprings.x,hotsprings.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const indiedunes= myMap.latLngToPixel(41.650, -87.07);
 ellipse(indiedunes.x,indiedunes.y,20,20);
 if(dist(indiedunes.x,indiedunes.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  ///indiana dunes sounds like indie dudes

  const isleroyale = myMap.latLngToPixel(47.99, -88.909);
 ellipse(isleroyale.x,isleroyale.y,20,20);
 if(dist(isleroyale.x,isleroyale.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const joshua= myMap.latLngToPixel(33.873, -115.90);
 ellipse(joshua.x,joshua.y,20,20);
 if(dist(joshua.x,joshua.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const katmai= myMap.latLngToPixel(58.6126, -155.0631);
 ellipse(katmai.x,katmai.y,20,20);
 if(dist(katmai.x,katmai.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const kenaifjords= myMap.latLngToPixel(59.848, -150.187);
 ellipse(kenaifjords.x,kenaifjords.y,20,20);
 if(dist(kenaifjords.x,kenaifjords.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
 const kcanyon = myMap.latLngToPixel (36.8879, -118.5551)
 ellipse(kcanyon.x,kcanyon.y,20,20);
 if(dist(kcanyon.x,kcanyon.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const kobukvalley= myMap.latLngToPixel(67.33, -159.12);
 ellipse(kobukvalley.x,kobukvalley.y,20,20);
 if(dist(kobukvalley.x,kobukvalley.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const lakeclark= myMap.latLngToPixel(60.4127, -154.323);
 ellipse(lakeclark.x,lakeclark.y,20,20);
 if(dist(lakeclark.x,lakeclark.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const lassenvolcanic= myMap.latLngToPixel(40.4977, -121.420);
 ellipse(lassenvolcanic.x,lassenvolcanic.y,20,20);
 if(dist(lassenvolcanic.x,lassenvolcanic.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const mammothcave= myMap.latLngToPixel(37.1815, -86.1505);
 ellipse(mammothcave.x,mammothcave.y,20,20);
 if(dist(mammothcave.x,mammothcave.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
const mesaverde = myMap.latLngToPixel(37.23,-108.461);
 ellipse(mesaverde.x,mesaverde.y,20,20);
 if(dist(mesaverde.x,mesaverde.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const mountrainer= myMap.latLngToPixel(46.8523, -121.7603);
 ellipse(mountrainer.x,mountrainer.y,20,20);
 if(dist(mountrainer.x,mountrainer.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  ///there r so many parks dude

  const newrivergorge= myMap.latLngToPixel(37.8776, -81.0189);
 ellipse(newrivergorge.x,newrivergorge.y,20,20);
 if(dist(newrivergorge.x,newrivergorge.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const northcascades= myMap.latLngToPixel(48.771, -121.2985);
 ellipse(northcascades.x,northcascades.y,20,20);
 if(dist(northcascades.x,northcascades.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const olympic= myMap.latLngToPixel(47.8021, -123.6044);
 ellipse(olympic.x,olympic.y,20,20);
 if(dist(olympic.x,olympic.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const petforest= myMap.latLngToPixel(35.003, -109.788);
 ellipse(petforest.x,petforest.y,20,20);
 if(dist(petforest.x,petforest.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const pinnacles= myMap.latLngToPixel(36.409, -121.1825);
 ellipse(pinnacles.x,pinnacles.y,20,20);
 if(dist(pinnacles.x,pinnacles.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const redwood= myMap.latLngToPixel(41.2132, -124.004);
 ellipse(redwood.x,redwood.y,20,20);
 if(dist(redwood.x,redwood.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
const rockymountain= myMap.latLngToPixel(40.3428, -105.6836);
 ellipse(rockymountain.x,rockymountain.y,20,20);
 if(dist(rockymountain.x,rockymountain.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const saguaro= myMap.latLngToPixel(32.2967, -111.166);
 ellipse(saguaro.x,saguaro.y,20,20);
 if(dist(saguaro.x,saguaro.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const sequoia= myMap.latLngToPixel(36.4864, -118.5658)
ellipse(sequoia.x,sequoia.y,20,20);
 if(dist(sequoia.x,sequoia.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const Shenandoah= myMap.latLngToPixel(38.4755, -78.4535);
 ellipse(Shenandoah.x,Shenandoah.y,20,20);
 if(dist(Shenandoah.x,Shenandoah.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const teddyrose = myMap.latLngToPixel(46.9790, -103.5387);
 ellipse(teddyrose.x,teddyrose.y,20,20);
 if(dist(teddyrose.x,teddyrose.y,mouseX,mouseY)<100){fill(0,100);  }else{ fill(255,100); }

const VirginIslands= myMap.latLngToPixel(18.3424, -64.7486);
 ellipse(VirginIslands.x,VirginIslands.y,20,20); if(dist(VirginIslands.x,VirginIslands.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const Voyageurs = myMap.latLngToPixel(48.4725, -92.8492);
 ellipse(Voyageurs.x,Voyageurs.y,20,20);
 if(dist(Voyageurs.x,Voyageurs.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  const whitesand= myMap.latLngToPixel(32.7872, -106.3257);
 ellipse(whitesand.x,whitesand.y,20,20);
 if(dist(whitesand.x,whitesand.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  ///almost doneeeee 

const windcave= myMap.latLngToPixel(43.57, -103.44);
 ellipse(windcave.x, windcave.y,20,20);
 if(dist(windcave.x, windcave.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

 const WrangellStElias= myMap.latLngToPixel(61.7104, -142.9857);
 ellipse(WrangellStElias.x, WrangellStElias.y,20,20);
 if(dist(WrangellStElias.x, WrangellStElias.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const Yellowstone= myMap.latLngToPixel(44.4280, -110.5885);
 ellipse(Yellowstone.x,Yellowstone.y,20,20);
 if(dist(Yellowstone.x,Yellowstone.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

const yosemite= myMap.latLngToPixel(37.8651, -119.5383);
 ellipse(yosemite.x,yosemite.y,20,20);
 if(dist(yosemite.x,yosemite.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }

  const zion= myMap.latLngToPixel(37.2982, -113.0263);
 ellipse(zion.x,zion.y,20,20);
 if(dist(zion.x,zion.y,mouseX,mouseY)<100){
   fill(0,100);  }else{ fill(255,100); }
  
  let s = 'ALL PARKS, ACADIA, AMERICAN_SAMOA, ARCHES, BADLANDS, BIG_BEND, BRYCE_CANYON, BISCAYNE BLACK_CANYON_OF_THE_GUNNISON, CANYONLANDS, CAPITOL_REEF, CARLSBAD_CAVERNS, CHANNEL_ISLANDS, CONGAREE, CRATER_LAKE, CUYAHOGA_VALLEY, DEATH_VALLEY, DENALI, DRY_TORTUGAS, EVERGLADES, GATES_OF_THE_ARCTIC, GATEWAY_ARCH, GLACIER, GLACIER_BAY, GRAND_CANYON, GRAND_TETON, GREAT_BASIN, GREAT_SAND_DUNES, GREAT_SMOKY_MOUNTAINS, GUADALUPE_MOUNTAINS, HALEAKlALÂ, HAWAII_VOLCANOES, HOTSPRINGS, INDIANA_DUNES, ISLE_ROYALE, JOSHUA_TREE, KATMAI, KENAI_FJORDS, KINGS_CANYON, KOBUK_VALLEY, LAKE_CLARK, LASSEN_VOLCANIC, MAMMOTH_CAVE, MESA_VERDE, MOUNT_RAINER, NEW_RIVER_GORGE, NORTH_CASCADES, OLYMPIC, PRTRIFIED_FOREST, PINNACLES, REDWOOD, ROCKY_MOUNTAIN,SAGUARO, SEQUOIA, SHENANDOAH, THEODORE_ROOSEVELT, VIRGIN_ISLANDS, VOYAGEURS, WHITE_SANDS, WIND_CAVES, WRANGELL–ST.ELIAS, YELLOWSTONE, YOSEMITE, ZION  ';
fill(50);
text(s, 10, 10, 115, 900);
}