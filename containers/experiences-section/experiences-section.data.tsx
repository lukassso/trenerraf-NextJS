import React from 'react';
import { IExperiences } from '@/interfaces/i-experiences';
import { Container, Typography } from '@mui/material';

export const experiencesSectionData: Array<IExperiences> = [
  {
    id: 1,
    name: 'Trener personalny',
    area: 'Instruktor',
    content: (
      <Container>
        <Typography>
          Kurs trenera personalnego zrobiłem w Polskim Związku Kulturystyki i Fitness. To miejsce wydaje najbardziej
          prestiżowe uprawnienia trenera personalnego. Podczas kursu nauczyłem się prawidłowego podejścia i pracy z
          zawodnikiem czyli z Tobą. Wieloletnie doświadczenie szkoleniowców pozwoliło edukować mnie na najwyższych
          standardach światowych. Dzięki temu i innym kursom moge pracować z Toba na ciężarach, maszynach, TRX, Bosu,
          treningu funkcjonalnym, treningu z ciężarem własnego ciała, ketlach, workach bułgarskich. Zapraszam do
          współpracy i poprawiania swojego wyglądu, sprawności.
        </Typography>
      </Container>
    ),
  },
  {
    id: 2,
    name: 'Nurek CMASS',
    area: 'Instruktor',
    content: (
      <Container>
        <Typography>
          Nurek cmass - to jedna z moich pasji czyli nurkowanie. Podczas nurkowania zauważyłem jak ważna jest aktywność
          fizyczna. Czesto sobie wyobrażamy nurkowanie jako rozrywkę, ktora możemy porobić na wakacjach czy w wolnym
          czasie. Pamiętajmy, aby nurkować i czuć się bezpiecznie pod wodą musimy mieć dobra wydolność i być sprawni. I
          to tylko pokazuje nam to, ze sprawność i dobra wydolność jest nam potrzebna przez całe życie i w każdym
          miejscu.
        </Typography>
        <Typography variant="h5" color="initial">
          A czy ty jesteś sprawny? I twoj poziom pozwoli Ci na korzystanie z życia w pełni?
        </Typography>
      </Container>
    ),
  },
  {
    id: 3,
    name: 'Kettlebells',
    area: 'Instruktor',
    content:
      'Kettlebell to jedna z najstarszych metod treningu,  która poprawieniu wytrzymałości,  siłe i twoją sprawności. Angażuje wszystkie partie ciała, przez co bardzo dobrze modeluje sylwetkę i robi z ciebie lepsza wersję siebie. Trening z jego wykorzystaniem nie izoluje poszczególnych mięśni, a skutecznie wpływa na ich współdziałanie i holistyczny rozwój. Ćwiczenia ponadto zwiększają gibkość, a także skutecznie wpływają na poprawę koordynacji ruchowej i motoryki. Świetnie sprawdzą się jako sposób - lekarstwo na bóle pleców i stabilizację sylwetki. Pomogą w redukcji zbędnych kilogramów, zwiększając masę mięśniową i zmniejszając tkankę tłuszczową. Polecam teening z użyciem tego sprzetu. Wagę kettlebell możesz dobrać do swoich możliwości, a więc jest to sprzęt przeznaczony dla osób zarówno początkujących, jak i już aktywnych. A czy ty używałeś już tego sprzetu? Jak myślisz czy jesteś sprawną osobą?',
  },
  {
    id: 4,
    name: 'Kulturystyka',
    area: 'Instruktor',
    content:
      'Kurs trenera personalnego zrobiłem w Polskim Związku Kulturystyki i Fitness. To miejsce wydaje najbardziej prestiżowe uprawnienia trenera personalnego. Podczas kursu nauczyłem się prawidłowego podejścia i pracy z zawodnikiem czyli z Tobą. Wieloletnie doświadczenie szkoleniowców pozwoliło edukować mnie na najwyższych standardach światowych. Dzięki temu i innym kursom moge pracować z Toba na ciężarach, maszynach, TRX, Bosu, treningu funkcjonalnym, treningu z ciężarem własnego ciała, ketlach, workach bułgarskich. Zapraszam do współpracy i poprawiania swojego wyglądu, sprawności.',
  },
  { id: 5, name: 'Trening funkcjonalny', area: 'Instruktor' },
  {
    id: 7,
    name: 'Trójbój siłowy',
    area: 'Instruktor',
    content:
      'Trójboju siłowy jest jednym z najstarszych ćwiczeń i zarazem najbardziej popularnych na siłowni. To ćwiczenie również rozwija holistycznie nasze ciało. Trójboju siłowy to ćwiczenie, które jest również bardzo trudnie technicznie. Ja zdobywałem swoja technikę i wiedzę o tym ćwiczenie podczas szkolenia na instruktora trójboju, które to trwało 2 lata i było przeprowadzane przez Wyższą Szkołę Wychowania Fizycznego i Turystyki w Białymstoku. Przez tak długi okres trenowałem i się szkoliłem pod okiem największych specjalistów w Polsce. Teraz ja mogę przekazać ci ta wiedzę podczas naszych treningów. A czy ty masz dobra technikę?',
  },
  {
    id: 8,
    name: 'Samoobrona',
    area: 'Instruktor',
    content:
      'Samoobrona to fajny dodatek do treningów personalnych. Wiele lat trenowałem kickboxing co później zachęciło mnie do zrobienia kursu na instruktora samoobrony na WSWFiT w Białymstoku. Oprócz dobrej techniki ważna jest tez sprawność i dzieki wieloletnim treningom, które miałem ze sztuk walki możemy w naszych treningach wpleść elementy sztuk walki. To dodatkowo zwiększa atrakcyjność naszych treningów i mocno bedzie ciebie rozwijać w różnych płaszczyznach. Z doświadczenia wiem, ze osoby które chcą poprawić sprawność często bardzo się cieszą jak wplatamy elementy sztuk walki. A czy ty kiedyś miałeś doczyniena z elementami sztuk walki w treningu?',
  },
  {
    id: 9,
    name: 'Indoor cycling',
    area: 'Instruktor',
    content:
      'ICG basic Level ten kurs pomógł mi zrozumieć współzależności pracy ze sprzętem Cardio typu rower przy zdobywaniu lepszej wydolnosci i sprawności. W każdym treningu cardio to dobry dodatek przy budowaniu sprawności. Lepsza wydolność pomoże poprawić nasza sprawność. Jako wieloletni instruktor fitness mogę również szerszym okiem spojrzeć na trening personalny. Po kursie tym czyli typowo fitnesowym mogę wykorzystać nowe umiejętności w treningu personalnym',
  },
  {
    id: 10,
    name: 'Speening star',
    area: 'Instruktor',
    content:
      'Skończyłem również kilka szkoleń spiningowych, które nauczyły mnie wielu potrzebnych umiejętności z pracy z podopiecznymi. Podejście do zawodnika jest bardzo ważne, a na szkoleniach spinningowych dowiedziałem się wiele o podejściu psychicznym do zawodnika. O jego motywacji czy sprawianiu, ze osiagnie cele, których wcześniej nie dał rady. Oprócz tego dowiedziałem się o zależnościach pracy kondycji - siły - wytrzymałości w kontekście budowania naszej sprawności. Holistyczny rozwój zawodnika amatora jest bardzo wazny, aby nie ominąć jakiejś części i rozwój jego był poprawny. Szkolenia były i są ważnym elementem naszego rozwoju. Język, którym chcemy dotrzeć do zawodnika jest bardzo ważny i tego nauczyłem się na szkoleniu. Periodyzacja treningu pozwala odnieść większy sukces.',
  },
  {
    id: 11,
    name: 'Zdrowy kręgosłup',
    area: 'Certyfikat IFAA',
    content:
      'W renomowanej szkole aktywności fizycznej IFAA nauczyłem się poprawnej pracy z kręgosłupem. Skończyłem tam 2 szkolenia patologie kręgosłupa i zdrowy kręgosłupa. Przez wiele lat prowadziłem zajęcia dla starszych ludzi " zdrowy kręgosłup ", " aktywny senior ". Dzieki tym szkoleniom mogłem bezpiecznie pracować z ludźmi, którzy wymagali szczególnej uwagi. Również dzieki takiej pracy zdobyłem doświadczenie, które przyda mi się na lata. Teraz śmiało moge powiedzieć, że praca z "trudnymi przypadkami" nie stanowi żadnej trudności. Wiemy, że kręgosłup trzyma nasze ciało i jest bardzo ważny to taki " pień drzewa" czyli nas. W dzisiejszych czasach bule kręgosłupa to częste dolegliwości, które mogą ustać przez odpowiedni trening ( medyczny i funkcjonalny ). Trzeba wiedzieć jak wzmacniać kręgosłup, aby nie zrobić mu krzywdy, a był silniejszy. Zapraszam do współpracy i bycia lepszą wersja siebie.',
  },
  {
    id: 12,
    name: 'Patologie kręgosłupa',
    area: 'Certyfikat IFAA',
    content:
      'Patologie kręgosłupa. Wielu z nas ma problemy z bólem w okolicach kręgosłupa. Czesto to jest spowodowane różnymi dolegliwościami związanymi z patologiami kręgosłupa. Ja jako doświadczony trener wiem jak ułożyć plan treningowy, aby nie uszkodzić twojego kręgosłupa, a go wzmocnić. Szkolenie, które pomogło mi zrozumieć jak wzmacniać kręgosłup i jak on pracuje skończyłem w renomowanej szkole IFAA i tam zdobyłem potrzebna wiedzę. Pamiętaj kręgosłup to pień drzewa, którym jesteś. Silny pień utrzyma całe ciało. A czy wszystko jest wporzadku z twoim kręgosłupem?',
  },
  {
    id: 13,
    name: 'Biodro staw życia',
    area: 'Biernat',
    content:
      ' Na treningu chciałbym również przedstawić rolę biodra w funkcjonowaniu człowieka, opisanie typowych problemów, jeżeli takie posiadasz. Podpowiem, jak radzić sobie z różnymi zaburzeniami i bólem w okolicy biodra. Nauczę Cie również  wszystkiego, co na dzień dzisiejszy jest ważne w odniesieniu do biodra i postępowania z nim. Opowiem jak analizować i świadomie ćwiczyć, aby biodro mogło spełniać swoje funkcje. Było zdrowe i odpowiednio działało. Tak, abys nigdy nie czuł bólu. Wiedza praktyczna przyda Ci się zarówno na treningu jak i w życiu poza silownia. Postaram się ci zrozumieć interakcję mięśni wokół biodra oraz jaki wpływ mają na ustawienie stawu biodrowego, który jest bardzo ważnym stawem w twoim funkcjonowaniu. Praca siedzaca i zly rodzaj ruchu może źle wpłynąć na biodro.',
  },
  { id: 14, name: 'Kolano - biodra i stopy', area: 'Biernat' },
  {
    id: 15,
    name: 'Stopa - nasza podpora',
    area: 'Biernat',
    content:
      'Stopa to chyba jedyny element ciała, który jest non stop zakryty, buty, nieczynny, nietrenowany. Często sztucznie podpierany przez wkładki, przez sztywne, z podwyższoną piętą obuwie inne. Wydaje się, że stopa przeciętnego człowieka nie ma prawa funkcjonować prawidłowo. A już dawno (Agosta, 2008) lekarz z Australii twierdził, że większość urazów kończyny dolnej ma podłoże w zaburzonej mechanice stopy. To pokazuje, że stopa jest bardzo ważna. A z kolei Greenmann w swojej książce o terapii kręgosłupa zaleca rozpoczęcie postępowania leczniczego odcinka szyjnego od ustawienia stopy ( czyli podstawy ciała ). Jak więc powinniśmy podejść do tematu stopy i jak z niąpostępować? Na to pytanie chce odpowiedzieć podczas treningów i korygowania postawy podczas treningu. Trochę teorii i jak najwięcej wiedzy praktycznej dającej wskazówki, jak diagnozować i korygować ustawienie stopy i to wszystko na treningu. Postępować po urazach i jak troszczyć się o stopę, żeby jak najdłużej, w dobrej kondycji służyła nam podczas codziennych czynności, a także podczas treningu. Na to wszystko zwrócimy uwagę podczas trenowania razem.',
  },
  {
    id: 16,
    name: 'Bark nie musi być skomplikowany',
    area: 'Biernat',
    content:
      'Bark nie musi być skomplikowany ten kursu pomógł dowiedzieć się mi jak chronić staw barkowy przed bólem oraz jak prawidłowo ćwiczyć, aby zmniejszyć ryzyko urazu oraz w możliwie najlepszy sposób usprawnić funkcjonowanie okolicy obręczy barkowej i całego otoczenia barku. Znam i potrafię określić wpływy, zarówno te negatywne i pozytywne, wybranych ćwiczeń na kompleks barkowy.  Praktyczne nowinki i niuanse potrafię zastosować w treningu. Wyniesione doświadczenie z codziennej pracy ze sportowcami i pacjentami na treningu pomoże w budowaniu twojej sprawności.',
  },
  { id: 17, name: 'Kształtowanie kobiecej sylwetki ', area: 'CSS' },
  {
    id: 18,
    name: 'Redukacja bez liczenia kalorii',
    area: 'Tadeusz Sowinski',
    content:
      'Odchudzanie bez liczenia kalorii ten kurs to jeden z wielu, który pomógł mi praktycznym okiem spojrzeć na aspekty dietetyczne przy pracy z podopiecznym. Z doświadczenia wiem, ze wielu z Was nie chce liczyć kalorii, a chce schudnąć. I teraz moje zadanie jest takie, aby podczas treningu przekazać Wam wiedzę również z dziedziny dietetyki. Tak jeść i stosować pewne zasady, które pomogą osiągnąć wam wymarzoną sylwetkę. To może być naprawdę łatwe i do zrobienia wystarczy spełnić parę punktów. Wiec podczas treningu staram się również znaleźć złoty środek tak, aby Twoje odżywianie było zdrowe. W otaczającym nas świecie jest wiele pokus, a ja wiem jak ich uniknąć...i ty to tez będziesz wiedział, stosował!',
  },
  { id: 19, name: 'Tułów - baza do ruchu ', area: 'Biernat' },
  { id: 20, name: 'Kończyna dolna', area: 'Movement strategy' },
  {
    id: 21,
    name: 'Trening TRX ',
    area: 'Certyfikat',
    content: (
      <React.Fragment>
        <Typography> Taśmy podwieszane TRX - jak ich używać i czym są? </Typography>
        <Typography>
          Taśmy TRX to pasy, które umożliwiają nam na trening, aktywność z obciążeniem własnego ciała. Między innymi
          temu, że możemy je regulować, jest możliwe wykonanie różne ćwiczenia z różnym obciążeniem. Zarówno osoby
          sprawne jak i mniej sprawne będą mogły ćwiczyć i rozwijać swoją sprawność. To idealna aktywność dla osób,
          które nie chcą obciążać kręgosłupa oraz stawów zbyt mocno. Trenujące osoba ćwiczą stabilizację, siłę i
          wydolność podczas treningu z użyciem TRX.
        </Typography>
        <Typography>
          Taśmy TRX wykonane są z bardzo trwałego polimeru, dlatego warto na początek zainwestować w polecane modele,
          ponieważ posłużą nam przez długi okres czasu i treningi będą bezpieczne.
        </Typography>
      </React.Fragment>
    ),
  },
  {
    id: 22,
    name: 'Worek bułgarski ',
    area: 'Certyfikat IFAA',
    content: (
      <Container>
        <Typography variant="body1" color="initial">
          Jako licencjonowany master trener worka bułgarskiego chciałem polecić tą metodę treningu. Zawsze szukasz
          kompleksowego programu, który będzie w stanie wzmocnić i rozwinąć holistycznie ciało. A co, jeśli w tym celu
          możesz wykorzystać zaledwie jedego przyrząd. Bułgarski worek to naprawdę niesamowite urządzenie treningiwe.
          Przeznaczony jest dla każdego, kto chce zadbać o swoje ciało ( poprawa sprawności, kondycji czy wzmocnienie
          mięśni). Opinie sportowców przemawiają za jego skutecznością, gdyż staje się coraz bardziej popularnym
          elementem treningu w różnych dyscyplinach. Poznałem wszystkie zalety treningu z workiem i śmiało mogę go
          polecić w treningach. Również moja wiedza zdobyta na kursach czy treningach z nim pozwoli efektywnie ćwiczyć z
          użyciem worka.
        </Typography>
        <Typography>Zapraszam do treningów pod moim okiem.</Typography>
      </Container>
    ),
  },
  {
    id: 23,
    name: 'Ergometr wioślarski',
    area: 'Jatomi',
    content:
      'Ergometr wioślarski to ważne urządzenie podczas treningu. Możemy go stosować jako dodatek, uzupełnienie, a także nasz trening. Podczas pracy z podopiecznymi ucze ich prawidłowej techniki pracy na ergometrze. Ergometr wioslarski także dodajemy do treningów z innym sprzętem. Ergometr wioslarski wzbogaci nasz trening i sprawi, że będzie on bardziej efektywny. Ważna jest technika, intensywność i charakter treningu i to wszystko pokaże i nauczę na treningu. Zapraszam do współpracy ze mną dowiesz się wiele również o ergometrze wioslarskim.',
  },
  {
    id: 24,
    name: 'Mobility Conditioning ',
    area: 'Maxwell SC™',
    content:
      'Mobilność jest bardzo ważnym elementem, aby nasz organizm dobrze funkcjonował. Mobilizacji różnych części naszego ciała nauczyłem się od bardzo doświadczonego trenera z USA od Stephen Maxwell. On przez lata badał wpływ mobilności na sprawność, czy też prace z odechem aby osiągnąć lepsze rezultaty. Dzieki szkoleniu jakie mi przeprowadził mam bardziej szerokie spojrzenie na prace z naszm ciałem. To szkolenie również pomoże mi zaktywizować zastałe, pospinane części wielu z was. Zapraszam na treningi.',
  },
];
