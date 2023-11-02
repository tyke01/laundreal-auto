import {
  BsFillLightningChargeFill,
  BsTruck,
  BsFillBriefcaseFill,
  BsClockHistory,
} from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import {
  MdSupportAgent,
  MdOutlineDiamond,
  MdMarkEmailUnread,
} from "react-icons/md";
import { TbIroning1 } from "react-icons/tb";
import { GiWashingMachine, GiVacuumCleaner } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { BiSolidDryer, BiSolidPhoneCall, BiCurrentLocation } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";

export const Features = [
  {
    id: 1,
    icon: <BsFillLightningChargeFill />,
    title: "Real_time monitoring of clothes",
    desc: "Trust your garments with our seasoned experts who excel in fabric care, stain removal, and preserving the quality of your clothes. Your wardrobe is in safe hands.",
  },
  {
    id: 2,
    icon: <FaMoneyBill />,
    title: "Online payment and booking services",
    desc: "Experience top-notch laundry and cleaning services without breaking the bank. We believe in providing exceptional quality at prices that fit your budget.",
  },
  {
    id: 3,
    icon: <BsTruck />,
    title: "Pick-and-Drop services",
    desc: " Easily book laundry services online and have your items picked up and delivered at your convenience.",
  },
  {
    id: 4,
    icon: <MdOutlineDiamond />,
    title: "Suppliers Availability eg. Detergents",
    desc: "We prioritize the availability of essential supplies, such as quality detergents, to ensure your laundry receives the best treatment. Our well-stocked inventory guarantees consistent cleaning excellence.",
  },
  {
    id: 5,
    icon: <MdSupportAgent />,
    title: "Customer Support",
    desc: "Have questions or concerns? Our customer support is available around the clock to assist you.",
  },
  {
    id: 6,
    icon: <MdSupportAgent />,
    title: "Customer Support",
    desc: "Have questions or concerns? Our customer support is available around the clock to assist you.",
  },
];

export const LeftServices = [
  {
    id: 1,
    icon: <TbIroning1 />,
    title: "IRONING",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 2,
    icon: <GiWashingMachine />,
    title: "WASHING",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 3,
    icon: <BsFillBriefcaseFill />,
    title: "BUSINESS LAUNDRY",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 4,
    icon: <LiaIndustrySolid />,
    title: "Washing",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
];

export const RightService = [
  {
    id: 1,
    icon: <BiSolidDryer />,
    title: "Dry Cleaning",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 2,
    icon: <BsTruck />,
    title: "Laundry Pickup",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 3,
    icon: <IoMdBusiness />,
    title: "Corporate Laundry",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
  {
    id: 4,
    icon: <GiVacuumCleaner />,
    title: "Specialty Cleaning",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet excepturi reprehenderit itaque perferendis molestiae eaque?",
  },
];

export const ReviewsData = [
  {
    id: 1,
    img: "washing-machine-1.png",
    name: "Sonny Deol",
    title: "Jonitor DC",
    content: `I can't believe the level of help and customer service he
    provided. I don't think I could have reached my deadline
    without him.`,
    link: "www.dcentertaiment.com",
  },
  {
    id: 2,
    img: "image 2.png",
    name: "Brayo manU",
    title: "Google Developer",
    content: `i thought the designs are flexible to implement, Actually his service are quite good, truly recommended`,
    link: "www.google.com",
  },
  {
    id: 3,
    img: "washing-machine-2.jpg",
    name: "crazy Roby",
    title: "Dota gaming",
    content: `I can't believe the level of help and customer service he
    provided. I don't think I could have reached my deadline
    without him.`,
    link: "www.dota.com",
  },
  {
    id: 4,
    img: "washing-machine-cartoon.png",
    name: "Techy Gamer",
    title: "Ceo Layer",
    content: `Hello, I have purchased and used this template. everything is working great!.`,
    link: "www.layer.com",
  },
];

export const ContactInfo = [
  {
    id: 1,
    icon: <BiCurrentLocation />,
    title: "Nairobi Office",
    details: "127 Mars alley, Mars, Milky Way",
  },
  {
    id: 2,
    icon: <BiSolidPhoneCall />,
    title: "Telephone",
    details: [
      "+245 123 456 789",
      "+245 123 456 789",
    ],
  },
  {
    id: 3,
    icon: <MdMarkEmailUnread />,
    title: "Mail Us",
    details: [
      "email1@example.com",
      "email2@example.com",
    ],
  },
  {
    id: 4,
    icon: <BsClockHistory />,
    title: "Opening Hours",
    details: [
      "mon - fri: 7:00 - 5:30",
      "sat - sun: 10:00 - 5:30",
    ],
  },
];
