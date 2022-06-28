# AMR

## API et Fronts
Liens utiles :
- [API Node.js utilisateur](https://github.com/AlexandreVenet/Utilisateurs_API_Node) : le serveur local en Node.js fournissant une API de CRUD sur un json des utilisateurs,
- [Front JS Vanilla](https://github.com/AlexandreVenet/Utilisateurs_API_frontVanilla) : un *front* simple en Javascript d'appel de l'API,
- [Front JS React](https://github.com/AlexandreVenet/Utilisateurs_API_frontReact) : un *front* réalisé en React avec gestion de routes et appelant l'API.

## Requêtes Postman

Les routes suivantes sont effectuées et peuvent être testées avec Postman.

Obtenir la racine de l'application :
- GET
- `http://localhost:3000/films/`

Obtenir tous les films :
- GET
- `http://localhost:3000/films`

Obtenir un film à un id, par exemple 0 :
- GET
- `http://localhost:3000/films/0`

Ajouter un nouveau film :
- POST
- `http://localhost:3000/films`
- Headers : ajouter la paire clé:valeur `Content-Type`:`application/json`
- Body : choisir `raw` et vérifier que le format choisi est bien JSON dans le menu déroulant. Ajouter comme corps de requête, par exemple :
```
{
	"title": "toto",
	"summary": "Un film idiot.",
	"pubDate": 3412,
	"duration": 6.30,
	"imageLink": "toto.png",
	"categories": [
		"france",
		"idiot",
		"expérimental"
	],
	"ressourceLink": "https://fr.wikipedia.org/wiki/Blague_de_Toto"
}
```

Modifier un film existant, par id, par exemple 1 :
- PUT
- `http://localhost:3000/films/1`
- Headers : ajouter la paire clé:valeur `Content-Type`:`application/json`
- Body : choisir `raw` et vérifier que le format choisi est bien JSON dans le menu déroulant. Ajouter comme corps de requête, par exemple :
```
{
	"title": "toto",
	"summary": "Un film sur toto joué par toto pour des totos.",
	"pubDate": 1,
	"duration": 1.11,
	"imageLink": "toto.png",
	"categories": [
		"france",
		"toto",
		"expérimental"
	],
	"ressourceLink": "https://fr.wikipedia.org/wiki/Blague_de_Toto"
}
```

Supprimer un film existant, par id, par exemple 1 :
- DELETE
- `http://localhost:3000/films/1`