export interface ServiceBenefit {
    icon: string;
    title: string;
    description: string;
}

export interface ProcessStep {
    step: number;
    title: string;
    description: string;
}

export interface ServiceVertical {
    id: string;
    title: string;
    icon: string;
    tagline: string;
    description: string;
    solutions: string[];
    benefits: ServiceBenefit[];
    processSteps: ProcessStep[];
    industriesServed: string[];
    keyStats: { value: string; label: string }[];
}

export const SERVICE_VERTICALS: ServiceVertical[] = [
    {
        id: 'electrical-infrastructure',
        title: 'Electrical Infrastructure',
        icon: 'zap',
        tagline: 'Powering Industries, Ensuring Reliability',
        description: 'Complete electrical system design, installation, and maintenance for industrial facilities, ensuring reliable power distribution and safety compliance.',
        solutions: [
            'HT/LT Panel Design & Installation',
            'Power Distribution Systems',
            'Transformer Installation & Maintenance',
            'Electrical Load Analysis',
            'Energy Audits & Optimization',
            'Backup Power Solutions (DG Sets, UPS)',
            'Earthing & Lightning Protection',
            'Cable Management & Tray Systems',
            'Switchgear & Busbar Systems',
            'Power Factor Correction'
        ],
        benefits: [
            {
                icon: 'shield-check',
                title: 'Certified Safety Standards',
                description: 'All installations comply with IS, IEC, and NEC standards ensuring a safe and legally compliant electrical environment.'
            },
            {
                icon: 'zap',
                title: 'Uninterrupted Power',
                description: 'Robust system design with redundancy planning ensures minimal downtime and maximum operational continuity.'
            },
            {
                icon: 'trending-down',
                title: 'Energy Cost Reduction',
                description: 'Our energy audits and optimized power factor solutions help reduce your electricity bills by up to 30%.'
            },
            {
                icon: 'clock',
                title: 'Fast Turnaround',
                description: 'Experienced teams execute projects on schedule from panel fabrication to full commissioning.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Site Survey & Load Analysis', description: 'Detailed assessment of your facility\'s electrical demand and existing infrastructure.' },
            { step: 2, title: 'System Design & Engineering', description: 'CAD-based single-line diagrams, panel schedules, and full electrical design documentation.' },
            { step: 3, title: 'Procurement & Fabrication', description: 'Sourcing of quality-certified components and in-house panel fabrication.' },
            { step: 4, title: 'Installation & Testing', description: 'On-site installation by certified electricians followed by rigorous testing and commissioning.' },
            { step: 5, title: 'Handover & Training', description: 'Complete handover with O&M documentation and operator training.' }
        ],
        industriesServed: ['Manufacturing Plants', 'Pharmaceutical', 'Data Centres', 'Steel & Metallurgy', 'Chemical Plants', 'Commercial Complexes'],
        keyStats: [
            { value: '500+', label: 'Panels Installed' },
            { value: '99.9%', label: 'Uptime Guaranteed' },
            { value: '30%', label: 'Energy Savings' },
            { value: '15yr+', label: 'Experience' }
        ]
    },
    {
        id: 'industrial-automation',
        title: 'Industrial Automation',
        icon: 'cpu',
        tagline: 'Smarter Machines, Leaner Operations',
        description: 'Advanced automation solutions to enhance productivity, reduce downtime, and optimize manufacturing processes with cutting-edge technology.',
        solutions: [
            'PLC Programming & Integration',
            'SCADA Systems Implementation',
            'HMI Development',
            'Drive & Motor Control Systems',
            'Process Automation',
            'Robotics Integration',
            'Conveyor & Material Handling Automation',
            'Remote Monitoring & Control',
            'OEE Improvement Systems',
            'MES/ERP Integration'
        ],
        benefits: [
            {
                icon: 'trending-up',
                title: 'Productivity Boost',
                description: 'Automated processes can increase output by 40–60% while maintaining consistent quality with zero manual errors.'
            },
            {
                icon: 'activity',
                title: 'Real-Time Visibility',
                description: 'SCADA dashboards give you full live visibility into your production lines from anywhere in the world.'
            },
            {
                icon: 'shield',
                title: 'Reduced Human Risk',
                description: 'Automating hazardous processes keeps your workforce safe while improving throughput.'
            },
            {
                icon: 'refresh-cw',
                title: 'Quick ROI',
                description: 'Most automation projects pay for themselves within 18–24 months through labor and waste savings.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Process Analysis', description: 'We study your current manual or semi-automated process to identify bottlenecks and automation opportunities.' },
            { step: 2, title: 'Solution Architecture', description: 'Selection of PLC/SCADA platform, I/O sizing, network architecture, and HMI design.' },
            { step: 3, title: 'Programming & Development', description: 'Writing, testing, and simulation of all PLC logic and SCADA screens in our lab environment.' },
            { step: 4, title: 'Site Installation & Wiring', description: 'Control panel installation, field wiring, and device integration.' },
            { step: 5, title: 'Commissioning & FAT', description: 'Factory Acceptance Test followed by live commissioning and operator training at site.' }
        ],
        industriesServed: ['Automotive', 'Food & Beverage', 'Pharmaceuticals', 'Packaging', 'Cement & Mining', 'Textiles'],
        keyStats: [
            { value: '150+', label: 'Automation Projects' },
            { value: '40%', label: 'Avg. Productivity Gain' },
            { value: '24/7', label: 'Remote Support' },
            { value: '10+', label: 'PLC Platforms' }
        ]
    },
    {
        id: 'cctv-surveillance',
        title: 'CCTV & Surveillance',
        icon: 'camera',
        tagline: 'Eyes That Never Sleep',
        description: 'Comprehensive security surveillance systems with advanced monitoring, analytics, and 24/7 protection for your facilities.',
        solutions: [
            'IP Camera Installation',
            'NVR/DVR Setup & Configuration',
            'Video Analytics & AI Detection',
            'Remote Monitoring Solutions',
            'Access Control Integration',
            'Perimeter Security Systems',
            'Pan-Tilt-Zoom (PTZ) Systems',
            'License Plate Recognition (LPR)',
            'Thermal Imaging Cameras',
            'Video Management Software (VMS)'
        ],
        benefits: [
            {
                icon: 'eye',
                title: '24/7 Monitoring',
                description: 'Continuous surveillance with motion detection alerts ensures your facility is protected round the clock.'
            },
            {
                icon: 'brain',
                title: 'AI-Powered Analytics',
                description: 'Smart video analytics for intrusion detection, crowd analysis, and object recognition.'
            },
            {
                icon: 'smartphone',
                title: 'Remote Access',
                description: 'View live and recorded footage from any device, anywhere in the world via secure mobile apps.'
            },
            {
                icon: 'lock',
                title: 'Evidence & Compliance',
                description: 'High-definition recordings serve as legal evidence and help meet regulatory compliance requirements.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Security Audit & Site Survey', description: 'Identifying blind spots, entry/exit points, and coverage requirements of your facility.' },
            { step: 2, title: 'Camera Layout Design', description: 'Creating coverage maps and selection of appropriate camera types for each zone.' },
            { step: 3, title: 'Infrastructure Cabling', description: 'Cat6/Fiber cabling layout, conduit routing, and power provisioning.' },
            { step: 4, title: 'Installation & Configuration', description: 'Camera mounting, NVR setup, network configuration, and remote access enabling.' },
            { step: 5, title: 'Training & AMC', description: 'Operator training on VMS and ongoing Annual Maintenance Contract for service continuity.' }
        ],
        industriesServed: ['Warehouses & Logistics', 'Manufacturing Facilities', 'Educational Institutions', 'Hospitals', 'Retail Chains', 'Government Buildings'],
        keyStats: [
            { value: '5000+', label: 'Cameras Installed' },
            { value: '200+', label: 'Sites Secured' },
            { value: '4K', label: 'Resolution Capable' },
            { value: '99%', label: 'System Uptime' }
        ]
    },
    {
        id: 'instrumentation',
        title: 'Instrumentation & Control',
        icon: 'gauge',
        tagline: 'Precision Measurement, Flawless Control',
        description: 'Precision instrumentation and control systems for accurate measurement, monitoring, and process control in industrial environments.',
        solutions: [
            'Sensor & Transmitter Installation',
            'Control Valve Automation',
            'Flow, Pressure, Temperature Measurement',
            'Calibration Services',
            'DCS Implementation',
            'Safety Instrumented Systems (SIS)',
            'Analyser Systems Integration',
            'Junction Box & Control Panel Wiring',
            'Loop Checking & Commissioning',
            'HART & Fieldbus Communication'
        ],
        benefits: [
            {
                icon: 'target',
                title: 'High Accuracy',
                description: 'Precision instruments with ±0.1% accuracy ensure optimal process quality and consistency.'
            },
            {
                icon: 'activity',
                title: 'Process Optimization',
                description: 'Real-time measurement data drives automatic control loops for maximum process efficiency.'
            },
            {
                icon: 'shield-check',
                title: 'Safety Assurance',
                description: 'SIL-rated Safety Instrumented Systems protect personnel and equipment from hazardous conditions.'
            },
            {
                icon: 'database',
                title: 'Data Integrity',
                description: 'Digital field communication protocols ensure accurate, noise-free data transmission to control systems.'
            }
        ],
        processSteps: [
            { step: 1, title: 'P&ID Review & Instrument Tagging', description: 'Review of piping and instrumentation diagrams to identify and tag all measurement points.' },
            { step: 2, title: 'Instrument Selection & Sizing', description: 'Engineering selection of appropriate sensors, transmitters, and control valves for process conditions.' },
            { step: 3, title: 'Installation & Hook-Up', description: 'Field installation of instruments per applicable standards and hook-up drawings.' },
            { step: 4, title: 'Loop Checking & Calibration', description: 'End-to-end loop testing and precision calibration of all installed instruments.' },
            { step: 5, title: 'DCS/PLC Integration', description: 'Signal integration into control systems with full loop documentation handover.' }
        ],
        industriesServed: ['Oil & Gas', 'Petrochemical', 'Power Plants', 'Water Treatment', 'Pharmaceuticals', 'Food Processing'],
        keyStats: [
            { value: '2000+', label: 'Loops Commissioned' },
            { value: '±0.1%', label: 'Measurement Accuracy' },
            { value: 'SIL 2', label: 'Safety Rating' },
            { value: '100%', label: 'Loop Check Pass Rate' }
        ]
    },
    {
        id: 'fire-safety',
        title: 'Fire Safety & Alarm Systems',
        icon: 'flame',
        tagline: 'Protecting Lives, Safeguarding Assets',
        description: 'Comprehensive fire detection, alarm, and suppression systems to protect lives and assets with compliance to safety standards.',
        solutions: [
            'Fire Alarm System Design',
            'Smoke & Heat Detector Installation',
            'Fire Suppression Systems',
            'Emergency Lighting',
            'Fire Hydrant Systems',
            'Safety Compliance Audits',
            'Addressable Fire Alarm Panels',
            'Gas Suppression Systems (FM200, CO2)',
            'Sprinkler System Design',
            'Voice Evacuation Systems'
        ],
        benefits: [
            {
                icon: 'shield-check',
                title: 'Life Safety First',
                description: 'Certified fire detection systems with early warning capabilities that give occupants critical evacuation time.'
            },
            {
                icon: 'clipboard-check',
                title: 'Regulatory Compliance',
                description: 'All systems designed to NBC, IS 2189, and NFPA standards ensuring full statutory compliance.'
            },
            {
                icon: 'bell',
                title: 'Instant Alerting',
                description: 'Addressable systems pinpoint the exact location of an alarm for fastest emergency response.'
            },
            {
                icon: 'building-2',
                title: 'Asset Protection',
                description: 'Suppression systems protect expensive machinery and critical data infrastructure from fire damage.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Risk Assessment & Fire Strategy', description: 'Evaluation of fire hazards, occupancy type, and statutory requirements to define fire protection strategy.' },
            { step: 2, title: 'System Design', description: 'Detection layout, suppression zone design, and evacuation route planning as per NBC/NFPA.' },
            { step: 3, title: 'Equipment Supply & Installation', description: 'Supply of listed/certified equipment and installation by trained fire protection engineers.' },
            { step: 4, title: 'Testing & Commissioning', description: 'Functional testing of all detectors, alarms, suppression triggers, and integration with BMS.' },
            { step: 5, title: 'NOC Documentation & AMC', description: 'Assistance with Fire NOC documentation and ongoing maintenance contracts.' }
        ],
        industriesServed: ['Data Centres', 'Manufacturing Plants', 'Hotels & Hospitality', 'Hospitals', 'Shopping Malls', 'Warehouses'],
        keyStats: [
            { value: '300+', label: 'Systems Installed' },
            { value: '100%', label: 'NOC Success Rate' },
            { value: '<30s', label: 'Detection Response' },
            { value: 'NFPA', label: 'Certified Designs' }
        ]
    },
    {
        id: 'building-management',
        title: 'Building Management Systems (BMS)',
        icon: 'building',
        tagline: 'Intelligent Buildings, Efficient Operations',
        description: 'Integrated building automation for HVAC, lighting, and energy management to optimize comfort and reduce operational costs.',
        solutions: [
            'HVAC Control & Automation',
            'Lighting Control Systems',
            'Energy Management Solutions',
            'Building Analytics',
            'IoT Integration',
            'Centralized Monitoring Dashboard',
            'Chiller & AHU Control',
            'Demand Response Management',
            'Integration with Fire & Security',
            'Predictive Maintenance Alerts'
        ],
        benefits: [
            {
                icon: 'trending-down',
                title: 'Reduce Energy Bills',
                description: 'Intelligent BMS systems typically reduce energy consumption by 20–35% through automated scheduling and analytics.'
            },
            {
                icon: 'thermometer',
                title: 'Optimal Comfort',
                description: 'Automated HVAC control maintains consistent temperature and air quality for a productive environment.'
            },
            {
                icon: 'monitor',
                title: 'Single Pane of Glass',
                description: 'Manage all building systems — HVAC, lighting, security, and energy — from one central dashboard.'
            },
            {
                icon: 'leaf',
                title: 'Green Building Compliance',
                description: 'BMS helps achieve LEED and IGBC green building ratings through energy and water efficiency tracking.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Systems Audit & Integration Mapping', description: 'Cataloguing all existing building systems and defining integration points and protocols.' },
            { step: 2, title: 'BMS Architecture Design', description: 'Selection of BACnet/MODBUS compatible controllers and network topology design.' },
            { step: 3, title: 'Controller & Sensor Installation', description: 'Installation of DDC controllers, sensors, actuators, and communication gateways.' },
            { step: 4, title: 'Software Configuration', description: 'Programming control logic, schedules, alarms, and trending on the BMS platform.' },
            { step: 5, title: 'Commissioning & Training', description: 'Full system commissioning, dashboard setup, and handover training for facility managers.' }
        ],
        industriesServed: ['IT Parks & SEZs', 'Hospitals', 'Hotels', 'Commercial Offices', 'Airports', 'Educational Campuses'],
        keyStats: [
            { value: '30%', label: 'Energy Savings' },
            { value: '50+', label: 'BMS Projects' },
            { value: 'LEED', label: 'Green Certified' },
            { value: 'BACnet', label: 'Open Protocol' }
        ]
    },
    {
        id: 'renewable-energy',
        title: 'Renewable Energy Solutions',
        icon: 'sun',
        tagline: 'Harness the Sun, Power the Future',
        description: 'Sustainable energy solutions including solar power systems to reduce carbon footprint and energy costs.',
        solutions: [
            'Solar PV System Design',
            'Rooftop & Ground-Mount Installation',
            'Grid-Tied & Off-Grid Systems',
            'Solar Panel Maintenance',
            'Energy Storage Solutions',
            'Net Metering Setup',
            'Hybrid Solar + DG Systems',
            'Solar Water Pumping',
            'EPC Turnkey Solar Projects',
            'O&M Services for Solar Parks'
        ],
        benefits: [
            {
                icon: 'trending-down',
                title: 'Slash Electricity Bills',
                description: 'Industrial solar installations can offset 60–100% of your electricity costs with a payback period of 3–5 years.'
            },
            {
                icon: 'leaf',
                title: 'Carbon Neutral Goals',
                description: 'Reduce your Scope 2 emissions and demonstrate green credentials to customers and investors.'
            },
            {
                icon: 'sun',
                title: 'Energy Independence',
                description: 'Solar + storage combinations free you from grid dependency and protect against power outages.'
            },
            {
                icon: 'award',
                title: 'Government Incentives',
                description: 'We assist with MNRE subsidies, DISCOM approvals, and net metering applications for maximum financial benefit.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Solar Site Assessment', description: 'Rooftop structural analysis, shadow analysis, and solar irradiance study to size the system accurately.' },
            { step: 2, title: 'System Design & Yield Analysis', description: 'Panel layout design, inverter sizing, string configuration, and annual energy generation simulation.' },
            { step: 3, title: 'DISCOM & Net Metering Approvals', description: 'Liaison with electricity board for grid connectivity and net metering agreements.' },
            { step: 4, title: 'Installation & Commissioning', description: 'Mounting structure erection, panel installation, inverter wiring, and grid synchronization.' },
            { step: 5, title: 'Monitoring & O&M', description: 'Remote performance monitoring, periodic cleaning, and annual servicing for maximum yield.' }
        ],
        industriesServed: ['Industrial Factories', 'Warehouses', 'Educational Institutions', 'Hospitals', 'Agricultural Sector', 'Commercial Buildings'],
        keyStats: [
            { value: '25MW+', label: 'Capacity Installed' },
            { value: '5yr', label: 'Avg. Payback Period' },
            { value: '25yr', label: 'Panel Lifespan' },
            { value: '60%', label: 'Bill Reduction' }
        ]
    },
    {
        id: 'maintenance-services',
        title: 'Maintenance & AMC Services',
        icon: 'wrench',
        tagline: 'Keep Your Systems Running, Always',
        description: 'Preventive and corrective maintenance services to ensure maximum uptime and longevity of electrical and automation systems.',
        solutions: [
            'Annual Maintenance Contracts (AMC)',
            'Preventive Maintenance Programs',
            'Breakdown Maintenance',
            'Spare Parts Management',
            '24/7 Emergency Support',
            'Performance Optimization',
            'Thermal Imaging Audits',
            'Vibration Analysis',
            'Oil & Insulation Testing',
            'Relay Testing & Protection Coordination'
        ],
        benefits: [
            {
                icon: 'clock',
                title: 'Maximum Uptime',
                description: 'Scheduled preventive maintenance reduces unexpected breakdowns by up to 70%, keeping your plant running.'
            },
            {
                icon: 'phone',
                title: '24/7 Emergency Response',
                description: 'Our rapid response teams are on-call round the clock for immediate breakdown assistance, anywhere.'
            },
            {
                icon: 'trending-down',
                title: 'Lower Total Cost',
                description: 'AMC contracts bundle services at predictable costs, eliminating large unplanned maintenance expenses.'
            },
            {
                icon: 'file-check',
                title: 'Full Documentation',
                description: 'Detailed maintenance logs, inspection reports, and compliance certificates maintained for every asset.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Asset Inventory & Criticality Assessment', description: 'Complete inventory of all electrical and automation assets with criticality ranking.' },
            { step: 2, title: 'Preventive Maintenance Plan', description: 'Develop a scheduled PPM calendar with daily, weekly, monthly, and annual tasks.' },
            { step: 3, title: 'Contract Finalization', description: 'Agreeing on scope, SLAs, response times, and spare parts provisions in the AMC.' },
            { step: 4, title: 'Regular PPM Visits', description: 'Execution of scheduled maintenance activities by trained technicians with detailed reports.' },
            { step: 5, title: 'Annual Review & Renewal', description: 'End-of-year performance review, system condition report, and contract renewal discussion.' }
        ],
        industriesServed: ['All Industrial Sectors', 'Commercial Complexes', 'Hospitals', 'Data Centres', 'Hotels', 'Government Facilities'],
        keyStats: [
            { value: '100+', label: 'AMC Clients' },
            { value: '70%', label: 'Breakdown Reduction' },
            { value: '4hr', label: 'Emergency Response' },
            { value: '24/7', label: 'Helpdesk Support' }
        ]
    },
    {
        id: 'industrial-networking',
        title: 'Industrial Networking',
        icon: 'network',
        tagline: 'Connecting Machines, Empowering Decisions',
        description: 'Robust industrial network infrastructure for seamless communication between automation devices and enterprise systems.',
        solutions: [
            'Industrial Ethernet Setup',
            'Fiber Optic Cabling',
            'Wireless Industrial Networks',
            'Network Security Solutions',
            'VLAN Configuration',
            'OT/IT Integration',
            'Profinet & PROFIBUS Networks',
            'Network Redundancy (RSTP/MRP)',
            'Industrial Wireless (WirelessHART, Wi-Fi)',
            'Firewall & OT Security Implementation'
        ],
        benefits: [
            {
                icon: 'wifi',
                title: 'Zero Packet Loss',
                description: 'Industrial-grade managed switches and redundant topologies ensure deterministic, lossless data communication.'
            },
            {
                icon: 'shield',
                title: 'OT Cyber Security',
                description: 'Protect your operational technology network from cyber threats with industrial-grade firewalls and segmentation.'
            },
            {
                icon: 'layers',
                title: 'Seamless Integration',
                description: 'Bridge your PLC/SCADA network with ERP and IT systems for unified data flow across the enterprise.'
            },
            {
                icon: 'settings',
                title: 'Future-Ready Design',
                description: 'Scalable network architectures built to accommodate future expansions and Industry 4.0 technologies.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Network Assessment', description: 'Evaluation of existing network topology, bandwidth requirements, and cybersecurity posture.' },
            { step: 2, title: 'Architecture Design', description: 'Design of modular, layered network architecture with redundancy and security zones (Purdue Model).' },
            { step: 3, title: 'Cabling & Infrastructure', description: 'Installation of industrial-grade Ethernet cabling, fiber optic backbone, and patch panels.' },
            { step: 4, title: 'Device Configuration', description: 'Managed switch configuration, VLAN setup, redundancy protocols, and firewall rule implementation.' },
            { step: 5, title: 'Testing & Handover', description: 'End-to-end network testing, performance benchmarking, and network documentation handover.' }
        ],
        industriesServed: ['Smart Manufacturing', 'Oil & Gas', 'Power Utilities', 'Water Treatment', 'Automotive OEMs', 'Process Industries'],
        keyStats: [
            { value: '<1ms', label: 'Network Latency' },
            { value: '99.99%', label: 'Network Uptime' },
            { value: 'IEC 62443', label: 'Security Standard' },
            { value: '10G', label: 'Backbone Speed' }
        ]
    },
    {
        id: 'consulting-design',
        title: 'Engineering Consulting & Design',
        icon: 'pencil-ruler',
        tagline: 'Expert Minds, Engineered Solutions',
        description: 'Expert engineering consultation and detailed design services for electrical, automation, and EPC projects.',
        solutions: [
            'Feasibility Studies',
            'Detailed Engineering Design',
            'Project Management',
            'Vendor Selection & Procurement',
            'Compliance & Regulatory Support',
            'Turnkey EPC Solutions',
            'HAZOP & Risk Studies',
            'Value Engineering',
            'Construction Supervision',
            'As-Built Documentation'
        ],
        benefits: [
            {
                icon: 'lightbulb',
                title: 'Avoid Costly Mistakes',
                description: 'Upfront expert engineering eliminates rework costs and design errors that plague poorly planned projects.'
            },
            {
                icon: 'users',
                title: 'Single Point of Ownership',
                description: 'Our turnkey EPC approach gives you one accountable partner from concept to commissioning.'
            },
            {
                icon: 'clock',
                title: 'On-Time Delivery',
                description: 'Disciplined project management with milestones, risk registers, and schedule control keeps projects on track.'
            },
            {
                icon: 'dollar-sign',
                title: 'Cost Certainty',
                description: 'Detailed BoQ and value engineering exercises ensure your project is delivered within budget.'
            }
        ],
        processSteps: [
            { step: 1, title: 'Requirement Gathering', description: 'Detailed workshops with stakeholders to define project scope, objectives, and constraints.' },
            { step: 2, title: 'Feasibility & Concept Design', description: 'Techno-commercial feasibility study and preliminary concept designs with CAPEX estimates.' },
            { step: 3, title: 'Detailed Engineering', description: 'Production of complete engineering deliverables: drawings, specifications, data sheets, and BoQs.' },
            { step: 4, title: 'Procurement Support', description: 'Vendor pre-qualification, technical bid evaluation, and purchase order management.' },
            { step: 5, title: 'Construction & Handover', description: 'Site supervision, quality control, punch list clearance, and final project handover with documentation.' }
        ],
        industriesServed: ['New Greenfield Projects', 'Plant Expansions', 'Brownfield Upgrades', 'Infrastructure Projects', 'Public Sector Undertakings', 'Private Enterprises'],
        keyStats: [
            { value: '80+', label: 'EPC Projects Delivered' },
            { value: '100%', label: 'On-Time Delivery' },
            { value: '₹500Cr+', label: 'Projects Managed' },
            { value: '20+', label: 'Engineering Disciplines' }
        ]
    }
];
