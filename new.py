import os
os.system("""curl 'https://colleague-ss.uoguelph.ca/Student/Courses/SearchAsync' \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H '__RequestVerificationToken: kw9Tl0RRb6pfZzLTpLCHTutVAoT7ogDHEJxeBBVG61Ky5ROc2JMG1zL5K__WoEfAEQerKbVyShvFxwW_gi8Oq5plBewa1nF2P1svD33DZ_Q1' \
  -H 'Content-Type: application/json, charset=UTF-8' \
  -H 'Sec-GPC: 1' \
  -H 'Origin: https://colleague-ss.uoguelph.ca' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: https://colleague-ss.uoguelph.ca/Student/Courses/Search?keyword=' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Cookie: __RequestVerificationToken_L1N0dWRlbnQ1=-28Z9XVZ8RkR2g1F0OUgd3aJOYH9D7C08HBTBPCS2orz02m7imZ8GMmshlO6uAlEyj1Gi7qWRl8bTaBYB4kWLVLXaz4F8JZFb8mOwbvuFv81; OAMAuthnHintCookie=1' \
  --data-raw '{"searchParameters":"{\"keyword\":\"\",\"terms\":[],\"requirement\":null,\"subrequirement\":null,\"courseIds\":null,\"sectionIds\":null,\"requirementText\":null,\"subrequirementText\":\"\",\"group\":null,\"startTime\":0,\"endTime\":1440,\"openSections\":false,\"subjects\":[],\"academicLevels\":[\"UG\"],\"courseLevels\":[],\"synonyms\":[],\"courseTypes\":[],\"topicCodes\":[],\"days\":[],\"locations\":[\"G\"],\"faculty\":[],\"onlineCategories\":[],\"keywordComponents\":[],\"startDate\":null,\"endDate\":null,\"startsAtTime\":null,\"endsByTime\":null,\"pageNumber\":1,\"sortOn\":2,\"sortDirection\":0,\"subRequirementText\":null,\"quantityPerPage\":30,\"openAndWaitlistedSections\":false,\"searchResultsView\":\"CatalogListing\"}"}' \
  --compressed""")