import { CVData } from '@/types';

export const cvData: CVData = {
  work_experiences: [
    {
      employer: "Kangarootime",
      location: "USA",
      duration: "2022 - 2025",
      role: "Ruby on Rails Developer (senior)",
      responsibilities: [
        "Built complex agency billing solutions using Rails patterns, integrating seamlessly with existing billing infrastructure while maintaining data integrity and system performance.",
        "Built reliable billing updates and interactive dashboard features using industry best practices, eliminating the need for heavy JavaScript frameworks while delivering responsive user experiences.",
        "Orchestrated a complete payment processor migration with zero downtime using Rails background jobs and careful data modeling.",
        "Developed comprehensive internal support tools from scratch using Rails with dynamic filtering and data visualization through progressive enhancement techniques.",
        "Designed and executed complex schema migrations with ActiveRecord, implementing optimized changes while maintaining 24/7 application availability.",
        "Integrated mission-critical communication APIs (SMS/email) with robust error handling and retry mechanisms using Sidekiq."
      ],
      technologies: [
        "ruby-on-rails",
        "hotwire",
        "stimulus-js",
        "turbo-frames",
        "vanilla-js",
        "react.js",
        "lua",
        "api-integrations",
        "job-scheduling",
        "resque/sidekiq",
        "AWS"
      ]
    },
    {
      employer: "Bloom Solutions Inc.",
      location: "Philippines",
      duration: "2017 - 2022",
      role: "Ruby on Rails Developer (mid)",
      responsibilities: [
        "Built blockchain-based ICO platform using Rails with secure wallet integration and token purchase management, handling high-value financial transactions with strict security requirements.",
        "Developed and maintained core remittance application using Rails best practices, ensuring 99.9% uptime and maintaining data accuracy across international money transfers.",
        "Implemented Stimulus controllers for interactive trading interfaces, providing real-time feedback without page refreshes while keeping JavaScript minimal and focused.",
        "Architected and deployed modular Rails engines and custom gems to share code across multiple applications, reducing duplication and improving maintainability.",
        "Integrated feature flags using Rails conventions to safely deploy and rollback features in production environments.",
        "Documented Rails patterns, conventions, and deployment procedures for both internal tools and customer-facing platforms."
      ],
      technologies: [
        "ruby-on-rails",
        "rubygems",
        "rails-engines",
        "api-integrations",
        "stimulus-js",
        "vanilla-js",
        "react-js",
        "docker",
        "sidekiq",
        "stellar-network",
        "bitcoin"
      ]
    },
    {
      employer: "FlexiSource Inc.",
      location: "Philippines",
      duration: "2016 - 2017",
      role: "Ruby on Rails Developer (mid)",
      responsibilities: [
        "Implemented robust API integration solutions for a promotional ticketing platform, ensuring optimal performance and security.",
        "Assisted with the development of an API backend that dynamically renders and delivers modular view components, making it easier to make changes across the application (both mobile and web)."
      ],
      technologies: [
        "rails-api",
        "vuejs"
      ]
    },
    {
      employer: "YouSource Inc.",
      location: "Philippines",
      duration: "2013 - 2016",
      role: "Ruby on Rails Developer (junior)",
      responsibilities: [
        "Optimized customer onboarding workflows in a Rails healthcare platform, improving processing time by streamlining form validations and database queries.",
        "Built custom features for multi-tenant healthcare application using Rails scoping and concerns, ensuring data isolation and tenant-specific functionality.",
        "Collaborated with stakeholders to estimate features and troubleshoot billing workflow issues using Rails debugging tools and logs.",
        "Maintained and enhanced Rails application serving multiple healthcare organizations with distinct requirements while preserving shared codebase.",
        "Documented Rails workflows, conventions, and feature guides for both end users and developers."
      ],
      technologies: [
        "ruby-on-rails",
        "workflow",
        "api-integrations",
        "mysql",
        "mongodb",
        "vanilla-js",
        "multitenancy"
      ]
    },
    {
      employer: "EGG (now Yondu)",
      location: "Philippines",
      duration: "2012 - 2013",
      role: "Java Developer",
      responsibilities: [
        "Developed and implemented portlets on the Liferay platform for a major telecommunications provider.",
        "Identified and resolved critical memory management issues in a high-traffic application, resulting in improved system stability.",
        "Implemented comprehensive diagnostic procedures to isolate processes and simplify the whole debugging workflow.",
        "Collaborated with other teams to successfully deliver and deploy applications within a limited deploy window."
      ],
      technologies: [
        "spring-framework",
        "java-applets",
        "vanilla-js",
        "liferay-framework"
      ]
    }
  ],
  education: [
    {
      name: "AMA University",
      course: "Bachelor's Degree in Information Technology",
      major: "Major in Computer Networking",
      years: "2009 - 2012",
      highlights: [
        "Cisco Academy Skills Competition 2011: 1st Place - Nationals (Advanced Category)",
        "Cisco Academy Skills Competition 2012: Champion - Cluster D Elimination (Advanced Category)",
        "Cisco Academy Skills Competition 2012: National Finalist (Advanced Category)"
      ]
    }
  ],
  skills: [
    "Ruby on Rails",
    "Progressive Enhancement",
    "Stimulus JS",
    "ViewComponent",
    "PostgreSQL",
    "Resque / Sidekiq (background jobs)",
    "RSpec / MiniTest",
    "Third Party API Integrations",
    "Tailwind CSS",
    "React JS (when needed)"
  ],
  tools: [
    "Git",
    "Neovim",
    "Tmux",
    "Capistrano",
    "Kamal",
    "Continuous Integration",
    "A/B Testing",
    "Logging",
    "Error Reporting"
  ],
  side_projects: [
    {
      name: "Napagastos",
      description: "Simple expense tracker for daily spending habits",
      stack: [
        "ruby-on-rails",
        "tailwindcss"
      ]
    },
    {
      name: "One Rep. Every Day",
      web_url: "https://onerep.day",
      description: "365-day Bulgarian split squat challenge",
      stack: [
        "react.js",
        "tailwindcss",
        "notion-api"
      ]
    },
    {
      name: "TypeLit",
      description: "Typing practice app using your own books",
      stack: [
        "ruby-on-rails",
        "tailwindcss"
      ]
    },
    {
      name: "League Rosters",
      description: "Directory of League of Legends teams and rosters.",
      stack: [
        "ruby-on-rails",
        "web-scraping",
        "background-jobs",
      ]
    },
    {
      name: "League Directory",
      description: "Directory of League of Legends champions, skills, and items.",
      stack: [
        "ruby-on-rails",
        "api",
      ]
    },
    {
      name: "My Ride Log",
      web_url: "https://marksinmotion.bike",
      description: "Cycling metrics dashboard synced with Strava",
      stack: [
        "ruby-on-rails",
        "strava-api",
        "webhooks",
        "d3.js"
      ]
    },
    {
      name: "Lynding",
      description: "Loan management system for a local business",
      stack: [
        "ruby-on-rails",
        "tailwindcss"
      ]
    },
    {
      name: "CrewKit",
      description: "Team management system",
      stack: [
        "ruby-on-rails",
        "tailwindcss"
      ]
    },
    {
      name: "lol_data_fetcher-ruby",
      description: "Ruby gem for League of Legends Data Dragon API",
      stack: [
        "ruby-on-rails",
        "tailwindcss",
        "data-dragon-api",
        "cli"
      ]
    },
    {
      name: "Axie Scholar Management",
      description: "Scholar tracking and payment management",
      stack: [
        "ruby-on-rails",
        "hotwire",
        "turbo-streams",
        "sidekiq"
      ]
    },
    {
      name: "COVID-19 Daily SMS Alerts",
      description: "Automated COVID-19 SMS alert system",
      stack: [
        "ruby-on-rails",
        "sidekiq-cron",
        "sms-api",
        "scheduled-jobs"
      ]
    }
  ]
};
