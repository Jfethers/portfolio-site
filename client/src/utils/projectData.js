// all the seed project data

const projectData = [
    {
        key: 'knitCounter',
        title: 'Knit Counter',
        subHeading: 'Just keep knitting...',
        job: 'Personal Project',
        description: [['In knitting its often necessary to keep track of rows as you knit. I thought it\'d be fun to make a small counter app to get my feet wet writing react typescript!']],
        tech: ['Typescript', 'React'],
        color: 'red',
        link: 'https://github.com/Jfethers/knit-counter',
    },
    {
        key: 'spressoBeta',
        title: 'Spresso Beta',
        subHeading: 'Straight to beta',
        job: 'Boxed',
        description: [['A side hustle of Boxed is their service as a software named Spresso. On a small crack squad of engineers, we quickly put out the beta platform for Spresso. I coded, start to finish, the ability to implement bin packing rules for deliveries as well as fetching, editing, and filtering a company\'s product catalog']],
        tech: ['Remix', 'React', 'Typescript'],
        color: 'orange',
    },
    {
        key: 'RavelryApi',
        title: 'Ravelry Api',
        subHeading: 'Mix? or Remix?',
        job: 'Boxed',
        description: [['I was asked to research whether or not Remix would be a beneficial to our platform or not. I created a quick app utilizing Ravelry\'s free API all built on Remix']],
        tech: ['Remix', 'React'],
        color: 'carrotOrange',
        link: 'https://github.com/Jfethers/remix-demo-app',
    },
    {
        key: 'productRedesign',
        title: 'Product Category Redesign',
        subHeading: 'What DOES thousands of products look like on a web page?',
        job: 'Boxed',
        description: [['Boxed has literally thousands of products organized in complex hierarchies of categories nested within categories. I took on the task of redesigning the category page to use a better tree model! Cut down on load time and made navigating categories much easier']],
        color: 'coral',
        tech: ['React', 'Javascript'],
    },
    {
        key: 'auditLogs',
        title: 'Tools Platform Audit Logs',
        subHeading: 'Snitches get stitches...',
        job: 'Boxed',
        description: [['Using the power of react final form, I wrote my own diffing algorithm that would accurately determine if a given value on a page had been changed and by who and when. This was really helpful for tracking down problematic changes to products on the website!']],
        color: 'saffron',
        tech: ['Javascript', 'React Final Form', 'Mongo'],
    },
    {
        key: 'themeDesign',
        title: 'Theme Design',
        subHeading: 'To infinity and beyond!',
        job: 'Zola',
        description: [['Themes have been my baby from the moment I started at Zola. When I first joined the team, we had about 35 themes. Over the course of the year the number of themes have grown by leaps and bounds as I first coded new themes and later variations. Towards the end of my employment, I oversaw theme development as we continued to create more gorgeous themes for couples to pick from.']],
        tech: ['Less', 'Postgresql', 'React'],
        color: 'pistachio',
      },
      {
        key: 'themeRedesign',
        title: 'Themes Listing Redesign',
        subHeading: 'First serious project at Zola - Overhaul the Themes Listing Page',
        job: 'Zola',
        description: [
          ['This project was a huge undertaking spanning two large initiatives. '],
          ['First: Implement the ability to filter themes by color or by matching invitation. '],
          ['Second: Restructure themes to allow us to implement \'variations\'. This meant a change to how themes were stored in the database going from a single layer object of theme data to a notion of Theme Groups which have themes assigned to them - a parent and a child. Swatch toggle buttons allowed a user to thumb through these variations and ultimately make a selection.']
        ],
        tech: ['React', 'Redux', 'Node', 'Less'],
        color: 'zomp',
      },
      {
        key: 'guestNotInGuestList',
        title: 'Guest NOT in Guest List',
        subHeading: 'What do you do if you go to RSVP to a wedding only to realize ... you aren\'t on the list?',
        job: 'Zola',
        description: [
          ['This was a really fun project and was a great learning experience. The premise of the project was to solve a problem that happenend quite a bit - A guest tries to RSVP to a couples\' wedding only to realize they aren\'t on the guest list. '],
          ['Previously, the only solution for guests in this predicament was copy telling them to call Zola customer service. This resulted in a lot of really weird mediation between Zola Customer Care, the couple, and the guests, as we all came together to figure out what the issue is. More often than not, its a misspelling on the couples\'s part. As someone who misspelled my father in law\'s name I can lend some anecdotal evidence on the issue.'],
        ],
        tech: ['React', 'Redux', 'Redux Forms', 'Less', 'Node'],
        color: 'darkCyan'
      },
      {
        key: 'unification',
        title: 'Unification',
        job: 'Zola',
        subHeading: 'Two platforms, two stacks, two looks, too much',
        description: [
          ['When Zola first launched, our sole business was Registries - bringing the best assortment of products and experiences to couples everywhere. In 2017, we launched Zola Weddings which was a suite of online planning tools - Checklist, Guest List, and Websites specifically. Over time the two diverged in terms of style. They were written years apart, which is as good as a decade in tech, so in some parts of the site you might see a square button and others a rounded button. This button topic is contentious at Zola, its best not to bring it up. Other problems included little irritations like being unable to navigate between the two platforms easily on mobile as well as inconsistencies in styles, colors, or even fonts.'],
        ],
        tech: ['React', 'Less'],
        color: 'paynesGray'
      },
      {
        key: 'preauthPages',
        title: 'Preauth Pages',
        job: 'Zola',
        subHeading: 'Opening the gates of Zola up to the unregistered masses',
        description: [
          ['Previously, the only way to really interact with Zola\'s planning tools was to create an account. This is a lot of friction to overcome for a user who\'s on the fence between Wedding Wire, The Knot, or the dozens of other competing wedding tech sites (bet you didn\'t realize Wedding Tech was a thing till just now)']
        ],
        tech: ['React', 'Redux', 'React Router', 'Less'],
        color: 'red'
      },
      {
        key: 'mobileSnapShot',
        title: 'Mobile Snap Shot',
        job: 'Zola',
        subHeading: 'Fun little query param project',
        description: [
          ['Our iOS engineer came up to me the other day with an interesting problem. The way they display the current state of a user\'s wedding website is to make a request to create a snap shot of the user\'s actual wedding website. This works well except because our websites have the ability to hide pages and the showing and hiding of pages is handled server side they were unable to create snap shots of pages that were hidden. As well, they wanted the ability to disable tracking since when these routes are hit no one is actually viewing the pages. Another param (badum tish) was to be able to hide the red banner alerting guests their website was unpublished because they were handling that messaging elsewhere in the App already as well as the navigation.']
        ],
        tech: ['React', 'Redux', 'React Router', 'Node'],
        color: 'orange'
      },
      {
        key: 'flightpathRedesign',
        title: 'Flightpath Redesign',
        subHeading: 'Baby\'s First Project',
        job: 'Zola',
        description: [
          ['One of my favorite projects from my time at Flighpath was working on the company\'s site redesign. I was lucky enough to work with some incredibly talented engineers. I was responsible for the Work page as well as all of the individual client pages. It was so much fun and I learned so much doing it.']
        ],
        tech: ['CSS'],
        color: 'carrotOrange'
      },
      {
        key: 'cfd',
        title: 'Custom Furniture Design',
        job: 'CFD',
        subHeading: 'Was it Uber that said everybody needed a side hustle?',
        description: [
          ['Custom Furniture Design is a stuido out in San Francisco and I routinely touch up their photos to mimick studio lighting.']
        ],
        tech: ['Photoshop'],
        color: 'coral'
      },
      {
        key: 'cms',
        title: 'CMS Navigation',
        job: 'Zola',
        subHeading: 'Linear Flow and a Win for Mobile',
        description: [
          ['We wanted to see if a different flow for editing pages would lead to more published wedding websites. I created a new navigation flow utilizing a more linear step by step flow then set up an Optimizely test to track the differences. Optimizely aside, this was a huge coupe for the Weddings platform in mobile.']
        ],
        tech: ['React', 'Redux', 'React Router', 'Less', 'Optimizely'],
        color: 'saffron'
      },
      {
        key: 'react16',
        title: 'Over React-ing',
        job: 'Zola',
        subHeading: 'Upgraded web wedding\'s platform to React 16 from React 15',
        description: [
          ['The biggest struggle here was dealing with aspects of React that had become more asynchronous than it\'s previous itereation. Certain life cycles, ahem, ComponentWillReceiveProps, had to be refactored. This was definitely a quest to slay dragons']
        ],
        tech: ['React'],
        color: 'pistachio'
      }
]

export default projectData;
