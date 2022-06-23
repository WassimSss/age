 
function ageCalculator() {  
   // recupère l'age entrée dans l'imput
    var dateSaisie = document.getElementById("age").value;  

    // Créer un objet date avec la date entrée (pour pouvoir soustraire entre 2 date etc..)
    var dt = new Date(dateSaisie);  
    
      
    //calculer la différence entre la date actuelle et la date saisie.  
    var ma_diff = Date.now() - dt.getTime();  
    var age_dt = new Date(ma_diff);  

      
    //Récuperer seulement l'age (pas les jours, mois)      
    var an = age_dt.getUTCFullYear();  
      
    //calculer maintenant l'âge de l'utilisateur 
    var age = Math.abs(an - 1970);  
      
    //afficher l'âge calculé dans le paragraphe avec l'id result
    return document.getElementById("result").innerHTML = "L’âge est: " + age + " ans. ";  
}  