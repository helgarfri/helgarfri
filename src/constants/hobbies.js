export const HOBBIES_HEADING = {
  is: "áhugamál",
  en: "hobbies",
  es: "pasatiempos",
};

export const TRAVEL_MAP_EMBED =
  "https://mapincolor.com/embed/103?token=441553456fc58385952938e5b0519dd4644b498b46c28d6d382b3f949a2d8d34&theme=dark&branding=1&legend=1&interactive=1";

export const TRAVEL_MAP_COPY = {
  is: {
    modalTitle: "staðir sem ég hef heimsótt",
    hoverHint: "sjá kort",
    close: "loka",
    iframeTitle: "kort af löndum sem ég hef heimsótt",
  },
  en: {
    modalTitle: "places I've been",
    hoverHint: "see map",
    close: "close",
    iframeTitle: "map of countries I've visited",
  },
  es: {
    modalTitle: "lugares que he visitado",
    hoverHint: "ver mapa",
    close: "cerrar",
    iframeTitle: "mapa de países que he visitado",
  },
};

export const HOBBIES = [
  {
    id: "golf",
    theme: "golf",
    title: {
      is: "golf",
      en: "golf",
      es: "golf",
    },
    description: {
      is: "ég keppti fyrir Golfklúbb Mosfellsbæjar á sínum tíma. golf er mín uppáhalds íþrótt.",
      en: "i competed for Mosfellsbær Golf Club back in the day. golf is my favorite sport.",
      es: "competí por el Club de golf de Mosfellsbær en su momento. el golf es mi deporte favorito.",
    },
    caption: {
      is: "mynd tekin í sveitakeppni á Selfossi",
      en: "photo taken at a club match in Selfoss",
      es: "foto tomada en una competición de club en Selfoss",
    },
    image: "/assets/helgafri-golf.jpg",
    imageAlt: {
      is: "Helgi í sveitarkeppni Golfklúbbs Mosfellsbæjar",
      en: "Helgi playing in Mosfellsbær Golf Club's team competition",
      es: "Helgi en la competición por equipos del club de golf de Mosfellsbær",
    },
    imagePosition: "center 28%",
  },
  {
    id: "dj",
    theme: "dj",
    title: {
      is: "dj & framleiðsla",
      en: "dj & producing",
      es: "dj y producción",
    },
    description: {
      is: "hef leikið mér lengi að framleiða lög og hef einnig verið að plötusnúðast.",
      en: "i've long enjoyed producing tracks and have also been djing.",
      es: "hace tiempo que disfruto producir canciones y también he estado de dj.",
    },
    href: "https://dj.helgarfri.is",
  },
  {
    id: "travel",
    theme: "travel",
    title: {
      is: "ferðast",
      en: "traveling",
      es: "viajar",
    },
    description: {
      is: "mér finnst gaman að upplifa nýtt umhverfi og nýja menningu.",
      en: "i enjoy experiencing new environments and new cultures.",
      es: "me gusta vivir nuevos entornos y nuevas culturas.",
    },
    caption: {
      is: "mynd tekin á hálendi Bólivíu",
      en: "photo taken on the Bolivian highlands",
      es: "foto tomada en el altiplano de Bolivia",
    },
    image: "/assets/helgarfri-bolivia.jpg",
    imageAlt: {
      is: "Helgi horfir á stjörnuhimininn á hálendi Bólivíu",
      en: "Helgi looking at the starry sky on the Bolivian highlands",
      es: "Helgi mirando el cielo estrellado en el altiplano de Bolivia",
    },
    imagePosition: "center 40%",
    opensMap: true,
  },
];
