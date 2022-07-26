export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - test",
        totalResults: "123000000",
        searchTerms: "test",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "ab89c4a0f50b51ee7",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - test",
        totalResults: "123000000",
        searchTerms: "test",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "ab89c4a0f50b51ee7",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.543467,
    formattedSearchTime: "0.54",
    totalResults: "123000000",
    formattedTotalResults: "123,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Android Beta Program",
      htmlTitle: "Android Beta Program",
      link: "https://www.google.com/android/beta",
      displayLink: "www.google.com",
      snippet:
        "Android 13 Beta is now available and gives you early access to test new ... If you would like to continue beta testing, you can enroll in the Android 13 ...",
      htmlSnippet:
        "Android 13 Beta is now available and gives you early access to <b>test</b> new ... If you would like to continue beta <b>testing</b>, you can enroll in the Android 13&nbsp;...",
      cacheId: "AUFDLyB7DUsJ",
      formattedUrl: "https://www.google.com/android/beta",
      htmlFormattedUrl: "https://www.google.com/android/beta",
      pagemap: {
        metatags: [
          {
            "application-name": "Android Beta Program",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "black",
            "msapplication-tap-highlight": "no",
            viewport: "width=device-width, initial-scale=1.0",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "Android Beta Program",
            "mobile-web-app-capable": "yes",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "UNLEASH THE ARCHERS - Test Your Metal (Official Video ...",
      htmlTitle:
        "UNLEASH THE ARCHERS - <b>Test</b> Your Metal (Official Video ...",
      link: "https://www.google.com/sorry/index?continue=https://m.youtube.com/watch%3Fv%3D2yctXV3uHBs&q=EgRC-UYbGJ_t2ooGIhD8i_ldSfbx8IsvxBEIYE0BMgI-Yw",
      displayLink: "www.google.com",
      snippet:
        "Jul 15, 2015 ... UNLEASH THE ARCHERS - Test Your Metal (Official Video) | Napalm Records. 1,827,031 views1.8M views. Jul 15, 2015.",
      htmlSnippet:
        "Jul 15, 2015 <b>...</b> UNLEASH THE ARCHERS - <b>Test</b> Your Metal (Official Video) | Napalm Records. 1,827,031 views1.8M views. Jul 15, 2015.",
      formattedUrl:
        "https://www.google.com/sorry/index?continue=https://m...com/...",
      htmlFormattedUrl:
        "https://www.google.com/sorry/index?continue=https://m...com/...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYUL1wUT0_tdmgx5iGHE9YdGLiKfSKwGZ1xnyr01KKstBCjmdKzMCan-9D",
            width: "300",
            height: "168",
          },
        ],
        imageobject: [
          {
            width: "1280",
            url: "https://i.ytimg.com/vi/2yctXV3uHBs/maxresdefault.jpg",
            height: "720",
          },
        ],
        person: [
          {
            name: "Napalm Records",
            url: "http://www.youtube.com/user/napalmrecords",
          },
        ],
        metatags: [
          {
            "og:image": "https://i.ytimg.com/vi/2yctXV3uHBs/maxresdefault.jpg",
            "theme-color": "rgba(255,255,255,0.98)",
            "og:image:width": "1280",
            "twitter:card": "player",
            "og:site_name": "YouTube",
            "twitter:url": "https://www.youtube.com/watch?v=2yctXV3uHBs",
            "al:android:package": "com.google.android.youtube",
            title:
              "UNLEASH THE ARCHERS - Test Your Metal (Official Video) | Napalm Records",
            "al:ios:url":
              "vnd.youtube://www.youtube.com/watch?v=2yctXV3uHBs&feature=applinks",
            "twitter:app:id:iphone": "544007664",
            "og:description":
              'Order "Time Stands Still" now! http://shop.napalmrecords.com/unleashthearchersNA customers: www.napalmrecordsamerica.com/store/unleashthearchersiTunes: http:...',
            "al:ios:app_store_id": "544007664",
            "twitter:image":
              "https://i.ytimg.com/vi/2yctXV3uHBs/maxresdefault.jpg",
            "twitter:site": "@youtube",
            "og:video:type": "text/html",
            "og:video:height": "720",
            "og:video:url": "https://www.youtube.com/embed/2yctXV3uHBs",
            "og:type": "video.other",
            "twitter:title":
              "UNLEASH THE ARCHERS - Test Your Metal (Official Video) | Napalm Records",
            "al:ios:app_name": "YouTube",
            "og:title":
              "UNLEASH THE ARCHERS - Test Your Metal (Official Video) | Napalm Records",
            "og:image:height": "720",
            "al:web:url":
              "http://www.youtube.com/watch?v=2yctXV3uHBs&feature=applinks",
            "og:video:secure_url": "https://www.youtube.com/embed/2yctXV3uHBs",
            "og:video:tag": "Napalm",
            "og:video:width": "1280",
            "al:android:url":
              "vnd.youtube://www.youtube.com/watch?v=2yctXV3uHBs&feature=applinks",
            "fb:app_id": "87741124305",
            "twitter:description":
              'Order "Time Stands Still" now! http://shop.napalmrecords.com/unleashthearchersNA customers: www.napalmrecordsamerica.com/store/unleashthearchersiTunes: http:...',
            "og:url": "https://www.youtube.com/watch?v=2yctXV3uHBs",
            "al:android:app_name": "YouTube",
            "twitter:app:name:iphone": "YouTube",
          },
        ],
        videoobject: [
          {
            embedurl: "https://www.youtube.com/embed/2yctXV3uHBs",
            playertype: "HTML5 Flash",
            isfamilyfriendly: "true",
            uploaddate: "2015-07-15",
            description:
              'Order "Time Stands Still" now! http://shop.napalmrecords.com/unleashthearchersNA customers: www.napalmrecordsamerica.com/store/unleashthearchersiTunes: http:...',
            videoid: "2yctXV3uHBs",
            url: "https://www.youtube.com/watch?v=2yctXV3uHBs",
            duration: "PT3M37S",
            unlisted: "False",
            name: "UNLEASH THE ARCHERS - Test Your Metal (Official Video) | Napalm Records",
            paid: "False",
            width: "1280",
            regionsallowed:
              "AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...",
            genre: "People & Blogs",
            interactioncount: "1827031",
            channelid: "UCG7AaCh_CiG6pq_rRDNw72A",
            datepublished: "2015-07-15",
            thumbnailurl:
              "https://i.ytimg.com/vi/2yctXV3uHBs/maxresdefault.jpg",
            height: "720",
          },
        ],
        cse_image: [
          {
            src: "https://i.ytimg.com/vi/2yctXV3uHBs/maxresdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "testing tool in Google Search Console",
      htmlTitle: "<b>testing</b> tool in Google Search Console",
      link: "https://www.google.com/webmasters/tools/robots-testing-tool",
      displayLink: "www.google.com",
      snippet:
        "Use Search Console to monitor Google Search results data for your properties.",
      htmlSnippet:
        "Use Search Console to monitor Google Search results data for your properties.",
      formattedUrl:
        "https://www.google.com/webmasters/tools/robots-testing-tool",
      htmlFormattedUrl:
        "https://www.google.com/webmasters/tools/robots-<b>testing</b>-tool",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1",
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Test your app or game : Google Play Academy",
      htmlTitle: "<b>Test</b> your app or game : Google Play Academy",
      link: "https://www.google.com/appserve/mkt/p/ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2Mbt_lFxqvK4kFbLXA3pH9tftLLb1K8g5FYpzRnjoR4zy21cLhVSW2RZCT6F_S1Y6ubDg",
      displayLink: "www.google.com",
      snippet:
        "Testing can be a valuable step for your app, whether you have a production app and are preparing an update, or you have a new app and are looking to gather ...",
      htmlSnippet:
        "<b>Testing</b> can be a valuable step for your app, whether you have a production app and are preparing an update, or you have a new app and are looking to gather&nbsp;...",
      cacheId: "FYU3lzVBs9UJ",
      formattedUrl:
        "https://www.google.com/.../ ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2M...",
      htmlFormattedUrl:
        "https://www.google.com/.../ ABMBUQMz9UJ9SNwbimvTDICavSr6uRmNmmW6gHAK7a-QmlYya2M...",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-dlEs6RT1SXBNAfMZGZmFRFR9oF6dYsPieF1ciLpzmTCjiIWq6hXmRg",
            width: "450",
            height: "70",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/organizations/branding_logos/52/full/gpa-fulllock.png",
            "twitter:card": "summary",
            "og:site_name": "Google Play Academy",
            "og:title": "Test your app or game",
            "csrf-param": "authenticity_token",
            "og:article:tag": "Learn about improving app quality",
            "apple-mobile-web-app-status-bar-style": "white",
            viewport: "width=device-width, initial-scale=1.0",
            "exceed:embeddable": "false",
            "apple-mobile-web-app-capable": "yes",
            "og:author": "Play Academy",
            "csrf-token":
              "VNM9WvX1OHwRReJ0ntIUswSFtd7ReYhI4BmM9zBmUQwFgPUsgnsig0jIM/h/gaQqLs1nmbdmPevl+BNCbM6rfA==",
            "og:locale": "en",
            "exceed:course_type": "CourseCurriculum",
            "og:url": "https://playacademy.exceedlms.com/student/path/4915",
          },
        ],
        cse_image: [
          {
            src: "https://storage.googleapis.com/exceedlms-external-uploads-production/uploads/organizations/branding_logos/52/full/gpa-fulllock.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Rigorous Testing – How Google Search Works",
      htmlTitle: "Rigorous <b>Testing</b> – How Google Search Works",
      link: "https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/",
      displayLink: "www.google.com",
      snippet:
        "Improving Search with rigorous testing. Our goal is always to provide you with the most useful and relevant information. Any changes we make to Search are ...",
      htmlSnippet:
        "Improving Search with rigorous <b>testing</b>. Our goal is always to provide you with the most useful and relevant information. Any changes we make to Search are&nbsp;...",
      cacheId: "4VYSKZ0ZDVQJ",
      formattedUrl:
        "https://www.google.com/search/howsearchworks/how.../rigorous-testing/",
      htmlFormattedUrl:
        "https://www.google.com/search/howsearchworks/how.../rigorous-<b>testing</b>/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Rigorous Testing – How Google Search Works",
            "og:site_name": "Google Search - Discover How Google Search Works",
            "og:title": "Rigorous Testing – How Google Search Works",
            "og:description":
              "Our goal is always to provide you with the most useful and relevant information. Any changes we make to Search are always to improve the usefulness of results you see. That's why we never accept payment from anyone to be included in Search results.",
            "og:image:secure_url":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "twitter:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            referrer: "no-referrer",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Our goal is always to provide you with the most useful and relevant information. Any changes we make to Search are always to improve the usefulness of results you see. That's why we never accept payment from anyone to be included in Search results.",
            "og:locale": "en",
            "og:url":
              "https://www.google.com/search/howsearchworks/how-search-works/rigorous-testing/",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google",
      htmlTitle: "Google",
      link: "http://www.google.com/",
      displayLink: "www.google.com",
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        "Search the world&#39;s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...",
      cacheId: "zhool8dxBV4J",
      formattedUrl: "www.google.com/",
      htmlFormattedUrl: "www.google.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc",
            width: "320",
            height: "112",
          },
        ],
        metatags: [
          {
            referrer: "origin",
            viewport: "width=device-width,minimum-scale=1.0",
            google: "notranslate",
            "format-detection": "telephone=no",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "ReCAPTCHA demo",
      htmlTitle: "ReCAPTCHA demo",
      link: "https://www.google.com/recaptcha/api2/demo",
      displayLink: "www.google.com",
      snippet:
        "Sample Form with ReCAPTCHA. First Name; Last Name; Email. Pick your favorite color: Red Green.",
      htmlSnippet:
        "Sample Form with ReCAPTCHA. First Name; Last Name; Email. Pick your favorite color: Red Green.",
      cacheId: "P8RKCmSVBegJ",
      formattedUrl: "https://www.google.com/recaptcha/api2/demo",
      htmlFormattedUrl: "https://www.google.com/recaptcha/api2/demo",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, user-scalable=yes",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Forms: Online Form Creator | Google Workspace",
      htmlTitle: "Google Forms: Online Form Creator | Google Workspace",
      link: "https://www.google.com/forms/about/",
      displayLink: "www.google.com",
      snippet:
        "Use Google Forms to create online forms and surveys with multiple question types. Analyze results in real-time and from any device.",
      htmlSnippet:
        "Use Google Forms to create online forms and surveys with multiple question types. Analyze results in real-time and from any device.",
      cacheId: "DQBEwPZfQ7YJ",
      formattedUrl: "https://www.google.com/forms/about/",
      htmlFormattedUrl: "https://www.google.com/forms/about/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRR3NOCENGEsKz07jUqdnuLd5AF9LXm5w6e2c9oIEkeOUM1i5_PG4maUg",
            width: "36",
            height: "36",
          },
        ],
        metatags: [
          {
            referrer: "no-referrer",
            "og:image":
              "https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb",
            "twitter:title":
              "Google Forms: Online Form Creator | Google Workspace",
            "og:type": "website",
            viewport: "initial-scale=1, minimum-scale=1, width=device-width",
            "twitter:url": "https://twitter.com/googledocs",
            "twitter:description":
              "Use Google Forms to create online forms and surveys with multiple question types. Analyze results in real-time and from any device.",
            "og:title": "Google Forms: Online Form Creator | Google Workspace",
            "og:url": "https://www.facebook.com/GoogleDocs/",
            "twitter:creator": "Google",
            "og:description":
              "Use Google Forms to create online forms and surveys with multiple question types. Analyze results in real-time and from any device.",
            "twitter:image":
              "https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb",
          },
        ],
        cse_image: [
          {
            src: "https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Think with Google - Discover Marketing Research & Digital Trends",
      htmlTitle:
        "Think with Google - Discover Marketing Research &amp; Digital Trends",
      link: "https://www.google.com/insights/",
      displayLink: "www.google.com",
      snippet:
        "Tools · Test My Site. Test your mobile site speed and deliver a better experience. Open · Find My Audience. Go beyond demographics to find who matters most to ...",
      htmlSnippet:
        "Tools &middot; <b>Test</b> My Site. <b>Test</b> your mobile site speed and deliver a better experience. Open &middot; Find My Audience. Go beyond demographics to find who matters most to&nbsp;...",
      cacheId: "ZPw1L_Ri1DYJ",
      formattedUrl: "https://www.google.com/insights/",
      htmlFormattedUrl: "https://www.google.com/insights/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVRPjXIt3pkhY3hPJtkEPhqYWLbHQWS11Vn1-rDUaIIdBIn5h5ZvTZOGY",
            width: "275",
            height: "183",
          },
        ],
        metatags: [
          {
            "og:image": "/_qs/static/img/global/twg-logo-large.jpg",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title":
              "Think with Google - Discover Marketing Research & Digital Trends",
            "og:site_name": "Think with Google",
            "twitter:site": "@ThinkwithGoogle",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description":
              "Uncover the latest marketing research and digital trends with data reports, guides, infographics, and articles from Think with Google.",
            "og:title":
              "Think with Google - Discover Marketing Research & Digital Trends",
            "og:url": "https://www.thinkwithgoogle.com/",
            "og:description":
              "Uncover the latest marketing research and digital trends with data reports, guides, infographics, and articles from Think with Google.",
            "twitter:image": "/_qs/static/img/global/twg-logo-large.jpg",
          },
        ],
        cse_image: [
          {
            src: "https://storage.googleapis.com/twg-content/images/2128_TwG_Insights_Video_Ep9_1200px_Article-min.width-800.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Maps - Directions",
      htmlTitle: "Google Maps - Directions",
      link: "https://www.google.com/maps/",
      displayLink: "www.google.com",
      snippet:
        "Find local businesses, view maps and get driving directions in Google Maps.",
      htmlSnippet:
        "Find local businesses, view maps and get driving directions in Google Maps.",
      cacheId: "LGv4n99UVyoJ",
      formattedUrl: "https://www.google.com/maps/",
      htmlFormattedUrl: "https://www.google.com/maps/",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:image":
              "https://maps.google.com/maps/api/staticmap?center=37.0625%2C-95.677068&zoom=4&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=LN5H6Y6pJ6OHrvc90pTvY6a9qWc",
            "og:image:width": "256",
            "twitter:card": "summary",
            "og:site_name": "Google Maps",
            viewport:
              "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
            "og:title": "Google Maps",
            "og:image:height": "256",
            google: "notranslate",
            "og:description":
              "Find local businesses, view maps and get driving directions in Google Maps.",
          },
        ],
        place: [
          {
            image:
              "https://maps.google.com/maps/api/staticmap?center=37.0625%2C-95.677068&zoom=4&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=LN5H6Y6pJ6OHrvc90pTvY6a9qWc",
            name: "Google Maps",
            description:
              "Find local businesses, view maps and get driving directions in Google Maps.",
          },
        ],
        cse_image: [
          {
            src: "https://maps.google.com/maps/api/staticmap?center=37.0625%2C-95.677068&zoom=4&size=256x256&language=en&sensor=false&client=google-maps-frontend&signature=LN5H6Y6pJ6OHrvc90pTvY6a9qWc",
          },
        ],
      },
    },
  ],
};
