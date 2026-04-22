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
