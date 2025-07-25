import heroImageOne from "../../../assets/images/home/hero/slide_1.jpg";
import heroImageTwo from "../../../assets/images/home/hero/slide_2.jpg";

const heroData = [
  {
    id: 1,
    image: heroImageOne,
    title: "Welcome to ToyTutors",
    subtitle: "Interactive learning for curious minds",
    description: "Discover our award-winning educational toys and programs designed for children ages 3-12",
    buttons: [
      {
        text: "Start Learning Today",
        link: "/signup",
        variant: "primary",
      },
      {
        text: "Take a Tour",
        link: "/virtual-tour",
        variant: "outline",
      },
    ],
    theme: {
      textColor: "light",
      overlay: "gradient-primary",
      buttonStyle: "rounded-full",
      textAlignment: "left",
    },
    animation: {
      type: "fade",
      duration: 1000,
    },
    contentPosition: "center-left",
  },
  {
    id: 2,
    image: heroImageTwo,
    title: "Learning Through Play",
    subtitle: "Making education fun and engaging",
    description: "Our unique approach combines playtime with valuable learning experiences",
    buttons: [
      {
        text: "Browse Toys",
        link: "/products",
        variant: "primary",
      },
      {
        text: "Free Trial",
        link: "/free-trial",
        variant: "secondary",
      },
    ],
    theme: {
      textColor: "dark",
      overlay: "light",
      buttonStyle: "rounded-lg",
      textAlignment: "center",
    },
    animation: {
      type: "slide-right",
      duration: 800,
    },
    contentPosition: "center",
  },
];

export default heroData;