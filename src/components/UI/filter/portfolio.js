import React, { useEffect, useState } from "react";
import Toolbar from "../../common/toolbar/toolbar";
import ProjectList from "./projectList";

const projects = [
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers",
  },
];

const Portfolio = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const [selected, setSelected] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selected === "All") {
      setFilteredProjects(projects);
      return;
    }

    const filtered = projects.filter(
      (project) => project.category === selected
    );

    console.log("qq", selected, filtered);

    setFilteredProjects(filtered);
  }, [selected]);

  const handleSelected = (name) => {
    setSelected(name);
  };

  return (
    <div className="d-flex flex-column align-items-center my-2">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleSelected}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
