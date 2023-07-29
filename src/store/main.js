import { create } from "zustand";
import { redux } from "zustand/middleware";

const types = {
  toggle_dark: "toggle_dark",
  initialMode: "initialMode",
  isScrolled: "isScrolled",
  hoverNav: "hoverNav",
  showBtn: "showBtn",
  isHovered: "isHovered",
  pulsing: "pulsing",
  imgLoading: "imgLoading",
  setFaq: "SET_FAQ",
  gsapWidth: "GSAP_WIDTH"
};
const initialState = {
  theme: "",
};
const navbarState = {
  scrolled: false,
  hoveredIndex: null,
};
const buttonState = {
  show: false,
};
const hoverState = {
  isHoveredI: undefined,
};
const darkModeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.toggle_dark:
      return {
        theme: (state.theme = state.theme === "dark" ? "light" : "dark"),
      };
    case types.initialMode:
      return { theme: (state.theme = payload) };
    default:
      return state;
  }
};

const navBarReducer = (state = navbarState, { type, payload }) => {
  switch (type) {
    case types.isScrolled:
      return { scrolled: (state.scrolled = payload) };
    case types.hoverNav:
      return {
        hoveredIndex: (state.hoveredIndex =
          payload > 0 ? Number(payload) : null),
      };
    default:
      return state;
  }
};
const buttonReducer = (state = buttonState, { type, payload }) => {
  switch (type) {
    case types.showBtn:
      return { show: (state.show = payload) };

    default:
      return state;
  }
};
const hoverReducer = (state = hoverState, { type, payload }) => {
  switch (type) {
    case types.isHovered:
      return {
        isHoveredI: (state.isHoveredI =
          payload >= 0 ? Number(payload) : undefined),
      };

    default:
      return state;
  }
};

const placeHolderState = {
  pulsing: true,
  imgLoading: true,
};
const placeHolderReducer = (state = placeHolderState, { type, payload }) => {
  switch (type) {
    case types.pulsing:
      return {
        ...state,
        pulsing: payload,
      };
    case types.imgLoading:
      return {
        ...state,
        imgLoading: payload,
      };
    default:
      return state;
  }
};

const faqState = {
  active: 1,

  faqItems: [
    {
      id: 1,
      label: "Digitalizacija poslovanja?",
      text:
        "… je potrebna kako bi se odgovorilo na rastuće potrebe klijenata na modernom tržištu. Virtualizirano preduzeće nije kozmetička promjena, već serija strateških odluka koje će u srednjem roku rezultirati dodatnim prilivom mušterija i posla.",
    },
    {
      id: 2,
      label: "Šta je digitalni marketing?",
      text:
        "Skup aktivnosti usmjerenih online poslovanju kompanija, web prezentaciji, internet prisustvu i privlačenju klijenata u virtuelnom svijetu.",
    },
    {
      id: 3,
      label:
        "Kako mogu znati da digitalni marketing pozitivno utiče na moje poslovanje?",
      text:
        "Mjerenjem saobraćaja pomoću Google Analytics, Facebook Insights i drugih alata moguće je utvrditi stepen saobraćaja na vašem sajtu, kao i demografske karakteristike vaše publike. Moguće je znati geografske osobine, starosnu dob, ponašanje na stranici vaših potencijalnih kupaca.",
    },
    {
      id: 4,
      label: "Šta mi znače podaci koje skupim?",
      text:
        "Moguće je kreirati strategiju prema specifičnim karakteristikama koje vaši kupci imaju, bez da ih eksplicitno o tome pitate. Njihovi podaci će biti predmet vaše diskretne upotrebe, te vam služiti da pozicionirate vaše proizvode i usluge kupcima koji ih zaista žele.",
    },
    {
      id: 5,
      label: "Da li digitalni marketing snižava troškove?",
      text:
        "U kontekstu vremena koje biste ulagali u one-on-one marketing, digitalni marketing će racionalizirati vaše vrijeme i smanjiti operativne troškove jer premošćuje geografski jaz i čini vašu kompaniju dostupnom kroz jednu pretragu na Google-u.",
    },
    {
      id: 6,
      label: "Koje koristi moji zaposleni imaju od digitalnog marketinga?",
      text:
        "Delegiranjem zaposlenika na osnovu podataka koje su prikupile aktivnosti digitalnog marketinga možete svrsishodnije alocirati zaposlenike na radne zadatke, te implementirati tehnologije kako bi odgovorili na zahtjeve koje imaju vaši kupci. Ove aktivnosti utiču na povećanu produktivnost i veći profit u konačnici.",
    },
  ],
};
const faqReducer = (state = faqState, { type, payload }) => {
  switch (type) {
    case types.setFaq:
      return {
        ...state,
        active: payload,
      };
    default:
      return state;
  }
};

export default function useRootReducer() {
  return {
    // the value of `state.todos` is whatever the todos reducer returns
    placeHolder: create(redux(placeHolderReducer, placeHolderState)),

  };
}

const gsapState = {
  maxWidth: 0,
}
const gsapReducer = (state = gsapState, {type, payload}) => {
  switch (type) {
    case types.gsapWidth: return {
      ...state,
      maxWidth: payload
    }
    default: return state
  }
}
export const useGsapReducer = create(redux(gsapReducer, gsapState));
export const useFaqReducer = create(redux(faqReducer, faqState));
export const useThemeStore = create(redux(darkModeReducer, initialState));
export const useNavbarStore = create(redux(navBarReducer, navbarState));
export const useButtonStore = create(redux(buttonReducer, buttonState));
export const useHoverStore = create(redux(hoverReducer, hoverState));
