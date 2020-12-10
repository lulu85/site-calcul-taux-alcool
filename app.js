// Outil de calcul de la densité théorique



//Application


function recupererValeur(){
    const philippe = document.getElementById('philippe').value

    console.log('philippe',philippe);
}

function calculDensite() {
    
    
            const malt = document.getElementById('malt').value
            const eau = document.getElementById('eau').value
            const effacer = document.querySelector('#effacer')
            const resultat = document.querySelector('#resultat') 
            console.log('malt: ',malt);
            const i = (malt / eau) / 2;

            // les alertes si manque info

            if ( eau === '' &&  malt === '') {
                window.alert("Ajouter du Malt et de l'eau s'il vous plait")
            } else if (malt === '' &&  eau !== '') {
                window.alert("Ajouter du Malt s'il vous plait")
            } else if (eau === '' &&  malt !== '') {
                window.alert("Ajouter de l'Eau s'il vous plait")
            } 
             /*else {
                document.getElementById('resultat').innerHTML = i.toFixed(2)
            }*/

             else if (  (( malt || eau ) === (0 ||''))  || i <= 12 ){
                document.getElementById('resultat').innerHTML = '';
            } else if ( i <= 25) {
                document.getElementById('resultat').innerHTML = '1,005';
            } else if ( i <= 37) {
                document.getElementById('resultat').innerHTML = '1,010';
            } else if ( i <= 50) {
                document.getElementById('resultat').innerHTML = '1,015';
            } else if ( i <= 62) {
                document.getElementById('resultat').innerHTML = '1,020';
            } else if ( i <= 75) {
                document.getElementById('resultat').innerHTML = '1,025';
            } else if ( i <= 87) {
                document.getElementById('resultat').innerHTML = '1,030';
            } else if ( i <= 99) {
                document.getElementById('resultat').innerHTML = '1,035';
            } else if ( i <= 111) {
                document.getElementById('resultat').innerHTML = '1,040';
            } else if ( i <= 123) {
                document.getElementById('resultat').innerHTML = '1,045';
            } else if ( i <= 135) {
                document.getElementById('resultat').innerHTML = '1,050';
            }  else if ( i <= 146) {
                document.getElementById('resultat').innerHTML = '1,055';
            }  else if ( i <= 158) {
                document.getElementById('resultat').innerHTML = '1,060';
            }  else if ( i <= 170) {
                document.getElementById('resultat').innerHTML = '1,065';
            }  else if ( i <= 181) {
                document.getElementById('resultat').innerHTML = '1,070';
            }  else if ( i <= 192) {
                document.getElementById('resultat').innerHTML = '1,075';
            }  else if ( i <= 204) {
                document.getElementById('resultat').innerHTML = '1,080';
            }  else if ( i <= 215) {
                document.getElementById('resultat').innerHTML = '1,085';
            }  else if ( i <= 226) {
                document.getElementById('resultat').innerHTML = '1,090';
            }  else if ( i <= 237) {
                document.getElementById('resultat').innerHTML = '1,095';
            }  else if ( i >= 238) {
                document.getElementById('resultat').innerHTML = '1,100';
            }
          
            //bouton effacer
            effacer.addEventListener('click', supprimerDensite)
        }   
        
        
function supprimerDensite() {
    resultat.innerHTML = '';
    eau.value = '';
    malt.value = '';

}

// Outil de calcul du taux d'alcool

function calculAlcool(){
    
            //les variable de bases

            const densite2 = document.querySelector('#densite2').value    
            ,     sucre1 = document.querySelector('#sucre1').value
            ,     alcool1 = document.querySelector('#alcool1').value
            ,     sucre2 = document.querySelector('#sucre2').value  
            ,     alcool2 = document.querySelector('#alcool2').value  
    
           
           //les alertes si manque info
            
            if ( densite2 === '' &&  sucre1 === '') {
                window.alert("Ajouter la Densité et le Sucre s'il vous plait")
            } else if (densite2 === '' &&  sucre1 !== '') {
                window.alert("Ajouter la Densité s'il vous plait")
            } else if (densite2 !== '' &&  sucre1 === '') {
                window.alert("Ajouter du Sucre s'il vous plait")

            //Taux de conversion densité / alcool

            } else if( densite2 === ('0'||'1,000')){
                document.getElementById('alcool1').innerHTML = '0';
            } else if( densite2 === '1,005'  ){
                document.getElementById('alcool1').innerHTML = '0,7';
            } else if( densite2 === '1,010'  ){
                document.getElementById('alcool1').innerHTML = '1,3';
            } else if( densite2 === '1,015'  ){
                document.getElementById('alcool1').innerHTML = '1,9';
            } else if( densite2 === '1,020'  ){
                document.getElementById('alcool1').innerHTML = '2,6';
            } else if( densite2 === '1,025'  ){
                document.getElementById('alcool1').innerHTML = '3,2';
            } else if( densite2 === '1,030'  ){
                document.getElementById('alcool1').innerHTML = '3,8';
            } else if( densite2 === '1,035'  ){
                document.getElementById('alcool1').innerHTML = '4,4';
            } else if( densite2 === '1,040'  ){
                document.getElementById('alcool1').innerHTML = '5';
            } else if( densite2 === '1,045'  ){
                document.getElementById('alcool1').innerHTML = '5,6';
            } else if( densite2 === '1,050'  ){
                document.getElementById('alcool1').innerHTML = '6,2';
            } else if( densite2 === '1,055'  ){
                document.getElementById('alcool1').innerHTML = '6,8';
            } else if( densite2 === '1,060' ){
                document.getElementById('alcool1').innerHTML = '7,3';
            } else if( densite2 === '1,065'  ){
                document.getElementById('alcool1').innerHTML = '7,9';
            } else if( densite2 === '1,070'  ){
                document.getElementById('alcool1').innerHTML = '8,5';
            } else if( densite2 === '1,075'  ){
                document.getElementById('alcool1').innerHTML = '9,1';
            } else if( densite2 === '1,080'  ){
                document.getElementById('alcool1').innerHTML = '9,6';
            } else if( densite2 === '1,085'  ){
                document.getElementById('alcool1').innerHTML = '10,4';
            } else if( densite2 === '1,090'  ){
                document.getElementById('alcool1').innerHTML = '10,8';
            } else if( densite2 === '1,095'  ){
                document.getElementById('alcool1').innerHTML = '11,3';
            } else if( densite2 === '1,100'  ){
                document.getElementById('alcool1').innerHTML = '11,9';
            }

            // Calcul sucre avant embouteillage

            const f = sucre1 * 0.06;
            document.querySelector('#sucre2').innerHTML = f;


            // Calcul taux d'alcool totale

            
            const g = document.getElementById('alcool1').value + document.getElementById('sucre2').value;
            console.log(alcool1)

            document.querySelector('#alcool2').innerHTML = g;
            console.log(typeof  alcool2);
}






