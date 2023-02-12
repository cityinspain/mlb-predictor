import { DndList } from "@/components/DndList";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   document.addEventListener("contextmenu", (event) => event.preventDefault());
  // }, []);

  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
        <div className="">
          <h1 className="text-3xl text-center font-bold py-4">AL WEST</h1>
          <DndList
            data={[
              { position: 0, name: "Astros", id: "astros", color: "#EB6E1F" },
              { position: 1, name: "Angels", id: "angels", color: "#BA0021" },
              {
                position: 2,
                name: "Athletics",
                id: "athletics",
                color: "#003831",
              },
              {
                position: 3,
                name: "Mariners",
                id: "mariners",
                color: "#005C5C",
              },
              { position: 4, name: "Rangers", id: "rangers", color: "#003278" },
            ]}
          ></DndList>
        </div>

        <div>
          <h1 className="text-3xl text-center font-bold py-4">AL CENTRAL</h1>
          <DndList
            data={[
              {
                position: 0,
                name: "White Sox",
                id: "whitesox",
                color: "#27251F",
              },
              {
                position: 1,
                name: "Guardians",
                id: "guardians",
                color: "#E50022",
              },
              { position: 2, name: "Tigers", id: "tigers", color: "#0C2340" },
              { position: 3, name: "Royals", id: "royals", color: "#004687" },
              { position: 4, name: "Twins", id: "twins", color: "#002B5C" },
            ]}
          ></DndList>
        </div>

        <div>
          <h1 className="text-3xl text-center font-bold py-4">AL EAST</h1>
          <DndList
            data={[
              { position: 0, name: "Orioles", id: "orioles", color: "#DF4601" },
              { position: 1, name: "Red Sox", id: "redsox", color: "#BD3039" },
              { position: 2, name: "Yankees", id: "yankees", color: "#003087" },
              { position: 3, name: "Rays", id: "rays", color: "#092C5C" },
              {
                position: 4,
                name: "Blue Jays",
                id: "bluejays",
                color: "#134A8E",
              },
            ]}
          ></DndList>
        </div>

        <div>
          <h1 className="text-3xl text-center font-bold py-4">NL WEST</h1>
          <DndList
            data={[
              {
                position: 0,
                name: "Diamondbacks",
                id: "diamondbacks",
                color: "#A71930",
              },
              { position: 1, name: "Rockies", id: "rockies", color: "#333366" },
              { position: 2, name: "Dodgers", id: "dodgers", color: "#005A9C" },
              { position: 3, name: "Padres", id: "padres", color: "#2F241D" },
              { position: 4, name: "Giants", id: "giants", color: "#FD5A1E" },
            ]}
          ></DndList>
        </div>

        <div>
          <h1 className="text-3xl text-center font-bold py-4">NL CENTRAL</h1>
          <DndList
            data={[
              { position: 0, name: "Cubs", id: "cubs", color: "#0E3386" },
              { position: 1, name: "Reds", id: "reds", color: "#C6011F" },
              { position: 2, name: "Brewers", id: "brewers", color: "#12284B" },
              { position: 3, name: "Pirates", id: "pirates", color: "#FDB827" },
              {
                position: 4,
                name: "Cardinals",
                id: "cardinals",
                color: "#C41E3A",
              },
            ]}
          ></DndList>
        </div>

        <div>
          <h1 className="text-3xl text-center font-bold py-4">NL EAST</h1>
          <DndList
            data={[
              { position: 0, name: "Braves", id: "braves", color: "#CE1141" },
              { position: 1, name: "Marlins", id: "marlins", color: "#00A3E0" },
              { position: 2, name: "Mets", id: "mets", color: "#002D72" },
              {
                position: 3,
                name: "Phillies",
                id: "phillies",
                color: "#E81828",
              },
              {
                position: 4,
                name: "Nationals",
                id: "nationals",
                color: "#AB0003",
              },
            ]}
          ></DndList>
        </div>
      </div>
    </>
  );
}
