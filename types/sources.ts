export interface RetrievedChunk {
  id: string;
  content: string;
  chunk_index: number;
  source_name: string;
  source_url: string | null;
  category: string;
  similarity: number;
}

export interface DataSource {
  name: string;
  url: string;
  category: string;
  format: "html" | "pdf" | "json" | "csv";
  description: string;
}

export const MVP_SOURCES: DataSource[] = [
  {
    name: "Constitution of Zambia (2016)",
    url: "https://www.constituteproject.org/constitution/Zambia_2016",
    category: "law",
    format: "html",
    description: "The supreme law of the Republic of Zambia",
  },
  {
    name: "Zambia Laws (Acts of Parliament)",
    url: "https://www.zambialaws.com",
    category: "law",
    format: "html",
    description: "Full text of Zambian legislation",
  },
  {
    name: "PACRA Business Registration",
    url: "https://www.pacra.org.zm",
    category: "government",
    format: "html",
    description: "Business registration and compliance",
  },
  {
    name: "ZRA Tax Guide",
    url: "https://www.zra.org.zm",
    category: "government",
    format: "html",
    description: "Tax rates, filing, and compliance",
  },
  {
    name: "Immigration Department",
    url: "https://www.zambiaimmigration.gov.zm",
    category: "government",
    format: "html",
    description: "Visas, passports, and permits",
  },
  {
    name: "ZamStats Open Data",
    url: "https://zambia.opendataforafrica.org",
    category: "economy",
    format: "json",
    description: "National statistics and economic data",
  },
  {
    name: "Bank of Zambia Reports",
    url: "https://www.boz.zm",
    category: "economy",
    format: "pdf",
    description: "Monetary policy and financial reports",
  },
  {
    name: "Ministry of Health",
    url: "https://www.moh.gov.zm",
    category: "health",
    format: "html",
    description: "Public health information and guidelines",
  },
];
