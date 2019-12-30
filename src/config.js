import easeOfUse from "./assets/images/easeOfUse.png";
import openSource from "./assets/images/openSource.png";
import endToEnd from "./assets/images/endToEnd.png";
import longSession from "./assets/images/longSession.png";
import spaceComplex from "./assets/images/spaceComplex.png";
import scraping from "./assets/images/scraping.png";

const display = [
  [
    {
      image: easeOfUse,
      heading: "Easy to use and understand",
      description: "Clean and intuitive set of functions/APIs."
    },
    {
      image: openSource,
      heading: "Open source",
      description:
        "Good documentation and discounted dedicated support for early adopters."
    }
  ],
  [
  {
    image: endToEnd,
    heading: "End-to-end implementation",
    description:
      "Manages everything, from cookies to the database, along with multi process synchronisation."
  },
  {
    image: longSession,
    heading: "Long lived sessions",
    description:
      "We provide the best and most secure solution for all use cases. Even the ones where you require your users to be logged in for an extended period of time."
  }
  ],
  [
   {
    image: spaceComplex,
    heading: "Optimal Time and Space Complexity",
    description:
      "Depending on your setup, we store just one set of auth tokens per user per device. Also, most authentication requests don’t need a database call."
  },
  {
    image: scraping,
    heading: "Prevents unwanted data scraping.",
    description:
      "Our session management solution makes it much harder to systematically scrape your data."
  }
  ]
];

export default display;
