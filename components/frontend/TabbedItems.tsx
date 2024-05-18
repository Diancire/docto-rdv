"use client";
import { Tabs } from "flowbite-react";
import ServiceList from "./services/ServiceList";
import LinkCards from "./doctors/LinkCards";
import { FaTooth, FaEye } from "react-icons/fa";
import { FaHeartPulse, FaBrain, FaUserDoctor } from "react-icons/fa6";
import { GiKneeCap, GiBrain } from "react-icons/gi";
import { BsEarFill } from "react-icons/bs";

export default function TabbedItems() {
  const services = [
    {
      title: "Médecin Généraliste",
      icon: <FaUserDoctor />,
      slug: "medecin-generaliste"
    },
    {
      title: "Dentiste",
      icon: <FaTooth />,
      slug: "dentiste"
    },
    {
      title: "Cardialogie",
      icon: <FaHeartPulse />,
      slug: "cardiologie"
    },
    {
      title: "Orthopedie",
      icon: <GiKneeCap />,
      slug: "orthopedie"
    },
    {
      title: "Neurologie",
      icon: <FaBrain />,
      slug: "neurologie"
    },
    {
      title: "Otologie",
      icon: <BsEarFill />,
      slug: "otologie"
    },
    {
      title: "Chirurgie",
      icon: <FaUserDoctor />,
      slug: "chirurgie"
    },
    {
      title: "Psychologie",
      icon: <GiBrain />,
      slug: "psychologie"
    },
    {
      title: "Ophtalmologie",
      icon: <FaEye />,
      slug: "ophtalmologie"
    },

  ]
  const tabs = [
    {
        title:"Spécialités",
        component: <ServiceList data={services}/>,
        content:[]
    },
    {
        title:"Symptômes",
        component: <LinkCards />,
        content:[]
    }
]
  return (
    <Tabs aria-label="Tabs with underline" style="underline">
      {
        tabs.map((item, index) => {
          return (
            <Tabs.Item active title={item.title}  key={index}>
              {item.component}
            </Tabs.Item>
          )
        })
      }
    </Tabs>
    
  );
}
