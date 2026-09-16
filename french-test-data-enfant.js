/* Edu Flow Academy — banque de questions : Enfants (6-12 ans), test thématique.
   4 thèmes x 50 questions (10 par compétence : CE, CO, GR, EE, EO). */

const AGE_MIN = 6, AGE_MAX = 12;
const TEST_TYPE_LABEL = 'Enfants (6-12 ans) — Thématique';

const THEME_META = [
  {key:'ecole', name:'École', desc:"La classe, les fournitures, la récréation, les copains."},
  {key:'voyage', name:'Voyage', desc:"Les transports, les vacances, les pays, la valise."},
  {key:'bonjour', name:'Le bonjour', desc:"Les salutations et la politesse en français."},
  {key:'temps', name:'Le temps (jour, mois, année)', desc:"Les jours, les mois, les saisons, les dates."}
];

const QDATA = {

  ecole: {
    CE: [
      {id:'ecole-CE1', passage:"Léa a un cahier bleu et un stylo rouge dans son sac.", question:"De quelle couleur est le cahier de Léa ?", options:["Bleu","Rouge","Vert","Jaune"], answer:0},
      {id:'ecole-CE2', passage:"À la récréation, les enfants jouent dans la cour de l'école.", question:"Où jouent les enfants à la récréation ?", options:["Dans la classe","Dans la cour","À la maison","À la cantine"], answer:1},
      {id:'ecole-CE3', passage:"La maîtresse écrit la date au tableau chaque matin.", question:"Que fait la maîtresse chaque matin ?", options:["Elle chante","Elle écrit la date","Elle dort","Elle joue"], answer:1},
      {id:'ecole-CE4', passage:"Tom mange à la cantine avec ses camarades de classe.", question:"Où mange Tom ?", options:["À la maison","À la cantine","Dans le jardin","Au parc"], answer:1},
      {id:'ecole-CE5', passage:"Après l'école, Sara fait ses devoirs avant de jouer.", question:"Que fait Sara avant de jouer ?", options:["Ses devoirs","Le ménage","La cuisine","La sieste"], answer:0},
      {id:'ecole-CE6', passage:"Le sac à dos de Yasmine est très lourd car il contient beaucoup de livres.", question:"Pourquoi le sac de Yasmine est-il lourd ?", options:["Il contient des jouets","Il contient des livres","Il est vide","Il contient des vêtements"], answer:1},
      {id:'ecole-CE7', passage:"Le premier jour de la rentrée, les élèves retrouvent leurs amis.", question:"Que font les élèves le jour de la rentrée ?", options:["Ils partent en vacances","Ils retrouvent leurs amis","Ils dorment","Ils restent seuls"], answer:1},
      {id:'ecole-CE8', passage:"Dans sa trousse, Karim range ses crayons de couleur et sa gomme.", question:"Que range Karim dans sa trousse ?", options:["Ses chaussures","Ses crayons et sa gomme","Son goûter","Son ballon"], answer:1},
      {id:'ecole-CE9', passage:"La maîtresse demande aux élèves de lever la main pour parler.", question:"Que demande la maîtresse aux élèves ?", options:["De crier","De lever la main","De sortir","De dormir"], answer:1},
      {id:'ecole-CE10', passage:"Pendant les vacances scolaires, il n'y a pas de classe.", question:"Y a-t-il classe pendant les vacances scolaires ?", options:["Oui","Non","Parfois","Toujours"], answer:1}
    ],
    CO: [
      {id:'ecole-CO1', script:"Bonjour les enfants, aujourd'hui nous allons apprendre les lettres de l'alphabet.", question:"Qu'allons-nous apprendre aujourd'hui ?", options:["Les chiffres","Les lettres de l'alphabet","Les couleurs","Les animaux"], answer:1},
      {id:'ecole-CO2', script:"La cloche sonne, c'est l'heure de la récréation !", question:"Qu'annonce la cloche ?", options:["L'heure de dormir","L'heure de la récréation","L'heure de manger","L'heure de partir"], answer:1},
      {id:'ecole-CO3', script:"N'oublie pas ton cahier de devoirs pour demain.", question:"Qu'est-ce qu'il ne faut pas oublier ?", options:["Le cahier de devoirs","Le ballon","Le goûter","Le doudou"], answer:0},
      {id:'ecole-CO4', script:"Range tes affaires dans ton sac avant de partir.", question:"Que faut-il faire avant de partir ?", options:["Ranger ses affaires","Manger","Courir","Dormir"], answer:0},
      {id:'ecole-CO5', script:"Aujourd'hui, nous avons cours de dessin après la récréation.", question:"Quel cours a lieu après la récréation ?", options:["Le sport","Le dessin","La musique","La lecture"], answer:1},
      {id:'ecole-CO6', script:"Les élèves doivent être assis et silencieux pendant la leçon.", question:"Comment doivent être les élèves pendant la leçon ?", options:["Debout et bruyants","Assis et silencieux","Dehors","Endormis"], answer:1},
      {id:'ecole-CO7', script:"Le vendredi, c'est le dernier jour d'école de la semaine.", question:"Quel est le dernier jour d'école de la semaine ?", options:["Lundi","Mercredi","Vendredi","Dimanche"], answer:2},
      {id:'ecole-CO8', script:"N'oublie pas de dire bonjour à la maîtresse en entrant.", question:"Que faut-il dire en entrant en classe ?", options:["Au revoir","Bonjour","Merci beaucoup","Rien"], answer:1},
      {id:'ecole-CO9', script:"Chaque élève a un casier pour ranger ses affaires.", question:"À quoi sert le casier ?", options:["À ranger ses affaires","À manger","À dormir","À jouer"], answer:0},
      {id:'ecole-CO10', script:"La classe va à la bibliothèque pour choisir un livre.", question:"Où va la classe ?", options:["À la cantine","À la bibliothèque","Au parc","À la piscine"], answer:1}
    ],
    GR: [
      {id:'ecole-GR1', prompt:"Je ___ à l'école tous les jours.", options:["vais","va","vas","allez"], answer:0},
      {id:'ecole-GR2', prompt:"Elle ___ un joli cahier.", options:["a","as","ont","avez"], answer:0},
      {id:'ecole-GR3', prompt:"Nous ___ nos devoirs chaque soir.", options:["fais","fait","faisons","faites"], answer:2},
      {id:'ecole-GR4', prompt:"Les élèves ___ dans la cour.", options:["joue","joues","jouons","jouent"], answer:3},
      {id:'ecole-GR5', prompt:"Tu ___ ton stylo sur la table.", options:["pose","poses","posons","posent"], answer:1},
      {id:'ecole-GR6', prompt:"La maîtresse ___ une histoire aux enfants.", options:["lis","lit","lisons","lisent"], answer:1},
      {id:'ecole-GR7', prompt:"Un crayon, deux ___.", options:["crayon","crayons","crayonne","crayonnes"], answer:1},
      {id:'ecole-GR8', prompt:"C'est ___ cahier de Sara.", options:["le","la","les","l'"], answer:0},
      {id:'ecole-GR9', prompt:"Nous allons ___ l'école à huit heures.", options:["à","au","en","dans"], answer:0},
      {id:'ecole-GR10', prompt:"Les enfants ___ contents d'aller en récréation.", options:["est","es","sont","suis"], answer:2}
    ],
    EE: [
      {id:'ecole-EE1', prompt:"Quel objet contient les crayons et les stylos ?", options:["Le cahier","La trousse","Le tableau","La règle"], answer:1},
      {id:'ecole-EE2', prompt:"Comment appelle-t-on le moment de pause pour jouer à l'école ?", options:["La cantine","La récréation","La rentrée","Le devoir"], answer:1},
      {id:'ecole-EE3', prompt:"Comment appelle-t-on l'endroit où l'on mange à l'école ?", options:["La cantine","La cour","La classe","La bibliothèque"], answer:0},
      {id:'ecole-EE4', prompt:"Comment appelle-t-on la surface où écrit la maîtresse ?", options:["Le cahier","Le tableau","Le livre","Le bureau"], answer:1},
      {id:'ecole-EE5', prompt:"Quel objet efface ce qu'on écrit au crayon ?", options:["La règle","La gomme","Le stylo","Le classeur"], answer:1},
      {id:'ecole-EE6', prompt:"Dans quel objet écrit-on ses leçons ?", options:["Le cahier","La trousse","La cour","La cantine"], answer:0},
      {id:'ecole-EE7', prompt:"Comment appelle-t-on le premier jour d'école après les vacances ?", options:["La récréation","La rentrée","La sortie","Le devoir"], answer:1},
      {id:'ecole-EE8', prompt:"Comment appelle-t-on un ami de classe ?", options:["Le camarade","Le voisin","Le professeur","Le directeur"], answer:0},
      {id:'ecole-EE9', prompt:"Comment appelle-t-on la liste des cours de la semaine ?", options:["Le carnet","L'emploi du temps","Le cahier","La trousse"], answer:1},
      {id:'ecole-EE10', prompt:"Quel objet sert à écrire sur un tableau noir ?", options:["La craie","Le stylo","La gomme","Le classeur"], answer:0}
    ],
    EO: [
      {id:'ecole-EO1', prompt:"Dis le nom de ta maîtresse ou de ton maître et le nom de ton école.", keywords:["maîtresse","maître","école","s'appelle"]},
      {id:'ecole-EO2', prompt:"Décris ce qu'il y a dans ta trousse.", keywords:["trousse","stylo","crayon","gomme"]},
      {id:'ecole-EO3', prompt:"Raconte ce que tu fais pendant la récréation.", keywords:["récréation","joue","cour"]},
      {id:'ecole-EO4', prompt:"Dis quelle est ta matière préférée à l'école et pourquoi.", keywords:["matière","préférée","parce"]},
      {id:'ecole-EO5', prompt:"Décris ta salle de classe en quelques phrases.", keywords:["classe","tableau","bureau"]},
      {id:'ecole-EO6', prompt:"Raconte ta journée d'école d'hier.", keywords:["hier","école","classe"]},
      {id:'ecole-EO7', prompt:"Dis ce que tu manges à la cantine.", keywords:["cantine","mange","repas"]},
      {id:'ecole-EO8', prompt:"Explique pourquoi il est important de faire ses devoirs.", keywords:["devoirs","important","parce"]},
      {id:'ecole-EO9', prompt:"Décris ton meilleur ami ou ta meilleure amie de classe.", keywords:["ami","amie","classe"]},
      {id:'ecole-EO10', prompt:"Raconte ce que tu aimes faire pendant les vacances scolaires.", keywords:["vacances","aime","faire"]}
    ]
  },

  voyage: {
    CE: [
      {id:'voyage-CE1', passage:"Avant de partir, Emma prépare sa valise avec ses vêtements d'été.", question:"Que prépare Emma avant de partir ?", options:["Sa valise","Son cartable","Son vélo","Son repas"], answer:0},
      {id:'voyage-CE2', passage:"La famille prend l'avion pour aller en vacances en Espagne.", question:"Quel moyen de transport prend la famille ?", options:["Le train","L'avion","Le bateau","Le bus"], answer:1},
      {id:'voyage-CE3', passage:"À la plage, les enfants construisent des châteaux de sable.", question:"Que construisent les enfants à la plage ?", options:["Des maisons","Des châteaux de sable","Des tours","Des ponts"], answer:1},
      {id:'voyage-CE4', passage:"Avant de monter dans l'avion, il faut montrer son passeport.", question:"Que faut-il montrer avant de monter dans l'avion ?", options:["Un livre","Son passeport","Un jouet","Une photo"], answer:1},
      {id:'voyage-CE5', passage:"À la montagne, on peut voir de la neige en hiver.", question:"Que peut-on voir à la montagne en hiver ?", options:["Du sable","De la neige","Des fleurs","Des vagues"], answer:1},
      {id:'voyage-CE6', passage:"L'hôtel où la famille dort a une grande piscine.", question:"Qu'y a-t-il à l'hôtel ?", options:["Une grande piscine","Un jardin secret","Une bibliothèque","Un zoo"], answer:0},
      {id:'voyage-CE7', passage:"Le train part de la gare à neuf heures du matin.", question:"À quelle heure part le train ?", options:["Huit heures","Neuf heures","Dix heures","Midi"], answer:1},
      {id:'voyage-CE8', passage:"Les enfants achètent des souvenirs pour leurs grands-parents.", question:"Pour qui les enfants achètent-ils des souvenirs ?", options:["Pour leurs amis","Pour leurs grands-parents","Pour le chien","Pour la maîtresse"], answer:1},
      {id:'voyage-CE9', passage:"Sur le bateau, on peut voir des poissons dans la mer.", question:"Que peut-on voir depuis le bateau ?", options:["Des oiseaux","Des poissons","Des voitures","Des maisons"], answer:1},
      {id:'voyage-CE10', passage:"La carte du pays aide la famille à trouver son chemin.", question:"À quoi sert la carte ?", options:["À dessiner","À trouver son chemin","À manger","À dormir"], answer:1}
    ],
    CO: [
      {id:'voyage-CO1', script:"N'oublie pas ta valise, le taxi arrive dans dix minutes !", question:"Qu'est-ce qu'il ne faut pas oublier ?", options:["Le doudou","La valise","Le ballon","Le vélo"], answer:1},
      {id:'voyage-CO2', script:"L'avion décolle à midi, il faut arriver à l'aéroport à temps.", question:"À quelle heure décolle l'avion ?", options:["Dix heures","Midi","Deux heures","Minuit"], answer:1},
      {id:'voyage-CO3', script:"À la mer, on peut nager et faire du bateau.", question:"Que peut-on faire à la mer ?", options:["Skier","Nager et faire du bateau","Faire du vélo","Escalader"], answer:1},
      {id:'voyage-CO4', script:"Nous dormirons dans une tente pendant notre voyage en camping.", question:"Où la famille dormira-t-elle ?", options:["Dans un hôtel","Dans une tente","Dans un train","Chez des amis"], answer:1},
      {id:'voyage-CO5', script:"Le guide nous montrera les plus beaux endroits de la ville.", question:"Que fera le guide ?", options:["Il cuisinera","Il montrera les beaux endroits","Il chantera","Il dormira"], answer:1},
      {id:'voyage-CO6', script:"Prends ton passeport, ton billet et ta valise avant de partir.", question:"Que faut-il prendre avant de partir ?", options:["Passeport, billet et valise","Un vélo","Un ballon","Un livre"], answer:0},
      {id:'voyage-CO7', script:"Le bateau traverse la mer pendant plusieurs heures.", question:"Que traverse le bateau ?", options:["Une rivière","La mer","Un lac","Une forêt"], answer:1},
      {id:'voyage-CO8', script:"En montagne, il faut porter des vêtements chauds.", question:"Que faut-il porter en montagne ?", options:["Un maillot de bain","Des vêtements chauds","Des sandales","Rien de spécial"], answer:1},
      {id:'voyage-CO9', script:"À l'hôtel, la réceptionniste nous a donné les clés de la chambre.", question:"Qu'a donné la réceptionniste ?", options:["Les clés de la chambre","Un cadeau","Un livre","Un ticket"], answer:0},
      {id:'voyage-CO10', script:"Le voyage en train dure environ trois heures.", question:"Combien de temps dure le voyage en train ?", options:["Une heure","Trois heures","Dix heures","Une journée"], answer:1}
    ],
    GR: [
      {id:'voyage-GR1', prompt:"Nous ___ en vacances la semaine prochaine.", options:["partons","part","partez","partent"], answer:0},
      {id:'voyage-GR2', prompt:"Elle ___ sa valise avant de partir.", options:["prépare","prépares","préparons","préparez"], answer:0},
      {id:'voyage-GR3', prompt:"Ils ___ à la plage tous les étés.", options:["va","vas","vont","allons"], answer:2},
      {id:'voyage-GR4', prompt:"Tu ___ un joli chapeau pour le voyage.", options:["as","a","ont","avez"], answer:0},
      {id:'voyage-GR5', prompt:"Nous ___ le train à huit heures.", options:["prend","prends","prenons","prennent"], answer:2},
      {id:'voyage-GR6', prompt:"Un pays, deux ___.", options:["pays","payes","paies","payses"], answer:0},
      {id:'voyage-GR7', prompt:"C'est ___ valise de Léo.", options:["le","la","les","l'"], answer:1},
      {id:'voyage-GR8', prompt:"Nous allons ___ Espagne cet été.", options:["à","au","en","dans"], answer:2},
      {id:'voyage-GR9', prompt:"Les enfants ___ contents de partir en voyage.", options:["est","es","sont","suis"], answer:2},
      {id:'voyage-GR10', prompt:"Hier, nous ___ à la montagne.", options:["allons","sommes allés","irons","allions"], answer:1}
    ],
    EE: [
      {id:'voyage-EE1', prompt:"Comment appelle-t-on l'objet pour transporter ses vêtements en voyage ?", options:["La valise","Le sac à dos","Le classeur","La trousse"], answer:0},
      {id:'voyage-EE2', prompt:"Comment appelle-t-on le document pour voyager dans un autre pays ?", options:["Le passeport","Le billet","La carte","Le guide"], answer:0},
      {id:'voyage-EE3', prompt:"Comment appelle-t-on l'endroit où l'on prend l'avion ?", options:["La gare","L'aéroport","Le port","L'hôtel"], answer:1},
      {id:'voyage-EE4', prompt:"Comment appelle-t-on l'endroit où l'on prend le train ?", options:["La gare","L'aéroport","Le port","L'hôtel"], answer:0},
      {id:'voyage-EE5', prompt:"Comment appelle-t-on l'objet qui indique le nord ?", options:["La carte","La boussole","Le billet","Le passeport"], answer:1},
      {id:'voyage-EE6', prompt:"Comment appelle-t-on un objet rapporté d'un voyage ?", options:["Le souvenir","Le billet","Le passeport","Le guide"], answer:0},
      {id:'voyage-EE7', prompt:"Comment appelle-t-on l'endroit où l'on dort sous une tente ?", options:["L'hôtel","Le camping","La gare","L'aéroport"], answer:1},
      {id:'voyage-EE8', prompt:"Quel document est nécessaire pour voyager en train ou en avion ?", options:["Le billet","La boussole","La carte","Le souvenir"], answer:0},
      {id:'voyage-EE9', prompt:"Comment appelle-t-on le document qui montre un pays ou une ville ?", options:["La carte","Le billet","Le passeport","La valise"], answer:0},
      {id:'voyage-EE10', prompt:"Comment appelle-t-on la personne qui fait visiter un lieu ?", options:["Le guide","Le voisin","Le pilote","Le client"], answer:0}
    ],
    EO: [
      {id:'voyage-EO1', prompt:"Décris un voyage que tu as fait ou que tu aimerais faire.", keywords:["voyage","pays","aimerais"]},
      {id:'voyage-EO2', prompt:"Dis ce que tu mets dans ta valise pour partir en vacances.", keywords:["valise","mets","vêtements"]},
      {id:'voyage-EO3', prompt:"Décris ton moyen de transport préféré pour voyager.", keywords:["transport","préféré","avion","train"]},
      {id:'voyage-EO4', prompt:"Raconte ce que tu ferais à la plage pendant tes vacances.", keywords:["plage","vacances","ferais"]},
      {id:'voyage-EO5', prompt:"Décris un pays que tu aimerais visiter et explique pourquoi.", keywords:["pays","visiter","parce"]},
      {id:'voyage-EO6', prompt:"Raconte un souvenir de vacances que tu aimes beaucoup.", keywords:["souvenir","vacances","aime"]},
      {id:'voyage-EO7', prompt:"Explique la différence entre voyager en avion et voyager en train.", keywords:["avion","train","différence"]},
      {id:'voyage-EO8', prompt:"Décris ce que tu vois par la fenêtre d'un train ou d'un avion.", keywords:["fenêtre","vois","train","avion"]},
      {id:'voyage-EO9', prompt:"Dis ce que tu ferais si tu voyageais à la montagne.", keywords:["montagne","ferais","neige"]},
      {id:'voyage-EO10', prompt:"Raconte comment tu préparerais un voyage avec ta famille.", keywords:["famille","voyage","préparerais"]}
    ]
  },

  bonjour: {
    CE: [
      {id:'bonjour-CE1', passage:"Le matin, Sami dit « Bonjour » à sa maîtresse en entrant en classe.", question:"Que dit Sami le matin ?", options:["Bonsoir","Bonjour","Au revoir","Salut"], answer:1},
      {id:'bonjour-CE2', passage:"Le soir, avant d'aller au lit, Lina dit « Bonne nuit » à ses parents.", question:"Que dit Lina le soir ?", options:["Bonjour","Bonne nuit","Merci","Pardon"], answer:1},
      {id:'bonjour-CE3', passage:"Quand on rencontre un nouvel ami, on peut dire « Enchanté ».", question:"Que dit-on quand on rencontre un nouvel ami ?", options:["Enchanté","Au revoir","Bonne nuit","Pardon"], answer:0},
      {id:'bonjour-CE4', passage:"Quand quelqu'un nous aide, on dit « Merci ».", question:"Que dit-on quand quelqu'un nous aide ?", options:["Pardon","Merci","Salut","Bonsoir"], answer:1},
      {id:'bonjour-CE5', passage:"Avant de partir, les enfants disent « Au revoir » à la maîtresse.", question:"Que disent les enfants avant de partir ?", options:["Bonjour","Au revoir","Bonne nuit","Enchanté"], answer:1},
      {id:'bonjour-CE6', passage:"Entre amis, on peut dire « Salut » au lieu de « Bonjour ».", question:"Que peut-on dire entre amis ?", options:["Salut","Pardon","Bonne nuit","Merci beaucoup"], answer:0},
      {id:'bonjour-CE7', passage:"Quand on bouscule quelqu'un par accident, on dit « Pardon ».", question:"Que dit-on quand on bouscule quelqu'un ?", options:["Bonjour","Pardon","Salut","Merci"], answer:1},
      {id:'bonjour-CE8', passage:"Pour demander quelque chose poliment, on dit « S'il te plaît ».", question:"Que dit-on pour demander poliment ?", options:["S'il te plaît","Au revoir","Bonsoir","Pardon"], answer:0},
      {id:'bonjour-CE9', passage:"Quand on part le soir, on peut dire « Bonsoir » en guise d'au revoir.", question:"Que peut-on dire le soir en partant ?", options:["Bonjour","Bonsoir","Bonne journée","Enchanté"], answer:1},
      {id:'bonjour-CE10', passage:"Quand quelqu'un nous dit merci, on peut répondre « De rien ».", question:"Que répond-on quand on nous dit merci ?", options:["De rien","Pardon","Salut","Bonne nuit"], answer:0}
    ],
    CO: [
      {id:'bonjour-CO1', script:"Bonjour tout le monde, comment allez-vous aujourd'hui ?", question:"Que demande la phrase ?", options:["Comment tu t'appelles","Comment allez-vous","Où habites-tu","Quel âge as-tu"], answer:1},
      {id:'bonjour-CO2', script:"Ça va très bien, merci, et toi ?", question:"Comment va la personne ?", options:["Très bien","Très mal","Fatiguée","Malade"], answer:0},
      {id:'bonjour-CO3', script:"Au revoir, à demain !", question:"Quand se reverront-ils ?", options:["Demain","Dans une semaine","Jamais","Ce soir"], answer:0},
      {id:'bonjour-CO4', script:"Bonsoir, bienvenue chez nous.", question:"Que dit-on à quelqu'un qui arrive le soir ?", options:["Bonjour","Bonsoir, bienvenue","Au revoir","Pardon"], answer:1},
      {id:'bonjour-CO5', script:"Excusez-moi, pouvez-vous m'aider s'il vous plaît ?", question:"Que demande la personne ?", options:["De l'aide","De l'argent","Un cadeau","Un livre"], answer:0},
      {id:'bonjour-CO6', script:"Je m'appelle Nora, et toi, comment tu t'appelles ?", question:"Comment s'appelle la personne qui parle ?", options:["Nora","Sarah","Léa","Julie"], answer:0},
      {id:'bonjour-CO7', script:"Merci beaucoup pour ton aide, c'est très gentil.", question:"Pourquoi la personne dit-elle merci ?", options:["Pour l'aide reçue","Pour un cadeau","Pour un repas","Pour rien"], answer:0},
      {id:'bonjour-CO8', script:"Bonne nuit et fais de beaux rêves !", question:"Que souhaite-t-on à quelqu'un qui va dormir ?", options:["Bonne nuit et de beaux rêves","Bon appétit","Bonne chance","Bon voyage"], answer:0},
      {id:'bonjour-CO9', script:"Enchantée de faire votre connaissance.", question:"Que signifie « enchantée » ici ?", options:["Content de rencontrer quelqu'un","Fâché","Triste","Fatigué"], answer:0},
      {id:'bonjour-CO10', script:"À bientôt, prends soin de toi !", question:"Que veut dire « à bientôt » ?", options:["On se reverra bientôt","On ne se reverra jamais","C'est un adieu","C'est une question"], answer:0}
    ],
    GR: [
      {id:'bonjour-GR1', prompt:"Le matin, je dis « ___ » à mes amis.", options:["Bonjour","Bonsoir","Bonne nuit","Pardon"], answer:0},
      {id:'bonjour-GR2', prompt:"Le soir avant de dormir, on dit « ___ ».", options:["Bonjour","Bonne nuit","Salut","Merci"], answer:1},
      {id:'bonjour-GR3', prompt:"Pour remercier quelqu'un, on dit « ___ ».", options:["Pardon","Merci","Bonjour","Au revoir"], answer:1},
      {id:'bonjour-GR4', prompt:"Quand on part, on dit « ___ ».", options:["Bonjour","Au revoir","Enchanté","S'il te plaît"], answer:1},
      {id:'bonjour-GR5', prompt:"Je ___ Yasmine.", options:["m'appelle","t'appelles","s'appelle","vous appelez"], answer:0},
      {id:'bonjour-GR6', prompt:"Comment ___ -tu ?", options:["t'appelle","t'appelles","s'appelle","m'appelle"], answer:1},
      {id:'bonjour-GR7', prompt:"___ -moi, où est la sortie ?", options:["Excuse","Excusez","Pardonne","Merci"], answer:1},
      {id:'bonjour-GR8', prompt:"Nous ___ très heureux de vous rencontrer.", options:["sommes","es","est","suis"], answer:0},
      {id:'bonjour-GR9', prompt:"« De rien » est la réponse à « ___ ».", options:["Bonjour","Merci","Pardon","Salut"], answer:1},
      {id:'bonjour-GR10', prompt:"___ tu vas bien ?", options:["Comment","Où","Quand","Pourquoi"], answer:0}
    ],
    EE: [
      {id:'bonjour-EE1', prompt:"Quelle salutation utilise-t-on le matin ou la journée ?", options:["Bonjour","Bonsoir","Bonne nuit","Pardon"], answer:0},
      {id:'bonjour-EE2', prompt:"Quelle salutation utilise-t-on le soir ?", options:["Bonjour","Bonsoir","S'il te plaît","Merci"], answer:1},
      {id:'bonjour-EE3', prompt:"Que dit-on en partant ?", options:["Au revoir","Enchanté","Bonjour","Pardon"], answer:0},
      {id:'bonjour-EE4', prompt:"Que dit-on pour remercier quelqu'un ?", options:["Merci","Pardon","Salut","Au revoir"], answer:0},
      {id:'bonjour-EE5', prompt:"Que dit-on après avoir fait une erreur ?", options:["Pardon","Merci","Bonjour","Enchanté"], answer:0},
      {id:'bonjour-EE6', prompt:"Que dit-on en rencontrant quelqu'un pour la première fois ?", options:["Enchanté","Au revoir","Bonne nuit","Pardon"], answer:0},
      {id:'bonjour-EE7', prompt:"Quelle expression utilise-t-on pour demander poliment ?", options:["S'il te plaît","Merci beaucoup","De rien","Salut"], answer:0},
      {id:'bonjour-EE8', prompt:"Que dit-on avant de dormir ?", options:["Bonne nuit","Bonjour","Bonsoir","Pardon"], answer:0},
      {id:'bonjour-EE9', prompt:"Quelle est la réponse polie à un merci ?", options:["De rien","Pardon","Salut","Bonne nuit"], answer:0},
      {id:'bonjour-EE10', prompt:"Quelle expression signifie qu'on espère se revoir vite ?", options:["À bientôt","Bonne nuit","Pardon","Merci"], answer:0}
    ],
    EO: [
      {id:'bonjour-EO1', prompt:"Dis bonjour et présente-toi en une phrase.", keywords:["bonjour","m'appelle"]},
      {id:'bonjour-EO2', prompt:"Dis comment tu vas aujourd'hui.", keywords:["ça va","bien"]},
      {id:'bonjour-EO3', prompt:"Salue un ami le matin, puis dis au revoir comme si tu partais.", keywords:["bonjour","au revoir"]},
      {id:'bonjour-EO4', prompt:"Dis merci à quelqu'un qui t'a aidé, avec une phrase complète.", keywords:["merci","aidé"]},
      {id:'bonjour-EO5', prompt:"Présente-toi à un nouvel ami : dis ton nom et ton âge.", keywords:["m'appelle","ans"]},
      {id:'bonjour-EO6', prompt:"Dis bonne nuit à quelqu'un de ta famille.", keywords:["bonne nuit"]},
      {id:'bonjour-EO7', prompt:"Dis comment on salue quelqu'un le soir.", keywords:["bonsoir","soir"]},
      {id:'bonjour-EO8', prompt:"Explique ce qu'on dit quand on bouscule quelqu'un par erreur.", keywords:["pardon","excuse"]},
      {id:'bonjour-EO9', prompt:"Dis « s'il te plaît » dans une phrase demandant un objet.", keywords:["s'il te plaît","donne"]},
      {id:'bonjour-EO10', prompt:"Explique pourquoi il est important de dire bonjour et merci.", keywords:["important","poli","bonjour","merci"]}
    ]
  },

  temps: {
    CE: [
      {id:'temps-CE1', passage:"Aujourd'hui c'est lundi, demain ce sera mardi.", question:"Quel jour sera demain ?", options:["Lundi","Mardi","Mercredi","Dimanche"], answer:1},
      {id:'temps-CE2', passage:"L'anniversaire de Lina est au mois de mars.", question:"En quel mois est l'anniversaire de Lina ?", options:["Janvier","Mars","Juillet","Décembre"], answer:1},
      {id:'temps-CE3', passage:"En hiver, il fait souvent froid et il peut neiger.", question:"Quel temps fait-il souvent en hiver ?", options:["Chaud","Froid","Doux","Humide"], answer:1},
      {id:'temps-CE4', passage:"La semaine a sept jours : du lundi au dimanche.", question:"Combien de jours a une semaine ?", options:["Cinq","Six","Sept","Huit"], answer:2},
      {id:'temps-CE5', passage:"L'année a douze mois, de janvier à décembre.", question:"Combien de mois a une année ?", options:["Dix","Onze","Douze","Treize"], answer:2},
      {id:'temps-CE6', passage:"Au printemps, les fleurs commencent à pousser.", question:"Que se passe-t-il au printemps ?", options:["Les fleurs poussent","Il neige","Les feuilles tombent","Il fait très chaud"], answer:0},
      {id:'temps-CE7', passage:"En été, les enfants partent souvent en vacances.", question:"Que font souvent les enfants en été ?", options:["Ils vont à l'école","Ils partent en vacances","Ils dorment beaucoup","Ils travaillent"], answer:1},
      {id:'temps-CE8', passage:"En automne, les feuilles des arbres tombent.", question:"Que se passe-t-il en automne ?", options:["Les feuilles tombent","Les fleurs poussent","Il fait très chaud","Les enfants nagent"], answer:0},
      {id:'temps-CE9', passage:"Le dimanche est le dernier jour de la semaine en France.", question:"Quel est le dernier jour de la semaine ?", options:["Samedi","Dimanche","Vendredi","Lundi"], answer:1},
      {id:'temps-CE10', passage:"Le mois de décembre est le dernier mois de l'année.", question:"Quel est le dernier mois de l'année ?", options:["Novembre","Décembre","Janvier","Octobre"], answer:1}
    ],
    CO: [
      {id:'temps-CO1', script:"Quel jour sommes-nous aujourd'hui ? Nous sommes mercredi.", question:"Quel jour est-ce aujourd'hui ?", options:["Lundi","Mercredi","Vendredi","Dimanche"], answer:1},
      {id:'temps-CO2', script:"Mon anniversaire est le douze juin.", question:"À quelle date est l'anniversaire ?", options:["Le douze juin","Le douze juillet","Le deux juin","Le vingt juin"], answer:0},
      {id:'temps-CO3', script:"En été, il fait chaud et le soleil brille.", question:"Quel temps fait-il en été ?", options:["Froid","Chaud et ensoleillé","Pluvieux","Neigeux"], answer:1},
      {id:'temps-CO4', script:"Il y a quatre saisons : le printemps, l'été, l'automne et l'hiver.", question:"Combien de saisons y a-t-il ?", options:["Trois","Quatre","Cinq","Deux"], answer:1},
      {id:'temps-CO5', script:"Nous sommes au mois de septembre, c'est la rentrée scolaire.", question:"En quel mois a lieu la rentrée ?", options:["Septembre","Juillet","Décembre","Avril"], answer:0},
      {id:'temps-CO6', script:"Hier, c'était dimanche, et aujourd'hui c'est lundi.", question:"Quel jour était-ce hier ?", options:["Samedi","Dimanche","Lundi","Mardi"], answer:1},
      {id:'temps-CO7', script:"Le matin, on se réveille ; le soir, on se couche.", question:"Que fait-on le matin ?", options:["On se couche","On se réveille","On dîne","On dort"], answer:1},
      {id:'temps-CO8', script:"Cette année, les vacances d'été commencent le premier juillet.", question:"Quand commencent les vacances d'été ?", options:["Le premier juillet","Le premier juin","Le premier août","Le premier mai"], answer:0},
      {id:'temps-CO9', script:"Le calendrier montre tous les mois de l'année.", question:"Que montre le calendrier ?", options:["Les mois de l'année","Les couleurs","Les animaux","Les pays"], answer:0},
      {id:'temps-CO10', script:"Il est trois heures de l'après-midi.", question:"À quel moment de la journée sommes-nous ?", options:["Le matin","L'après-midi","Le soir","La nuit"], answer:1}
    ],
    GR: [
      {id:'temps-GR1', prompt:"Aujourd'hui, nous ___ lundi.", options:["sommes","es","est","suis"], answer:0},
      {id:'temps-GR2', prompt:"Mon anniversaire ___ en avril.", options:["est","es","sont","suis"], answer:0},
      {id:'temps-GR3', prompt:"Il ___ froid en hiver.", options:["fait","fais","faisons","font"], answer:0},
      {id:'temps-GR4', prompt:"L'année ___ douze mois.", options:["a","as","ont","avez"], answer:0},
      {id:'temps-GR5', prompt:"Nous ___ en vacances au mois de juillet.", options:["partons","pars","partez","partent"], answer:0},
      {id:'temps-GR6', prompt:"Hier, il ___ beau.", options:["fait","faisait","fera","fasse"], answer:1},
      {id:'temps-GR7', prompt:"Demain, nous ___ au parc.", options:["allons","allions","irons","allâmes"], answer:2},
      {id:'temps-GR8', prompt:"Un jour, deux ___.", options:["jour","jours","journée","journées"], answer:1},
      {id:'temps-GR9', prompt:"C'est ___ premier jour de l'école.", options:["le","la","les","l'"], answer:0},
      {id:'temps-GR10', prompt:"Les feuilles tombent ___ automne.", options:["en","au","à","dans"], answer:0}
    ],
    EE: [
      {id:'temps-EE1', prompt:"Quel est le premier jour de la semaine en France ?", options:["Dimanche","Lundi","Samedi","Mardi"], answer:1},
      {id:'temps-EE2', prompt:"Quel est le premier mois de l'année ?", options:["Décembre","Janvier","Mars","Juin"], answer:1},
      {id:'temps-EE3', prompt:"Quelle est la saison la plus chaude de l'année ?", options:["L'hiver","L'été","L'automne","Le printemps"], answer:1},
      {id:'temps-EE4', prompt:"Quelle est la saison la plus froide de l'année ?", options:["L'été","Le printemps","L'hiver","L'automne"], answer:2},
      {id:'temps-EE5', prompt:"Comment appelle-t-on le jour avant aujourd'hui ?", options:["Demain","Hier","Aujourd'hui","La semaine"], answer:1},
      {id:'temps-EE6', prompt:"Comment appelle-t-on le jour après aujourd'hui ?", options:["Hier","Demain","Aujourd'hui","Le mois"], answer:1},
      {id:'temps-EE7', prompt:"Comment appelle-t-on le jour où l'on fête sa naissance ?", options:["L'anniversaire","La rentrée","La récréation","Le calendrier"], answer:0},
      {id:'temps-EE8', prompt:"Comment appelle-t-on le document qui montre les jours et les mois ?", options:["Le calendrier","Le cahier","Le livre","Le journal"], answer:0},
      {id:'temps-EE9', prompt:"Comment appelle-t-on une période de sept jours ?", options:["Le mois","La semaine","L'année","Le jour"], answer:1},
      {id:'temps-EE10', prompt:"Quelle saison voit les fleurs pousser ?", options:["L'hiver","Le printemps","L'automne","L'été"], answer:1}
    ],
    EO: [
      {id:'temps-EO1', prompt:"Dis quel jour on est aujourd'hui et quel jour ce sera demain.", keywords:["aujourd'hui","demain"]},
      {id:'temps-EO2', prompt:"Dis en quel mois est ton anniversaire.", keywords:["anniversaire","mois"]},
      {id:'temps-EO3', prompt:"Décris ta saison préférée et explique pourquoi.", keywords:["saison","préférée","parce"]},
      {id:'temps-EO4', prompt:"Récite les jours de la semaine dans l'ordre.", keywords:["lundi","mardi","dimanche"]},
      {id:'temps-EO5', prompt:"Décris ce que tu fais un dimanche typique.", keywords:["dimanche","fais"]},
      {id:'temps-EO6', prompt:"Explique ce que tu fais le matin avant l'école.", keywords:["matin","école"]},
      {id:'temps-EO7', prompt:"Décris le temps qu'il fait aujourd'hui.", keywords:["temps","aujourd'hui","soleil","pluie"]},
      {id:'temps-EO8', prompt:"Dis quel est ton mois préféré de l'année et pourquoi.", keywords:["mois","préféré","parce"]},
      {id:'temps-EO9', prompt:"Raconte ce que tu fais pendant les vacances d'été.", keywords:["vacances","été"]},
      {id:'temps-EO10', prompt:"Explique la différence entre le matin, l'après-midi et le soir.", keywords:["matin","après-midi","soir"]}
    ]
  }
};
