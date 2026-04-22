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
