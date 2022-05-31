import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import img1 from "../../assets/images/ship1.jpeg";
import img2 from "../../assets/images/air1.jpg";
import img3 from "../../assets/images/port.jpg";
import img4 from "../../assets/images/air2.jpg";
import img5 from "../../assets/images/for.jpeg";
import img6 from "../../assets/images/save1.jpg";
import img7 from "../../assets/images/nice.jpg";
import img8 from "../../assets/images/4.jpg";
import img9 from "../../assets/images/2.jpg";
import img10 from "../../assets/images/work.jpg";
import img11 from "../../assets/images/work1.jpg";

import "./detail.css";
import "../course/cor.css";
import Tr from "./Tr";
import Side from "./Side";

const Detail = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const para = useParams();

  const img = () => {
    switch (para.id) {
      case "air":
        return img2;
      case "water":
        return img1;
      case "passport":
        return img3;
      case "visa":
        return img3;
      case "clear":
        return img5;
      case "permanent":
        return img6;
      case "study":
        return img9;
      case "work":
        return img11;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ background: "whitesmoke" }}
    >
      <div
        className="course__container1"
        style={{
          background: `linear-gradient(
      90deg,
      rgba(39, 13, 167, 0.7049194677871149) 0%,
      rgba(255, 254, 0, 0.6264880952380952) 99%,
      rgba(121, 119, 9, 1) 100%
    ), url(${img()})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <h1 style={{ color: "white", fontSize: "4rem" }}>
          {(() => {
            switch (para.id) {
              case "air":
                return "Air Frieght";
              case "water":
                return "Water Frieght";
              case "passport":
                return "Passport Processing";
              case "visa":
                return "Visa Processing";
              case "clear":
                return "Forwarding And Clearing";
              case "permanent":
                return "Permanent Residency";
              case "study":
                return "Study Your Bachelor's Abroad";
                case "work":
                return "Work Abroad With US";
              default:
                return null;
            }
          })()}
        </h1>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingBlock: "7rem",
          gap: "10px",
        }}
      >
        <Side />

        {(() => {
          switch (para.id) {
            case "air":
              return (
                <Tr
                  title={img4}
                  head="Air Frieght"
                  data="We offer airport-to-airport Air Freight Services worldwide to any airport worldwide with customs clearance services available anywhere."
                  data1="We have excellent relationship with all major shipping lines and enjoy. Need it urgent, need it to be delivered within a limited time. Air freight is the ideal option for time constraint shipments"
                  services={[
                    "Pickup of cargo from your Door step",
                    "Flight booking to match your requirements",
                    "Flight booking to match your requirements",
                  ]}
                />
              );
            case "water":
              return (
                <Tr
                  title={img1}
                  head="Water Frieght"
                  data="Maritime Logistics offers a robust and efficient Sea freight service from the UK. With over 20 years’ experience in the Industry we pride ourselves on achieving results above expectations."
                  data1="Our worldwide network covering over 140 countries enables us to handle all our clients Import, Export and Cross trade Sea Cargo movements of all types globally door to door while providing them with the technical expertise related to the proper documents needed for various banks and LC’s"
                  services={[
                    "Full container (FCL) of all sizes",
                    "Partial Shipment (LCL – Less Container Load)",
                    "Full and Part Charter services",
                    "Project Sea Freight Cargo",
                    "Cross & Exhibition shipments",
                    "Break Bulk and RORO cargo",
                    "Global Groupage/ Consolidation service",
                    "Flexible freight options (Direct / Transshipment)",
                    "Trans-shipment Cargo (Multimodal Sea – Air/Land)",
                  ]}
                />
              );
            case "clear":
              return (
                <Tr
                  title={img5}
                  head="Clearing And Forwarding"
                  data="We handle all of your logistics paper with legal authorization."
                  // data1="hello"
                />
              );
            case "visa":
              return (
                <Tr
                  title={img3}
                  head="Visa Processing"
                  data="You need a visa!!!, HappiTravel and Logistics can help you process a visa in a most efficient, legitimate and timely bound manner"
                  services={[
                    "Fill in forms and advise of Visa application",
                    "Tourist Visa",
                    "Student Visa",
                    "Medical Visa",
                    "Working Visa",
                  ]}
                  // data1="hello"
                />
              );
            case "passport":
              return (
                <Tr
                  title={img3}
                  head="Passport Processing"
                  data="Process your passport with Happi Travel and logistics. With a long experience in travel field, we assure you a valid and timely processing of your passport to meet with your timely travel expectation"
                  // data1="hello"
                />
              );
            case "study":
              return (
                <Tr
                  title={img8}
                  head="Study Abroad"
                  data="Study your Bachelor's Degree in Europe with a fully funded scholarship in Marketing, Civil Engineering, Petroleum Engineering, Computer Science and Technology, Medial  Caregiver, Cosmetologist, Business Administration, Procurement and Logistics, Hospitality Programs and Accounting and Finance."
                  data1="Your Proffessional Career Path is rightfully secured with the rigth education you need to make it through and see yourself grow as your career also grows."
                  services={["Free Tution", "Free Accomadation"]}
                  hey="true"
                />
              );
            case "work":
              return (
                <Tr
                  title={img10}
                  head="Work Abroad"
                  data="Work abroad with legitmate credential and face no restriction"
                  data1="We help work in Poland, Canada, US, Isreal and Hungray"
                  services={["Work Permits"]}
                />
              );
            case "permanent":
              return (
                <Tr
                  title={img7}
                  head="Permanent Residency"
                  data="Our worldwide network covering over 140 countries enables us to handle all our clients Import, Export and Cross trade Sea Cargo movements of all types globally door to door while providing them with the technical expertise related to the proper documents needed for various banks and LC’s"
                  // data1="hello"
                />
              );
            default:
              return (
                <Tr title={img2} head="Air Frieght" data="hey" data1="hello" />
              );
          }
        })()}
      </div>
    </motion.div>
  );
};

export default Detail;
