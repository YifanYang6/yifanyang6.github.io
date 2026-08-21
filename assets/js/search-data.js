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
        },{id: "news-our-paper-dynacausal-dynamic-causality-aware-root-cause-analysis-for-distributed-microservices-is-available-as-an-arxiv-preprint",
          title: '🎉 Our paper “DynaCausal: Dynamic Causality-Aware Root Cause Analysis for Distributed Microservices” is...',
          description: "",
          section: "News",},{id: "news-our-paper-rethinking-the-evaluation-of-microservice-rca-with-a-fault-propagation-aware-benchmark-was-directly-accepted-by-fse-2026-direct-accept-87-920-9-5",
          title: '🎉 Our paper “Rethinking the Evaluation of Microservice RCA with a Fault Propagation-Aware...',
          description: "",
          section: "News",},{id: "news-our-paper-gleaner-a-semantically-rich-and-efficient-online-sampler-for-microservice-diagnostics-was-directly-accepted-by-issta-2026-direct-acceptance-rate-90-888-10-1",
          title: '🎉 Our paper “Gleaner: A Semantically-Rich and Efficient Online Sampler for Microservice Diagnostics”...',
          description: "",
          section: "News",},{id: "news-joined-the-acm-ccs-2026-artifact-evaluation-program-committee",
          title: 'Joined the ACM CCS 2026 Artifact Evaluation Program Committee.',
          description: "",
          section: "News",},{id: "news-joined-the-ndss-2027-artifact-evaluation-program-committee",
          title: 'Joined the NDSS 2027 Artifact Evaluation Program Committee.',
          description: "",
          section: "News",},{id: "news-joined-the-acm-sosp-2026-artifact-evaluation-program-committee",
          title: 'Joined the ACM SOSP 2026 Artifact Evaluation Program Committee.',
          description: "",
          section: "News",},{id: "news-our-paper-openrca-2-0-from-outcome-labels-to-causal-process-supervision-is-available-as-an-arxiv-preprint",
          title: '🎉 Our paper “OpenRCA 2.0: From Outcome Labels to Causal Process Supervision” is...',
          description: "",
          section: "News",},{id: "news-the-official-version-of-our-paper-rethinking-the-evaluation-of-microservice-rca-with-a-fault-propagation-aware-benchmark-was-published-in-proceedings-of-the-acm-on-software-engineering-fse-2026",
          title: '🎉 The official version of our paper “Rethinking the Evaluation of Microservice RCA...',
          description: "",
          section: "News",},{id: "news-joined-the-asplos-2027-artifact-evaluation-program-committee",
          title: 'Joined the ASPLOS 2027 Artifact Evaluation Program Committee.',
          description: "",
          section: "News",},{id: "projects-aegis",
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
