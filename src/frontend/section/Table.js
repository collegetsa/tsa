import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";

export default function Table() {
  const UniversityList = [
    {
      id: 1,
      name: "Anna University",
      logo: "/images/university/anna-university.png",
      location: "Chennai",
    },
    {
      id: 2,
      name: "Vellore Institute of Technology",
      logo: "/images/university/vit.png",
      location: "Vellore",
    },
    {
      id: 3,
      name: "SRM Institute of Science and Technology",
      logo: "/images/university/srm.png",
      location: "Chennai",
    },
    {
      id: 4,
      name: "SASTRA Deemed University",
      logo: "/images/university/shanmuga.png",
      location: "Thanjavur",
    },
    {
      id: 5,
      name: "Satyabama Institute of Science and Technology Business Incubator",
      logo: "/images/university/sathyabama.png",
      location: "Chennai",
    },
    {
      id: 6,
      name: "University of Madras",
      logo: "/images/university/madras.png",
      location: "Chennai",
    },
    {
      id: 7,
      name: "Annamalai University",
      logo: "/images/university/annamalai.png",
      location: "Annamalai Nagar",
    },
    {
      id: 8,
      name: "Kalasalingam Academy of Research and Education",
      logo: "/images/university/kalasalingam.png",
      location: "Krishnan Kovilr",
    },
    {
      id: 9,
      name: "Indian Institute Of Technology-Madras (IIT-Madras)",
      logo: "/images/university/iit-madras.png",
      location: "Chennai",
    },
    {
      id: 10,
      name: "Karunya Institute of Technology and Sciences (Deemed University)",
      logo: "/images/university/karunya.png",
      location: "Coimbatore",
    },
    {
      id: 11,
      name: "Hindustan Institute of Technology & Science",
      logo: "/images/university/hindustan.png",
      location: "Padur",
    },
    {
      id: 12,
      name: "B.S.Abdur Rahman Crescent Institute Of Science And Technology",
      logo: "/images/university/abdur.png",
      location: "Chennai",
    },
    {
      id: 13,
      name: "National Institute of Technology Tiruchirappalli",
      logo: "/images/university/nit.png",
      location: "Tiruchirappalli",
    },
    {
      id: 14,
      name: "Sri Ramachandra Institute of Higher Education and Research",
      logo: "/images/university/ramachandra.png",
      location: "Chennai",
    },
    {
      id: 15,
      name: "Amrita Vishwa Vidyapeetham, Coimbatore campus",
      logo: "/images/university/amirta.png",
      location: "Coimbatore",
    },
    {
      id: 16,
      name: "Alagappa University",
      logo: "/images/university/alagappa.png",
      location: "Karaikudi",
    },
    {
      id: 17,
      name: "Avinashilingam University",
      logo: "/images/university/avinashilingam.png",
      location: "Coimbatore",
    },
    {
      id: 18,
      name: "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV)",
      logo: "/images/university/chandrasekara.png",
      location: "Kanchipuram",
    },
    {
      id: 19,
      name: "Bharathiar University",
      logo: "/images/university/bharathiyar.png",
      location: "Coimbatore",
    },
    {
      id: 20,
      name: "Bharathidasan University",
      logo: "/images/university/bharathithasan.png",
      location: "Tiruchirappalli",
    },
    {
      id: 21,
      name: "Tamil Nadu Agricultural University",
      logo: "/images/university/tn-agriculture.png",
      location: "Coimbatore",
    },
    {
      id: 22,
      name: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
      logo: "/images/university/veltech.png",
      location: "Chennai",
    },
    {
      id: 23,
      name: "Dr. M.G.R. Educational And Research Institute university",
      logo: "/images/university/mgr.png",
      location: "Chennai",
    },
    {
      id: 24,
      name: "Central University of Tamil Nadu",
      logo: "/images/university/central.png",
      location: "Tiruvarur",
    },
    {
      id: 25,
      name: "The Gandhigram Rural Institute-Deemed to be University",
      logo: "/images/university/gandhigram.png",
      location: "Dindigul",
    },
    {
      id: 26,
      name: "Saveetha University",
      logo: "/images/university/saveetha.png",
      location: "Chennai",
    },
    {
      id: 27,
      name: "Madurai Kamaraj University",
      logo: "/images/university/kamarajar.png",
      location: "Madurai",
    },
    {
      id: 28,
      name: "Periyar University",
      logo: "/images/university/periyar.png",
      location: "Selam",
    },
    {
      id: 29,
      name: "Bharath Institute of Higher Education and Research",
      logo: "/images/university/bharath.png",
      location: "Chennai",
    },
    {
      id: 30,
      name: "Tamil Nadu Veterinary and Animal Sciences University (TANUVAS)",
      logo: "/images/university/tn-veterinary.png",
      location: "Chennai",
    },
    {
      id: 31,
      name: "Manonmaniam Sundaranar University",
      logo: "/images/university/manonmaniam.png",
      location: "Tirunelveli",
    },
    {
      id: 32,
      name: "Tamil Nadu Dr. Ambedkar Law University",
      logo: "/images/university/ambedkar.png",
      location: "Chennai",
    },
    {
      id: 33,
      name: "Karpagam Academy of Higher Education",
      logo: "/images/university/karpagam.png",
      location: "Coimbatore",
    },
    {
      id: 34,
      name: "Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram",
      logo: "/images/university/iit.png",
      location: "Chennai",
    },
    {
      id: 35,
      name: "Vinayaka Missions Research Foundation",
      logo: "/images/university/vinayaka.png",
      location: "Salem",
    },
    {
      id: 36,
      name: "PRIST Deemed to be University",
      logo: "/images/university/prist.png",
      location: "Coimbatore",
    },
    {
      id: 37,
      name: "PSG College Of Technology",
      logo: "/images/university/psg.png",
      location: "Coimbatore",
    },
    {
      id: 38,
      name: "Amet University",
      logo: "/images/university/amet.png",
      location: "Chennai",
    },
    {
      id: 39,
      name: "Tamil University",
      logo: "/images/university/tamilnadu.png",
      location: "Thanjavur",
    },
    {
      id: 40,
      name: "Tamil Nadu Teachers Education University",
      logo: "/images/university/tnteu.png",
      location: "Chennai",
    },
    {
      id: 41,
      name: "Chennai Mathematical Institute",
      logo: "/images/university/cmi.png",
      location: "Chennai",
    },
    {
      id: 42,
      name: "Rajiv Gandhi National Institute of Youth Development",
      logo: "/images/university/rajiv.png",
      location: "Chennai",
    },
    {
      id: 43,
      name: "Mother Teresa Women's University",
      logo: "/images/university/terasa.png",
      location: "Kodaikanal",
    },
    {
      id: 44,
      name: "Meenakshi Academy of Higher Education & Research (MAHER)",
      logo: "/images/university/meenakshi.png",
      location: "Kanchipuram",
    },
    {
      id: 45,
      name: "Thiruvalluvar University",
      logo: "/images/university/thiruvalluvar.png",
      location: "Vellore",
    },
    {
      id: 46,
      name: "Tamil Nadu Physical Education and Sports University",
      logo: "/images/university/physical.png",
      location: "Chennai",
    },
    {
      id: 47,
      name: "Sri Sivasubramaniya Nadar College of Engineering",
      logo: "/images/university/ssn.png",
      location: "Chennai",
    },
  ];

  const disPatch=useDispatch()
  return (
    <div className="table mb-30 mt-30">
      <table id="customers">
        <tbody>
          <tr>
            <th>#</th>
            <th>University lists in Tamilnadu</th>
            <th>Location</th>
            <th>Application 2024</th>
          </tr>
          {UniversityList.map((item) => (
            <tr
              key={item.id}
              className="cursor-pointer"
              onClick={() => {
                disPatch(
                  setForm({
                    isForm: true,
                    title: item?.name,
                    type: "admission",
                    logo: item?.logo,
                  })
                );
              }}>
              <td>{item.id}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={item.logo}
                    width={30}
                    height={30}
                    alt={item.name}
                  />
                  <span className="ml-20">{item.name}</span>
                </div>
              </td>
              <td>{item.location}</td>
              <td>Apply Now</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
