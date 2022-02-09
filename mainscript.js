const cells = document.querySelectorAll("tr");
const titles = document.querySelectorAll(".title");

const flame = document.querySelector("#flame");
const frost = document.querySelector("#frost");
const storm = document.querySelector("#storm");
const toxic = document.querySelector("#toxic");
const chaos = document.querySelector("#chaos");
const perma = document.querySelector("#perma");
const haste = document.querySelector("#haste");
const deade = document.querySelector("#deade");
const bomba = document.querySelector("#bomba");
const incen = document.querySelector("#incen");
const arcan = document.querySelector("#arcan");
const echoi = document.querySelector("#echoi");
const dynam = document.querySelector("#dynam");
const boneb = document.querySelector("#boneb");
const blood = document.querySelector("#blood");
const steel = document.querySelector("#steel");
const garga = document.querySelector("#garga");
const berse = document.querySelector("#berse");
const senti = document.querySelector("#senti");
const jugge = document.querySelector("#jugge");
const vampi = document.querySelector("#vampi");
const overc = document.querySelector("#overc");
const soulc = document.querySelector("#soulc");
const opule = document.querySelector("#opule");
const maled = document.querySelector("#maled");
const conse = document.querySelector("#conse");
const frenz = document.querySelector("#frenz");

const evoc = document.querySelector("#evoc");
const hera = document.querySelector("#hera");
const empo = document.querySelector("#empo");
const assa = document.querySelector("#assa");
const tric = document.querySelector("#tric");
const necr = document.querySelector("#necr");
const reju = document.querySelector("#reju");
const exec = document.querySelector("#exec");
const hexe = document.querySelector("#hexe");
const drou = document.querySelector("#drou");
const enta = document.querySelector("#enta");
const temp = document.querySelector("#temp");
const trea = document.querySelector("#trea");
const fros = document.querySelector("#fros");
const icep = document.querySelector("#icep");
const soul = document.querySelector("#soul");
const flam = document.querySelector("#flam");
const corp = document.querySelector("#corp");
const magm = document.querySelector("#magm");
const mirr = document.querySelector("#mirr");
const stor = document.querySelector("#stor");
const mana = document.querySelector("#mana");
const corr = document.querySelector("#corr");
const invu = document.querySelector("#invu");
const crys = document.querySelector("#crys");

const emp = document.querySelector("#emp");
const eff = document.querySelector("#eff");
const lun = document.querySelector("#lun");
const sol = document.querySelector("#sol");
const ara = document.querySelector("#ara");
const bri = document.querySelector("#bri");
const tuk = document.querySelector("#tuk");
const abb = document.querySelector("#abb");
const sha = document.querySelector("#sha");
const inn = document.querySelector("#inn");
const kit = document.querySelector("#kit");

//click and count
cells.forEach(function(item){
    item.addEventListener("click",clickIngredient);
})

function clickIngredient(e){
    if(e.ctrlKey){
        this.lastChild.innerText = 0;
    } else if(e.altKey) {
        let count = parseInt(this.lastChild.innerText);
        if(count > 0){
            count -= 1;
        }
        this.lastChild.innerText = count;
    } else {
        let count = parseInt(this.lastChild.innerText);
        count += 1;
        this.lastChild.innerText = count;
    }
}

//combination checker
function highlightCells(){
    cells.forEach(function(item){
        if(parseInt(item.lastChild.innerText)>0){
            item.classList.add("inStock");
        } else {
            item.classList.remove("inStock");
        }
    })
}

let flameN,frostN,stormN,toxicN,chaosN,permaN,hasteN,deadeN,bombaN,incenN,arcanN,echoiN,dynamN,bonebN,bloodN,steelN,gargaN,berseN,sentiN,juggeN,vampiN,overcN,soulcN,opuleN,maledN,conseN,frenzN,evocN,heraN,empoN,assaN,tricN,necrN,rejuN,execN,hexeN,drouN,entaN,tempN,treaN,frosN,icepN,soulN,flamN,corpN,magmN,mirrN,storN,manaN,corrN,invuN,crysN,empN,effN,lunN,solN,araN,briN,tukN,abbN,shaN,innN,kitN;

function checkCombo(){
    flameN = parseInt(flame.lastChild.innerText);
    frostN = parseInt(frost.lastChild.innerText);
    stormN = parseInt(storm.lastChild.innerText);
    toxicN = parseInt(toxic.lastChild.innerText);
    chaosN = parseInt(chaos.lastChild.innerText);
    permaN = parseInt(perma.lastChild.innerText);
    hasteN = parseInt(haste.lastChild.innerText);
    deadeN = parseInt(deade.lastChild.innerText);
    bombaN = parseInt(bomba.lastChild.innerText);
    incenN = parseInt(incen.lastChild.innerText);
    arcanN = parseInt(arcan.lastChild.innerText);
    echoiN = parseInt(echoi.lastChild.innerText);
    dynamN = parseInt(dynam.lastChild.innerText);
    bonebN = parseInt(boneb.lastChild.innerText);
    bloodN = parseInt(blood.lastChild.innerText);
    steelN = parseInt(steel.lastChild.innerText);
    gargaN = parseInt(garga.lastChild.innerText);
    berseN = parseInt(berse.lastChild.innerText);
    sentiN = parseInt(senti.lastChild.innerText);
    juggeN = parseInt(jugge.lastChild.innerText);
    vampiN = parseInt(vampi.lastChild.innerText);
    overcN = parseInt(overc.lastChild.innerText);
    soulcN = parseInt(soulc.lastChild.innerText);
    opuleN = parseInt(opule.lastChild.innerText);
    maledN = parseInt(maled.lastChild.innerText);
    conseN = parseInt(conse.lastChild.innerText);
    frenzN = parseInt(frenz.lastChild.innerText);
    
    function count(item){
        let number = parseInt(item.lastChild.innerText) + parseInt(item.getElementsByTagName("td")[1].innerText);
        return number;
    };

    evocN = count(evoc);
    heraN = count(hera);
    empoN = count(empo);
    assaN = count(assa);
    tricN = count(tric);
    necrN = count(necr);
    rejuN = count(reju);
    execN = count(exec);
    hexeN = count(hexe);
    drouN = count(drou);
    entaN = count(enta);
    tempN = count(temp);
    treaN = count(trea);
    frosN = count(fros);
    icepN = count(icep);
    soulN = count(soul);
    flamN = count(flam);
    corpN = count(corp);
    magmN = count(magm);
    mirrN = count(mirr);
    storN = count(stor);
    manaN = count(mana);
    corrN = count(corr);
    invuN = count(invu);
    crysN = count(crys);
    
    empN = count(emp);
    effN = count(eff);
    lunN = count(lun);
    solN = count(sol);
    araN = count(ara);
    briN = count(bri);
    tukN = count(tuk);
    abbN = count(abb);
    shaN = count(sha);
    innN = count(inn);
    kitN = count(kit);

    cells.forEach(function(item){
        item.classList.remove("craftable");
    });

    hera.getElementsByTagName("td")[1].innerText = Math.min(dynamN,arcanN);
    assa.getElementsByTagName("td")[1].innerText = Math.min(deadeN,vampiN);
    necr.getElementsByTagName("td")[1].innerText = Math.min(bombaN,overcN);
    reju.getElementsByTagName("td")[1].innerText = Math.min(gargaN,vampiN);
    exec.getElementsByTagName("td")[1].innerText = Math.min(frenzN,berseN);
    hexe.getElementsByTagName("td")[1].innerText = Math.min(chaosN,echoiN);
    drou.getElementsByTagName("td")[1].innerText = Math.min(maledN,deadeN);
    enta.getElementsByTagName("td")[1].innerText = Math.min(toxicN,bloodN);
    fros.getElementsByTagName("td")[1].innerText = Math.min(frostN,hasteN);
    icep.getElementsByTagName("td")[1].innerText = Math.min(permaN,sentiN);
    flam.getElementsByTagName("td")[1].innerText = Math.min(flameN,hasteN);
    corp.getElementsByTagName("td")[1].innerText = Math.min(necrN,incenN);
    magm.getElementsByTagName("td")[1].innerText = Math.min(incenN,bonebN);
    mirr.getElementsByTagName("td")[1].innerText = Math.min(echoiN,soulcN);
    stor.getElementsByTagName("td")[1].innerText = Math.min(stormN,hasteN);
    mana.getElementsByTagName("td")[1].innerText = Math.min(conseN,dynamN);
    corr.getElementsByTagName("td")[1].innerText = Math.min(bloodN,chaosN);
    empo.getElementsByTagName("td")[1].innerText = Math.min(necrN,execN,gargaN);
    tric.getElementsByTagName("td")[1].innerText = Math.min(overcN,assaN,echoiN);
    temp.getElementsByTagName("td")[1].innerText = Math.min(juggeN,hexeN,arcanN);
    trea.getElementsByTagName("td")[1].innerText = Math.min(toxicN,sentiN,steelN);
    soul.getElementsByTagName("td")[1].innerText = Math.min(soulcN,necrN,gargaN);
    evoc.getElementsByTagName("td")[1].innerText = Math.min(flameN,frostN,stormN);
    invu.getElementsByTagName("td")[1].innerText = Math.min(sentiN,juggeN,conseN);
    crys.getElementsByTagName("td")[1].innerText = Math.min(permaN,rejuN,berseN);
    emp.getElementsByTagName("td")[1].innerText = Math.min(evocN,steelN,chaosN);
    eff.getElementsByTagName("td")[1].innerText = Math.min(hexeN,maledN,corrN);
    lun.getElementsByTagName("td")[1].innerText = Math.min(invuN,frosN,empoN);
    sol.getElementsByTagName("td")[1].innerText = Math.min(invuN,magmN,empoN);
    ara.getElementsByTagName("td")[1].innerText = Math.min(corpN,entaN,assaN);
    bri.getElementsByTagName("td")[1].innerText = Math.min(icepN,storN,heraN);
    tuk.getElementsByTagName("td")[1].innerText = Math.min(bonebN,execN,magmN);
    abb.getElementsByTagName("td")[1].innerText = Math.min(flamN,frenzN,rejuN);
    sha.getElementsByTagName("td")[1].innerText = Math.min(entaN,soulN,drouN);
    inn.getElementsByTagName("td")[1].innerText = Math.min(lunN,solN,mirrN,manaN);
    kit.getElementsByTagName("td")[1].innerText = Math.min(tukN,abbN,corrN,corpN);

    if(dynamN > 0 && arcanN > 0){
        hera.classList.add("craftable");
    }
    if(deadeN > 0 && vampiN > 0){
        assa.classList.add("craftable");
    }
    if(bombaN > 0 && overcN > 0){
        necr.classList.add("craftable");
    }
    if(gargaN > 0 && vampiN > 0){
        reju.classList.add("craftable");
    }
    if(frenzN > 0 && berseN > 0){
        exec.classList.add("craftable");
    }
    if(chaosN > 0 && echoiN > 0){
        hexe.classList.add("craftable");
    }
    if(maledN > 0 && deadeN > 0){
        drou.classList.add("craftable");
    }
    if(toxicN > 0 && bloodN > 0){
        enta.classList.add("craftable");
    }
    if(frostN > 0 && hasteN > 0){
        fros.classList.add("craftable");
    }
    if(permaN > 0 && sentiN > 0){
        icep.classList.add("craftable");
    }
    if(flameN > 0 && hasteN > 0){
        flam.classList.add("craftable");
    }
    if(necrN > 0 && incenN > 0){
        corp.classList.add("craftable");
    }
    if(incenN > 0 && bonebN > 0){
        magm.classList.add("craftable");
    }
    if(echoiN > 0 && soulcN > 0){
        mirr.classList.add("craftable");
    }
    if(stormN > 0 && hasteN > 0){
        stor.classList.add("craftable");
    }
    if(conseN > 0 && dynamN > 0){
        mana.classList.add("craftable");
    }
    if(bloodN > 0 && chaosN > 0){
        corr.classList.add("craftable");
    }
    if(storm > 0 && execN > 0 && gargaN > 0 ){
        empo.classList.add("craftable");
    }
    if(overcN > 0 && assaN > 0 && echoiN > 0 ){
        tric.classList.add("craftable");
    }
    if(juggeN > 0 && hexeN > 0 && arcanN > 0 ){
        temp.classList.add("craftable");
    }
    if(toxicN > 0 && sentiN > 0 && steelN > 0 ){
        trea.classList.add("craftable");
    }
    if(soulcN > 0 && necrN > 0 && gargaN > 0 ){
        soul.classList.add("craftable");
    }
    if(flameN > 0 && frostN > 0 && stormN > 0 ){
        evoc.classList.add("craftable");
    }
    if(sentiN > 0 && juggeN > 0 && conseN > 0 ){
        invu.classList.add("craftable");
    }
    if(permaN > 0 && rejuN > 0 && berseN > 0 ){
        crys.classList.add("craftable");
    }
    if(evocN > 0 && steelN > 0 && chaosN > 0 ){
        emp.classList.add("craftable");
    }
    if(hexeN > 0 && maledN > 0 && corrN > 0 ){
        eff.classList.add("craftable");
    }
    if(invuN > 0 && frosN > 0 && empoN > 0 ){
        lun.classList.add("craftable");
    }
    if(invuN > 0 && magmN > 0 && empoN > 0 ){
        sol.classList.add("craftable");
    }
    if(corpN > 0 && entaN > 0 && assaN > 0 ){
        ara.classList.add("craftable");
    }
    if(icepN > 0 && storN > 0 && heraN > 0 ){
        bri.classList.add("craftable");
    }
    if(bonebN > 0 && execN > 0 && magmN > 0 ){
        tuk.classList.add("craftable");
    }
    if(flamN > 0 && frenzN > 0 && rejuN > 0 ){
        abb.classList.add("craftable");
    }
    if(entaN > 0 && soulN > 0 && drouN > 0 ){
        sha.classList.add("craftable");
    }
    if(lunN > 0 && solN > 0 && mirrN > 0 && manaN > 0){
        inn.classList.add("craftable");
    }
    if(tukN > 0 && abbN > 0 && corrN > 0 && corpN > 0){
        kit.classList.add("craftable");
    }
    
    
}

//Clear button
let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click",clear);
function clear(){
    cells.forEach(function(item){
        item.lastChild.innerText = 0;
    })
}

//global event
document.addEventListener("click", checkCombo);
document.addEventListener("click", highlightCells);
titles.forEach(function(item){
    item.removeEventListener("click",clickIngredient);
});

//saving
let savedList = [];
function saving(){
    savedList = [];
    const savedIngred = 
}