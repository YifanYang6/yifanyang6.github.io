// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Public papers and preprints in AI for Software Engineering and AIOps.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Representative open-source artifacts and research tooling.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "projects-aegis",
          title: 'Aegis',
          description: "Unified workspace for experiment tooling and operations-focused systems engineering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aegis/";
            },},{id: "projects-chaos-experiment",
          title: 'chaos-experiment',
          description: "Fault injection tooling for controlled microservice RCA evaluation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chaos-experiment/";
            },},{id: "projects-gleaner",
          title: 'Gleaner',
          description: "Semantically rich online trace sampling for microservice diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gleaner/";
            },},];
