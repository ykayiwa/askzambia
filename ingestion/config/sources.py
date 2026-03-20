"""Data source configuration for AskZambia ingestion pipeline."""

MVP_SOURCES = [
    {
        "name": "Constitution of Zambia (2016)",
        "url": "https://www.constituteproject.org/constitution/Zambia_2016",
        "category": "law",
        "format": "html",
    },
    {
        "name": "Zambia Laws - Acts of Parliament",
        "url": "https://www.zambialaws.com",
        "category": "law",
        "format": "html",
    },
    {
        "name": "PACRA Business Registration",
        "url": "https://www.pacra.org.zm",
        "category": "government",
        "format": "html",
    },
    {
        "name": "ZRA Tax Guide",
        "url": "https://www.zra.org.zm",
        "category": "government",
        "format": "html",
    },
    {
        "name": "Immigration Department",
        "url": "https://www.zambiaimmigration.gov.zm",
        "category": "government",
        "format": "html",
    },
    {
        "name": "ZamStats Open Data",
        "url": "https://zambia.opendataforafrica.org",
        "category": "economy",
        "format": "json",
    },
    {
        "name": "Bank of Zambia Reports",
        "url": "https://www.boz.zm",
        "category": "economy",
        "format": "pdf",
    },
    {
        "name": "Ministry of Health",
        "url": "https://www.moh.gov.zm",
        "category": "health",
        "format": "html",
    },
]
