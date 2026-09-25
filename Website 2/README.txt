GREENWAY SCI-TECH & RESEARCH SOCIETY - WEBSITE
==============================================

FILES
  index.html          the page structure (all 7 pages live in this one file)
  style.css           all colours, layout and animation
  script.js           navigation, page content, forms and the animated background
  assets/logo-full.webp   full logo
  assets/logo-mark.webp   icon strip used in the menu and footer

HOW TO OPEN IT
  Double-click index.html. It works offline, except the Google Fonts (Oxanium and
  Outfit), which need an internet connection. Without them a system font is used.

HOW TO EDIT YOUR CONTENT
  Open script.js. The block at the top, under "EDIT YOUR CONTENT HERE", holds:
    CFG        email, phone, address, lab hours and social media links
    WINGS      the four areas (Chemistry, Biology, Physics & Technology, Research)
    EVENTS     your events (use the date format 2026-10-03T15:00)
    PROJECTS   your projects
    PUBS       your publications
    TEAM       executive panel names and roles
    FAQ        questions on the Join Us page
  Events move between Upcoming and Past on their own, based on the date.

HOW TO CHANGE COLOURS
  Open style.css and edit the values in :root at the top. The main accent is --teal
  (buttons, highlights). The four area colours (.c-chem, .c-bio, .c-tech, .c-research)
  are only used for small tags and tints. The animated background palette is the PAL
  list near the bottom of script.js, and the soft glows are the .b1 to .b4 rules in style.css.

FORMS
  The Contact and Join forms send submissions through Web3Forms
  (https://web3forms.com), so visitors stay on the page and you receive the message
  by email. The access key lives near the bottom of script.js:
    var WEB3FORMS_KEY='ab29b4fb-ea7b-4e7a-b621-2dfb35037e02';
  If you ever need a new key, create one at web3forms.com and paste it there.
  If a submission fails, the visitor sees a message asking them to email
  the address in CFG as a fallback.

PUTTING IT ONLINE (free options)
  GitHub Pages, Netlify or Cloudflare Pages. Upload the whole folder, keeping
  index.html, style.css, script.js and the assets folder together.
