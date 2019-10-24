const wifiexp =
  '<p>Les réseaux Wi-Fi inconnus ou mal protégés constituent un risque important pour vous et vos données, voici les risques que vous encourez en les utilisant et les solutions.</p> <h3>Les risques :</h3> <p>Être connecté à un réseau inconnu ou mal protégé est très risqué car cela vous expose directement à toute sorte d’attaques informatiques dangereuse, la plus courante étant celle du Man-In-The-Middle (MITM). </p> <p>Cette attaque consiste pour l’agresseur à se faire passer pour le routeur de votre réseau local, ce qui lui permet de devenir un intermédiaire entre vous et tout l’internet (voir schéma ci-dessous). Autrement dit ce type d’attaque facile à mettre en place permet à l’agresseur d’intercepter tout ce que vous envoyez sur le net mais également de transformer les réponses que vous recevez du web pour par exemple vous faire installer un virus.</p> <img src="wifi.png"> <p>Un autre type d’attaque possible consiste pour l’agresseur à directement offrir depuis sa machine un point d’accès au réseau gratuit, que vous serez tenté de rejoindre. En réalité une fois connecté à ce réseau, l’agresseur pourra, comme pour une attaque MITM, voir et modifier tous vos échanges sur internet.</p> <h3>La solution :</h3> <p>La règle générale à retenir est d’éviter le plus possible de se connecter à un réseau en lequel vous n’avez pas totalement confiance, et se limiter aux réseaux par câble Ethernet ou Wi-Fi protégé WPA2 (voir explications ci-dessous pour les protections Wi-Fi). Par suite il est impératif de choisir un mot de passe robuste pour son réseau WPA2 (voir suite du jeu).</p> <p>Il faut aussi noter que les sites web dont le lien commence par « https » sont en théorie protégés de ce type d’attaque, il est donc important de toujours vérifier que les sites avec lesquels vous interagissez sont protégés.</p> <h3>Les protections Wi-Fi :</h3> <p>Un réseau Wi-Fi par principe est visible par tout individu possédant un récepteur Wi-Fi (présents dans quasiment tous les appareils portables aujourd’hui), il est donc nécessaire, pour protéger un réseau, d’en restreindre l’accès avec un cryptage (toutes les informations circulant sur le réseau sont alors illisibles pour quelqu’un qui n’est pas connecté au réseau). L’accès au réseau se fait par mot de passe.</p> <p>Il existe 4 types de protections pour un réseau Wi-Fi : </p> <ul> <li><strong>Aucune protection :</strong> C’est par exemple un réseau Wi-Fi gratuit, souvent trouvé dans les lieux publics ou proposés par certains opérateurs. Ces réseaux sont donc extrêmement exposés aux attaques et devraient être évités.</li> <br /> <li><strong>WEP : </strong>C’est un vielle méthode qui n’est plus sûre du tout aujourd’hui, elle est très simple à cracker donc n’importe qui peut rejoindre facilement un tel réseau.</li> <br /> <li><strong>WPA2 :</strong> C’est la méthode la plus sûre actuellement qui devrait toujours être choisie pour protéger son réseau sans fil. Elle est difficile à attaquer, mais sa fiabilité dépend directement de la complexité du mot de passe, il faut donc choisir un mot de passe robuste (voir dans la suite du jeu).</li> <br /> <li><strong>WPA : </strong>C’est la petite sœur du WPA2, assez similaire dans son fonctionnement, mais moins fiable.</li> </ul> ';

export default wifiexp;
