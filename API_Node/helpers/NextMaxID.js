/*
    Renvoyer l'id (propriété) le plus grand depuis les données passées en paramètre (objet).
*/

// //////////////////////////////////////////////////////
// FONCTIONS
// //////////////////////////////////////////////////////

function NextMaxID(obj)
{
    // Tableau des identifiants
    const IDs = obj.map(el => el.id); 

    // A FAIRE : si pas d'ID ?

    // Obtenir l'identifiant le plus grand et ajouter 1
    let nextID = IDs.reduce((prev,current) => Math.max(prev,current)); 
    nextID ++;

    return nextID;
}

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = NextMaxID;