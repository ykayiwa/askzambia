"""
AskZambia Data Hunter — Source URLs
Organized by category. Each entry: (url, title, category)
"""

# ── Wikipedia articles (reliable, structured, always accessible) ─────────────
WIKIPEDIA_SOURCES = [
    # Government & Politics
    ("Politics_of_Zambia", "Politics of Zambia", "government"),
    ("Cabinet_of_Zambia", "Cabinet of Zambia", "government"),
    ("Elections_in_Zambia", "Elections in Zambia", "government"),
    ("Foreign_relations_of_Zambia", "Foreign Relations of Zambia", "government"),
    ("Districts_of_Zambia", "Districts of Zambia", "government"),
    ("Provinces_of_Zambia", "Provinces of Zambia", "government"),
    ("Zambia_Police_Service", "Zambia Police Service", "government"),
    ("Zambia_Defence_Force", "Zambia Defence Force", "government"),
    ("Zambia_National_Broadcasting_Corporation", "ZNBC", "government"),
    ("Local_government_in_Zambia", "Local Government in Zambia", "government"),

    # Law & Judiciary
    ("Constitution_of_Zambia", "Constitution of Zambia", "law"),
    ("Judiciary_of_Zambia", "Judiciary of Zambia", "law"),
    ("Human_rights_in_Zambia", "Human Rights in Zambia", "law"),
    ("Law_of_Zambia", "Law of Zambia", "law"),
    ("Freedom_of_religion_in_Zambia", "Freedom of Religion in Zambia", "law"),
    ("LGBT_rights_in_Zambia", "LGBT Rights in Zambia", "law"),
    ("Women%27s_rights_in_Zambia", "Women's Rights in Zambia", "law"),
    ("Land_reform_in_Zambia", "Land Reform in Zambia", "law"),

    # Economy & Finance
    ("Economy_of_Zambia", "Economy of Zambia", "economy"),
    ("Mining_industry_of_Zambia", "Mining Industry of Zambia", "economy"),
    ("Zambian_kwacha", "Zambian Kwacha Currency", "economy"),
    ("Agriculture_in_Zambia", "Agriculture in Zambia", "economy"),
    ("Telecommunications_in_Zambia", "Telecommunications in Zambia", "economy"),
    ("Bank_of_Zambia", "Bank of Zambia", "economy"),
    ("Copperbelt_Province", "Copperbelt Province", "economy"),
    ("Energy_in_Zambia", "Energy in Zambia", "economy"),
    ("Kariba_Dam", "Kariba Dam", "economy"),
    ("Zambia_Development_Agency", "Zambia Development Agency", "economy"),
    ("Zambia_Revenue_Authority", "Zambia Revenue Authority", "economy"),
    ("Zambia_Stock_Exchange", "Zambia Stock Exchange", "economy"),
    ("Poverty_in_Zambia", "Poverty in Zambia", "economy"),
    ("Water_supply_and_sanitation_in_Zambia", "Water Supply in Zambia", "economy"),

    # Tourism & Geography
    ("Tourism_in_Zambia", "Tourism in Zambia", "tourism"),
    ("Victoria_Falls", "Victoria Falls", "tourism"),
    ("Lake_Kariba", "Lake Kariba", "tourism"),
    ("Lake_Tanganyika", "Lake Tanganyika", "tourism"),
    ("Lake_Bangweulu", "Lake Bangweulu", "tourism"),
    ("Zambezi", "Zambezi River", "tourism"),
    ("Kafue_National_Park", "Kafue National Park", "tourism"),
    ("South_Luangwa_National_Park", "South Luangwa National Park", "tourism"),
    ("Lower_Zambezi_National_Park", "Lower Zambezi National Park", "tourism"),
    ("North_Luangwa_National_Park", "North Luangwa National Park", "tourism"),
    ("Mosi-oa-Tunya_National_Park", "Mosi-oa-Tunya National Park", "tourism"),
    ("Kasanka_National_Park", "Kasanka National Park", "tourism"),
    ("Lilayi_Elephant_Nursery", "Lilayi Elephant Nursery", "tourism"),
    ("Livingstone,_Zambia", "Livingstone City", "tourism"),
    ("Lusaka", "Lusaka City", "tourism"),
    ("Ndola", "Ndola City", "tourism"),
    ("Kitwe", "Kitwe City", "tourism"),
    ("Kabwe", "Kabwe City", "tourism"),
    ("Chipata", "Chipata City", "tourism"),
    ("Solwezi", "Solwezi City", "tourism"),
    ("Geography_of_Zambia", "Geography of Zambia", "tourism"),
    ("Wildlife_of_Zambia", "Wildlife of Zambia", "tourism"),

    # Health
    ("Health_in_Zambia", "Health in Zambia", "health"),
    ("HIV/AIDS_in_Zambia", "HIV/AIDS in Zambia", "health"),
    ("COVID-19_pandemic_in_Zambia", "COVID-19 in Zambia", "health"),
    ("Malaria_in_Zambia", "Malaria in Zambia", "health"),
    ("University_Teaching_Hospital_(Lusaka)", "UTH Lusaka", "health"),

    # Education
    ("Education_in_Zambia", "Education in Zambia", "education"),
    ("University_of_Zambia", "University of Zambia (UNZA)", "education"),
    ("Copperbelt_University", "Copperbelt University (CBU)", "education"),
    ("Mulungushi_University", "Mulungushi University", "education"),
    ("Cavendish_University_Zambia", "Cavendish University Zambia", "education"),
    ("List_of_universities_in_Zambia", "Universities in Zambia", "education"),
    ("Examinations_Council_of_Zambia", "Examinations Council of Zambia", "education"),

    # Culture
    ("Culture_of_Zambia", "Culture of Zambia", "culture"),
    ("Music_of_Zambia", "Music of Zambia", "culture"),
    ("Zambian_cuisine", "Zambian Cuisine", "culture"),
    ("Languages_of_Zambia", "Languages of Zambia", "culture"),
    ("Bemba_language", "Bemba Language", "culture"),
    ("Nyanja_language", "Nyanja Language", "culture"),
    ("Tonga_language_(Zambia)", "Tonga Language", "culture"),
    ("Lozi_language", "Lozi Language", "culture"),
    ("Kuomboka", "Kuomboka Ceremony", "culture"),
    ("Nc%27wala", "Nc'wala Ceremony", "culture"),
    ("Likumbi_Lya_Mize", "Likumbi Lya Mize Ceremony", "culture"),
    ("Demographics_of_Zambia", "Demographics of Zambia", "culture"),
    ("Religion_in_Zambia", "Religion in Zambia", "culture"),
    ("Media_of_Zambia", "Media of Zambia", "culture"),
    ("Zambian_football", "Zambian Football", "culture"),
    ("Zambia_national_football_team", "Zambia National Football Team", "culture"),
    ("Zambia_at_the_Olympics", "Zambia at the Olympics", "culture"),

    # History
    ("History_of_Zambia", "History of Zambia", "culture"),
    ("Northern_Rhodesia", "Northern Rhodesia (Colonial Era)", "culture"),
    ("Kenneth_Kaunda", "Kenneth Kaunda", "culture"),
    ("Frederick_Chiluba", "Frederick Chiluba", "culture"),
    ("Hakainde_Hichilema", "President Hakainde Hichilema", "government"),

    # Immigration & Travel
    ("Visa_policy_of_Zambia", "Visa Policy of Zambia", "government"),
    ("Zambian_passport", "Zambian Passport", "government"),
    ("Transport_in_Zambia", "Transport in Zambia", "government"),
    ("Kenneth_Kaunda_International_Airport", "Kenneth Kaunda International Airport", "tourism"),
    ("Harry_Mwanga_Nkumbula_International_Airport", "Harry Mwanga Nkumbula Airport", "tourism"),
    ("Simon_Mwansa_Kapwepwe_International_Airport", "Simon Mwansa Kapwepwe Airport", "tourism"),
]

# ── Government & institutional websites ──────────────────────────────────────
WEB_SOURCES = [
    # Immigration
    ("https://www.zambiaimmigration.gov.zm/", "Zambia Immigration Department", "government"),
    ("https://www.zambiaimmigration.gov.zm/visa-services/", "Zambia Visa Services", "government"),
    ("https://www.zambiaimmigration.gov.zm/permit-services/", "Zambia Permit Services", "government"),
    ("https://www.zambiaimmigration.gov.zm/passport-services/", "Zambia Passport Services", "government"),
    ("https://www.zambiaimmigration.gov.zm/citizenship-services/", "Zambia Citizenship Services", "government"),

    # ZRA - Tax
    ("https://www.zra.org.zm/", "Zambia Revenue Authority", "government"),
    ("https://www.zra.org.zm/tax-types/income-tax/", "ZRA Income Tax", "economy"),
    ("https://www.zra.org.zm/tax-types/value-added-tax/", "ZRA Value Added Tax", "economy"),
    ("https://www.zra.org.zm/tax-types/customs-duty/", "ZRA Customs Duty", "economy"),

    # PACRA - Business Registration
    ("https://www.pacra.org.zm/", "PACRA Business Registration", "government"),
    ("https://www.pacra.org.zm/company-registration/", "PACRA Company Registration", "government"),
    ("https://www.pacra.org.zm/business-name-registration/", "PACRA Business Name Registration", "government"),

    # Tourism
    ("https://www.zambiatourism.com/", "Zambia Tourism Agency", "tourism"),
    ("https://www.zambiatourism.com/destinations/national-parks/", "Zambia National Parks", "tourism"),
    ("https://www.zambiatourism.com/destinations/waterfalls/", "Zambia Waterfalls", "tourism"),
    ("https://www.zambiatourism.com/destinations/lakes/", "Zambia Lakes", "tourism"),
    ("https://www.zambiatourism.com/about-zambia/", "About Zambia", "tourism"),
    ("https://www.zambiatourism.com/travel-info/", "Zambia Travel Info", "tourism"),

    # Bank of Zambia
    ("https://www.boz.zm/", "Bank of Zambia", "economy"),
    ("https://www.boz.zm/monetary-policy.htm", "BOZ Monetary Policy", "economy"),
    ("https://www.boz.zm/financial-sector-supervision.htm", "BOZ Financial Supervision", "economy"),

    # Education
    ("https://www.unza.zm/", "University of Zambia", "education"),
    ("https://www.cbu.ac.zm/", "Copperbelt University", "education"),
    ("https://www.exams-council.org.zm/", "Examinations Council of Zambia", "education"),

    # Health
    ("https://www.moh.gov.zm/", "Ministry of Health Zambia", "health"),

    # Legal & Parliament
    ("https://www.parliament.gov.zm/", "National Assembly of Zambia", "government"),
    ("https://www.judiciary.gov.zm/", "Judiciary of Zambia", "law"),

    # Development & Investment
    ("https://www.zda.org.zm/", "Zambia Development Agency", "economy"),
    ("https://www.zda.org.zm/invest-in-zambia/", "Invest in Zambia", "economy"),
    ("https://www.zda.org.zm/export-from-zambia/", "Export from Zambia", "economy"),

    # Statistics
    ("https://www.zamstats.gov.zm/", "Zambia Statistics Agency", "economy"),

    # Utilities & Infrastructure
    ("https://www.zesco.co.zm/", "ZESCO (Electricity)", "economy"),
    ("https://www.lwsc.com.zm/", "Lusaka Water Supply", "economy"),
]
