/* Edu Flow Academy — banque de questions : Ados (12-18 ans), test thématique.
   5 thèmes x 50 questions (10 par compétence : CE, CO, GR, EE, EO). */

const AGE_MIN = 12, AGE_MAX = 18;
const TEST_TYPE_LABEL = 'Ados (12-18 ans) — Thématique';

const THEME_META = [
  {key:'etudes', name:'Des études supérieures', desc:"Université, diplômes, orientation, vie étudiante."},
  {key:'parole', name:'La prise de parole', desc:"Discours, argumentation, aisance à l'oral."},
  {key:'entretien', name:'Entretien', desc:"Entretien d'embauche, CV, se présenter."},
  {key:'eloquence', name:'Éloquence', desc:"Rhétorique, figures de style, vocabulaire soutenu."},
  {key:'motsnature', name:'La nature et la fonction des mots', desc:"Grammaire : nature et fonction des mots."}
];

const QDATA = {

  etudes: {
    CE: [
      {id:'etudes-CE1', passage:"Amine vient de recevoir sa licence en économie. Il souhaite maintenant s'inscrire en master.", question:"Qu'est-ce qu'Amine vient d'obtenir ?", options:["Un baccalauréat","Une licence","Un doctorat","Un CAP"], answer:1},
      {id:'etudes-CE2', passage:"Pour financer ses études, Sarah a obtenu une bourse au mérite de son université.", question:"Comment Sarah finance-t-elle ses études ?", options:["Un prêt bancaire","Un travail à temps plein","Une bourse au mérite","Un héritage"], answer:2},
      {id:'etudes-CE3', passage:"Le campus universitaire propose une bibliothèque, un amphithéâtre et un restaurant universitaire.", question:"Qu'est-ce qu'on trouve sur le campus, en plus de la bibliothèque ?", options:["Un stade","Un amphithéâtre","Un hôpital","Un cinéma"], answer:1},
      {id:'etudes-CE4', passage:"Karim a raté ses examens de janvier ; il doit passer les rattrapages en juin.", question:"Que doit faire Karim ?", options:["Changer de filière","Passer les rattrapages","Abandonner ses études","Redoubler tout de suite"], answer:1},
      {id:'etudes-CE5', passage:"Léa fait un stage de trois mois dans une entreprise pour valider son master.", question:"Pourquoi Léa fait-elle un stage ?", options:["Pour gagner de l'argent","Pour valider son master","Par obligation légale","Pour voyager"], answer:1},
      {id:'etudes-CE6', passage:"Yanis a obtenu la mention « bien » à son baccalauréat.", question:"Quelle mention Yanis a-t-il obtenue ?", options:["Passable","Assez bien","Bien","Très bien"], answer:2},
      {id:'etudes-CE7', passage:"Nadia hésite entre la faculté de droit et une école de commerce.", question:"Entre quoi Nadia hésite-t-elle ?", options:["Deux écoles de commerce","La faculté de droit et une école de commerce","Deux facultés de droit","Un master et un doctorat"], answer:1},
      {id:'etudes-CE8', passage:"Pour s'inscrire à l'université, il faut d'abord déposer un dossier d'admission.", question:"Que faut-il faire pour s'inscrire ?", options:["Payer immédiatement","Déposer un dossier d'admission","Passer un entretien oral","Rien de particulier"], answer:1},
      {id:'etudes-CE9', passage:"Farid partira étudier un semestre en Belgique dans le cadre d'un échange Erasmus.", question:"Où Farid partira-t-il ?", options:["En Espagne","En Belgique","Au Canada","En Italie"], answer:1},
      {id:'etudes-CE10', passage:"La bibliothèque universitaire est ouverte tous les jours jusqu'à 22 heures pendant les examens.", question:"Jusqu'à quelle heure est ouverte la bibliothèque pendant les examens ?", options:["20 heures","21 heures","22 heures","Minuit"], answer:2}
    ],
    CO: [
      {id:'etudes-CO1', script:"Le premier jour à l'université peut être impressionnant : on découvre un nouveau campus et de nouveaux camarades.", question:"Qu'est-ce qui peut être impressionnant ?", options:["Le dernier jour de cours","Le premier jour à l'université","Un examen final","Une réunion de parents"], answer:1},
      {id:'etudes-CO2', script:"Pour obtenir sa licence, un étudiant doit valider six semestres.", question:"Combien de semestres faut-il valider pour la licence ?", options:["Quatre","Cinq","Six","Huit"], answer:2},
      {id:'etudes-CO3', script:"Le professeur donne son cours magistral dans le grand amphithéâtre du bâtiment B.", question:"Où se donne le cours ?", options:["Dans une petite salle","Dans l'amphithéâtre du bâtiment B","À la bibliothèque","Dans la cour"], answer:1},
      {id:'etudes-CO4', script:"Beaucoup d'étudiants travaillent à temps partiel pour financer leur loyer.", question:"Pourquoi beaucoup d'étudiants travaillent-ils à temps partiel ?", options:["Pour voyager","Pour financer leur loyer","Par ennui","Pour éviter les cours"], answer:1},
      {id:'etudes-CO5', script:"Le mémoire de fin d'études doit être remis avant le 30 avril.", question:"Avant quelle date le mémoire doit-il être remis ?", options:["Le 30 mars","Le 30 avril","Le 30 mai","Le 30 juin"], answer:1},
      {id:'etudes-CO6', script:"Certains étudiants choisissent une classe préparatoire avant d'intégrer une grande école.", question:"Qu'intègrent-ils après la classe préparatoire ?", options:["Une grande école","Un lycée","Un collège","Une entreprise"], answer:0},
      {id:'etudes-CO7', script:"L'inscription en master nécessite d'avoir validé une licence.", question:"Que faut-il avoir validé pour s'inscrire en master ?", options:["Un doctorat","Une licence","Un CAP","Aucun diplôme"], answer:1},
      {id:'etudes-CO8', script:"Le CROUS propose des logements et des repas à prix réduit pour les étudiants.", question:"Que propose le CROUS ?", options:["Des voyages gratuits","Des logements et des repas à prix réduit","Des vêtements","Des ordinateurs"], answer:1},
      {id:'etudes-CO9', script:"La soutenance de thèse a duré presque deux heures devant le jury.", question:"Combien de temps a duré la soutenance ?", options:["Une demi-heure","Presque deux heures","Toute la journée","Dix minutes"], answer:1},
      {id:'etudes-CO10', script:"Un double diplôme permet d'obtenir deux qualifications en étudiant dans deux établissements.", question:"Que permet un double diplôme ?", options:["Une seule qualification","Obtenir deux qualifications","Éviter les examens","Travailler sans diplôme"], answer:1}
    ],
    GR: [
      {id:'etudes-GR1', prompt:"Il ___ ses études l'année prochaine.", options:["termine","terminera","a terminé","terminait"], answer:1},
      {id:'etudes-GR2', prompt:"Depuis deux ans, elle ___ à la faculté de médecine.", options:["étudie","étudier","étudiant","étudié"], answer:0},
      {id:'etudes-GR3', prompt:"Si tu ___ plus, tu réussirais tes examens.", options:["travaillais","travaillais","as travaillé","travailleras"], answer:0},
      {id:'etudes-GR4', prompt:"Nous ___ nos cours hier soir.", options:["révisons","révisions","avons révisé","réviserons"], answer:2},
      {id:'etudes-GR5', prompt:"Il faut que tu ___ ton dossier avant vendredi.", options:["rends","rendes","rendras","rendais"], answer:1},
      {id:'etudes-GR6', prompt:"L'année dernière, il ___ en classe préparatoire.", options:["est","était","sera","soit"], answer:1},
      {id:'etudes-GR7', prompt:"Dès qu'elle ___ son master, elle cherchera un emploi.", options:["finit","a fini","aura fini","finissait"], answer:2},
      {id:'etudes-GR8', prompt:"Les étudiants ___ leurs résultats la semaine prochaine.", options:["reçoivent","recevront","ont reçu","recevaient"], answer:1},
      {id:'etudes-GR9', prompt:"Bien qu'il ___ fatigué, il continue à réviser.", options:["est","soit","était","sera"], answer:1},
      {id:'etudes-GR10', prompt:"Elle vient de ___ son mémoire.", options:["terminer","termine","terminé","terminant"], answer:0}
    ],
    EE: [
      {id:'etudes-EE1', prompt:"Quel mot désigne un travail de recherche universitaire long et approfondi ?", options:["Un exposé","Une thèse","Un résumé","Une fiche"], answer:1},
      {id:'etudes-EE2', prompt:"Quel est le sens du mot « cursus » ?", options:["Un examen final","Un parcours d'études","Un diplôme d'honneur","Une salle de classe"], answer:1},
      {id:'etudes-EE3', prompt:"Quel mot désigne une grande salle de cours en amphithéâtre ?", options:["Un couloir","Un amphithéâtre","Un bureau","Un gymnase"], answer:1},
      {id:'etudes-EE4', prompt:"Que signifie « une bourse » dans le contexte des études ?", options:["Un sac","Une aide financière","Un examen","Un cours"], answer:1},
      {id:'etudes-EE5', prompt:"Quel mot désigne une période de travail pratique en entreprise pendant les études ?", options:["Un stage","Un partiel","Un cursus","Un séminaire"], answer:0},
      {id:'etudes-EE6', prompt:"Quel mot désigne une période de six mois d'études universitaires ?", options:["Un trimestre","Un semestre","Une année","Une session"], answer:1},
      {id:'etudes-EE7', prompt:"Quel mot désigne le document de recherche rédigé en fin d'études ?", options:["Un mémoire","Un roman","Un journal","Un carnet"], answer:0},
      {id:'etudes-EE8', prompt:"Que signifie « une formation en alternance » ?", options:["Cours et travail en entreprise combinés","Cours uniquement le soir","Cours à distance","Cours annulés"], answer:0},
      {id:'etudes-EE9', prompt:"Quel mot désigne une épreuve sélective pour entrer dans une école ?", options:["Un concours","Un devoir","Un exposé","Un débat"], answer:0},
      {id:'etudes-EE10', prompt:"Que signifie « obtenir une mention » à un examen ?", options:["Échouer à l'examen","Recevoir une appréciation selon la moyenne obtenue","Passer un oral","Changer de filière"], answer:1}
    ],
    EO: [
      {id:'etudes-EO1', prompt:"Explique en quelques phrases pourquoi tu souhaites (ou non) poursuivre des études supérieures.", keywords:["études","université","parce","avenir"]},
      {id:'etudes-EO2', prompt:"Décris la filière ou le métier que tu aimerais étudier après le lycée.", keywords:["filière","métier","études","aimerais"]},
      {id:'etudes-EO3', prompt:"Décris ta matière préférée à l'école ou au lycée et explique pourquoi.", keywords:["matière","préférée","parce","aime"]},
      {id:'etudes-EO4', prompt:"Comment t'organises-tu pour réviser tes examens ?", keywords:["révise","organise","planning","temps"]},
      {id:'etudes-EO5', prompt:"Décris un stage ou une expérience professionnelle que tu aimerais faire.", keywords:["stage","entreprise","expérience","aimerais"]},
      {id:'etudes-EO6', prompt:"Explique les avantages et les inconvénients de partir étudier à l'étranger.", keywords:["avantages","inconvénients","étranger","étudier"]},
      {id:'etudes-EO7', prompt:"Comment choisirais-tu entre plusieurs filières d'études possibles ?", keywords:["choisir","filière","parce","intérêt"]},
      {id:'etudes-EO8', prompt:"Décris une journée type d'un étudiant à l'université.", keywords:["cours","journée","étudiant","université"]},
      {id:'etudes-EO9', prompt:"Explique pourquoi la vie associative est utile pendant les études.", keywords:["association","vie","utile","études"]},
      {id:'etudes-EO10', prompt:"Quels conseils donnerais-tu à quelqu'un qui commence ses études supérieures ?", keywords:["conseils","organiser","travailler","réussir"]}
    ]
  },

  parole: {
    CE: [
      {id:'parole-CE1', passage:"Avant de monter sur scène, l'orateur répète son discours plusieurs fois pour gagner en assurance.", question:"Pourquoi l'orateur répète-t-il son discours ?", options:["Pour le mémoriser par cœur","Pour gagner en assurance","Pour le raccourcir","Pour impressionner le public"], answer:1},
      {id:'parole-CE2', passage:"Un bon orateur regarde son public, varie le ton de sa voix et fait des pauses pour capter l'attention.", question:"Que fait un bon orateur pour capter l'attention ?", options:["Il parle très vite","Il varie le ton et fait des pauses","Il lit son texte sans lever les yeux","Il chuchote"], answer:1},
      {id:'parole-CE3', passage:"Avant un débat, les participants préparent des arguments et des contre-arguments.", question:"Que préparent les participants avant un débat ?", options:["Des costumes","Des arguments et des contre-arguments","Des chansons","Des dessins"], answer:1},
      {id:'parole-CE4', passage:"Un exposé réussi commence par une introduction claire et se termine par une conclusion forte.", question:"Par quoi commence un exposé réussi ?", options:["Une blague","Une introduction claire","Un long silence","Une question du public"], answer:1},
      {id:'parole-CE5', passage:"Pendant son discours, Nora a fait une pause de plusieurs secondes pour créer du suspense.", question:"Pourquoi Nora a-t-elle fait une pause ?", options:["Elle avait oublié son texte","Pour créer du suspense","Elle était fatiguée","Pour boire de l'eau"], answer:1},
      {id:'parole-CE6', passage:"Le professeur conseille aux élèves de respirer profondément avant de prendre la parole.", question:"Que conseille le professeur ?", options:["De parler très vite","De respirer profondément","De ne rien dire","De lire un livre"], answer:1},
      {id:'parole-CE7', passage:"Un bon orateur adapte son discours selon le public qu'il a en face de lui.", question:"Selon quoi l'orateur adapte-t-il son discours ?", options:["Selon l'heure","Selon le public","Selon la météo","Selon le lieu uniquement"], answer:1},
      {id:'parole-CE8', passage:"Raconter une anecdote personnelle permet de capter l'attention de l'auditoire dès le début.", question:"Que permet une anecdote personnelle ?", options:["D'ennuyer le public","De capter l'attention","De perdre du temps","De compliquer le discours"], answer:1},
      {id:'parole-CE9', passage:"Lors du concours d'éloquence, chaque candidat dispose de trois minutes pour convaincre le jury.", question:"Combien de temps chaque candidat a-t-il ?", options:["Une minute","Trois minutes","Dix minutes","Une heure"], answer:1},
      {id:'parole-CE10', passage:"Parler trop vite peut rendre un discours difficile à suivre pour le public.", question:"Que peut provoquer le fait de parler trop vite ?", options:["Un discours plus clair","Un discours difficile à suivre","Un public plus attentif","Rien de particulier"], answer:1}
    ],
    CO: [
      {id:'parole-CO1', script:"Le trac est une sensation normale avant de parler devant un groupe ; il disparaît souvent après les premières minutes.", question:"Que disparaît souvent après quelques minutes ?", options:["La voix","Le trac","Le micro","Le public"], answer:1},
      {id:'parole-CO2', script:"Pour convaincre son auditoire, il faut structurer son discours en une introduction, un développement et une conclusion.", question:"Combien de parties structurent le discours mentionné ?", options:["Deux","Trois","Quatre","Cinq"], answer:1},
      {id:'parole-CO3', script:"Regarder son public dans les yeux renforce la conviction du message.", question:"Que renforce le contact visuel ?", options:["Le trac","La conviction du message","La fatigue","Le silence"], answer:1},
      {id:'parole-CO4', script:"Un silence bien placé peut être plus puissant qu'un long discours.", question:"Que peut être plus puissant qu'un long discours ?", options:["Un silence bien placé","Un cri","Une chanson","Un applaudissement"], answer:0},
      {id:'parole-CO5', script:"Répéter son discours à voix haute aide à mémoriser les idées principales.", question:"Que permet de répéter son discours à voix haute ?", options:["D'oublier ses idées","De mémoriser les idées principales","De parler plus vite","De perdre du temps"], answer:1},
      {id:'parole-CO6', script:"Le débit de parole ne doit être ni trop rapide ni trop lent.", question:"Comment doit être le débit de parole ?", options:["Très rapide","Très lent","Ni trop rapide ni trop lent","Silencieux"], answer:2},
      {id:'parole-CO7', script:"Utiliser ses mains avec mesure peut renforcer un discours.", question:"Que peut renforcer l'usage mesuré des mains ?", options:["Le discours","Le trac","Le silence","La fatigue"], answer:0},
      {id:'parole-CO8', script:"Poser une question au public est une bonne façon de commencer un exposé.", question:"Comment bien commencer un exposé, selon cette phrase ?", options:["En restant silencieux","En posant une question au public","En lisant un livre","En chantant"], answer:1},
      {id:'parole-CO9', script:"L'improvisation demande de l'entraînement, même si elle semble naturelle.", question:"Que demande l'improvisation ?", options:["Aucun effort","De l'entraînement","Un texte écrit","Rien de spécial"], answer:1},
      {id:'parole-CO10', script:"Un ton monocorde peut endormir même le sujet le plus intéressant.", question:"Que peut provoquer un ton monocorde ?", options:["Réveiller le public","Endormir le public","Faire rire","Faire pleurer"], answer:1}
    ],
    GR: [
      {id:'parole-GR1', prompt:"Il faut que tu ___ plus fort pour être entendu.", options:["parles","parle","parler","parlais"], answer:0},
      {id:'parole-GR2', prompt:"Plus tu t'entraînes, plus tu ___ à l'aise à l'oral.", options:["es","seras","étais","sois"], answer:1},
      {id:'parole-GR3', prompt:"Quand elle ___ à parler, tout le monde s'est tu.", options:["commence à","a commencé à","commençait à","commencera à"], answer:1},
      {id:'parole-GR4', prompt:"Si vous ___ plus lentement, on vous comprendrait mieux.", options:["parlez","parliez","avez parlé","parlerez"], answer:1},
      {id:'parole-GR5', prompt:"Pendant qu'il ___, le public l'écoutait attentivement.", options:["parle","parlait","a parlé","parlera"], answer:1},
      {id:'parole-GR6', prompt:"Après avoir ___ son discours, elle a répondu aux questions.", options:["terminer","terminant","terminé","termine"], answer:2},
      {id:'parole-GR7', prompt:"Il est important que vous ___ confiance en vous.", options:["avez","ayez","aviez","aurez"], answer:1},
      {id:'parole-GR8', prompt:"Elle ___ son discours par cœur avant l'examen.", options:["apprend","a appris","avait appris","apprendra"], answer:2},
      {id:'parole-GR9', prompt:"Nous ___ nos arguments avant le débat de demain.", options:["préparons","préparions","avons préparé","préparerons"], answer:3},
      {id:'parole-GR10', prompt:"Plus on s'exerce à l'oral, mieux on ___.", options:["parle","parlait","parlera","parlerait"], answer:0}
    ],
    EE: [
      {id:'parole-EE1', prompt:"Quel mot désigne la peur de parler en public ?", options:["Le trac","L'ennui","La fierté","La joie"], answer:0},
      {id:'parole-EE2', prompt:"Quel est le sens du mot « auditoire » ?", options:["Le lieu du discours","Le public qui écoute","Le micro utilisé","Le texte du discours"], answer:1},
      {id:'parole-EE3', prompt:"Que signifie « le débit » quand on parle d'un discours ?", options:["Le sujet du discours","La vitesse à laquelle on parle","La longueur du texte","Le volume de la voix"], answer:1},
      {id:'parole-EE4', prompt:"Que signifie « improviser » un discours ?", options:["Le lire à voix haute","Parler sans préparation","L'apprendre par cœur","Le chanter"], answer:1},
      {id:'parole-EE5', prompt:"Que signifie « captiver » un public ?", options:["L'ennuyer","Retenir totalement son attention","Le faire partir","Le fatiguer"], answer:1},
      {id:'parole-EE6', prompt:"Que signifie « argumenter » ?", options:["Donner des raisons pour convaincre","Chanter une chanson","Se taire","Lire un poème"], answer:0},
      {id:'parole-EE7', prompt:"Quel mot désigne une plateforme surélevée pour un orateur ?", options:["Une estrade","Une chaise","Un couloir","Un bureau"], answer:0},
      {id:'parole-EE8', prompt:"Que signifie « l'intonation » de la voix ?", options:["Le sujet du discours","La variation de la voix en parlant","Le silence entre les mots","La longueur des phrases"], answer:1},
      {id:'parole-EE9', prompt:"Que signifie un ton « monocorde » ?", options:["Un ton qui varie beaucoup","Un ton qui ne varie jamais","Un ton très fort","Un ton chanté"], answer:1},
      {id:'parole-EE10', prompt:"Quel mot désigne un discours pour défendre une cause ?", options:["Un plaidoyer","Un poème","Une chanson","Un résumé"], answer:0}
    ],
    EO: [
      {id:'parole-EO1', prompt:"Présente en une minute un sujet qui te passionne, comme si tu parlais devant un public.", keywords:["passionne","parce","exemple","donc"]},
      {id:'parole-EO2', prompt:"Explique une technique que tu utiliserais pour vaincre le trac avant de parler en public.", keywords:["trac","technique","respirer","calme"]},
      {id:'parole-EO3', prompt:"Raconte une anecdote personnelle en trois phrases, comme pour commencer un discours.", keywords:["un jour","raconte","histoire"]},
      {id:'parole-EO4', prompt:"Décris ce que tu ferais pour capter l'attention d'un public au début d'une présentation.", keywords:["attention","public","commencer","question"]},
      {id:'parole-EO5', prompt:"Explique pourquoi le contact visuel est important quand on parle en public.", keywords:["regard","yeux","public","important"]},
      {id:'parole-EO6', prompt:"Donne ton avis : est-il plus difficile d'improviser ou de lire un texte préparé ?", keywords:["improviser","préparé","difficile","avis"]},
      {id:'parole-EO7', prompt:"Décris une personne que tu trouves particulièrement éloquente et explique pourquoi.", keywords:["éloquente","personne","parce","parle"]},
      {id:'parole-EO8', prompt:"Explique comment tu structurerais un exposé de trois minutes sur un sujet de ton choix.", keywords:["introduction","conclusion","structure","exposé"]},
      {id:'parole-EO9', prompt:"Que dirais-tu pour convaincre quelqu'un d'apprendre le français ?", keywords:["convaincre","français","apprendre","parce"]},
      {id:'parole-EO10', prompt:"Explique ce que signifie « bien s'exprimer » selon toi.", keywords:["exprimer","clair","parler","idées"]}
    ]
  },

  entretien: {
    CE: [
      {id:'entretien-CE1', passage:"Avant l'entretien, Lina a préparé des réponses aux questions les plus fréquentes et relu l'annonce du poste.", question:"Qu'a fait Lina avant l'entretien ?", options:["Elle a annulé le rendez-vous","Elle a préparé ses réponses","Elle a envoyé un nouveau CV","Elle a changé de métier"], answer:1},
      {id:'entretien-CE2', passage:"Le recruteur commence toujours l'entretien en demandant au candidat de se présenter en quelques mots.", question:"Par quoi commence généralement l'entretien ?", options:["Par un test écrit","Par la présentation du candidat","Par la signature du contrat","Par une pause café"], answer:1},
      {id:'entretien-CE3', passage:"Pour son entretien, Omar a choisi une tenue simple et soignée.", question:"Comment était la tenue d'Omar ?", options:["Décontractée et sale","Simple et soignée","Extravagante","Trop formelle"], answer:1},
      {id:'entretien-CE4', passage:"Le recruteur a demandé à la candidate de décrire un échec et ce qu'elle en a appris.", question:"Qu'a demandé le recruteur ?", options:["De décrire un succès","De décrire un échec et ce qu'elle en a appris","De chanter une chanson","De parler de ses loisirs"], answer:1},
      {id:'entretien-CE5', passage:"Après l'entretien, il est conseillé d'envoyer un message de remerciement au recruteur.", question:"Que conseille-t-on de faire après l'entretien ?", options:["Ne rien faire","Envoyer un message de remerciement","Appeler tous les jours","Envoyer un cadeau"], answer:1},
      {id:'entretien-CE6', passage:"Le candidat est arrivé dix minutes en avance pour ne pas être en retard.", question:"Pourquoi le candidat est-il arrivé en avance ?", options:["Pour éviter la circulation","Pour ne pas être en retard","Par erreur","Pour rencontrer un ami"], answer:1},
      {id:'entretien-CE7', passage:"Le recruteur a expliqué les missions du poste avant de poser ses questions.", question:"Qu'a expliqué le recruteur en premier ?", options:["Le salaire","Les missions du poste","Les vacances","Les horaires uniquement"], answer:1},
      {id:'entretien-CE8', passage:"Certaines entreprises organisent d'abord un entretien téléphonique avant de rencontrer le candidat.", question:"Que font certaines entreprises avant de rencontrer le candidat ?", options:["Un test médical","Un entretien téléphonique","Un voyage","Rien du tout"], answer:1},
      {id:'entretien-CE9', passage:"À la fin de l'entretien, le candidat a posé des questions sur l'équipe et les horaires.", question:"Sur quoi le candidat a-t-il posé des questions ?", options:["La météo","L'équipe et les horaires","Le trajet","La cantine"], answer:1},
      {id:'entretien-CE10', passage:"Après la période d'essai, le contrat du nouvel employé a été confirmé.", question:"Qu'est-ce qui a été confirmé après la période d'essai ?", options:["Le salaire uniquement","Le contrat","Les vacances","Rien"], answer:1}
    ],
    CO: [
      {id:'entretien-CO1', script:"Le recruteur pose une question sur les points forts et les points faibles du candidat.", question:"Sur quoi porte la question du recruteur ?", options:["Le salaire souhaité","Les points forts et faibles","Les horaires de travail","Le lieu de naissance"], answer:1},
      {id:'entretien-CO2', script:"À la fin de l'entretien, le candidat remercie le recruteur pour le temps accordé.", question:"Que fait le candidat à la fin de l'entretien ?", options:["Il part sans un mot","Il remercie le recruteur","Il pose sa candidature ailleurs","Il négocie son salaire"], answer:1},
      {id:'entretien-CO3', script:"Le recruteur vérifie si les compétences du candidat correspondent au poste.", question:"Que vérifie le recruteur ?", options:["L'âge du candidat","Si les compétences correspondent au poste","La taille du candidat","Son lieu d'habitation"], answer:1},
      {id:'entretien-CO4', script:"Il est conseillé de préparer trois questions à poser au recruteur.", question:"Combien de questions est-il conseillé de préparer ?", options:["Une","Deux","Trois","Dix"], answer:2},
      {id:'entretien-CO5', script:"Une poignée de main ferme donne une bonne première impression.", question:"Que donne une poignée de main ferme ?", options:["Une mauvaise impression","Une bonne première impression","Rien de particulier","De la fatigue"], answer:1},
      {id:'entretien-CO6', script:"Le candidat doit expliquer pourquoi il souhaite rejoindre cette entreprise en particulier.", question:"Que doit expliquer le candidat ?", options:["Son adresse","Pourquoi il souhaite rejoindre cette entreprise","Sa recette préférée","Son horoscope"], answer:1},
      {id:'entretien-CO7', script:"La lettre de motivation doit être adaptée à chaque poste, jamais identique.", question:"Comment doit être la lettre de motivation ?", options:["Toujours identique","Adaptée à chaque poste","Très courte","Facultative"], answer:1},
      {id:'entretien-CO8', script:"Le recruteur informera le candidat de sa décision sous une semaine.", question:"Sous combien de temps le candidat sera-t-il informé ?", options:["Un jour","Une semaine","Un mois","Un an"], answer:1},
      {id:'entretien-CO9', script:"Rester calme face à une question difficile est essentiel en entretien.", question:"Qu'est-il essentiel de faire face à une question difficile ?", options:["Rester calme","Partir","Pleurer","Changer de sujet"], answer:0},
      {id:'entretien-CO10', script:"Le salaire est souvent discuté vers la fin de l'entretien.", question:"Quand le salaire est-il souvent discuté ?", options:["Au tout début","Vers la fin de l'entretien","Jamais","Avant l'entretien"], answer:1}
    ],
    GR: [
      {id:'entretien-GR1', prompt:"Lors de l'entretien, présentez-vous en ___ quelques phrases claires.", options:["utilisant","utilise","utiliser","utilisé"], answer:0},
      {id:'entretien-GR2', prompt:"Si vous ___ ponctuel, vous ferez bonne impression.", options:["êtes","soyez","étiez","seriez"], answer:0},
      {id:'entretien-GR3', prompt:"Le recruteur m'a demandé si je ___ disponible immédiatement.", options:["suis","étais","serai","sois"], answer:1},
      {id:'entretien-GR4', prompt:"Quand vous ___ l'annonce du poste, envoyez votre CV rapidement.", options:["voyez","verrez","avez vu","voyiez"], answer:1},
      {id:'entretien-GR5', prompt:"Elle ___ son CV avant de l'envoyer.", options:["relit","a relu","relisait","relira"], answer:1},
      {id:'entretien-GR6', prompt:"Il est essentiel que tu ___ confiance en toi pendant l'entretien.", options:["as","aies","avais","auras"], answer:1},
      {id:'entretien-GR7', prompt:"Nous ___ la convocation hier matin.", options:["recevons","recevions","avons reçue","recevrons"], answer:2},
      {id:'entretien-GR8', prompt:"Si j'obtiens ce poste, je ___ très motivé.", options:["suis","étais","serai","serais"], answer:2},
      {id:'entretien-GR9', prompt:"Après avoir ___ toutes les questions, le recruteur a remercié le candidat.", options:["poser","posant","posé","pose"], answer:2},
      {id:'entretien-GR10', prompt:"Le candidat espère qu'on lui ___ une réponse rapidement.", options:["donne","donnera","a donné","donnait"], answer:1}
    ],
    EE: [
      {id:'entretien-EE1', prompt:"Quel document résume le parcours professionnel d'un candidat ?", options:["La lettre de motivation","Le CV","Le contrat","La convocation"], answer:1},
      {id:'entretien-EE2', prompt:"Quel est le sens du mot « recruteur » ?", options:["La personne qui postule","La personne qui embauche","Le collègue de travail","Le client de l'entreprise"], answer:1},
      {id:'entretien-EE3', prompt:"Que signifie le mot « candidat » ?", options:["Personne qui embauche","Personne qui postule à un emploi","Personne déjà employée","Client de l'entreprise"], answer:1},
      {id:'entretien-EE4', prompt:"Que signifie une « compétence » ?", options:["Un diplôme","Une capacité à réaliser une tâche","Un salaire","Un horaire"], answer:1},
      {id:'entretien-EE5', prompt:"Que signifie « l'embauche » ?", options:["Le fait de licencier quelqu'un","Le fait d'engager un employé","Une pause déjeuner","Un jour férié"], answer:1},
      {id:'entretien-EE6', prompt:"Que désigne la « période d'essai » ?", options:["Les vacances d'été","La durée pour évaluer un nouvel employé","Le salaire annuel","Le trajet domicile-travail"], answer:1},
      {id:'entretien-EE7', prompt:"Que signifie « la motivation » dans un entretien ?", options:["La raison qui pousse à agir","Le salaire proposé","Le lieu de travail","La date d'entretien"], answer:0},
      {id:'entretien-EE8', prompt:"Que signifie « la ponctualité » ?", options:["La qualité d'arriver à l'heure","La qualité d'être poli","La qualité d'être créatif","La qualité d'être calme"], answer:0},
      {id:'entretien-EE9', prompt:"Que désigne « un poste » dans une entreprise ?", options:["Un emploi proposé","Un bureau","Un salaire","Un diplôme"], answer:0},
      {id:'entretien-EE10', prompt:"Que désigne « un entretien » d'embauche ?", options:["Une rencontre pour évaluer un candidat","Un examen écrit","Une formation","Un contrat signé"], answer:0}
    ],
    EO: [
      {id:'entretien-EO1', prompt:"Présente-toi comme si tu passais un entretien d'embauche : nom, qualités, motivation.", keywords:["nom","qualités","motivation","je"]},
      {id:'entretien-EO2', prompt:"Explique quelles sont, selon toi, tes trois plus grandes qualités professionnelles.", keywords:["qualités","je suis","exemple"]},
      {id:'entretien-EO3', prompt:"Décris un de tes défauts et explique comment tu essaies de l'améliorer.", keywords:["défaut","améliorer","essaie"]},
      {id:'entretien-EO4', prompt:"Explique pourquoi tu voudrais travailler dans le domaine de ton choix.", keywords:["travailler","domaine","parce","métier"]},
      {id:'entretien-EO5', prompt:"Raconte une expérience où tu as dû faire preuve de motivation.", keywords:["expérience","motivation","exemple"]},
      {id:'entretien-EO6', prompt:"Que répondrais-tu si on te demandait « Pourquoi devrions-nous vous embaucher ? »", keywords:["embaucher","parce","qualités","motivé"]},
      {id:'entretien-EO7', prompt:"Décris ta tenue idéale pour un entretien d'embauche et explique pourquoi.", keywords:["tenue","vêtements","entretien","soigné"]},
      {id:'entretien-EO8', prompt:"Explique comment tu te prépares avant un entretien important.", keywords:["prépare","recherche","entreprise","réponses"]},
      {id:'entretien-EO9', prompt:"Quelles questions poserais-tu à un recruteur à la fin d'un entretien ?", keywords:["questions","poste","équipe","horaires"]},
      {id:'entretien-EO10', prompt:"Décris ton projet professionnel pour les cinq prochaines années.", keywords:["projet","professionnel","avenir","métier"]}
    ]
  },

  eloquence: {
    CE: [
      {id:'eloquence-CE1', passage:"L'orateur a utilisé une métaphore filée tout au long de son discours pour rendre son propos plus vivant.", question:"Quelle figure de style l'orateur a-t-il utilisée ?", options:["Une métaphore filée","Une liste de chiffres","Un silence total","Une chanson"], answer:0},
      {id:'eloquence-CE2', passage:"La répétition d'un mot en début de phrase, comme « Je me souviens... Je me souviens... », s'appelle une anaphore.", question:"Comment appelle-t-on cette figure de style ?", options:["Une anaphore","Une comparaison","Une antithèse","Une hyperbole"], answer:0},
      {id:'eloquence-CE3', passage:"Dans « Cette nouvelle est un coup de tonnerre », l'auteur compare une nouvelle à un coup de tonnerre sans outil de comparaison.", question:"Comment appelle-t-on cette figure de style ?", options:["Une métaphore","Une énumération","Une interjection","Une antithèse"], answer:0},
      {id:'eloquence-CE4', passage:"« Il pleuvait des cordes » est une expression qui exagère l'intensité de la pluie.", question:"Quelle figure de style exagère volontairement ?", options:["L'hyperbole","L'anaphore","La préposition","Le pronom"], answer:0},
      {id:'eloquence-CE5', passage:"Une question posée sans attendre de réponse, pour convaincre, s'appelle une question rhétorique.", question:"Comment appelle-t-on une question sans réponse attendue ?", options:["Une question fermée","Une question rhétorique","Une question directe","Une question piège"], answer:1},
      {id:'eloquence-CE6', passage:"« Grand » et « petit » sont deux mots de sens opposé utilisés dans une antithèse.", question:"Que fait une antithèse ?", options:["Elle répète un mot","Elle oppose deux mots de sens contraire","Elle compare deux objets","Elle raconte une histoire"], answer:1},
      {id:'eloquence-CE7', passage:"L'ironie consiste à dire le contraire de ce que l'on pense, souvent avec humour.", question:"Que fait l'ironie ?", options:["Elle dit exactement ce que l'on pense","Elle dit le contraire de ce que l'on pense","Elle exagère un fait","Elle répète un mot"], answer:1},
      {id:'eloquence-CE8', passage:"Un discours qui monte progressivement en intensité utilise une gradation.", question:"Comment appelle-t-on une montée progressive d'intensité ?", options:["Une gradation","Une antithèse","Une ironie","Une interjection"], answer:0},
      {id:'eloquence-CE9', passage:"« Le silence était assourdissant » associe deux mots que l'on n'attend pas ensemble.", question:"Quelle figure de style associe deux mots contradictoires ?", options:["Un oxymore","Une comparaison","Une énumération","Une répétition"], answer:0},
      {id:'eloquence-CE10', passage:"Un bon orateur choisit ses mots avec précision pour toucher son public.", question:"Pourquoi un bon orateur choisit-il ses mots avec précision ?", options:["Pour perdre du temps","Pour toucher son public","Pour compliquer son discours","Par hasard"], answer:1}
    ],
    CO: [
      {id:'eloquence-CO1', script:"L'éloquence, c'est l'art de bien s'exprimer pour convaincre et émouvoir son auditoire.", question:"Que permet l'éloquence selon cette phrase ?", options:["De se taire","De convaincre et émouvoir","D'écrire vite","De mémoriser des chiffres"], answer:1},
      {id:'eloquence-CO2', script:"Une antithèse oppose deux idées contraires dans une même phrase pour créer un effet fort.", question:"Que fait une antithèse ?", options:["Elle répète un mot","Elle oppose deux idées contraires","Elle compare deux objets","Elle raconte une histoire"], answer:1},
      {id:'eloquence-CO3', script:"La répétition d'un son au début de plusieurs mots s'appelle une allitération.", question:"Comment appelle-t-on la répétition d'un son au début de plusieurs mots ?", options:["Une allitération","Une antithèse","Une hyperbole","Une ironie"], answer:0},
      {id:'eloquence-CO4', script:"Un paradoxe est une idée qui semble contradictoire mais qui contient une part de vérité.", question:"Que contient un paradoxe ?", options:["Aucune vérité","Une part de vérité","Seulement de l'humour","Rien du tout"], answer:1},
      {id:'eloquence-CO5', script:"La chute d'un discours est sa phrase finale, souvent la plus marquante.", question:"Qu'est-ce que la chute d'un discours ?", options:["Sa première phrase","Sa phrase finale marquante","Un silence","Une erreur"], answer:1},
      {id:'eloquence-CO6', script:"L'éloge est un discours qui fait l'admiration de quelqu'un ou de quelque chose.", question:"Que fait un éloge ?", options:["La critique de quelqu'un","L'admiration de quelqu'un","L'oubli de quelqu'un","La moquerie de quelqu'un"], answer:1},
      {id:'eloquence-CO7', script:"Le vocabulaire soutenu donne une impression de sérieux et d'élégance.", question:"Que donne le vocabulaire soutenu ?", options:["Une impression de sérieux","Une impression de désordre","Une impression de colère","Rien de particulier"], answer:0},
      {id:'eloquence-CO8', script:"Une comparaison utilise un mot comme « comme » pour rapprocher deux idées.", question:"Quel mot utilise souvent une comparaison ?", options:["Mais","Comme","Donc","Or"], answer:1},
      {id:'eloquence-CO9', script:"La persuasion cherche à convaincre en s'appuyant sur les émotions autant que sur la logique.", question:"Sur quoi s'appuie la persuasion ?", options:["Seulement la logique","Les émotions et la logique","Seulement les émotions","Le hasard"], answer:1},
      {id:'eloquence-CO10', script:"Un plaidoyer est un discours qui défend une cause avec conviction.", question:"Que défend un plaidoyer ?", options:["Une cause","Un objet","Une chanson","Un lieu"], answer:0}
    ],
    GR: [
      {id:'eloquence-GR1', prompt:"Cet orateur, dont le talent ___ reconnu, a remporté le concours.", options:["est","es","sont","était"], answer:0},
      {id:'eloquence-GR2', prompt:"Bien qu'il ___ timide, il a livré un discours mémorable.", options:["soit","est","était","sera"], answer:0},
      {id:'eloquence-GR3', prompt:"Ce discours, que tout le monde ___ encore, a marqué les esprits.", options:["retient","retienne","retenait","retiendra"], answer:0},
      {id:'eloquence-GR4', prompt:"Si elle ___ plus de métaphores, son discours serait plus vivant.", options:["utilise","utilisait","a utilisé","utilisera"], answer:1},
      {id:'eloquence-GR5', prompt:"L'orateur, ___ par une salle comble, n'a montré aucun signe de trac.", options:["impressionnant","impressionné","impressionne","impressionnera"], answer:1},
      {id:'eloquence-GR6', prompt:"Il faut que le discours ___ court et percutant.", options:["est","soit","était","sera"], answer:1},
      {id:'eloquence-GR7', prompt:"Plus le discours ___ de figures de style, plus il marque les esprits.", options:["contient","contienne","contenait","contiendra"], answer:0},
      {id:'eloquence-GR8', prompt:"Après ___ longuement préparé son discours, elle l'a livré avec assurance.", options:["avoir","ayant","avait","ait"], answer:0},
      {id:'eloquence-GR9', prompt:"C'est le discours le plus émouvant que je ___ jamais entendu.", options:["ai","aie","avais","aurai"], answer:1},
      {id:'eloquence-GR10', prompt:"Elle parle comme si elle ___ toujours été à l'aise à l'oral.", options:["a","avait","ait","aura"], answer:1}
    ],
    EE: [
      {id:'eloquence-EE1', prompt:"Quel mot désigne une comparaison sans outil de comparaison (« un cœur de pierre ») ?", options:["Une métaphore","Une énumération","Une question rhétorique","Une allitération"], answer:0},
      {id:'eloquence-EE2', prompt:"Quel est le sens du mot « rhétorique » ?", options:["L'art de bien parler et convaincre","Un type de poème","Une langue ancienne","Un instrument de musique"], answer:0},
      {id:'eloquence-EE3', prompt:"Que signifie une « hyperbole » ?", options:["Une exagération volontaire","Une répétition de mot","Une opposition d'idées","Un silence"], answer:0},
      {id:'eloquence-EE4', prompt:"Que signifie une « antithèse » ?", options:["Une opposition de deux idées","Une répétition d'un mot","Une comparaison","Un silence marqué"], answer:0},
      {id:'eloquence-EE5', prompt:"Que signifie une « anaphore » ?", options:["La répétition d'un mot en début de phrase","L'opposition de deux idées","Une exagération","Une question sans réponse"], answer:0},
      {id:'eloquence-EE6', prompt:"Que signifie « l'ironie » ?", options:["Dire le contraire de ce que l'on pense","Dire exactement ce que l'on pense","Répéter un mot","Poser une question"], answer:0},
      {id:'eloquence-EE7', prompt:"Que signifie « la persuasion » ?", options:["L'art de convaincre","L'art de se taire","L'art de chanter","L'art de dessiner"], answer:0},
      {id:'eloquence-EE8', prompt:"Que signifie « un éloge » ?", options:["Un discours élogieux envers quelqu'un","Une critique sévère","Un silence total","Une question piège"], answer:0},
      {id:'eloquence-EE9', prompt:"Que signifie « un paradoxe » ?", options:["Une idée qui semble contradictoire","Une exagération volontaire","Une répétition de mot","Un discours court"], answer:0},
      {id:'eloquence-EE10', prompt:"Que signifie « une gradation » ?", options:["Une suite de mots dont l'intensité augmente","Une opposition de deux mots","Une répétition d'un son","Une question sans réponse"], answer:0}
    ],
    EO: [
      {id:'eloquence-EO1', prompt:"Improvise deux phrases en utilisant une métaphore pour décrire une émotion.", keywords:["comme","métaphore","émotion"]},
      {id:'eloquence-EO2', prompt:"Explique ce que signifie « être éloquent » avec tes propres mots.", keywords:["éloquent","convaincre","parler"]},
      {id:'eloquence-EO3', prompt:"Utilise une hyperbole pour décrire à quel point tu étais fatigué un jour.", keywords:["fatigué","tellement","hyperbole"]},
      {id:'eloquence-EO4', prompt:"Prononce une courte phrase d'éloge pour quelqu'un que tu admires.", keywords:["admire","éloge","qualités"]},
      {id:'eloquence-EO5', prompt:"Explique la différence entre une métaphore et une comparaison, avec un exemple.", keywords:["métaphore","comparaison","comme","exemple"]},
      {id:'eloquence-EO6', prompt:"Invente une phrase utilisant une anaphore (répétition en début de phrase).", keywords:["répétition","anaphore","phrase"]},
      {id:'eloquence-EO7', prompt:"Donne un exemple de question rhétorique que tu pourrais utiliser dans un discours.", keywords:["question","rhétorique","exemple"]},
      {id:'eloquence-EO8', prompt:"Explique pourquoi le choix des mots est important pour convaincre quelqu'un.", keywords:["mots","choix","convaincre","important"]},
      {id:'eloquence-EO9', prompt:"Décris ce qui rend, selon toi, un discours mémorable.", keywords:["discours","mémorable","parce"]},
      {id:'eloquence-EO10', prompt:"Termine cette phrase avec une chute percutante : « Ce jour-là, j'ai compris que... »", keywords:["ce jour-là","compris","que"]}
    ]
  },

  motsnature: {
    CE: [
      {id:'motsnature-CE1', passage:"Dans la phrase « Le petit chat dort. », le mot « petit » précise le nom « chat ».", question:"Quelle est la nature du mot « petit » dans cette phrase ?", options:["Un nom","Un adjectif","Un verbe","Un adverbe"], answer:1},
      {id:'motsnature-CE2', passage:"Dans la phrase « Elle mange rapidement. », le mot « rapidement » modifie le verbe « mange ».", question:"Quelle est la nature du mot « rapidement » ?", options:["Un adjectif","Un adverbe","Un nom","Une préposition"], answer:1},
      {id:'motsnature-CE3', passage:"Dans la phrase « Le professeur explique la leçon. », le mot « leçon » est le complément d'objet direct du verbe.", question:"Quelle est la fonction du mot « leçon » ?", options:["Sujet","Complément d'objet direct","Attribut du sujet","Complément du nom"], answer:1},
      {id:'motsnature-CE4', passage:"Dans « Ils jouent dans le jardin. », le mot « dans » est une préposition qui introduit un complément de lieu.", question:"Quelle est la nature du mot « dans » ?", options:["Un adverbe","Une préposition","Un pronom","Une conjonction"], answer:1},
      {id:'motsnature-CE5', passage:"Dans « Marie et Paul arrivent. », le mot « et » relie deux noms : c'est une conjonction de coordination.", question:"Quelle est la nature du mot « et » ?", options:["Un adverbe","Une conjonction de coordination","Un pronom","Une préposition"], answer:1},
      {id:'motsnature-CE6', passage:"Dans « Elle lui parle. », le pronom « lui » remplace un complément d'objet indirect.", question:"Quelle est la fonction du pronom « lui » ?", options:["Sujet","Complément d'objet direct","Complément d'objet indirect","Attribut"], answer:2},
      {id:'motsnature-CE7', passage:"Dans « Le grand arbre du jardin est magnifique. », « du jardin » est un complément du nom « arbre ».", question:"Quelle est la fonction de « du jardin » ?", options:["Sujet","Complément du nom","Attribut du sujet","COD"], answer:1},
      {id:'motsnature-CE8', passage:"Dans « Ouf ! J'ai réussi. », le mot « Ouf » exprime une émotion soudaine : c'est une interjection.", question:"Quelle est la nature du mot « Ouf » ?", options:["Un adverbe","Une interjection","Un nom","Un verbe"], answer:1},
      {id:'motsnature-CE9', passage:"Dans « Ce livre, je l'ai déjà lu. », le mot « Ce » est un déterminant démonstratif devant le nom « livre ».", question:"Quelle est la nature du mot « Ce » ?", options:["Un pronom personnel","Un déterminant démonstratif","Un adjectif qualificatif","Une préposition"], answer:1},
      {id:'motsnature-CE10', passage:"Dans « Il travaille pour réussir. », le groupe « pour réussir » indique le but de l'action : c'est un complément circonstanciel de but.", question:"Quelle est la fonction de « pour réussir » ?", options:["Sujet","Attribut du sujet","Complément circonstanciel de but","COD"], answer:2}
    ],
    CO: [
      {id:'motsnature-CO1', script:"Le nom est un mot qui désigne une personne, un animal, une chose ou une idée.", question:"Que désigne un nom ?", options:["Une action seulement","Une personne, un animal, une chose ou une idée","Un lieu uniquement","Un sentiment uniquement"], answer:1},
      {id:'motsnature-CO2', script:"Dans la phrase « Le chat mange la souris. », « la souris » est le complément d'objet direct du verbe.", question:"Quelle est la fonction de « la souris » ?", options:["Sujet","Complément d'objet direct","Attribut du sujet","Complément circonstanciel"], answer:1},
      {id:'motsnature-CO3', script:"Le verbe est le mot qui exprime une action ou un état dans la phrase.", question:"Qu'exprime le verbe ?", options:["Une couleur","Une action ou un état","Un lieu","Un nombre"], answer:1},
      {id:'motsnature-CO4', script:"L'adjectif qualificatif donne une caractéristique au nom qu'il accompagne.", question:"Que donne l'adjectif qualificatif ?", options:["Une action","Une caractéristique au nom","Un lieu","Un temps"], answer:1},
      {id:'motsnature-CO5', script:"Le sujet est celui qui fait l'action exprimée par le verbe.", question:"Que fait le sujet dans une phrase ?", options:["Il subit l'action","Il fait l'action exprimée par le verbe","Il ne sert à rien","Il remplace le verbe"], answer:1},
      {id:'motsnature-CO6', script:"L'attribut du sujet donne une information sur le sujet, après un verbe d'état comme « être ».", question:"Après quel type de verbe trouve-t-on l'attribut du sujet ?", options:["Un verbe d'action","Un verbe d'état","Un verbe pronominal","Aucun verbe"], answer:1},
      {id:'motsnature-CO7', script:"La préposition introduit un groupe de mots et n'a pas de sens seule.", question:"Qu'introduit la préposition ?", options:["Un groupe de mots","Une phrase entière","Rien du tout","Un verbe uniquement"], answer:0},
      {id:'motsnature-CO8', script:"L'adverbe modifie le sens d'un verbe, d'un adjectif ou d'un autre adverbe.", question:"Que modifie l'adverbe ?", options:["Un nom uniquement","Un verbe, un adjectif ou un autre adverbe","Une préposition","Un déterminant"], answer:1},
      {id:'motsnature-CO9', script:"Le complément circonstanciel donne des précisions sur le lieu, le temps ou la manière.", question:"Sur quoi donne des précisions le complément circonstanciel ?", options:["Le lieu, le temps ou la manière","Uniquement le lieu","Uniquement le temps","Rien de précis"], answer:0},
      {id:'motsnature-CO10', script:"Le pronom remplace un nom pour éviter de le répéter.", question:"Pourquoi utilise-t-on un pronom ?", options:["Pour compliquer la phrase","Pour éviter de répéter un nom","Pour remplacer un verbe","Pour allonger la phrase"], answer:1}
    ],
    GR: [
      {id:'motsnature-GR1', prompt:"Dans « Le chat mange la souris. », quelle est la fonction du mot « chat » ?", options:["Sujet","COD","COI","Attribut"], answer:0},
      {id:'motsnature-GR2', prompt:"Dans « Elle est fatiguée. », quelle est la fonction du mot « fatiguée » ?", options:["COD","Attribut du sujet","Complément circonstanciel","Épithète"], answer:1},
      {id:'motsnature-GR3', prompt:"Dans « Le professeur parle aux élèves. », quelle est la fonction de « aux élèves » ?", options:["Sujet","COD","COI","Attribut"], answer:2},
      {id:'motsnature-GR4', prompt:"Dans « Elle chante une belle chanson. », quelle est la nature du mot « belle » ?", options:["Nom","Adjectif","Verbe","Adverbe"], answer:1},
      {id:'motsnature-GR5', prompt:"Dans « Il part demain. », quelle est la fonction du mot « demain » ?", options:["Sujet","COD","Complément circonstanciel de temps","Attribut"], answer:2},
      {id:'motsnature-GR6', prompt:"Dans « Le chien de mon voisin aboie. », quelle est la fonction de « de mon voisin » ?", options:["Sujet","COD","Complément du nom","COI"], answer:2},
      {id:'motsnature-GR7', prompt:"Dans « Nous mangeons rapidement. », quelle est la nature du mot « rapidement » ?", options:["Adjectif","Adverbe","Nom","Préposition"], answer:1},
      {id:'motsnature-GR8', prompt:"Dans « Paul semble content. », quelle est la fonction du mot « content » ?", options:["COD","Attribut du sujet","Sujet","COI"], answer:1},
      {id:'motsnature-GR9', prompt:"Dans « Les enfants jouent dans la cour. », quelle est la nature du mot « dans » ?", options:["Adverbe","Préposition","Conjonction","Interjection"], answer:1},
      {id:'motsnature-GR10', prompt:"Dans « Elle et lui partent ensemble. », quelle est la nature du mot « et » ?", options:["Préposition","Conjonction de coordination","Pronom","Adverbe"], answer:1}
    ],
    EE: [
      {id:'motsnature-EE1', prompt:"Quelle est la nature du mot souligné : « Il court vite. » (court)", options:["Un nom","Un verbe","Un adjectif","Une préposition"], answer:1},
      {id:'motsnature-EE2', prompt:"Quelle est la nature du mot « et » dans « Paul et Marie » ?", options:["Une conjonction de coordination","Un adverbe","Un pronom","Un article"], answer:0},
      {id:'motsnature-EE3', prompt:"Quelle est la nature du mot « ce » dans « ce livre » ?", options:["Déterminant démonstratif","Pronom","Adjectif","Nom"], answer:0},
      {id:'motsnature-EE4', prompt:"Quelle est la nature du mot « lui » dans « Je lui parle » ?", options:["Nom","Pronom","Adverbe","Préposition"], answer:1},
      {id:'motsnature-EE5', prompt:"Quelle est la nature du mot « heureusement » ?", options:["Adjectif","Adverbe","Nom","Verbe"], answer:1},
      {id:'motsnature-EE6', prompt:"Quelle est la fonction du groupe souligné : « Il mange une pomme. » (une pomme)", options:["Sujet","COD","Attribut","COI"], answer:1},
      {id:'motsnature-EE7', prompt:"Quelle est la nature du mot « joli » dans « un joli chat » ?", options:["Nom","Adjectif","Verbe","Pronom"], answer:1},
      {id:'motsnature-EE8', prompt:"Quelle est la fonction de « à Paris » dans « Elle habite à Paris » ?", options:["COD","Complément circonstanciel de lieu","Attribut","Sujet"], answer:1},
      {id:'motsnature-EE9', prompt:"Quelle est la nature du mot « que » dans « Je pense que tu as raison » ?", options:["Pronom relatif","Conjonction de subordination","Adverbe","Préposition"], answer:1},
      {id:'motsnature-EE10', prompt:"Quelle est la fonction du mot souligné dans « Le ciel est bleu. » (bleu)", options:["COD","Attribut du sujet","Sujet","Épithète"], answer:1}
    ],
    EO: [
      {id:'motsnature-EO1', prompt:"Choisis un mot et explique oralement sa nature (nom, verbe, adjectif...) avec un exemple de phrase.", keywords:["nom","verbe","adjectif","exemple"]},
      {id:'motsnature-EO2', prompt:"Explique la différence entre la nature et la fonction d'un mot, avec un exemple.", keywords:["nature","fonction","exemple","phrase"]},
      {id:'motsnature-EO3', prompt:"Donne un exemple de phrase avec un adjectif, puis identifie-le à voix haute.", keywords:["adjectif","phrase","exemple"]},
      {id:'motsnature-EO4', prompt:"Explique ce qu'est un complément d'objet direct, avec un exemple.", keywords:["complément","objet","direct","exemple"]},
      {id:'motsnature-EO5', prompt:"Trouve une phrase avec un adverbe et explique ce qu'il modifie.", keywords:["adverbe","modifie","exemple"]},
      {id:'motsnature-EO6', prompt:"Explique la différence entre un pronom et un nom, avec des exemples.", keywords:["pronom","nom","différence","exemple"]},
      {id:'motsnature-EO7', prompt:"Donne un exemple de phrase contenant une préposition et explique son rôle.", keywords:["préposition","phrase","rôle"]},
      {id:'motsnature-EO8', prompt:"Explique ce qu'est le sujet d'une phrase, avec un exemple simple.", keywords:["sujet","phrase","exemple"]},
      {id:'motsnature-EO9', prompt:"Donne un exemple de phrase avec un complément circonstanciel de temps.", keywords:["complément","temps","exemple"]},
      {id:'motsnature-EO10', prompt:"Explique pourquoi il est utile de connaître la nature et la fonction des mots en français.", keywords:["utile","nature","fonction","grammaire"]}
    ]
  }
};
