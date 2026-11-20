// 9 Core Enterprise Solutions Data
const SOLUTIONS_DATA = [
  {
    title: "Network Solutions",
    icon: "network",
    short: "Core switching, enterprise routing, SD-WAN, and high-density wireless deployments.",
    details: "We design, supply, and deploy resilient wired and wireless campus/data-center networks using Cisco, Ubiquiti, Extreme Networks, and Juniper hardware.",
    deliverables: [
      "Core & edge switches (1G/10G/40G/100G)",
      "Enterprise Wi-Fi 6/7 site surveys & controllers",
      "SD-WAN & multi-branch VPN architecture"
    ]
  },
  {
    title: "Data Center Solutions",
    icon: "database",
    short: "End-to-end data center consultation, rack design, power/UPS, and thermal engineering.",
    details: "Complete turnkey data center buildouts and upgrades—from cabinet layout and structured fiber cabling to redundant power distribution.",
    deliverables: [
      "Rack cabinets, PDUs, and APC/Eaton/Vertiv UPS systems",
      "Hot/cold aisle containment & environmental monitoring",
      "Pre-staged rack-and-stack commissioning"
    ]
  },
  {
    title: "Server Solutions",
    icon: "server",
    short: "High-density rack, blade, and tower compute servers configured to workload specs.",
    details: "Custom-configured enterprise servers from Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem, and Supermicro with rapid spare-parts support.",
    deliverables: [
      "Virtualization & database host clusters",
      "GPU compute nodes for AI & rendering",
      "OEM & third-party post-warranty SLAs"
    ]
  },
  {
    title: "Storage Solutions",
    icon: "hard-drive",
    short: "All-flash NVMe arrays, hybrid SAN/NAS appliances, and enterprise backup repositories.",
    details: "High-throughput storage infrastructure built for low-latency databases, media workflows, and immutable disaster recovery.",
    deliverables: [
      "NetApp, Dell EMC, Synology & QNAP enterprise arrays",
      "Enterprise SAS/NVMe drives & RAID controllers",
      "Veeam & Acronis backup storage targets"
    ]
  },
  {
    title: "Video Surveillance",
    icon: "cctv",
    short: "IP camera networks, NVR appliances, and AI-assisted facility monitoring systems.",
    details: "Commercial-grade IP security cameras and video management software for warehouses, offices, retail sites, and campuses.",
    deliverables: [
      "Axis Communications, Milestone & Arlo commercial systems",
      "PoE switching & high-retention NVR storage",
      "Multi-site centralized security monitoring"
    ]
  },
  {
    title: "Computing Solutions",
    icon: "laptop",
    short: "Corporate workstations, laptops, thin clients, docking stations, and display ecosystems.",
    details: "End-user computing procurement with bulk imaging, asset tagging, and direct-to-desk deployment.",
    deliverables: [
      "Commercial laptops, CAD workstations & thin clients",
      "Ultrawide monitors, conference room AV & peripherals",
      "Bulk corporate rollout & trade-in buybacks"
    ]
  },
  {
    title: "Cyber Security",
    icon: "shield-alert",
    short: "Next-gen firewalls, endpoint protection, zero-trust access, and email security.",
    details: "Protect critical infrastructure against ransomware and intrusions with hardware appliances and managed threat defense.",
    deliverables: [
      "Fortinet FortiGate, SonicWall & WatchGuard firewalls",
      "Endpoint detection & Bitdefender/CrowdStrike licensing",
      "Network segmentation & vulnerability audits"
    ]
  },
  {
    title: "Cloud Solutions",
    icon: "cloud",
    short: "Hybrid cloud infrastructure, virtualization licensing, and cloud backup migration.",
    details: "Bridge on-premise servers with private and public cloud workloads for optimal cost control and business continuity.",
    deliverables: [
      "VMware, Microsoft & Red Hat virtualization stacks",
      "Hybrid cloud disaster recovery & replication",
      "Workload cost optimization & licensing audits"
    ]
  },
  {
    title: "Retail Solutions",
    icon: "shopping-bag",
    short: "Point-of-sale (POS) terminals, barcode scanners, receipt printers, and store networking.",
    details: "Durable retail technology built for high-transaction storefronts, warehouses, and hospitality venues.",
    deliverables: [
      "Elo touchscreens, Zebra scanners & Star Micronics printers",
      "Rugged handheld inventory terminals & cash drawers",
      "Rapid next-day advance hardware replacement"
    ]
  }
];

// Enterprise Hardware & Software Brands Directory
const BRANDS_DATA = [
  { name: "10ZiG Technology", category: "Computing & AV" },
  { name: "3M", category: "Computing & AV" },
  { name: "Acronis", category: "Cybersecurity" },
  { name: "Advantech", category: "Servers & Storage" },
  { name: "Alcatel-Lucent", category: "Networking" },
  { name: "Allied Telesis", category: "Networking" },
  { name: "AMD", category: "Servers & Storage" },
  { name: "APC (Schneider)", category: "Servers & Storage" },
  { name: "Apple", category: "Computing & AV" },
  { name: "Aruba Networks", category: "Networking" },
  { name: "ASRock Rack", category: "Servers & Storage" },
  { name: "Asus", category: "Computing & AV" },
  { name: "Axis Communications", category: "Cybersecurity" },
  { name: "Barco", category: "Computing & AV" },
  { name: "Belkin", category: "Networking" },
  { name: "Bitdefender", category: "Cybersecurity" },
  { name: "Brocade", category: "Networking" },
  { name: "Brother", category: "Computing & AV" },
  { name: "Buffalo Americas", category: "Servers & Storage" },
  { name: "Canon", category: "Computing & AV" },
  { name: "Cisco Systems", category: "Networking" },
  { name: "Commvault", category: "Servers & Storage" },
  { name: "Cradlepoint", category: "Networking" },
  { name: "Crestron", category: "Computing & AV" },
  { name: "D-Link", category: "Networking" },
  { name: "Datalogic", category: "Computing & AV" },
  { name: "Dell Technologies", category: "Servers & Storage" },
  { name: "Eaton Power", category: "Servers & Storage" },
  { name: "Elo Touch Solutions", category: "Computing & AV" },
  { name: "Epson", category: "Computing & AV" },
  { name: "Extreme Networks", category: "Networking" },
  { name: "Fortinet", category: "Cybersecurity" },
  { name: "Fujitsu", category: "Servers & Storage" },
  { name: "Hewlett Packard Enterprise (HPE)", category: "Servers & Storage" },
  { name: "HP Inc.", category: "Computing & AV" },
  { name: "Huawei Enterprise", category: "Networking" },
  { name: "IBM Corporation", category: "Servers & Storage" },
  { name: "Intel Corporation", category: "Servers & Storage" },
  { name: "Jabra", category: "Computing & AV" },
  { name: "Kaspersky", category: "Cybersecurity" },
  { name: "Kingston Technology", category: "Servers & Storage" },
  { name: "Kioxia", category: "Servers & Storage" },
  { name: "Lenovo", category: "Servers & Storage" },
  { name: "LG Electronics", category: "Computing & AV" },
  { name: "Logitech", category: "Computing & AV" },
  { name: "Mellanox / Nvidia", category: "Networking" },
  { name: "Micron Technology", category: "Servers & Storage" },
  { name: "Microsoft", category: "Computing & AV" },
  { name: "Milestone Systems", category: "Cybersecurity" },
  { name: "NetApp", category: "Servers & Storage" },
  { name: "Netgear", category: "Networking" },
  { name: "Nutanix", category: "Servers & Storage" },
  { name: "Poly / Polycom", category: "Computing & AV" },
  { name: "Proofpoint", category: "Cybersecurity" },
  { name: "QNAP Systems", category: "Servers & Storage" },
  { name: "Quantum", category: "Servers & Storage" },
  { name: "Red Hat", category: "Servers & Storage" },
  { name: "Ricoh", category: "Computing & AV" },
  { name: "Samsung Enterprise", category: "Servers & Storage" },
  { name: "Seagate Technology", category: "Servers & Storage" },
  { name: "SonicWall", category: "Cybersecurity" },
  { name: "Star Micronics", category: "Computing & AV" },
  { name: "Supermicro", category: "Servers & Storage" },
  { name: "Synology", category: "Servers & Storage" },
  { name: "TP-Link Enterprise", category: "Networking" },
  { name: "Tripp Lite", category: "Servers & Storage" },
  { name: "Ubiquiti Networks", category: "Networking" },
  { name: "Veeam Software", category: "Servers & Storage" },
  { name: "Vertiv", category: "Servers & Storage" },
  { name: "ViewSonic", category: "Computing & AV" },
  { name: "VMware", category: "Servers & Storage" },
  { name: "WatchGuard", category: "Cybersecurity" },
  { name: "Western Digital", category: "Servers & Storage" },
  { name: "Xerox", category: "Computing & AV" },
  { name: "Zebra Technologies", category: "Computing & AV" },
  { name: "Zyxel Communications", category: "Networking" }
];