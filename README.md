# AMR

## API Node

A faire : 
- dans `app.js`, refactoriser les routes lorsque le `CRUDController` est utilisé (il est général),
- passer en HTTPS.

## API et Fronts
Liens utiles :
- [API Node.js utilisateur](https://github.com/AlexandreVenet/Utilisateurs_API_Node) : le serveur local en Node.js fournissant une API de CRUD sur un json des utilisateurs,
- [Front JS Vanilla](https://github.com/AlexandreVenet/Utilisateurs_API_frontVanilla) : un *front* simple en Javascript d'appel de l'API,
- [Front JS React](https://github.com/AlexandreVenet/Utilisateurs_API_frontReact) : un *front* réalisé en React avec gestion de routes et appelant l'API.

## Requêtes Postman générales

Les routes suivantes sont effectuées et peuvent être testées avec Postman.

Obtenir la racine de l'application :
- GET
- `http://localhost:3000`

Même requête avec point d'entrée inconnu pour obtenir la route 404.

Le `CRUDController` sert à tester un CRUD général et simple sur des données. La différence porte sur l'usage. Par exemple, lorsqu'il s'agit de films, le corps des requêtes doit présenter la structure de données des films, et par conséquent est différent de celui concernant des utilisateurs.

## Requêtes films : CRUDController

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

## Requêtes utilisateurs : CRUDController

Obtenir tous les utilisateurs :
- GET
- `http://localhost:3000/utilisateurs`

Obtenir un utilisateur par id, par exemple 0 :
- GET
- `http://localhost:3000/utilisateurs/0`

Ajouter un nouvel utilisateur :
- POST
- `http://localhost:3000/utilisateurs`
- Headers : ajouter la paire clé:valeur `Content-Type`:`application/json`
- Body : choisir `raw` et vérifier que le format choisi est bien JSON dans le menu déroulant. Ajouter comme corps de requête, par exemple :
```
{
	"nom": "aaa",
	"prenom": "bbb",
	"email": "aaa@bbb.xxx",
	"passe": "00000abcde",
	"banni": false
}
```

Modifier un film existant, par id, par exemple 1 :
- PUT
- `http://localhost:3000/utilisateurs/1`
- Headers : ajouter la paire clé:valeur `Content-Type`:`application/json`
- Body : choisir `raw` et vérifier que le format choisi est bien JSON dans le menu déroulant. Ajouter comme corps de requête, par exemple :
```
{
	"nom": "xxxx",
	"prenom": "yyyy",
	"email": "xxxx@yyyy.zzzz",
	"passe": "xxxyyyzzz",
	"banni": true
}
```

Supprimer un utilisateur existant, par id, par exemple 1 :
- DELETE
- `http://localhost:3000/utilisateurs/1`

## Login

Le contrôleur `Login` permet de simuler l'identification d'un utilisateur.

La requête utilisée a le format suivant :
```
http://localhost:3000/login/?email=nom@prenom.xxx&passe=1234
```

Lorsque le serveur Node est lancé, l'API est disponible. Dans le dossier `Front Vanilla / Login`, lancer la page HTML dans le navigateur ; le formulaire permet de tester l'identification (utilisateur inconnu, identifié, banni).