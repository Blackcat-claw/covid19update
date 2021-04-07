function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const api_url_main = 'https://covid19.mathdro.id/api';
async function getAPImain(){
    const response = await fetch (api_url_main);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('mainCases').textContent = numberWithCommas(confirmed.value);
    document.getElementById('mainRecovered').textContent = numberWithCommas(recovered.value);
    document.getElementById('mainDeaths').textContent = numberWithCommas(deaths.value);
}

getAPImain();
setInterval(getAPImain, 5000);


const api_url_indo = 'https://covid19.mathdro.id/api/countries/indonesia';
async function getAPIindo(){
    const response = await fetch (api_url_indo);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('indoCases').textContent = confirmed.value;
    document.getElementById('indoRecovered').textContent = recovered.value;
    document.getElementById('indoDeaths').textContent = deaths.value;
}
getAPIindo();
setInterval(getAPIindo, 5000);

const api_url_PH = 'https://covid19.mathdro.id/api/countries/philippines';
async function getAPIPH(){
    const response = await fetch (api_url_PH);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('PHCases').textContent = confirmed.value;
    document.getElementById('PHRecovered').textContent = recovered.value;
    document.getElementById('PHDeaths').textContent = deaths.value;
}
getAPIPH();
setInterval(getAPIPH, 5000);

const api_url_malay = 'https://covid19.mathdro.id/api/countries/malaysia';
async function getAPImalay(){
    const response = await fetch (api_url_malay);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('malayCases').textContent = confirmed.value;
    document.getElementById('malayRecovered').textContent = recovered.value;
    document.getElementById('malayDeaths').textContent = deaths.value;
}
getAPImalay();
setInterval(getAPImalay, 5000);

const api_url_india = 'https://covid19.mathdro.id/api/countries/india';
async function getAPIindia(){
    const response = await fetch (api_url_india);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('indiaCases').textContent = confirmed.value;
    document.getElementById('indiaRecovered').textContent = recovered.value;
    document.getElementById('indiaDeaths').textContent = deaths.value;
}
getAPIindia();
setInterval(getAPIindia, 5000);

const api_url_turkey = 'https://covid19.mathdro.id/api/countries/turkey';
async function getAPIturkey(){
    const response = await fetch (api_url_turkey);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('turkeyCases').textContent = confirmed.value;
    document.getElementById('turkeyRecovered').textContent = recovered.value;
    document.getElementById('turkeyDeaths').textContent = deaths.value;
}
getAPIturkey();
setInterval(getAPIturkey, 5000);

const api_url_iran = 'https://covid19.mathdro.id/api/countries/iran';
async function getAPIiran(){
    const response = await fetch (api_url_iran);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('iranCases').textContent = confirmed.value;
    document.getElementById('iranRecovered').textContent = recovered.value;
    document.getElementById('iranDeaths').textContent = deaths.value;
}
getAPIiran();
setInterval(getAPIiran, 5000);

const api_url_iraq = 'https://covid19.mathdro.id/api/countries/iraq';
async function getAPIiraq(){
    const response = await fetch (api_url_iraq);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('iraqCases').textContent = confirmed.value;
    document.getElementById('iraqRecovered').textContent = recovered.value;
    document.getElementById('iraqDeaths').textContent = deaths.value;
}
getAPIiraq();
setInterval(getAPIiraq, 5000);

const api_url_israel = 'https://covid19.mathdro.id/api/countries/israel';
async function getAPIisrael(){
    const response = await fetch (api_url_israel);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('israelCases').textContent = confirmed.value;
    document.getElementById('israelRecovered').textContent = recovered.value;
    document.getElementById('israelDeaths').textContent = deaths.value;
}
getAPIisrael();
setInterval(getAPIisrael, 5000);

const api_url_pakistan = 'https://covid19.mathdro.id/api/countries/pakistan';
async function getAPIpakistan(){
    const response = await fetch (api_url_pakistan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('pakistanCases').textContent = confirmed.value;
    document.getElementById('pakistanRecovered').textContent = recovered.value;
    document.getElementById('pakistanDeaths').textContent = deaths.value;
}
getAPIpakistan();
setInterval(getAPIpakistan, 5000);

const api_url_bangladesh = 'https://covid19.mathdro.id/api/countries/bangladesh';
async function getAPIbangladesh(){
    const response = await fetch (api_url_bangladesh);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('bangladeshCases').textContent = confirmed.value;
    document.getElementById('bangladeshRecovered').textContent = recovered.value;
    document.getElementById('bangladeshDeaths').textContent = deaths.value;
}
getAPIbangladesh();
setInterval(getAPIbangladesh, 5000);

const api_url_jordan = 'https://covid19.mathdro.id/api/countries/jordan';
async function getAPIjordan(){
    const response = await fetch (api_url_jordan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('jordanCases').textContent = confirmed.value;
    document.getElementById('jordanRecovered').textContent = recovered.value;
    document.getElementById('jordanDeaths').textContent = deaths.value;
}
getAPIjordan();
setInterval(getAPIjordan, 5000);

const api_url_japan = 'https://covid19.mathdro.id/api/countries/japan';
async function getAPIjapan(){
    const response = await fetch (api_url_japan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('japanCases').textContent = confirmed.value;
    document.getElementById('japanRecovered').textContent = recovered.value;
    document.getElementById('japanDeaths').textContent = deaths.value;
}
getAPIjapan();
setInterval(getAPIjapan, 5000);

const api_url_lebanon = 'https://covid19.mathdro.id/api/countries/lebanon';
async function getAPIlebanon(){
    const response = await fetch (api_url_lebanon);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('lebanonCases').textContent = confirmed.value;
    document.getElementById('lebanonRecovered').textContent = recovered.value;
    document.getElementById('lebanonDeaths').textContent = deaths.value;
}
getAPIlebanon();
setInterval(getAPIlebanon, 5000);

const api_url_AE = 'https://covid19.mathdro.id/api/countries/AE';
async function getAPIAE(){
    const response = await fetch (api_url_AE);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('AECases').textContent = confirmed.value;
    document.getElementById('AERecovered').textContent = recovered.value;
    document.getElementById('AEDeaths').textContent = deaths.value;
}
getAPIAE();
setInterval(getAPIAE, 5000);

const api_url_SAU = 'https://covid19.mathdro.id/api/countries/SAU';
async function getAPISAU(){
    const response = await fetch (api_url_SAU);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('SAUCases').textContent = confirmed.value;
    document.getElementById('SAURecovered').textContent = recovered.value;
    document.getElementById('SAUDeaths').textContent = deaths.value;
}
getAPISAU();
setInterval(getAPISAU, 5000);

const api_url_geo = 'https://covid19.mathdro.id/api/countries/georgia';
async function getAPIgeo(){
    const response = await fetch (api_url_geo);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('geoCases').textContent = confirmed.value;
    document.getElementById('geoRecovered').textContent = recovered.value;
    document.getElementById('geoDeaths').textContent = deaths.value;
}
getAPIgeo();
setInterval(getAPIgeo, 5000);

const api_url_nepal = 'https://covid19.mathdro.id/api/countries/nepal';
async function getAPInepal(){
    const response = await fetch (api_url_nepal);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('nepalCases').textContent = confirmed.value;
    document.getElementById('nepalRecovered').textContent = recovered.value;
    document.getElementById('nepalDeaths').textContent = deaths.value;
}
getAPInepal();
setInterval(getAPInepal, 5000);

const api_url_azerbaijan = 'https://covid19.mathdro.id/api/countries/azerbaijan';
async function getAPIazerbaijan(){
    const response = await fetch (api_url_azerbaijan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('azerbaijanCases').textContent = confirmed.value;
    document.getElementById('azerbaijanRecovered').textContent = recovered.value;
    document.getElementById('azerbaijanDeaths').textContent = deaths.value;
}
getAPIazerbaijan();
setInterval(getAPIazerbaijan, 5000);

const api_url_kazakhstan = 'https://covid19.mathdro.id/api/countries/kazakhstan';
async function getAPIkazakhstan(){
    const response = await fetch (api_url_kazakhstan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('kazakhstanCases').textContent = confirmed.value;
    document.getElementById('kazakhstanRecovered').textContent = recovered.value;
    document.getElementById('kazakhstanDeaths').textContent = deaths.value;
}
getAPIkazakhstan();
setInterval(getAPIkazakhstan, 5000);

const api_url_kuwait = 'https://covid19.mathdro.id/api/countries/kuwait';
async function getAPIkuwait(){
    const response = await fetch (api_url_kuwait);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('kuwaitCases').textContent = confirmed.value;
    document.getElementById('kuwaitRecovered').textContent = recovered.value;
    document.getElementById('kuwaitDeaths').textContent = deaths.value;
}
getAPIkuwait();
setInterval(getAPIkuwait, 5000);

const api_url_armenia = 'https://covid19.mathdro.id/api/countries/armenia';
async function getAPIarmenia (){
    const response = await fetch (api_url_armenia);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('armeniaCases').textContent = confirmed.value;
    document.getElementById('armeniaRecovered').textContent = recovered.value;
    document.getElementById('armeniaDeaths').textContent = deaths.value;
}
getAPIarmenia();
setInterval(getAPIarmenia, 5000);

const api_url_qatar = 'https://covid19.mathdro.id/api/countries/qatar';
async function getAPIqatar (){
    const response = await fetch (api_url_qatar);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('qatarCases').textContent = confirmed.value;
    document.getElementById('qatarRecovered').textContent = recovered.value;
    document.getElementById('qatarDeaths').textContent = deaths.value;
}
getAPIqatar();
setInterval(getAPIqatar, 5000);

const api_url_oman = 'https://covid19.mathdro.id/api/countries/oman';
async function getAPIoman (){
    const response = await fetch (api_url_oman);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('omanCases').textContent = confirmed.value;
    document.getElementById('omanRecovered').textContent = recovered.value;
    document.getElementById('omanDeaths').textContent = deaths.value;
}
getAPIoman();
setInterval(getAPIoman, 5000);

const api_url_bahrain = 'https://covid19.mathdro.id/api/countries/bahrain';
async function getAPIbahrain(){
    const response = await fetch (api_url_bahrain);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('bahrainCases').textContent = confirmed.value;
    document.getElementById('bahrainRecovered').textContent = recovered.value;
    document.getElementById('bahrainDeaths').textContent = deaths.value;
}
getAPIbahrain();
setInterval(getAPIbahrain, 5000);

const api_url_KR = 'https://covid19.mathdro.id/api/countries/KR';
async function getAPIKR(){
    const response = await fetch (api_url_KR);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('KRCases').textContent = confirmed.value;
    document.getElementById('KRRecovered').textContent = recovered.value;
    document.getElementById('KRDeaths').textContent = deaths.value;
}
getAPIKR();
setInterval(getAPIKR, 5000);

const api_url_LK = 'https://covid19.mathdro.id/api/countries/LK';
async function getAPILK(){
    const response = await fetch (api_url_LK);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('LKCases').textContent = confirmed.value;
    document.getElementById('LKRecovered').textContent = recovered.value;
    document.getElementById('LKDeaths').textContent = deaths.value;
}
getAPILK();
setInterval(getAPILK, 5000);

const api_url_china = 'https://covid19.mathdro.id/api/countries/china';
async function getAPIchina(){
    const response = await fetch (api_url_china);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('chinaCases').textContent = confirmed.value;
    document.getElementById('chinaRecovered').textContent = recovered.value;
    document.getElementById('chinaDeaths').textContent = deaths.value;
}
getAPIchina();
setInterval(getAPIchina, 5000);

const api_url_kyrgyzstan = 'https://covid19.mathdro.id/api/countries/kyrgyzstan';
async function getAPIkyrgyzstan(){
    const response = await fetch (api_url_kyrgyzstan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('kyrgyzstanCases').textContent = confirmed.value;
    document.getElementById('kyrgyzstanRecovered').textContent = recovered.value;
    document.getElementById('kyrgyzstanDeaths').textContent = deaths.value;
}
getAPIkyrgyzstan();
setInterval(getAPIkyrgyzstan, 5000);

const api_url_uzbekistan = 'https://covid19.mathdro.id/api/countries/uzbekistan';
async function getAPIuzbekistan(){
    const response = await fetch (api_url_uzbekistan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('uzbekistanCases').textContent = confirmed.value;
    document.getElementById('uzbekistanRecovered').textContent = recovered.value;
    document.getElementById('uzbekistanDeaths').textContent = deaths.value;
}
getAPIuzbekistan();
setInterval(getAPIuzbekistan, 5000);

const api_url_singapore = 'https://covid19.mathdro.id/api/countries/singapore';
async function getAPIsingapore(){
    const response = await fetch (api_url_singapore);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('singaporeCases').textContent = confirmed.value;
    document.getElementById('singaporeRecovered').textContent = recovered.value;
    document.getElementById('singaporeDeaths').textContent = deaths.value;
}
getAPIsingapore();
setInterval(getAPIsingapore, 5000);

const api_url_afghanistan = 'https://covid19.mathdro.id/api/countries/afghanistan';
async function getAPIafghanistan(){
    const response = await fetch (api_url_afghanistan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('afghanistanCases').textContent = confirmed.value;
    document.getElementById('afghanistanRecovered').textContent = recovered.value;
    document.getElementById('afghanistanDeaths').textContent = deaths.value;
}
getAPIafghanistan();
setInterval(getAPIafghanistan, 5000);

const api_url_cyprus = 'https://covid19.mathdro.id/api/countries/cyprus';
async function getAPIcyprus(){
    const response = await fetch (api_url_cyprus);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('cyprusCases').textContent = confirmed.value;
    document.getElementById('cyprusRecovered').textContent = recovered.value;
    document.getElementById('cyprusDeaths').textContent = deaths.value;
}
getAPIcyprus();
setInterval(getAPIcyprus, 5000);

const api_url_thailand = 'https://covid19.mathdro.id/api/countries/thailand';
async function getAPIthailand(){
    const response = await fetch (api_url_thailand);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('thailandCases').textContent = confirmed.value;
    document.getElementById('thailandRecovered').textContent = recovered.value;
    document.getElementById('thailandDeaths').textContent = deaths.value;
}
getAPIthailand();
setInterval(getAPIthailand, 5000);

const api_url_maldives = 'https://covid19.mathdro.id/api/countries/maldives';
async function getAPImaldives(){
    const response = await fetch (api_url_maldives);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('maldivesCases').textContent = confirmed.value;
    document.getElementById('maldivesRecovered').textContent = recovered.value;
    document.getElementById('maldivesDeaths').textContent = deaths.value;
}
getAPImaldives();
setInterval(getAPImaldives, 5000);

const api_url_syria = 'https://covid19.mathdro.id/api/countries/syria';
async function getAPIsyria(){
    const response = await fetch (api_url_syria);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('syriaCases').textContent = confirmed.value;
    document.getElementById('syriaRecovered').textContent = recovered.value;
    document.getElementById('syriaDeaths').textContent = deaths.value;
}
getAPIsyria();
setInterval(getAPIsyria, 5000);

const api_url_tajikistan = 'https://covid19.mathdro.id/api/countries/tajikistan';
async function getAPItajikistan(){
    const response = await fetch (api_url_tajikistan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('tajikistanCases').textContent = confirmed.value;
    document.getElementById('tajikistanRecovered').textContent = recovered.value;
    document.getElementById('tajikistanDeaths').textContent = deaths.value;
}
getAPItajikistan();
setInterval(getAPItajikistan, 5000);

const api_url_mongolia = 'https://covid19.mathdro.id/api/countries/mongolia';
async function getAPImongolia(){
    const response = await fetch (api_url_mongolia);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('mongoliaCases').textContent = confirmed.value;
    document.getElementById('mongoliaRecovered').textContent = recovered.value;
    document.getElementById('mongoliaDeaths').textContent = deaths.value;
}
getAPImongolia();
setInterval(getAPImongolia, 5000);

const api_url_yemen = 'https://covid19.mathdro.id/api/countries/yemen';
async function getAPIyemen(){
    const response = await fetch (api_url_yemen);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('yemenCases').textContent = confirmed.value;
    document.getElementById('yemenRecovered').textContent = recovered.value;
    document.getElementById('yemenDeaths').textContent = deaths.value;
}
getAPIyemen();
setInterval(getAPIyemen, 5000);

const api_url_cambodia = 'https://covid19.mathdro.id/api/countries/cambodia';
async function getAPIcambodia(){
    const response = await fetch (api_url_cambodia);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('cambodiaCases').textContent = confirmed.value;
    document.getElementById('cambodiaRecovered').textContent = recovered.value;
    document.getElementById('cambodiaDeaths').textContent = deaths.value;
}
getAPIcambodia();
setInterval(getAPIcambodia, 5000);

const api_url_vietnam = 'https://covid19.mathdro.id/api/countries/vietnam';
async function getAPIvietnam(){
    const response = await fetch (api_url_vietnam);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('vietnamCases').textContent = confirmed.value;
    document.getElementById('vietnamRecovered').textContent = recovered.value;
    document.getElementById('vietnamDeaths').textContent = deaths.value;
}
getAPIvietnam();
setInterval(getAPIvietnam, 5000);

const api_url_taiwan = 'https://covid19.mathdro.id/api/countries/taiwan';
async function getAPItaiwan(){
    const response = await fetch (api_url_taiwan);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('taiwanCases').textContent = confirmed.value;
    document.getElementById('taiwanRecovered').textContent = recovered.value;
    document.getElementById('taiwanDeaths').textContent = deaths.value;
}
getAPItaiwan();
setInterval(getAPItaiwan, 5000);

const api_url_BT = 'https://covid19.mathdro.id/api/countries/BT';
async function getAPIBT(){
    const response = await fetch (api_url_BT);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('BTCases').textContent = confirmed.value;
    document.getElementById('BTRecovered').textContent = recovered.value;
    document.getElementById('BTDeaths').textContent = deaths.value;
}
getAPIBT();
setInterval(getAPIBT, 5000);

const api_url_timorleste = 'https://covid19.mathdro.id/api/countries/timor-leste';
async function getAPItimorleste(){
    const response = await fetch (api_url_timorleste);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('timorlesteCases').textContent = confirmed.value;
    document.getElementById('timorlesteRecovered').textContent = recovered.value;
    document.getElementById('timorlesteDeaths').textContent = deaths.value;
}
getAPItimorleste();
setInterval(getAPItimorleste, 5000);

const api_url_brunei = 'https://covid19.mathdro.id/api/countries/brunei';
async function getAPIbrunei(){
    const response = await fetch (api_url_brunei);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('bruneiCases').textContent = confirmed.value;
    document.getElementById('bruneiRecovered').textContent = recovered.value;
    document.getElementById('bruneiDeaths').textContent = deaths.value;
}
getAPIbrunei();
setInterval(getAPIbrunei, 5000);

const api_url_laos = 'https://covid19.mathdro.id/api/countries/laos';
async function getAPIlaos(){
    const response = await fetch (api_url_laos);
    const data = await response.json();
    const { confirmed, recovered, deaths } = data;
    document.getElementById('laosCases').textContent = confirmed.value;
    document.getElementById('laosRecovered').textContent = recovered.value;
    document.getElementById('laosDeaths').textContent = deaths.value;
}
getAPIlaos();
setInterval(getAPIlaos, 5000);