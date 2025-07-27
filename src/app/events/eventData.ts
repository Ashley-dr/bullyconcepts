import { StaticImageData } from "next/image";
import frame1 from "../(root)/Detail2/assets/frame1.svg";
import frame2 from "../(root)/Detail2/assets/frame2.svg";
import frame3 from "../(root)/Detail2/assets/frame3.svg";

import frame1event1 from "../(root)/Detail2/assets/frame1event1.png";
import frame2event2 from "../(root)/Detail2/assets/frame2event2.png";
import frame3event3 from "../(root)/Detail2/assets/frame3event3.png";
export interface DetailProps {
  id: string;
  eventName: string;
  location: string;
  projectDate: string;
  details: string;
  information: string;
  link?: string;
  image: StaticImageData;
  image2: StaticImageData;
}

export const eventData: DetailProps[] = [
  {
    image: frame1,
    id: "frame1",
    image2: frame1event1,
    eventName: "Icons and Generations 2024",
    location: "SM Seaside, Cebu",
    details: "IAG 2024: A Resounding Success",
    information:
      "The Icons and Generations 2024 event turned out to be a landmark celebration, blending automotive culture with charitable outreach. Organized by Berol Lubricants and Bullyconcepts, the event centered around an exciting showcase of iconic cars from different eras, each representing a pivotal moment in the evolution of motorsports. A variety of classic and vintage cars were the highlights, with enthusiasts displaying beautifully restored models that captivated the crowd and embodied the Icons and Generations theme Beyond the automotive displays, the event also catered to a wide range of interests and hobbies. Cosplayers dressed as iconic characters mingled with diecast car collectors showcasing intricate collections. RC car enthusiasts demonstrated their skills on miniature tracks, while model car builders exhibited their detailed creations. This diverse mix of passions made the event vibrant and inclusive, appealing to a wide audience. A standout element of the event was its focus on philanthropy. In partnership with SOS Children's Villages Philippines, children from the organization were treated to an exclusive experience, enjoying access to the main event area where they could try the Racing Simulator from Chicane Racing Simulator. The kids also took part in hands-on activities, including building Gunpla models and painting miniature Warhammer figures, making their day truly memorable. Icons and Generations 2024 was not just a celebration of cars and generations, but also a showcase of community, creativity, and charity. Attendees left with lasting memories, a sense of purpose, and excitement for future events.",
    projectDate: "September 20-22, 2024",
  },
  {
    image: frame2,
    id: "frame2",
    image2: frame2event2,
    eventName: "Icons and Generations",
    location: "SM Seaside, Cebu",
    link: "https://www.facebook.com/people/Icons-and-Generations/61558444973998/",
    details: "Icons and Generations",
    information:
      "Get ready for Icons and Generations 2024! Presenting a curated selection of iconic and classic vehicles for that perfect trip down memory lane...or the fast lane! Haven't had enough? Then head over to rhe Tower Level VIP parking for Overlander Lifestyle, another curated eye watering selection of overlander and battle rigs to satisfy your wandering heart Finally, pop in to the mezzanine level parking level for Cargasm, our park and display car meet featuring Cebu's premiere car clubs and organizations at the forefront of Cebu car culture. You can allso stroll through the different displays from Cebu's partcipating hobby groups who are bringing out the icons in their respective collections. Then finish up the weekend with a world class cosplay event from our partner Cebu Cosplayers Guild, either as a spectator or participant! Join us for three days of play, play, and more play! Because at SM, we've got it all for you!",
    projectDate: "September 20-22, 2024",
  },
  {
    image: frame3,
    id: "frame3",
    image2: frame3event3,
    eventName: "PROJECT: SOS",
    location: "Hiway 11, Talamban, Cebu City",
    details: "PROJECT: SOS",
    link: "https://www.sosphilippines.org/where-we-help/sos-cebu",
    information:
      "Join us for Project SOS at our massive event, Icons and Generations, held at SM Seaside Cebu! We are bringing the children from SOS Children's Villages Philippines to experience a day filled with love, excitement, and unforgettable memories. This special initiative is designed to show these wonderful kids that they are cherished by exposing them to a variety of fun activities, games, and interactive experiences. Let’s come together as a community to share joy, laughter, and warmth, and make a positive impact on their lives.Be a part of this meaningful celebration and help spread love and kindness!                                                                                                                                                                               CONTEXT: On August 30th, our team set out on a mission to make a difference. We visited SOS Children's Villages Philippines, a sanctuary for orphaned and abandoned children, with a plan to offer our support. The moment we stepped inside, we were greeted with smiles that instantly warmed our hearts. As we toured the village, we witnessed the incredible work being done to provide these children with a loving home, education, and hope for the future. Inspired by their dedication, we knew we had to do more. We offered our help, not just for a day, but for the long run. We formed a partnership with SOS Children's Villages, pledging to use every car race and event as a platform to spread awareness and amplify their cause. Our goal is to let more people know they exist, to show these children they are seen and loved, and to create opportunities for support from the community. With every rev of an engine and cheer of a crowd, we aim to remind people of the children whose lives we can all help change. This is just the beginning of a journey to bring light, hope, and love to those who need it most.",
    projectDate: "September 30, 2024",
  },
];
