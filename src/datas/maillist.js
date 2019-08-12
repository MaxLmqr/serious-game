const mails = {
  mail1: {
    id: 1,
    subject: "Urgent alerte ",
    authenticated: "yes",
    date: "02/04/2019",
    expediteur: "DSI",
    mailexpediteur: "fbitschy@emse.fr",
    content:
      "Bonjour, <br /><br />Depuis ce matin vos boîtes mail sont assaillies de mails frauduleux contenant des liens de phishing, ce dû à une fuite récente de nos serveurs.<br /><br /> Nous invitons toutes les personnes qui auront accédé à un de ces liens ou répondu à un de ces mails à aller immédiatement changer son mot de passe via le portail de l’école. <br /><br /> PS : Nous vous rappelons donc de faire preuve de la plus grande prudence à ce sujet : <br /><br /> Le personnel de la  DSI ne vous demandera JAMAIS de communiquer votre mot de passe, juste d'en changer quand il est expiré via l'unique adresse <a href=\"https://portail.emse.fr\">https://portail.emse.fr</a> (accès via le portail depuis l’extérieur) N'envoyez jamais votre mot de passe par mail ni sur un site Internet, même si le message semble provenir de nous ou de l'école.Si vous avez le moindre doute, changez immédiatement votre mot de passe sur <a href=\"https://portail.emse.fr\">https://portail.emse.fr</a> et/ou prévenez-nous la DSI.<br /><br /> Pour plus d'info sur le phishing (vidéo ludique et pédagogique fait par l'ANSSI ) : <a href=\"https://www.hack-academy.fr/candidats/willy \">https://www.hack-academy.fr/candidats/willy</a>",
    exp:
      " L'expéditeur a une adresse authentique, on vous demande bien de vous rendre sur le site de l'école pour changer votre mot de passe si vous avez été victime de phishing. Vous pouvez voir vers où dirige ces liens en bas à gauche de votre écran lorsque vous laissez la souris dessus. C'est donc bien un mail authentique."
  },
  mail2: {
    id: 2,
    subject: "Choix des cours",
    authenticated: "yes",
    date: "24/05",
    expediteur: "Marc Roelens",
    mailexpediteur: "roelens@emse.fr",
    content:
      "Bonjour, <br /><br /> Il vous est demandé d'exprimer vos souhaits pour le semestre 7 via le questionnaire ci-dessous. <br /> <br /> Vous devez exprimer un voeu pour la majeure 1 et un voeu pour la toolbox 3. Si des régulations sont à effectuer, celles-ci interviendront début septembre une fois les effectifs (notamment d'admis sur titres et d'auditeurs libres) définitivement fixés. <br /><br /> Les élèves dont la mobilité académique S7 n'est pas encore confirmée sont invités à répondre à ce questionnaire. <br /> Lien vers le questionnaire: <br /><br /> <a href=\"https://www.emse.fr/questionnaire/index.php/survey/index/sid/543884/token/9bkck3qixk827c8/lang/fr\">https://www.emse.fr/questionnaire/index.php/survey/index/sid/543884/token/9bkck3qixk827c8/lang/fr</a><br /> <br /> Merci de nous communiquer vos choix avant le mardi 11 juin à 8h. <br /> Marc Roelens",
    exp:
      "Encore une fois ici, il n'y a rien de dangereux. L'expéditeur a bien une adresse que vous connaissez, et le lien est correct et ne vous redirige pas vers un site frauduleux ou une copie de ce site."
  },
  mail3: {
    id: 3,
    authenticated: "no",
    subject: "Mise à jour importante de SOGo",
    date: "11/12/2018",
    expediteur: "Dominique BERTHET",
    mailexpediteur: "dberthet@emse.fr",
    content:
      "L'Administrateur Information Center nécessite une mise à niveau vers le dernier courrier électronique Webmail - SOGo 2019. <br /><br />Cliquez sur le lien et connectez-vous pendant la mise à jour automatique de votre messagerie Web Portail. <br /> <br /><a href=\"https://donne-moi-ton-mdp.com\">Service - Portail d'authentification - Webmail Sogo</a>",
    exp:
      " Il fallait faire attention ici ! Même si l'expéditeur est légitime, il peut très bien arriver que quelqu'un de l'école se fasse pirater sa boîte mail et que quelqu'un de mal intentionné l'utilise pour en pirater d'autres. Ici, Le lien redirige vers un site qui servira à récupérer vos données ! Faites attention car il est facile de copier un site quasiment à l'identique, vous ne verrez que c'est une copie qu'en regardant de près l'url !"
  },
  mail4: {
    id: 4,
    authenticated: "no",
    subject: "Vous ne voulez pas manquer cette promotion !",
    date: "28/02/2019",
    expediteur: "Promo' Casino",
    mailexpediteur: "prornotion@casino.fr",
    content:
      'Bonjour, <br /><br /> <strong> Profitez d’une super réduction spécial anniversaire de <span style="color:red"> -50% SUR TOUT VOTRE ALCOOL </span> dans votre casino le plus proche jusqu’à demain 21h00 !!! </strong> <br /><br /> Pour cela rien de plus simple, télécharger puis imprimer le coupon ci-joint (format pdf) et présentez-le en caisse. <br /><br /> Attention, L\'abus d\'alcool est dangereux pour la santé, à consommer avec modération. Ceci est un message du ministère de la santé et des bars. <br /><br /> Pièce jointe : <a href="#"> coupon reduction.pdf</a>',
    exp:
      'Même si la promotion semble attrayante, cette pièce jointe est suspecte ! Une pièce jointe inconnue peut contenir un virus. En ouvrant cette pièce jointe, vous pouvez lancer un programme qui donne un accès total à un pirate sur vos données. De plus, l\'expéditeur est "prornotion" au lieu de promotion.'
  },
  mail5: {
    id: 5,
    authenticated: "yes",
    subject: "Livraison prévue pour aujourd'hui",
    date: "28/11/2019",
    expediteur: "Amazon",
    mailexpediteur: "shipment-tracking@amazon.fr",
    content:
      "Bonjour, <br /><br />Votre colis contenant Smiffys Perruque nuque longue brune, balayage blond.. vous sera livré aujourd'hui. Si vous le souhaitez, vous pouvez ajouter des instructions de livraisons. Pour se faire accédez à la page 'suivi de votre colis' et reportez vous à l'encadré 'livraison par amazon' <img src=\"amazon.png\" alt=\"amazon\" /> <br />Commande n°40387985629574709",
    exp:
      "Rien de suspect ici, il n'y a aucun lien, ni aucune menace contenue dans le mail, vous pouvez passer votre chemin."
  },
  mail6: {
    id: 6,
    authenticated: "no",
    subject: "Renouvellez votre mot de passe",
    date: "24/08/2019",
    expediteur: "JJ",
    mailexpediteur: "jjacques@mines-stetienne-dsi.fr",
    content:
      'Le serveur de l’école a été attaqué ce matin, nous avons trouvé la brèche et l\'avons sécurisée mais certains identifiants ont été usurpés. <br /><br />NOUS VOUS INVITONS A CHANGER VOS MOTS DE PASSE IMMEDIATEMENT AFIN DE GARANTIR LA SECURITE DE VOS DONNEES EN CLIQUANT SUR LE LIEN <a href="https://portail-emse.fr/"> CE LIEN </a> <br /><br /> Cordialement, <br /><br /> JJ',
    exp:
      "Le lien est frauduleux. Même si l'url ressemble à celle de l'école, ce n'est pas la même ! Ici on est redirigé vers 'portail-emse.fr' alors que la véritable url est 'portai.emse.fr', le pirate a donc acheté un nom de domaine similaire a celui de l'école pour avoir une grande crédibilité.."
  },
  mail7: {
    id: 7,
    authenticated: "yes",
    subject: "Livraison prévue pour aujourd'hui",
    date: "12/05/2019",
    expediteur: "Amazon",
    mailexpediteur: "shipment-tracking@amazon.fr",
    content:
      'Bonjour, <br /><br /> Nous vous informons que votre commande a été expédiée. Votre colis est en cours d’acheminement et cette commande ne peut donc plus être modifiée. Si vous souhaitez retourner un article, visualiser ou modifier une autre commande, veuilles consulter Vos commandes sur Amazon.fr. <br /><br />  Sportly Bière Pong Balles, 38 mm, lot de 144. <br /><br /> <img src="amazon2.png" alt="amazon2"> <br /><br /> Nous vous informons que votre commande a été expédiée. Votre colis est en cours d’acheminement et cette commande ne peut donc plus être modifiée. Si vous souhaitez retourner un article, visualiser ou modifier une autre commande, veuilles consulter Vos commandes sur Amazon.fr. <br><br>A bientôt sur Amazon.fr <br><br> Amazon.fr',
    exp:
      "Rien de suspect ici, il n'y a aucun lien, ni aucune menace contenue dans le mail, vous pouvez passer votre chemin."
  },
  mail8: {
    id: 8,
    authenticated: "no",
    subject: "Gestion des absences",
    date: "02/04/2019",
    expediteur: "Helene Pangot",
    mailexpediteur: "helene.pangot@outlook.fr",
    content:
      'Bonjour, <br><br> Nous testons une nouvelle fonctionnalité de gestion des absences, veuillez-vous rendre sur <a href="https://portail-emse.fr">ce lien</a>. <br><br>Il y a encore des bugs, donc il est possible que ça ne fonctionne pas pour tout le monde. <br><br>Cordialement, <br><br> Hélène Pangot',
    exp:
      "Vous recevez un mail d'une personne de l'administration, mais ce n'est pas son adresse de travail ! Ce n'est donc pas forcément son mail. Quelqu'un a pu créer un mail à son nom, c'est de l'usurpation d'identité. Faites attention, ici on voit clairement l'adresse mail entière de l'expéditeur, mais généralement dans une application vous ne voyez que le nom apparent, ici 'Hélène Pangot', et donc vous pourriez ne pas remarquer que c'est une adresse outlook, gmail, ou autre. De plus, le lien redirige vers un site qui n'est pas celui de l'école, même si il peut y ressembler en tout point. Vérifiez donc bien l'url lorsque l'on vous demande de vous connecter."
  },
  mail9: {
    id: 9,
    authenticated: "no",
    subject: "Support technique",
    date: "30/03/2019",
    expediteur: "Support technique",
    mailexpediteur: "tech-support@outlook.fr",
    content:
      'Bonjour, <br /><br />Vous avez demandé à changer votre mot de passe pour : <a href="https://portail.emse.fr"> portail.emse.fr</a> <br /><br />Pour enregistrer votre nouveau mot de passe, merci de répondre à ce mél avec le format suivant : <br /><br />identifiant = [insérer identifiant]<br />password = [insérer ancien mot de passe]<br />password2 = [insérer nouveau mot de passe]<br /><br />Si vous n’avez pas fait cette demande, merci de répondre quand même en entrant deux fois votre ancien mot de passe, sans quoi votre compte sera fermé d’ici 72 heures.<br /><br />Cordialement,<br /><br />portail.emse.fr’s tech support.',
    exp:
      "N'envoyez jamais vos identifiants par mails. On ne vous les demandera jamais comme ça, comme vous avez du l'entendre de nombreuses fois. Mais un rappel ne fait pas de mal !"
  },
  mail10: {
    id: 10,
    authenticated: "no",
    subject: "Image transférée",
    date: "18/01/2019",
    expediteur: "Dropbox",
    mailexpediteur: "dropbox-image@outlook.fr",
    content:
      'Bonjour, <br><br> Le fichier joint est une image numérisée au format PDF, <br><br> Utilisez Acrobat Reader pour visualiser le document. <br><br> il est possible de télécharger à l\'adresse suivante :  <a href="http://www.adobe.com">http://www.adobe.com</a> <br><br><br> <a href="#">2106reflexe.pdf</a>  ',
    exp:
      "Attention ! De nouveau, la pièce jointe peut contenir un virus. L'adresse de l'expéditeur n'est pas très usuelle, on peut déjà se poser des questions. Un nom de fichier qui termine par 'exe.pdf' peut d'autant plus être piégeux. En effet des logiciels permettent d'inverser une partie du nom et donc le fichier qui s'appelais initialement 2106reflfdp.exe se transforme en 2106reflexe.pdf. Si vous l'ouvrez, vous ne verrez que le pdf qui s'ouvre, mais une programme peut s'exécuter en tâche de fond qui connecte votre ordinateur à celui du pirate, et qui lui donne un accès total à vos données. "
  }
};
export default mails;
