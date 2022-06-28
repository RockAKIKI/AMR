/*
    Requêtes spécifiques de films.
*/

// //////////////////////////////////////////////////////
// LIBRAIRIES
// //////////////////////////////////////////////////////

const {FileLoad} = require('../helpers/FileCaller.js');
const DataOK = require('../helpers/DataOK.js'); 

// //////////////////////////////////////////////////////
// FONCTIONS Routes
// //////////////////////////////////////////////////////

function FilmsByCategory(path, categoryName)
{
    const all = FileLoad(path);

    let allOfThisCategory = all.filter(el => 
        {
            if(el.categories.includes(categoryName))
            {
                return el;
            }
        });

    if(allOfThisCategory.length == 0)
    {
        return DataOK("Pas de film de cette catégorie", null);
    }
    else
    {
        return DataOK(`${allOfThisCategory.length} film(s) de la catégorie ${categoryName}`,allOfThisCategory);
    }
}

// //////////////////////////////////////////////////////
// EXPORTS
// //////////////////////////////////////////////////////

module.exports = { 
    FilmsByCategory
};