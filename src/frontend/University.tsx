"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { isForm } from "@/redux/FormSlice";

const UniversityList = [
  {
    id: 1,
    name: "Anna University",
    logo: "/image/university/anna-university.png",
    location: "Chennai",
  },
  {
    id: 2,
    name: "Vellore Institute of Technology",
    logo: "/image/university/vit.png",
    location: "Vellore",
  },
  {
    id: 3,
    name: "SRM Institute of Science and Technology",
    logo: "/image/university/srm.png",
    location: "Chennai",
  },
  {
    id: 4,
    name: "SASTRA Deemed University",
    logo: "/image/university/shanmuga.png",
    location: "Thanjavur",
  },
  {
    id: 5,
    name: "Satyabama Institute of Science and Technology Business Incubator",
    logo: "/image/university/sathyabama.png",
    location: "Chennai",
  },
  {
    id: 6,
    name: "University of Madras",
    logo: "/image/university/madras.png",
    location: "Chennai",
  },
  {
    id: 7,
    name: "Annamalai University",
    logo: "/image/university/annamalai.png",
    location: "Annamalai Nagar",
  },
  {
    id: 8,
    name: "Kalasalingam Academy of Research and Education",
    logo: "/image/university/kalasalingam.png",
    location: "Krishnan Kovilr",
  },
  {
    id: 9,
    name: "Indian Institute Of Technology-Madras (IIT-Madras)",
    logo: "/image/university/iit-madras.png",
    location: "Chennai",
  },
  {
    id: 10,
    name: "Karunya Institute of Technology and Sciences (Deemed University)",
    logo: "/image/university/karunya.png",
    location: "Coimbatore",
  },
  {
    id: 11,
    name: "Hindustan Institute of Technology & Science",
    logo: "/image/university/hindustan.png",
    location: "Padur",
  },
  {
    id: 12,
    name: "B.S.Abdur Rahman Crescent Institute Of Science And Technology",
    logo: "/image/university/abdur.png",
    location: "Chennai",
  },
  {
    id: 13,
    name: "National Institute of Technology Tiruchirappalli",
    logo: "/image/university/nit.png",
    location: "Tiruchirappalli",
  },
  {
    id: 14,
    name: "Sri Ramachandra Institute of Higher Education and Research",
    logo: "/image/university/ramachandra.png",
    location: "Chennai",
  },
  {
    id: 15,
    name: "Amrita Vishwa Vidyapeetham, Coimbatore campus",
    logo: "/image/university/amirta.png",
    location: "Coimbatore",
  },
  {
    id: 16,
    name: "Alagappa University",
    logo: "/image/university/alagappa.png",
    location: "Karaikudi",
  },
  {
    id: 17,
    name: "Avinashilingam University",
    logo: "/image/university/avinashilingam.png",
    location: "Coimbatore",
  },
  {
    id: 18,
    name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)",
    logo: "/image/university/chandrasekara.png",
    location: "Kanchipuram",
  },
  {
    id: 19,
    name: "Bharathiar University",
    logo: "/image/university/bharathiyar.png",
    location: "Coimbatore",
  },
  {
    id: 20,
    name: "Bharathidasan University",
    logo: "/image/university/bharathithasan.png",
    location: "Tiruchirappalli",
  },
  {
    id: 21,
    name: "Tamil Nadu Agricultural University",
    logo: "/image/university/tn-agriculture.png",
    location: "Coimbatore",
  },
  {
    id: 22,
    name: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
    logo: "/image/university/veltech.png",
    location: "Chennai",
  },
  {
    id: 23,
    name: "Dr. M.G.R. Educational And Research Institute university",
    logo: "/image/university/mgr.png",
    location: "Chennai",
  },
  {
    id: 24,
    name: "Central University of Tamil Nadu",
    logo: "/image/university/central.png",
    location: "Tiruvarur",
  },
  {
    id: 25,
    name: "The Gandhigram Rural Institute-Deemed to be University",
    logo: "/image/university/gandhigram.png",
    location: "Dindigul",
  },
  {
    id: 26,
    name: "Saveetha University",
    logo: "/image/university/saveetha.png",
    location: "Chennai",
  },
  {
    id: 27,
    name: "Madurai Kamaraj University",
    logo: "/image/university/kamarajar.png",
    location: "Madurai",
  },
  {
    id: 28,
    name: "Periyar University",
    logo: "/image/university/periyar.png",
    location: "Selam",
  },
  {
    id: 29,
    name: "Bharath Institute of Higher Education and Research",
    logo: "/image/university/bharath.png",
    location: "Chennai",
  },
  {
    id: 30,
    name: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
    logo: "/image/university/tn-veterinary.png",
    location: "Chennai",
  },
  {
    id: 31,
    name: "Manonmaniam Sundaranar University",
    logo: "/image/university/manonmaniam.png",
    location: "Tirunelveli",
  },
  {
    id: 32,
    name: "Tamil Nadu Dr. Ambedkar Law University",
    logo: "/image/university/ambedkar.png",
    location: "Chennai",
  },
  {
    id: 33,
    name: "Karpagam Academy of Higher Education",
    logo: "/image/university/karpagam.png",
    location: "Coimbatore",
  },
  {
    id: 34,
    name: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
    logo: "/image/university/iit.png",
    location: "Chennai",
  },
  {
    id: 35,
    name: "Vinayaka Missions Research Foundation",
    logo: "/image/university/vinayaka.png",
    location: "Salem",
  },
  {
    id: 36,
    name: "PRIST Deemed to be University",
    logo: "/image/university/prist.png",
    location: "Coimbatore",
  },
  {
    id: 37,
    name: "PSG College Of Technology",
    logo: "/image/university/psg.png",
    location: "Coimbatore",
  },
  {
    id: 38,
    name: "Amet University",
    logo: "/image/university/amet.png",
    location: "Chennai",
  },
  {
    id: 39,
    name: "Tamil University",
    logo: "/image/university/tamilnadu.png",
    location: "Thanjavur",
  },
  {
    id: 40,
    name: "Tamil Nadu Teachers Education University",
    logo: "/image/university/tnteu.png",
    location: "Chennai",
  },
  {
    id: 41,
    name: "Chennai Mathematical Institute",
    logo: "/image/university/cmi.png",
    location: "Chennai",
  },
  {
    id: 42,
    name: "Rajiv Gandhi National Institute of Youth Development",
    logo: "/image/university/rajiv.png",
    location: "Chennai",
  },
  {
    id: 43,
    name: "Mother Teresa Women's University",
    logo: "/image/university/terasa.png",
    location: "Kodaikanal",
  },
  {
    id: 44,
    name: "Meenakshi Academy of Higher Education & Research (MAHER)",
    logo: "/image/university/meenakshi.png",
    location: "Kanchipuram",
  },
  {
    id: 45,
    name: "Thiruvalluvar University",
    logo: "/image/university/thiruvalluvar.png",
    location: "Vellore",
  },
  {
    id: 46,
    name: "Tamil Nadu Physical Education and Sports University",
    logo: "/image/university/physical.png",
    location: "Chennai",
  },
  {
    id: 47,
    name: "Sri Sivasubramaniya Nadar College of Engineering",
    logo: "/image/university/ssn.png",
    location: "Chennai",
  },
];

export default function University() {
  const disPatch = useDispatch();
  return (
    <div className="d-flex justify-content-center mt-30 mb-50">
      <div className="university">
        <h4 className="fw-600 text-center mb-30">
          Top Universities in Tamilnadu 2024
        </h4>
        <div className="university-card" onClick={() => disPatch(isForm(true))}>
          {UniversityList.map((university, id) => (
            <div
              key={university.id}
              className="d-flex gap-3 university-template"
            >
              <Image
                src={university.logo}
                alt={university.name}
                width={50}
                height={50}
              />
              <div>
                <p>{university.name}</p>
                <p>{university.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
