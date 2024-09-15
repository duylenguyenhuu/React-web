import { deepPurple } from "@mui/material/colors";
import "./App.css";
import TitleSections from "./page/left/activities";
import Details from "./page/left/activities/detail";
import DetailProjects from "./page/left/activities/detailProject";
import Header from "./page/left/header";
import Avatar from "@mui/material/Avatar";
import Contacts from "./page/right/contact";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { ReactNode } from "react";
function App() {
  const list = [
    "+ Come up with ideas and logic for the game",
    "+ Build game flow,develop functionality",
  ];
  const listSkills = [
    "Unity",
    "C#",
    "Nodejs",
    "Reacts",
    "Figma",
    "Miro",
    "Jira",
    "Blender",
    "3dsmax",
  ];

  const contactList: { icon: ReactNode; text: string }[] = [
    {
      icon: <EmailOutlinedIcon />,
      text: "3darchteach@gmail.com",
    },
    {
      icon: <HomeOutlinedIcon />,
      text: "46 Con Dau 23,Hoa Xua,Da Nang",
    },
    {
      icon: <PhoneAndroidIcon />,
      text: "+84 985000446",
    },
  ];
  return (
    <div className="w-[1200px]">
      <div className="grid grid-cols-12 ">
        <div className="col-span-1"></div>
        <div className="col-span-7 border-l-2 border-l-gray-00 pt-10">
          <Header PersonName="QUANG NGUYEN" jobTitle="Game Developer" />
          <TitleSections title="EXPERIENCE">
            <Details
              startDate="Feb 2020"
              endDate="Nov 2022"
              project="GAME DEVELOPER"
              cty="FPT Complex"
              address="Da Nang, Viet Nam"
              describe="As a game developer,my teammates and Im have developer games that
              have ben highly appreciated by users and received city-level
              project awards."
            />
            <Details
              startDate="Jan 2022"
              endDate="Jul 2024"
              project="GAME DEVELOPER,GAME LEADER"
              cty="VACS Company"
              address="Da Nang, Viet Nam"
              describe="I have developed national level projects with my team for lap 5companies in Japan"
            />
          </TitleSections>
          <TitleSections title="EDUCATION">
            <Details
              startDate="Jul 2018"
              endDate="Nov 2020"
              project="SOFTWARE ENGINEER"
              cty="FPT University"
              address="Da Nang,Viet Nam"
            ></Details>
          </TitleSections>
          <TitleSections title="PROJECTS">
            <DetailProjects label="Name" content="MEDUVERSE" />
            <DetailProjects
              label="Description"
              content="Meduverse -Educational Platform developer by FPT Corporation. Freely explore create, learn and entertain in the
Meduverse universe - Where children can adventure with friends i n a vast and colorful world of knowledge."
            />
            <DetailProjects label="Role" content="Game Developer" />
            <DetailProjects
              label="Role in the project"
              content={
                <ul className="list-none">
                  {list.map((res) => (
                    <li>{res}</li>
                  ))}
                </ul>
              }
              sx="grid"
            />
            <DetailProjects
              label="Technology"
              content="Unity,Photon,Lua,C#,Nodejs"
            />
            <DetailProjects
              label="Link"
              content=" hips./play.google.com/store/apps/details"
            />
          </TitleSections>
        </div>
        <div className="col-span-4  bg-[#99A298] p-10">
          <div className="flex justify-center">
            <Avatar sx={{ bgcolor: deepPurple[500], width: 250, height: 250 }}>
              OP
            </Avatar>
          </div>
          <div className="my-10">
            {contactList.map(({ icon, text }) => (
              <Contacts icons={icon} texts={text} key={text} />
            ))}
          </div>
          <TitleSections title="OBJECTIVE" titleSx="text-black">
            <p className="text-[#3e423d]">
              Unity game development expert whti aver 4years al experience at
              prestigious companies. Received city-level project award
            </p>
          </TitleSections>
          <TitleSections title="SKILLS" titleSx="text-black">
            <ul className="list-disc">
              {listSkills.map((items) => (
                <li className="ml-[30px]">{items}</li>
              ))}
            </ul>
          </TitleSections>
          <TitleSections title="LANGUAGES" titleSx="text-black">
            <ul className="list-disc">
              <li className="ml-[30px]">Japan | Intermediate</li>
            </ul>
          </TitleSections>
        </div>
      </div>
    </div>
  );
}

export default App;
