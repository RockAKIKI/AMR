// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

const DataOK = require('../helpers/DataOK.js'); 
const NextMaxID = require('../helpers/NextMaxID.js');
const {FileLoad, FileSave} = require('../helpers/FileCaller.js');

// //////////////////////////////////////////////////////
// FONCTIONS Routes
// //////////////////////////////////////////////////////

function GetAll(path)
{
    const list = FileLoad(path);
    return DataOK(`${list.length} film(s)`, list);
}

function GetOne(path, id)
{
    // A FAIRE : tests des entrées utilisateur

    const intID = parseInt(id);

    const liste = FileLoad(path);
    
    let item = liste.find(el => el.id == intID);

    if(item == null)
    {
        return DataOK("Aucun contenu à cet identifiant.",null);
    }
    else
    {
        return DataOK("Un contenu trouvé", item);
    }
}

function PostOne(path, request)
{
    const liste = FileLoad(path);

    const nextId = NextMaxID(liste);

    // A FAIRE :
    // - tester entrées utilisateur
    // - tester résultat : non doublon d'un existant, id ok...

    const nextItem = {...request.body, ...{id:nextId}}

    liste.push(nextItem);

    FileSave(path, liste);

    return DataOK('Contenu ajouté',nextItem);
}

function PutOne(path, request)
{
    // A FAIRE : tests des entrées utilisateur

    const id = parseInt(request.params.id);

    const itemUpdated = {...request.body, ...{id:id}};

    let liste = FileLoad(path);

    liste = liste.map(item =>
        {
            if(item.id == id)
            {
                return itemUpdated;
            }
            else
            {
                return item;
            }
        });

        FileSave(path, liste);

        return DataOK('Contenu modifié', itemUpdated);
}

function DeleteOne(path, id)
{
    // A FAIRE : tests des entrées utilisateur

    const intID = parseInt(id);

    let liste = FileLoad(path);

    const itemDeleted = liste.find(item => item.id == intID);

    // A FAIRE : si aucun item trouvé ?

    liste = liste.filter(item => item.id != intID);

    FileSave(path, liste);

    return DataOK('Contenu supprimé', itemDeleted);
}

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = { 
    GetAll,
    GetOne,
    PostOne,
    PutOne,
    DeleteOne
};