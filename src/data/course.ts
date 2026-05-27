export type Lesson = {
  id: number
  title: string
  focus: string
  notes: string
}

export type Topic = {
  title: string
  details: string
}

export type Flashcard = {
  tag: string
  question: string
  answer: string
  options: string[]
}

export type FlashcardSet = {
  title: string
  description: string
  count: string
  status: 'Ready' | 'Coming soon'
}

export type Exercise = {
  id: string
  title: string
  goal: string
  prompt: string
  steps: string[]
  example: string[]
  expected: string[]
  answer: string[]
  mistakes: string[]
  quiz: ExerciseQuizQuestion[]
}

export type ExerciseQuizQuestion = {
  question: string
  options: string[]
  answer: string
}

export const courseName = 'Cloud Native with Docker, Kubernetes and Azure'

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Lektion 1',
    focus: 'Docker-grunder, images, containers och viktiga kommandon',
    notes:
      'Lektion 1 går igenom varför containers behövs och hur Docker löser problemet. Du lär dig skillnaden mellan image, container och Dockerfile. Vi går igenom det grundläggande flödet från build till run. Du får också lära dig viktiga kommandon, flaggor och registry-tänk. Avslutningsvis kopplas Docker ihop med Compose och Kubernetes.',
  },
  {
    id: 2,
    title: 'Lektion 2',
    focus: 'Kommer fyllas med nästa del av kursen',
    notes: 'Plats för teori, demo och praktiska begrepp.',
  },
  {
    id: 3,
    title: 'Lektion 3',
    focus: 'Kommer fyllas med nästa del av kursen',
    notes: 'Plats för teori, demo och praktiska begrepp.',
  },
  {
    id: 4,
    title: 'Lektion 4',
    focus: 'Kommer fyllas med nästa del av kursen',
    notes: 'Plats för teori, demo och praktiska begrepp.',
  },
  {
    id: 5,
    title: 'Lektion 5',
    focus: 'Kommer fyllas med nästa del av kursen',
    notes: 'Plats för teori, demo och praktiska begrepp.',
  },
  {
    id: 6,
    title: 'Lektion 6',
    focus: 'Kommer fyllas med nästa del av kursen',
    notes: 'Plats för teori, demo och praktiska begrepp.',
  },
]

export const lesson1Topics: Topic[] = [
  {
    title: 'Varför containers',
    details:
      'Traditionell drift ger beroenden, OS-konflikter, delade resurser och svår skalning. Containers löser detta genom isolering och portabilitet.',
  },
  {
    title: 'Docker-grunder',
    details:
      'Container är en körbar instans av en image. Image är ett snapshot av filsystemet. Dockerfile är receptet som bygger imagen.',
  },
  {
    title: 'Arbetsflöde',
    details:
      'Skapa Dockerfile, bygg image, tagga image, push till registry. Det här är den grundläggande rörelsen i Docker.',
  },
  {
    title: 'Containers i drift',
    details:
      'docker run startar, docker ps listar, docker stop och docker rm hanterar livscykeln. En container behöver en aktiv process för att leva.',
  },
  {
    title: 'Viktiga flaggor',
    details:
      '-it för interaktivt läge, -d för bakgrund, -e för miljövariabler, -v för volymer, -p för port mapping och --entrypoint för att byta startkommando.',
  },
  {
    title: 'Entrypoint och CMD',
    details:
      'Entrypoint körs alltid när containern startar. CMD fungerar som default-argument och kan override:as.',
  },
  {
    title: 'Layered images',
    details:
      'Images byggs i lager, vilket ger caching, snabbare builds och ofta mindre storlek.',
  },
  {
    title: 'Registry och pull',
    details:
      'Registry kan vara lokal, privat eller publik. docker pull hämtar en image till det lokala registret.',
  },
  {
    title: 'Docker Compose',
    details:
      'Compose används när en app består av flera delar, till exempel backend och databas, och startar dem tillsammans som en enhet.',
  },
  {
    title: 'Koppling till Kubernetes',
    details:
      'Docker används för att köra containrar, Kubernetes för att orkestrera och skala dem. Tänk docker run som närmast kubectl run i idé.',
  },
  {
    title: 'Praktiska verktyg',
    details:
      'Docker Desktop ger daemon, CLI och lokal registry. Mankier är bra för att läsa dokumentation och exempel, även för Kubernetes-kommandon.',
  },
]

export const lesson2Topics: Topic[] = [
  {
    title: 'Pusha images till repository',
    details:
      'Flödet är build, tag, login och push. Det gör att images kan delas mellan maskiner och miljöer.',
  },
  {
    title: 'Stateless containers och data',
    details:
      'Containers är stateless och tappar data när de startas om. Därför behöver vi volymer för beständig lagring.',
  },
  {
    title: 'Volymer och bind mounts',
    details:
      'En volume hanteras av Docker och är portabel. Bind mount pekar mot en katalog på hosten och är mer beroende av lokalmiljön.',
  },
  {
    title: 'Logs och felsökning',
    details:
      'docker logs är ett första steg när en container inte beter sig som väntat. Det hjälper dig att se vad processen faktiskt gör.',
  },
  {
    title: 'Security basics',
    details:
      'Docker kör ofta med root-liknande rättigheter, så felaktiga mounts och behörigheter kan bli en säkerhetsrisk.',
  },
  {
    title: 'Container till Kubernetes',
    details:
      'Lektion 2 börjar koppla Docker till Kubernetes-världen med pods, nodes, namespaces och deployment-tänk.',
  },
  {
    title: 'Pods och struktur',
    details:
      'Varje applikation bör ha eget namespace och kan bestå av flera pods. En pod kan också innehålla flera containers.',
  },
  {
    title: 'YAML som deklaration',
    details:
      'Objekt i Kubernetes beskriver önskat läge i YAML eller JSON, i stället för att bara köras som engångskommandon.',
  },
  {
    title: 'Deployments',
    details:
      'Deployments ser till att rätt antal repliker körs och gör det enklare att uppdatera image-versioner kontrollerat.',
  },
  {
    title: 'CLI och dokumentation',
    details:
      'Kubernetes använder kubectl och OpenShift använder oc, men mycket är likt. Officiell dokumentation är viktig för att hitta rätt flaggor.',
  },
]

export const lesson2Exercises: Exercise[] = [
  {
    id: 'push-image-repo',
    title: 'Pusha en image till registry',
    goal: 'Träna på att göra en image redo för delning.',
    prompt:
      'Bygg en image, tagga den med rätt registry-namn och förklara hela flödet från lokal image till pushad image.',
    steps: [
      'Bygg imagen lokalt och kontrollera att den finns med `docker images`.',
      'Tagga imagen med ett registry-format, till exempel `user/myapp:1.0`.',
      'Logga in i registry om det behövs.',
      'Kör `docker push` och kontrollera att uppladdningen lyckas.',
    ],
    example: [
      'Det viktiga är inte bara kommandot, utan ordningen: build -> tag -> login -> push.',
      'Om du använder Docker Hub behöver du nästan alltid ett användarnamn i taggen.',
    ],
    expected: [
      'Du ska förstå varför taggen ändras innan push.',
      'Du ska veta att push skickar imagen till ett fjärrregister, inte kör den lokalt.',
    ],
    answer: [
      'Facit: först skapar du en lokal image, sedan ger du den ett registry-kompatibelt namn och till sist pushar du den.',
      'Facit: push fungerar bara om du har rätt namn och behörighet i registry.',
    ],
    mistakes: [
      'Du försöker pusha en image utan registry-prefix när registry kräver det.',
      'Du tror att taggning bygger imagen igen.',
      'Du glömmer att logga in innan du pushar.',
    ],
    quiz: [
      {
        question: 'Vilken ordning är rätt för att pusha en image?',
        options: [
          'Build -> tag -> login -> push',
          'Push -> build -> tag -> login',
          'Login -> push -> build -> tag',
          'Tag -> push -> build -> login',
        ],
        answer: 'Build -> tag -> login -> push',
      },
      {
        question: 'Vad skickar `docker push` egentligen?',
        options: [
          'Imagen till ett registry',
          'Containern till Kubernetes',
          'Volymen till hosten',
          'Loggarna till terminalen',
        ],
        answer: 'Imagen till ett registry',
      },
    ],
  },
  {
    id: 'volume-vs-bindmount',
    title: 'Volym eller bind mount',
    goal: 'Lära dig välja rätt typ av lagring.',
    prompt:
      'Jämför en named volume och en bind mount. Förklara när du skulle använda vilken.',
    steps: [
      'Skapa en named volume med `docker volume create mydata`.',
      'Kör en container med `-v mydata:/data`.',
      'Testa även en bind mount med en lokal mapp, till exempel `-v $(pwd)/data:/data`.',
      'Jämför vad som känns lättast för utveckling respektive drift.',
    ],
    example: [
      'Named volumes är ofta bättre för databaser och data som ska vara portabelt.',
      'Bind mounts är ofta bra under utveckling när du vill redigera filer på hosten.',
    ],
    expected: [
      'Du ska kunna förklara att volymer hanteras av Docker medan bind mounts pekar på host-filer.',
      'Du ska förstå att bind mounts är mer beroende av den lokala datorn.',
    ],
    answer: [
      'Facit: named volume = Docker sköter lagringen.',
      'Facit: bind mount = du kopplar in en specifik mapp från hosten.',
      'För nybörjare är det viktigt att förstå att båda löser data-persistens, men på olika sätt.',
    ],
    mistakes: [
      'Du blandar ihop att volymen ligger i containern med att den ligger i Docker.',
      'Du använder bind mount i produktion utan att tänka på att den är starkt kopplad till hosten.',
      'Du tror att data i containern automatiskt sparas permanent.',
    ],
    quiz: [
      {
        question: 'Vad sköter Docker åt dig med en named volume?',
        options: [
          'Lagringen av data',
          'Byggandet av image',
          'Uppdatering av Kubernetes deployment',
          'Skapandet av Dockerfile',
        ],
        answer: 'Lagringen av data',
      },
      {
        question: 'Vad pekar en bind mount på?',
        options: ['En mapp på hosten', 'Ett registry', 'En pod', 'En image tagg'],
        answer: 'En mapp på hosten',
      },
    ],
  },
  {
    id: 'kubernetes-pod-yaml',
    title: 'Skapa en pod med YAML',
    goal: 'Förstå hur Kubernetes beskriver objekt deklarativt.',
    prompt:
      'Skriv en enkel YAML för en pod med `httpd` och förklara vilka delar som krävs för att den ska kunna skapas.',
    steps: [
      'Läs igenom pod-exemplet i powerpointen och identifiera `apiVersion`, `kind`, `metadata` och `spec`.',
      'Byt image om du vill testa något annat, men håll strukturen enkel först.',
      'Använd `kubectl apply -f fil.yaml` eller `kubectl create --dry-run=client -o yaml` för att testa.',
    ],
    example: [
      'I YAML beskriver du önskat läge, inte exakt vilka steg som ska köras.',
      'En pod är en av de enklaste Kubernetes-objekten att börja med.',
    ],
    expected: [
      'Du ska kunna förklara att YAML-filen beskriver ett objekt i Kubernetes.',
      'Du ska kunna peka ut var namn, image och container-konfiguration ligger.',
    ],
    answer: [
      'Facit: en pod-definition innehåller minst metadata och en spec som talar om vilka containers som ska köras.',
      'Facit: `kubectl apply` används när du vill låta Kubernetes skapa eller uppdatera objektet från YAML.',
    ],
    mistakes: [
      'Du tror att YAML är skriptkod. Det är i stället en deklaration av önskat läge.',
      'Du glömmer `kind: Pod` eller container-specen och får ett ofullständigt objekt.',
      'Du försöker skriva allt som flera imperativa kommandon i stället för ett objekt.',
    ],
    quiz: [
      {
        question: 'Vad beskriver en Kubernetes YAML-fil?',
        options: [
          'Det önskade läget för ett objekt',
          'Ett Docker image registry',
          'En lista över containers som redan körs',
          'En loggfil från en container',
        ],
        answer: 'Det önskade läget för ett objekt',
      },
      {
        question: 'Vilket fält talar om vilken typ av objekt du skapar?',
        options: ['kind', 'logs', 'build', 'runtime'],
        answer: 'kind',
      },
    ],
  },
  {
    id: 'deployment-replicas',
    title: 'Bygg en deployment med 3 repliker',
    goal: 'Förstå vad en deployment gör för dig.',
    prompt:
      'Wrapa en pod i en deployment som håller 3 repliker och förklara varför det är bättre än en ensam pod.',
    steps: [
      'Utgå från en fungerande pod-YAML.',
      'Byt `kind` till `Deployment` och lägg till `replicas: 3` i specen.',
      'Se till att labels och selector matchar.',
      'Ändra image-version med `kubectl set image` eller genom att uppdatera YAML-filen.',
    ],
    example: [
      'Deployment är rätt nivå när du vill att Kubernetes ska hålla ett visst antal poddar vid liv.',
      'Selector och labels måste matcha för att deployment ska veta vilka pods den äger.',
    ],
    expected: [
      'Du ska förstå att deployment gör återställning och replikhantering åt dig.',
      'Du ska kunna beskriva varför en deployment är bättre än att själv starta tre manuella pods.',
    ],
    answer: [
      'Facit: deployment ansvarar för desired state, till exempel att tre repliker alltid ska finnas.',
      'Facit: när en pod dör skapar deployment en ny så att antalet hålls uppe.',
      'Facit: image-uppdateringar görs kontrollerat via deployment, inte genom att manuellt jaga poddar.',
    ],
    mistakes: [
      'Du glömmer att labels och selector måste peka på samma saker.',
      'Du tror att deployment är samma sak som en pod.',
      'Du försöker skala manuellt i stället för att låta deployment göra jobbet.',
    ],
    quiz: [
      {
        question: 'Vad gör en deployment?',
        options: [
          'Håller rätt antal repliker vid liv',
          'Bygger images',
          'Skapar volumes',
          'Byter namn på pods',
        ],
        answer: 'Håller rätt antal repliker vid liv',
      },
      {
        question: 'Vad måste matcha för att en deployment ska hitta sina pods?',
        options: ['Labels och selector', 'Image och registry', 'Port och volume', 'Name och namespace'],
        answer: 'Labels och selector',
      },
    ],
  },
]

export const lesson1Flashcards: Flashcard[] = [
  {
    tag: 'Begrepp',
    question: 'Vad är skillnaden mellan en image och en container?',
    answer: 'En image är ett snapshot av filsystemet och en container är en körbar instans av den imagen.',
    options: [
      'En image är ett snapshot av filsystemet och en container är en körbar instans av den imagen.',
      'En image är alltid en databas och en container är alltid en server.',
      'En image är en aktiv process medan en container är den passiva kopian.',
      'En image används bara i Kubernetes och en container bara i Docker Compose.',
    ],
  },
  {
    tag: 'Begrepp',
    question: 'Vad är en Dockerfile?',
    answer: 'Ett recept med instruktioner för att bygga en image.',
    options: [
      'Ett recept med instruktioner för att bygga en image.',
      'En körbar container som startar automatiskt.',
      'Ett registry för att lagra images.',
      'En cache som bara används av Kubernetes.',
    ],
  },
  {
    tag: 'Problem',
    question: 'Vilket problem löser containers i traditionell drift?',
    answer:
      'De minskar konflikter kring OS, beroenden, resurser och gör applikationer portabla och isolerade.',
    options: [
      'De minskar konflikter kring OS, beroenden, resurser och gör applikationer portabla och isolerade.',
      'De gör att alla appar måste köras på samma operativsystem.',
      'De ersätter behovet av nätverk mellan tjänster.',
      'De gör att images alltid blir större än virtuella maskiner.',
    ],
  },
  {
    tag: 'Flöde',
    question: 'Vilken är den grundläggande Docker-rörelsen?',
    answer: 'Dockerfile -> build -> image -> run -> container.',
    options: [
      'Dockerfile -> build -> image -> run -> container.',
      'Container -> build -> Dockerfile -> registry -> image.',
      'Registry -> run -> image -> Dockerfile -> container.',
      'Image -> stop -> build -> push -> Dockerfile.',
    ],
  },
  {
    tag: 'Kommandon',
    question: 'Vad gör `docker build -t myimage:tag .`?',
    answer: 'Bygger en image från aktuell katalog och ger den ett namn och en tagg.',
    options: [
      'Bygger en image från aktuell katalog och ger den ett namn och en tagg.',
      'Startar en container i bakgrunden.',
      'Laddar ner en image från Docker Hub.',
      'Tar bort alla stoppade containers.',
    ],
  },
  {
    tag: 'Kommandon',
    question: 'Vad gör `docker tag myimage:tag repo/myimage:tag`?',
    answer: 'Skapar en ny referens till imagen så att den kan pushas till ett annat registry.',
    options: [
      'Skapar en ny referens till imagen så att den kan pushas till ett annat registry.',
      'Bygger imagen på nytt med ett annat filsystem.',
      'Stoppar en körande container och byter namn på den.',
      'Kopplar en volym till imagen.',
    ],
  },
  {
    tag: 'Kommandon',
    question: 'Vad gör `docker push repo/myimage:tag`?',
    answer: 'Laddar upp imagen till ett registry.',
    options: [
      'Laddar upp imagen till ett registry.',
      'Startar en container från imagen.',
      'Raderar alla taggar från imagen.',
      'Skapar ett nytt Dockerfile-recept.',
    ],
  },
  {
    tag: 'Runtime',
    question: 'Varför stängs en container ner om den inte har en aktiv process?',
    answer: 'Containern existerar för att köra en process; utan process finns inget som håller den vid liv.',
    options: [
      'Containern existerar för att köra en process; utan process finns inget som håller den vid liv.',
      'För att Docker alltid stänger ner alla containers efter exakt en sekund.',
      'För att containers bara kan leva när de körs med `docker pull`.',
      'För att images automatiskt blir tomma när de startar.',
    ],
  },
  {
    tag: 'Kommandon',
    question: 'Vad används `docker run -it image sh` till?',
    answer: 'Det startar en container interaktivt och öppnar ett shell i den.',
    options: [
      'Det startar en container interaktivt och öppnar ett shell i den.',
      'Det bygger en image med ett interaktivt namn.',
      'Det tar bort en container efter att den körts.',
      'Det pushar imagen till ett registry i bakgrunden.',
    ],
  },
  {
    tag: 'Flagga',
    question: 'Vad betyder flaggan `-d`?',
    answer: 'Att containern körs i detached mode, alltså i bakgrunden.',
    options: [
      'Att containern körs i detached mode, alltså i bakgrunden.',
      'Att containern får en extra volym.',
      'Att containern körs med ett interaktivt shell.',
      'Att containern använder en annan registry-adress.',
    ],
  },
  {
    tag: 'Flagga',
    question: 'Vad betyder flaggan `-p`?',
    answer: 'Port mapping mellan host och container.',
    options: [
      'Port mapping mellan host och container.',
      'Passar in en miljövariabel i containern.',
      'Kopplar en volym till containern.',
      'Pakar ihop flera containers i Compose.',
    ],
  },
  {
    tag: 'Flagga',
    question: 'Vad betyder flaggan `-v`?',
    answer: 'Volymkoppling för att dela eller lagra data utanför containern.',
    options: [
      'Volymkoppling för att dela eller lagra data utanför containern.',
      'Att containern körs i bakgrunden.',
      'Att porten på hosten byts mot en annan image.',
      'Att containerprocessen körs som root.',
    ],
  },
  {
    tag: 'Flagga',
    question: 'Vad betyder flaggan `-e`?',
    answer: 'Att sätta miljövariabler i containern.',
    options: [
      'Att sätta miljövariabler i containern.',
      'Att exponera en port till hosten.',
      'Att bygga imagen snabbare genom cache.',
      'Att byta namn på registry:t.',
    ],
  },
  {
    tag: 'Entrypoint',
    question: 'Vad är skillnaden mellan ENTRYPOINT och CMD?',
    answer: 'Entrypoint körs alltid, medan CMD är default-argument som kan override:as.',
    options: [
      'Entrypoint körs alltid, medan CMD är default-argument som kan override:as.',
      'CMD körs alltid, medan ENTRYPOINT bara används i Compose.',
      'ENTRYPOINT används bara för volymer och CMD bara för portar.',
      'De betyder samma sak och kan inte skiljas åt.',
    ],
  },
  {
    tag: 'Lager',
    question: 'Varför är layered images användbara?',
    answer: 'De ger caching, snabbare builds och ofta mindre images.',
    options: [
      'De ger caching, snabbare builds och ofta mindre images.',
      'De gör att containers alltid kan köras utan process.',
      'De tar bort behovet av registry.',
      'De gör att Docker Compose inte längre behövs.',
    ],
  },
  {
    tag: 'Registry',
    question: 'Vad är ett registry?',
    answer: 'En plats där images lagras, lokalt, privat eller publikt.',
    options: [
      'En plats där images lagras, lokalt, privat eller publikt.',
      'Ett verktyg för att skriva Dockerfile.',
      'En process som håller containern igång.',
      'En typ av volume mount för databaser.',
    ],
  },
  {
    tag: 'Compose',
    question: 'När använder man Docker Compose?',
    answer: 'När en app består av flera containers som hör ihop, till exempel app och databas.',
    options: [
      'När en app består av flera containers som hör ihop, till exempel app och databas.',
      'När man bara vill bygga en image lokalt.',
      'När man vill läsa man pages i terminalen.',
      'När man vill skapa en Dockerfile från en registry.',
    ],
  },
  {
    tag: 'Kubernetes',
    question: 'Hur hänger Docker ihop med Kubernetes?',
    answer: 'Docker kör containrar, Kubernetes hanterar dem i skala.',
    options: [
      'Docker kör containrar, Kubernetes hanterar dem i skala.',
      'Kubernetes bygger images och Docker bara skriver dokumentation.',
      'Docker ersätter alltid behovet av Kubernetes.',
      'Kubernetes används bara för att göra Dockerfile enklare.',
    ],
  },
]

export const lesson1Exercises: Exercise[] = [
  {
    id: 'build-and-run',
    title: 'Bygg och kör en image',
    goal: 'Träna på hela flödet från Dockerfile till körbar container.',
    prompt:
      'Skapa en enkel Dockerfile för en valfri app eller använd kursens exempel, bygg imagen med `docker build -t myapp .` och kör den med `docker run --rm myapp`.',
    steps: [
      'Öppna terminalen i mappen där din Dockerfile ligger.',
      'Bygg imagen med `docker build -t myapp .`.',
      'Kontrollera att imagen finns med `docker images` eller `docker image ls`.',
      'Starta containern med `docker run --rm myapp`.',
    ],
    example: [
      'Om du använder kursens exempelprojekt kan du ofta bygga direkt från projektets rotmapp.',
      '`-t myapp` ger imagen ett namn så att den blir lätt att köra senare.',
      '`--rm` gör att containern tas bort automatiskt när den stängs ner.',
      'Om appen behöver interaktiv shell: `docker run -it --rm myapp sh`.',
    ],
    expected: [
      'Du ska se att Docker bygger flera steg och slutar med att imagen skapas.',
      'När du kör containern ska du antingen se appens output eller hamna i ett shell.',
    ],
    answer: [
      'Facit: `docker build` skapar en image från din Dockerfile.',
      'Facit: `docker run` startar en container från imagen.',
      'Om containern avslutas direkt kan du kontrollera den med `docker ps -a`.',
    ],
    mistakes: [
      'Du kör kommandot i fel mapp och Docker hittar inte din Dockerfile.',
      'Du glömmer `.` i slutet av `docker build`, vilket betyder att build-kontexten saknas.',
      'Du tror att image och container är samma sak. Imagen är mallen, containern är en körning av mallen.',
    ],
    quiz: [
      {
        question: 'Vad gör `docker build`?',
        options: [
          'Bygger en image från en Dockerfile',
          'Startar en container i bakgrunden',
          'Tar bort stoppade containers',
          'Pusha en image till registry',
        ],
        answer: 'Bygger en image från en Dockerfile',
      },
      {
        question: 'Vad gör `docker run`?',
        options: [
          'Startar en container från en image',
          'Skapar en ny Dockerfile',
          'Listar alla images lokalt',
          'Tar bort en image från registry',
        ],
        answer: 'Startar en container från en image',
      },
    ],
  },
  {
    id: 'inspect-container',
    title: 'Inspektera en container',
    goal: 'Lär dig läsa status, portar och loggar.',
    prompt:
      'Starta en container i bakgrunden, kör `docker ps`, `docker logs <container>`, `docker inspect <container>` och förklara vad du ser i outputen.',
    steps: [
      'Starta en enkel container, till exempel `docker run -d --name demo nginx`.',
      'Kolla att den körs med `docker ps`.',
      'Läs loggarna med `docker logs demo`.',
      'Titta på detaljer med `docker inspect demo`.',
    ],
    example: [
      'Använd ett enkelt image som `nginx` eller den image du just byggde.',
      'Flaggan `-d` betyder att containern kör i bakgrunden.',
      'Namnet `demo` gör det lättare att hänvisa till containern än att använda ett långt ID.',
    ],
    expected: [
      'I `docker ps` ska du se container-ID, image, namn, status och portar.',
      'I `docker logs` ska du se text som containern skriver till stdout/stderr.',
      'I `docker inspect` får du en stor JSON med all teknisk information.',
    ],
    answer: [
      'Facit: `docker ps` visar vilka containers som kör just nu.',
      'Facit: `docker logs demo` visar loggutdata från containern.',
      'Facit: `docker inspect demo` visar detaljer som nätverk, mounts, environment och startkommando.',
    ],
    mistakes: [
      'Du försöker läsa loggar från fel namn eller fel container-ID.',
      'Containern har redan stannat, så `docker ps` visar ingenting. Prova `docker ps -a`.',
      'Du letar efter en kort sammanfattning i `docker inspect`, men den ger en väldigt detaljerad JSON.',
    ],
    quiz: [
      {
        question: 'Vilket kommando visar bara containers som körs just nu?',
        options: ['docker ps', 'docker images', 'docker volume ls', 'docker system df'],
        answer: 'docker ps',
      },
      {
        question: 'Vilket kommando visar loggar från en container?',
        options: ['docker logs', 'docker tag', 'docker build', 'docker pull'],
        answer: 'docker logs',
      },
    ],
  },
  {
    id: 'ports-and-env',
    title: 'Port mapping och miljövariabler',
    goal: 'Öva på vanliga runtime-flaggor.',
    prompt:
      'Kör containern med `-p 8080:8080` och minst en miljövariabel med `-e`. Testa sedan att nå appen via browser eller `curl`.',
    steps: [
      'Starta containern med port mapping, till exempel `docker run -d --name web -p 8080:8080 -e APP_ENV=dev myapp`.',
      'Öppna webbläsaren på `http://localhost:8080` eller kör `curl http://localhost:8080`.',
      'Kolla environment med `docker inspect web` om du vill se att variabeln verkligen skickades in.',
    ],
    example: [
      '`-p 8080:8080` betyder port 8080 på datorn till port 8080 i containern.',
      '`-e APP_ENV=dev` skickar in en miljövariabel i containern.',
      'Många webbappar lyssnar på port 8080, men ibland är det 80 eller 3000 i stället.',
    ],
    expected: [
      'Du ska kunna nå tjänsten via din lokala dator på den port du mappat.',
      'Om appen loggar sin miljövariabel ska du se värdet `dev` i outputen.',
    ],
    answer: [
      'Facit: port mapping gör att trafik på din dator skickas vidare in i containern.',
      'Facit: miljövariabeln kan verifieras med `docker inspect web` under `Config.Env`.',
      'Om appen inte svarar kan det vara för att den lyssnar på en annan port än du mappade.',
    ],
    mistakes: [
      'Du blandar ihop host-port och container-port i `-p`.',
      'Du startar appen på en port som inte matchar det du exponerat.',
      'Du glömmer att appen måste lyssna på alla interfaces, inte bara `localhost`, inne i containern.',
    ],
    quiz: [
      {
        question: 'Vad betyder `-p 8080:8080`?',
        options: [
          'Port 8080 på hosten kopplas till port 8080 i containern',
          'Port 8080 byggs in i imagen',
          'Containern får en extra volume på 8080 MB',
          'Docker körs i interaktivt läge',
        ],
        answer: 'Port 8080 på hosten kopplas till port 8080 i containern',
      },
      {
        question: 'Vad används `-e APP_ENV=dev` till?',
        options: [
          'Sätta en miljövariabel i containern',
          'Exponera en port till hosten',
          'Bygga imagen snabbare',
          'Tagga imagen för push',
        ],
        answer: 'Sätta en miljövariabel i containern',
      },
    ],
  },
  {
    id: 'tag-and-push',
    title: 'Tagga och push:a en image',
    goal: 'Träna på flödet till registry.',
    prompt:
      'Tagga din image med ett registry-namn, till exempel `docker tag myapp user/myapp:1.0`, och förklara vad som händer innan du kör `docker push`.',
    steps: [
      'Kontrollera först vilken image du vill tagga med `docker images`.',
      'Skapa en ny tagg med `docker tag myapp user/myapp:1.0`.',
      'Logga in i registry om det behövs, till exempel med `docker login`.',
      'Pusha imagen med `docker push user/myapp:1.0`.',
    ],
    example: [
      'Taggning ändrar inte innehållet i imagen, den skapar bara en ny etikett.',
      'Det är vanligt att använda formatet `användarnamn/imagenamn:version`.',
      'Om du kör mot Docker Hub behöver du ofta logga in innan push.',
    ],
    expected: [
      'Efter taggning ska samma image finnas under två namn.',
      'Efter push ska registry ta emot imagen och spara den där.',
    ],
    answer: [
      'Facit: `docker tag` skapar en ny referens till samma image, inte en ny byggd image.',
      'Facit: `docker push` laddar upp imagen till registry, förutsatt att du är inloggad och har rättigheter.',
      'Om push misslyckas beror det ofta på fel namnformat eller att du inte är inloggad.',
    ],
    mistakes: [
      'Du tror att taggning bygger om imagen. Det gör den inte.',
      'Du glömmer registry-prefixet när du pushar.',
      'Du försöker pusha utan att vara inloggad.',
    ],
    quiz: [
      {
        question: 'Vad gör `docker tag myapp user/myapp:1.0`?',
        options: [
          'Skapar en ny referens till samma image',
          'Bygger om imagen från scratch',
          'Stoppar en container',
          'Laddar ner en image från registry',
        ],
        answer: 'Skapar en ny referens till samma image',
      },
      {
        question: 'Vad gör `docker push`?',
        options: [
          'Laddar upp imagen till registry',
          'Startar en ny container',
          'Tar bort volymer',
          'Skapar en pod i Kubernetes',
        ],
        answer: 'Laddar upp imagen till registry',
      },
    ],
  },
  {
    id: 'stop-and-cleanup',
    title: 'Stoppa och städa upp containers',
    goal: 'Bli trygg med livscykeln för en container.',
    prompt:
      'Starta en container, stoppa den och ta bort den igen. Förklara skillnaden mellan att stoppa och att radera.',
    steps: [
      'Starta en container med ett namn, till exempel `docker run -d --name temp nginx`.',
      'Stoppa den med `docker stop temp`.',
      'Titta på listan med `docker ps -a`.',
      'Ta bort containern med `docker rm temp`.',
    ],
    example: [
      'Om du vill ta bort en container direkt när den avslutas kan du ofta använda `--rm` när du kör den.',
      'När en container stoppas finns den kvar i listan över tidigare containers.',
      'När den raderas försvinner själva containern, men imagen finns kvar.',
    ],
    expected: [
      'Efter `docker stop` ska containern inte längre köras.',
      'Efter `docker rm` ska den inte längre finnas kvar i `docker ps -a`.',
    ],
    answer: [
      'Facit: `docker stop` stoppar processen i containern.',
      'Facit: `docker rm` tar bort containern helt.',
      'Det är vanligt att först stoppa och sedan ta bort, men en stoppad container kan inte startas igen om du har raderat den.',
    ],
    mistakes: [
      'Du försöker köra `docker rm` på en container som fortfarande körs.',
      'Du blandar ihop att ta bort en container med att ta bort en image.',
      'Du glömmer att använda `docker ps -a` och tror att containern försvann bara för att den inte körs längre.',
    ],
    quiz: [
      {
        question: 'Vad gör `docker stop`?',
        options: [
          'Stoppar processen i containern',
          'Tar bort imagen från datorn',
          'Skapar en ny volume',
          'Byter namn på containern',
        ],
        answer: 'Stoppar processen i containern',
      },
      {
        question: 'Vad gör `docker rm`?',
        options: [
          'Tar bort containern helt',
          'Tar bort alla images',
          'Startar containern igen',
          'Visar containerloggar',
        ],
        answer: 'Tar bort containern helt',
      },
    ],
  },
  {
    id: 'interactive-shell',
    title: 'Öppna ett shell i en container',
    goal: 'Öva på interaktivt läge och hur man felsöker inifrån containern.',
    prompt:
      'Kör en container med `-it` och öppna ett shell. Testa några enkla kommandon och lämna sedan containern.',
    steps: [
      'Starta containern med `docker run -it --rm alpine sh` eller ett annat litet image.',
      'Skriv `pwd`, `ls` och `exit` i shell:et.',
      'Jämför vad du ser inne i containern med vad du ser i din vanliga terminal.',
    ],
    example: [
      '`-i` betyder att terminalen är interaktiv.',
      '`-t` ger en terminalliknande upplevelse så att shell:et fungerar normalt.',
      'Ett litet image som `alpine` är bra för att öva eftersom det startar snabbt.',
    ],
    expected: [
      'Du ska hamna i ett shell där prompten ser annorlunda ut än normalt.',
      'När du skriver `exit` stängs sessionen och containern avslutas om den inte kör något annat.',
    ],
    answer: [
      'Facit: `-it` används när du vill prata direkt med containern.',
      'Facit: `docker run -it --rm alpine sh` är ett vanligt nybörjarexempel.',
      'Du behöver inte kunna alla Linux-kommandon för att klara övningen, men `pwd`, `ls` och `exit` räcker långt.',
    ],
    mistakes: [
      'Du glömmer `sh` eller `bash` och får ingen shell-session.',
      'Du försöker köra interaktivt på ett image som inte har något shell installerat.',
      'Du blandar ihop din vanliga terminal med terminalen inne i containern.',
    ],
    quiz: [
      {
        question: 'Vad betyder flaggorna `-it`?',
        options: [
          'Interaktiv terminal',
          'Port mapping',
          'Bakgrundsläge',
          'Volume mount',
        ],
        answer: 'Interaktiv terminal',
      },
      {
        question: 'Vad gör `docker run -it --rm alpine sh`?',
        options: [
          'Startar ett interaktivt shell i en tillfällig container',
          'Laddar ner en image utan att köra den',
          'Taggar en image för push',
          'Skapar en deployment i Kubernetes',
        ],
        answer: 'Startar ett interaktivt shell i en tillfällig container',
      },
    ],
  },
  {
    id: 'pull-and-run',
    title: 'Hämta en image från registry',
    goal: 'Förstå hur `docker pull` och `docker run` hänger ihop.',
    prompt:
      'Hämta ett image från registry och kör det. Förklara vad som sker om imagen inte redan finns lokalt.',
    steps: [
      'Testa först `docker images` och se vilka images som redan finns lokalt.',
      'Kör `docker pull nginx` eller ett annat valfritt image.',
      'Starta sedan containern med `docker run -d --name web nginx`.',
      'Jämför skillnaden mellan att bara köra `docker run` och att först köra `docker pull`.',
    ],
    example: [
      'Om imagen inte finns lokalt brukar `docker run` själv hämta den åt dig.',
      '`docker pull` är bra när du vill ladda ner image i förväg.',
      'Det här är ett bra sätt att förstå att registry är lagringsplatsen för images.',
    ],
    expected: [
      'Efter pull ska imagen finnas i din lokala image-lista.',
      'Efter run ska containern synas i `docker ps` om den körs i bakgrunden.',
    ],
    answer: [
      'Facit: `docker pull` hämtar en image från registry till din dator.',
      'Facit: `docker run` startar en container från imagen, och kan samtidigt hämta imagen om den saknas.',
      'Det är därför `pull` och `run` ofta känns som två steg i samma flöde.',
    ],
    mistakes: [
      'Du tror att `docker pull` startar en container. Det gör den inte.',
      'Du tror att `docker run` alltid kräver att imagen redan finns lokalt. Ofta hämtar Docker den automatiskt.',
      'Du blandar ihop registry med container runtime.',
    ],
    quiz: [
      {
        question: 'Vad gör `docker pull`?',
        options: [
          'Hämtar en image till din dator',
          'Startar en pod i Kubernetes',
          'Skapar en volume',
          'Raderar en container',
        ],
        answer: 'Hämtar en image till din dator',
      },
      {
        question: 'Vad händer ofta om imagen saknas lokalt när du kör `docker run`?',
        options: [
          'Docker hämtar imagen automatiskt',
          'Kommandot kraschar alltid direkt',
          'Docker skapar en Dockerfile',
          'En volume skapas automatiskt',
        ],
        answer: 'Docker hämtar imagen automatiskt',
      },
    ],
  },
  {
    id: 'volumes-intro',
    title: 'Testa volymer grundläggande',
    goal: 'Få en första känsla för hur data kan överleva en container.',
    prompt:
      'Kör en container med en volym och förklara varför en volym är användbar när containern stängs ner.',
    steps: [
      'Starta en container med en volym, till exempel `docker run -d --name data -v mydata:/data alpine sleep 3600`.',
      'Koppla upp dig i containern med `docker exec -it data sh`.',
      'Skapa en fil i `/data` och kontrollera att den finns kvar efter att du startar om containern.',
    ],
    example: [
      '`-v mydata:/data` skapar eller återanvänder en namngiven volym.',
      'Volymer används ofta för databaser och annan information som inte får försvinna när containern tas bort.',
      'Du behöver inte förstå allt om filsystem direkt för att komma igång, det viktiga är att data kan lagras utanför containern.',
    ],
    expected: [
      'Data i volymen ska finnas kvar även om containern tas bort och skapas igen.',
      'Du ska kunna se volymen med `docker volume ls`.',
    ],
    answer: [
      'Facit: volymer är det vanliga sättet att spara data som ska överleva container-livscykeln.',
      'Facit: containern är tillfällig, volymen är den beständiga lagringen.',
      'Om du tar bort containern med `docker rm` ska volymen ändå kunna vara kvar.',
    ],
    mistakes: [
      'Du tror att data som skrivs i containern alltid sparas permanent.',
      'Du blandar ihop bind mounts och named volumes utan att veta att de löser olika behov.',
      'Du tar bort containern och blir förvånad över att data försvinner när du inte använde volym.',
    ],
    quiz: [
      {
        question: 'Varför använder man volymer?',
        options: [
          'För att spara data utanför containern',
          'För att göra imagen mindre',
          'För att bygga snabbare',
          'För att skapa flera pods',
        ],
        answer: 'För att spara data utanför containern',
      },
      {
        question: 'Vad är en viktig skillnad mellan container och volume?',
        options: [
          'Containern är tillfällig, volymen är beständig lagring',
          'Volymen kör processen och containern lagrar filer',
          'De är exakt samma sak',
          'Volymer används bara i Kubernetes',
        ],
        answer: 'Containern är tillfällig, volymen är beständig lagring',
      },
    ],
  },
  {
    id: 'read-container-logs',
    title: 'Läs och tolka containerloggar',
    goal: 'Bli bekväm med felsökning via loggar.',
    prompt:
      'Starta en container som skriver ut loggar och läs dem med `docker logs`. Försök förstå vad som händer utan att gå in i containern.',
    steps: [
      'Starta till exempel `docker run -d --name logs nginx` eller ett annat image som producerar output.',
      'Kör `docker logs logs` för att läsa loggströmmen.',
      'Testa även `docker logs -f logs` om du vill följa loggarna live.',
    ],
    example: [
      'Loggar är ofta det första du tittar på när något inte fungerar.',
      'Om containern startar men tjänsten inte svarar kan loggarna ofta berätta varför.',
      '`-f` betyder follow och fungerar lite som `tail -f`.',
    ],
    expected: [
      'Du ska kunna läsa text som containern själv skriver ut.',
      'Du ska kunna se om containern startade korrekt eller om den kraschade direkt.',
    ],
    answer: [
      'Facit: `docker logs` visar output från containern.',
      'Facit: `docker logs -f` följer loggarna i realtid.',
      'Om du inte ser något kan containern ha kraschat direkt eller så producerar den ingen output.',
    ],
    mistakes: [
      'Du öppnar inte loggar utan försöker gissa vad som hänt.',
      'Du använder fel container-namn eller ID.',
      'Du tror att loggar bara finns i webbläsaren, men de kommer från processen i containern.',
    ],
    quiz: [
      {
        question: 'Vad visar `docker logs`?',
        options: [
          'Output från containern',
          'Alla images lokalt',
          'Volymernas innehåll',
          'Kubernetes pods',
        ],
        answer: 'Output från containern',
      },
      {
        question: 'Vad betyder `docker logs -f`?',
        options: [
          'Följer loggarna i realtid',
          'Tar bort loggarna',
          'Pusha loggar till registry',
          'Startar containern i bakgrunden',
        ],
        answer: 'Följer loggarna i realtid',
      },
    ],
  },
  {
    id: 'exec-into-container',
    title: 'Gå in i en körande container',
    goal: 'Förstå skillnaden mellan att starta en container och att ansluta till den.',
    prompt:
      'Starta en container och anslut sedan till den med `docker exec`. Jämför det med att köra den med `-it` direkt.',
    steps: [
      'Starta en container i bakgrunden med ett namn, till exempel `docker run -d --name shell-demo nginx`.',
      'Öppna ett shell i den körande containern med `docker exec -it shell-demo sh`.',
      'Testa `pwd`, `ls` och `exit`.',
    ],
    example: [
      '`docker exec` används för att köra ett kommando i en redan startad container.',
      'Det här är väldigt användbart när du vill felsöka utan att starta om allt.',
      'Om image saknar `bash` kan `sh` ofta fungera bättre.',
    ],
    expected: [
      'Du ska hamna i containerns filsystem och miljö, inte på din vanliga dator.',
      'När du skriver `exit` lämnar du bara sessionen, men containern fortsätter köra om den inte stoppas.',
    ],
    answer: [
      'Facit: `docker exec` kör ett kommando inuti en redan körande container.',
      'Facit: `-it` ger dig interaktiv terminalupplevelse.',
      'Det här är en vanlig metod för att felsöka eller kika runt i en container som redan är igång.',
    ],
    mistakes: [
      'Du försöker använda `docker exec` på en container som inte körs.',
      'Du blandar ihop `docker exec` med `docker run`.',
      'Du glömmer att ange rätt shell, till exempel `sh`.',
    ],
    quiz: [
      {
        question: 'Vad används `docker exec` till?',
        options: [
          'Köra ett kommando i en redan körande container',
          'Bygga en image från en Dockerfile',
          'Ta bort en container',
          'Skapa en volume',
        ],
        answer: 'Köra ett kommando i en redan körande container',
      },
      {
        question: 'Varför används ofta `-it` tillsammans med `docker exec`?',
        options: [
          'För att få en interaktiv terminal',
          'För att pusha image till registry',
          'För att skapa flera containers',
          'För att exponera portar',
        ],
        answer: 'För att få en interaktiv terminal',
      },
    ],
  },
  {
    id: 'inspect-and-find-info',
    title: 'Hitta viktig info med inspect',
    goal: 'Träna på att hitta specifik information i en stor JSON.',
    prompt:
      'Använd `docker inspect` och försök hitta port, environment och startkommando i outputen.',
    steps: [
      'Starta en container, till exempel `docker run -d --name info nginx`.',
      'Kör `docker inspect info`.',
      'Leta efter nycklar som `Config`, `Env`, `Cmd`, `NetworkSettings` och `Mounts`.',
    ],
    example: [
      '`docker inspect` ger mycket data, så du behöver inte läsa allt på en gång.',
      'Det är helt normalt att bara leta efter ett par fält i taget.',
      'Du kan kombinera med verktyg som `grep` senare, men börja gärna manuellt först.',
    ],
    expected: [
      'Du ska hitta detaljer om hur containern är startad.',
      'Du ska kunna säga var miljövariabler och portar finns i outputen.',
    ],
    answer: [
      'Facit: `inspect` är ett felsökningsverktyg som visar allt Docker vet om containern.',
      'Facit: här finns mycket mer än i `docker ps`, bland annat nätverk, mounts och config.',
      'För en nybörjare räcker det att lära sig hitta några viktiga fält åt gången.',
    ],
    mistakes: [
      'Du försöker läsa hela outputen som vanlig text utan att leta efter nycklar.',
      'Du väntar dig en kort sammanfattning i stället för en stor JSON-struktur.',
      'Du tror att inspect ändrar något. Det gör den inte, den visar bara information.',
    ],
    quiz: [
      {
        question: 'Vad är `docker inspect` bra för?',
        options: [
          'Att se detaljerad teknisk information om en container',
          'Att bygga en image',
          'Att skapa en pod',
          'Att ta bort volymer',
        ],
        answer: 'Att se detaljerad teknisk information om en container',
      },
      {
        question: 'Är `docker inspect` ett kommando som ändrar containern?',
        options: ['Nej, det visar bara information', 'Ja, det startar om containern', 'Ja, det bygger om imagen', 'Ja, det tar bort loggar'],
        answer: 'Nej, det visar bara information',
      },
    ],
  },
  {
    id: 'clean-images',
    title: 'Rensa oanvända resurser',
    goal: 'Förstå hur man städar efter övningar.',
    prompt:
      'Efter att du har skapat flera containers och images, städa upp dem och förklara varför det är bra att hålla rent.',
    steps: [
      'Titta på containers med `docker ps -a` och images med `docker images`.',
      'Radera en eller flera stoppade containers med `docker rm`.',
      'Om du har en image du inte längre behöver kan du ta bort den med `docker rmi`.',
      'Kolla igen så att listorna blivit kortare.',
    ],
    example: [
      'Det är vanligt att labba fram många containers och images när man övar.',
      'I längden sparar du plats och undviker förvirring om du städar regelbundet.',
      'Börja alltid försiktigt och dubbelkolla vad du tar bort.',
    ],
    expected: [
      'Du ska kunna skilja på att ta bort containers och att ta bort images.',
      'Du ska förstå att en image kan användas av flera containers.',
    ],
    answer: [
      'Facit: `docker rm` tar bort containers.',
      'Facit: `docker rmi` tar bort images.',
      'Det är ofta klokt att rensa efter övningar så att terminalen och Docker Desktop blir lättare att överblicka.',
    ],
    mistakes: [
      'Du kör `docker rmi` på en image som fortfarande används av en container.',
      'Du tror att `docker rm` tar bort imagen också.',
      'Du raderar något utan att först kontrollera med `docker ps -a` eller `docker images`.',
    ],
    quiz: [
      {
        question: 'Vad tar `docker rm` bort?',
        options: ['Containers', 'Images', 'Volymer', 'Pods'],
        answer: 'Containers',
      },
      {
        question: 'Vad tar `docker rmi` bort?',
        options: ['Images', 'Containers', 'Loggar', 'Portar'],
        answer: 'Images',
      },
    ],
  },
]

export const courseFlashcards: Flashcard[] = [
  {
    tag: 'Provfokus',
    question: 'Vad är den korta minnesregeln för kursens verktyg?',
    answer: 'Docker paketera och köra. Compose koppla ihop. Kubernetes skala och styra.',
    options: [
      'Docker paketera och köra. Compose koppla ihop. Kubernetes skala och styra.',
      'Docker skala och styra. Compose bygga images. Kubernetes skriva Dockerfiles.',
      'Docker ersätta Kubernetes. Compose ersätta Docker. Azure ersätta allt.',
      'Docker bara bygga. Compose bara läsa dokumentation. Kubernetes bara installera paket.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vilka tre huvudbegrepp ska du skilja på?',
    answer: 'Image, container och Dockerfile.',
    options: [
      'Image, container och Dockerfile.',
      'Pod, deployment och service.',
      'Registry, volume och port.',
      'Daemon, CLI och browser.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vilka kommandon bör du kunna från lektion 1?',
    answer: 'docker build, docker run, docker ps, docker stop, docker rm och docker pull.',
    options: [
      'docker build, docker run, docker ps, docker stop, docker rm och docker pull.',
      'kubectl apply, helm install, terraform plan och az login.',
      'git fetch, git stash, npm install och vite build.',
      'docker export, docker login, docker scan och docker compose rm.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vad är den viktigaste insikten om containers?',
    answer: 'De behöver en aktiv process för att fortsätta vara igång.',
    options: [
      'De behöver en aktiv process för att fortsätta vara igång.',
      'De måste alltid köras i bakgrunden.',
      'De fungerar bara när de har en publicerad port.',
      'De stängs aldrig ner när processen avslutas.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vad är Compose bra för?',
    answer: 'Att starta flera relaterade containers tillsammans som en app-enhet.',
    options: [
      'Att starta flera relaterade containers tillsammans som en app-enhet.',
      'Att bygga images snabbare med cache.',
      'Att byta ut Docker Hub mot ett lokalt registry.',
      'Att köra en enda container i interaktivt läge.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vad är Docker Desktop bra för?',
    answer: 'Den ger Docker daemon, CLI och lokal registry i en lättillgänglig startmiljö.',
    options: [
      'Den ger Docker daemon, CLI och lokal registry i en lättillgänglig startmiljö.',
      'Den ersätter behovet av Docker images helt och hållet.',
      'Den är bara en webbläsare för dokumentation.',
      'Den används enbart för att skapa Kubernetes namespaces.',
    ],
  },
  {
    tag: 'Provfokus',
    question: 'Vad används Mankier till i kursen?',
    answer: 'Att hitta dokumentation och exempel på kommandon, även för Kubernetes.',
    options: [
      'Att hitta dokumentation och exempel på kommandon, även för Kubernetes.',
      'Att bygga Docker images från webben.',
      'Att köra Compose-filer i Azure.',
      'Att skapa containers utan någon image.',
    ],
  },
]
