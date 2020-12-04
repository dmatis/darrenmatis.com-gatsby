import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { Kubernetes } from '@icons-pack/react-simple-icons';
export default [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "Front-End",
    text: `Professional experience with the React eco-system. I especially enjoy working with GraphQL and TypeScript.`,
  },
  {
    id: 2,
    icon: <FaNodeJs className="service-icon" />,
    title: "Back-End",
    text: `Worked extensively with NodeJS and have experience with a wide range of Analytics tools such as Kibana and New Relic. In the past, I have worked with Java and Ruby on Rails.`,
  },
  {
    id: 3,
    icon: <Kubernetes className="service-icon" />,
    title: "Infrastructure",
    text: `Developed domain expertise in Kubernetes, Docker and multiple cloud platforms such as AWS, Azure and GCP.`,
  },
]
