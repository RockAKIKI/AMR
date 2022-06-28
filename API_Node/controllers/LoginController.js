/*
    Identifier un utilisateur.

    A faire : 
        - cookie de session,
        - tester les entrées utilisateur.
*/

// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

const {FileLoad} = require('../helpers/FileCaller.js');
const DataOK = require('../helpers/DataOK.js'); 

// //////////////////////////////////////////////////////
// FONCTIONS Routes
// //////////////////////////////////////////////////////

function Login(path, request)
{
    let email = request.query.email;
    let passe = request.query.passe;

    const allUsers = FileLoad(path);

    let user = allUsers.find(el => el.email == email && el.passe == passe);

    if(user == null)
    {
        return DataOK("Pas d'utilisateur", null);
    }
    else if(user.banni)
    {
        return DataOK("Utilisateur banni", null);
    }
    else
    {
        return DataOK("Utilisateur connecté", {nom:user.nom, prenom:user.prenom});
    }
}

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = { 
    Login
};