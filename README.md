# The Diabeater
[View live project here on GitHub](https://priyadevnow.github.io/The-Cobalt-Building-London/)

The Diabeater is an interactive tool for South Asians to assess their risk of getting Type 2 diabetes and then providing diet and other tips to transform their lifestyle.   

<br>  
  
![screenshot of landing page](/docs/Landing-Page-The-Cobalt-Building-London.png)


---

## CONTENTS  
  
* [UXD (User Experience)](#user-experience-ux)
  * [User Stories](#user-stories) 
* [Creation Process (Strategy -> Surface)](#creation-process)
  * [1.Strategy](#1-strategy)
  * [2. Scope](#2-scope)
  * [3. Structure](#3-structure)
  * [4. Skeleton](#4-skeleton)
  * [Wireframes](#wireframes)
  * [5. Surface](#5-surface)
* [Design](#design)
  * [Colour Scheme](#color-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
* [Page Features](#page-features)
  * [Navigation Bar](#navigation-bar)
  * [Hero Image](#hero-image)
  * [Headline](#headline)
  * [Footer](#footer)
  * [Home Page](#home-page)
  * [Cobalt Building Page](#cobalt-building-page)
  * [Location Page](#location-page)
  * [History Page](#history-page)
* [Desktop & Mobile View](#desktop--mobile-view)
  * [Desktop, Tablet & Mobile Differences](#desktop-tablet--mobile-differences)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries, Technologies & Programs Used](#frameworks-libraries-technologies--programs-used)
* [Deployment](#deployment)
  * [How to deploy](#how-to-deploy)
* [Testing](#testing)
  * [HTML Validation using W3C Validation](#html-validation-using-w3c-validation)
  * [CSS Validation using W3C Validation](#css-validation-using-w3c-validation)
  * [Lighthouse scores via Chrome Developer Tools](#lighthouse-scores-via-chrome-developer-tools)
  * [Bugs & Fixes](#bugs--fixes)
  * [Unsolved Bugs](#unsolved-bugs)
* [Credits](#credits) 

---    

## User Experience (UX)  
  
### **User Stories**  

### **Primary Goal**  
  
The Cobalt Building is a luxury residential block with 59 apartments in Bridgewater Square, London.   The aim of this website is to showcase the building and the history of the area.  It needed a strong, succinct and striking website design that reflected the building’s attributes and the area’s importance in the development of the City of London. 

### **Visitor Goals** 

- The website is intended to be accessed by two diverse sets of visitors:

1.  Building residents:-
  *	Apartment owners – to access the Leaseholder Portal containing the building policies and service charge accounts of the individual apartment owner
  *	Tenants – over 80% of the apartments are tenanted by City professionals and students with an average tenant turn-around of two years.  So it was important to clearly set out the attractiveness of the Cobalt Building in terms of location and amenities and the history of the area. 
   
2. History lovers - Bridgewater Square is often overshadowed by its neighbour, the iconic Barbican Estate.  This website attempts to redress that and invites users to visit Bridgewater Square.   This additional set of visitors was identified when the user performas were generated. 

- Keeping the above, the website is straight to the point and easy to navigate for those seeking information about the building, its location and the history of the area. 

- The website has been designed to be responsive to allow visitors to view it from a range of devices with one page flowing seamlessly into another so as to keep the users engaged on each page.   

### **First Time Visitor**
- A user can access each page of the site with one click via the navigation bar or by scrolling down the respective sections on the landing page.
- A user can see the address of the building in the footer.

### **Returning Visitor**  
- The returning visitor is one who is seriously interested in the building e.g. as a potential tenant or history lover.  
- Such a user is likely to use a device larger than a mobile.  They will be able to find more relevant information in the footer e.g. social media links, contact form for the Resident Management Company and the contact card for the Property Manager; an apartment owner will  see the Leaseholder Portal button on the navigation bar; a history student can find links for the sources of information collated on this website for further study.
  
--- 

## Creation Process  
  
### **1. Strategy**  

- The strtaegy was to build an easy-to-click & follow, simple, non-intimidatory website that delivers clear information about diabetes and measures that the user should take to prevent it.  
- As the user is required to interact with the tool, the entire website needed to be inviting, with the use of consistent and neat design, graphics, precise wording and colour.  
- Mobile responsiveness is an essential feature required for this website.
  
### **2. Scope**  

- The Diabeater website must be available on a wide range of devices due to the age range of the users being targetted. 
- The site is to contain only essential information presented artistically using the best utility function for each page.  
- As the information presented on each page will be different, the clever use of the chosen colour palette and styling is essential to make the site cohesive and attractive.
- Text must be clear and legible on any sized device to allow the user access to all the information.  
- Future development is to include the ability for a user to set up their account on The Diabeater.  Users will then have access to create their weekly diet plans within the parameters suggested by The Diabeater (this requires API integration of the Recipe database from Edamam) and view live prices for a shopping trolley made up of the main ingredients of the recipes in their chosen diet plan (this requires API integration to a major UK supermarket).   
  
### **3. Structure**  

- The website is currrently set up as a single landing page with scroll down simple navigation.  
- 
- Similar to the design and layout to be accessible and functional, simple navigation and interactivity are essential. The website needs to provide information swiftly to all users.  
- The colour palette was displayed as the background for the hero image on the landing page so the user became instantly familiar with it and so as to encourage users to stay on the website and go through it page by page.   
- This is an information rich website. Thus, rounded corners have been used for styling sections so that the site is not only aesthetically attractive but it is easier to digest the information presented.  
- The main information on all the pages remains the same on all devices which strengthen the site’s familiar and trusting feeling.  
- In addition, the navigation bar and footer would be visible on every page and at every device size. However, the information displayed has been tailored for the main expected type of user of the device:
- apartment owners are likely to use the desktop version so the navigation bar displays the Leaseholder Portal button which they can use to click into the Property Manager’s resident portal to access the Building policies and their service charge records;
- potential new tenants and history lovers would use the mobile version so the footer displays only the address of the building.    
- Easy to identify, clickable buttons and links with a consistent layout have been used in the navigation bar and footer. 
- Any buttons or links had to clearly state their purpose and any design change upon action followed the flow of the overall aesthetic.  It would have been ideal to provide feedback once the form button was clicked but this was not possible since Javascript is beyond the scope of the technologies allowed for this project. 
  
### **4. Skeleton**  

- The site was developed to be simple, clear and educational.  
- For the landing page, the logo, was to be top-left of every page, no matter the orientation or screen size.  
- The simple, four-item navigation bar of 'Home', 'The Cobalt Building', ‘Location’ and 'History', is situated always in the centre of the navigation bar.  A mouse hover feature is on each item which turns the text from blue to white. When item is clicked the text turns and stays light grey thus identifying the active page.
- A large, clear hero image of the Cobalt Building dominates the landing page with its name at the top left in translucent style visible.   
- Scrolling down the page introduces the visitor to a brief, three-piece of information section about the other pages of the website. Images are visible on one side with sound-byte headed text on the other side.  The images are arranged in a diametric fashion.  
- The page ends with the footer, stating information in four columns, the address of the building, the contact information for the Resident Management Company and the Property Manager for the building, social media links and acknowledgment of the credible sources used to compile the history section of the site.  Under this is a copyright label and the year of site build at the bottom left corner.
- For The Cobalt Building page, the navigation bar and footer remain as before. Between these lies a heading of the page and below it - in masonry format - are the photos of an apartment’s interiors and building exterior as welll as text describing the various attributes of the building.  Information from the marketing brochure for the building and a quote from the Lord Mayor in relation to the building are highlighted.    
- For the Location page, the navigation and footer remain as before. The page heading is under the navigation bar with brief description of the next section which shows places around the Cobalt Building grouped into 4 categories.  These are arranged 2 categories in each of 2 rwos.  Each category is shown with an icon and text. Underneath this is an interactive Google Map with the building location pinned. There is an option to enlarge the map in a new window and find directions.  
- For the History page, the navigation and footer remain as before. The page heading is under the navigation bar with brief description. A stylised vertical timeline has been used which shows an image on one side and an image on the other.  A central dot separates the two sides.  This is followed in diametric fashion for 6 significant periods when major changes occurred in this area from 1 AD to date.   

### Wireframes  
<details open>
<summary>Wireframe for the 4 pages of the webite - Desktop view</summary>  

![Wireframe of the 4 pages- Desktop](docs/Wireframes.jpg)
            

### **5. Surface**  

- A design was created that allowed a consistent flow throughout the four-page website.   
- A palette of blues and yellows was generated which matched the external facade of the Cobalt Building - yellow rendering and bricks and cobalt blue balconies.  All the colours were used on each page.      
- A clean, sans-serif font, 'Montserrat' was used in a medium weight to provide legible text at any size. 
- Corners on all elements were rounded to maintain a soft feel to a hard brick subject matter. 
- Overall, the design was intended to create and foster a feeling of new discovery with the unveiling of its rich past and a deep sense of belonging to the present and in particular to the Cobalt Building.  This would attract users to physically come and see the building.    
 
---   
  
  
## Design  

### **Color Scheme**  

- I used [Coolors](https://coolors.co/) to create a striking palette from the complementary colours of blue and yellow which capture the sense of pride and significant meaning that the site is conveying.  I combined these with an off-white shade that contrasted beautifully.
  
![Colour theme swatches](docs/coolors.co_palette_ff9f1c-ffbf69-00b4d8-0077b6-03045e%20(2).png)  
  
- I experienced an issue with the contrast ratio when putting lengthy blue (#03045E) text against the yellow (#FFBF69) background on the History page.  So I switched the yellow to the off-white (#e5edf5) which then significantly improved the accessibility of my site. The contrast ratio as measured on [TPGI website](https://www.tpgi.com/color-contrast-checker/) showed the WCAG contrast ratio increasing from 10.9.1 to 15.1 from this change.

![Colour contrast ratio for History Page](docs/Contrast%20New.png)  
  
- [Adobe Color](https://color.adobe.com/create/color-contrast-analyzer) provided this fantastic resource for checking how accessible your colours are. I submitted my palette to the [Color Blind Safe](https://color.adobe.com/create/color-accessibility) check to find they passed this test also.  

![Color Blind Safe Check](docs/Color%20Blind%20Safe.png)
  
### **Typography**  
  
- [Google Fonts](https://fonts.google.com/) was used to import the fonts 'Montserrat'.  The Montserrat font has a geometric sans-serif typeface and it was inspired by posters, signs and painted windows from the first half of the twentieth century, seen in the historic Montserrat neighbourhood in Buenos Aires.  I therefore felt it was appropriate to convey the architectural and history aspects of the website.  
- I used the [Figma font pairing selector](https://www.figma.com/google-fonts/) to help me choose the Klara font to pair with Montserrat for use in lengthier text bodies. However, I chose to stick with Montserrat.  This would keep the font consistent across the website given the aim was not to make the website over-wordy. 
  
![google Fonts Montserrat](docs/fonts.google.com_specimen_Montserrat_preview.text%3DMontserrat%26preview.text_type%3Dcustom.png)
        
### **Imagery**  
  
- I have used different types of imagery so as to remain authentic about the website.  I have used:
  *	Historic photos from books and archives
  * Historic maps - some of which have been made dynamic with modern technology which helped me get a snapshot of the precise area covered in the website
  * Modern photos from the marketing brochure for the Cobalt building which was published in 1995
  * Publicly available photos of apartment interiors from estate agent websites marketing apartments available for sale and rent at the Cobalt Building
  *	Royalty free stock images
  * Bootstrap icons
- I have attributed the sources of the images used in the [Credits](#credits) section of this README doc.

---  
  
## Page Features  

### **Navigation Bar**   
<details open>
<summary></summary>  

#### **Desktop View** ![screenshot of Desktop navbar](docs/Navbar%20Desktop.png) 

#### **Mobile View** ![screenshot of Mobile navbar](docs/Navbar%20Mobile.png) 
</details>
This remains the same across the four pages, in portrait/landscape and mobile/tablet views, except that the Leaseholder Portal button appears on desktop view only.
  
<br>  

### **Hero Image** 

<details open>  
<summary></summary>

#### **Desktop View** 
![screenshot of Desktop hero image](docs/Desktop%20-%20Hero%20Image.png) 

#### **Mobile View** 
![screenshot of Mobile hero image](docs/Mobile%20-%20Hero%20Image.png)
</details>
The striking hero image remains the same across all devices, in portrait/landscape and mobile/desktop views with it becoming square-shaped and ‘The Cobalt’ label disappearing for smaller screens.  

<br> 

### **Headline** 

<details open>  
<summary></summary>

#### **Desktop View** 
![screenshot of Desktop headlines image](docs/Desktop%20-%20Headline.png) 
The headlines pull out the key features of the Cobalt Building in all devices.  It is shown as a single band on large screens which becomes a 2 by 2 on smaller screens.  

<br> 


### **Footer**  
<details open>
<summary></summary>

#### **Desktop View** 
![screenshot of footer](docs/Desktop%20-%20Footer.png) 
</details>
The footer always shows the address of the Cobalt Building in all screen views.  It expands to show the Contact form and card for the Resident Management Company and the Property Manager respectively, social media icons and Acknowledgements.  

<br>

### **Home Page**  
<details> 
<summary></summary>

#### **Desktop View**
![screenshot of Desktop Home Page](docs/Desktop%20-%20Landing%20Page.png)  

#### **Mobile View** 
![screenshot of Mobile Home Page](docs/Mobile%20-%20Landing%20Page.png)  
 
</details>
Small sound-bytes of text with clear headings are accompanied by striking images that reflect the heading. There are links to each of the 3 other pages under the images.  the In mobile view, these sections are displayed in a column and the images and liks to the other 3 pages are not displayed.   

<br>
  
### **Cobalt Building Page** 
<details>
<summary></summary> 

#### **Desktop View**
![screenshot of Desktop Cobalt Building Page](docs/Desktop%20-%20Cobalt%20Building%20page.png)  

#### **Mobile View** 
![screenshot of Mobile Cobalt Building Page](docs/Mobile%20%20-%20Cobalt%20Building%20page.png)
</details>
The masonry layout occupies the whole page, against the yellow (#FFBF69) background (which is the exterior colour of the Cobalt Building).  Images and stylised text draw out the main attributes of the building and apartments.  The masonry layout automatically rearranges the cards to optimise the viewing experience from different size device screens.  It switches from a 3 column large screen view to a single column for mobile view.  The masonry card display automatically re-arranges on each click of the page.

<br>

### **Location Page**  
<details>
<summary></summary> 

#### **Tablet View** 
![screenshot of Location page](docs/Tablet%20View%20-%20Location%20Page.png)  

</details>
- There are two sections. 
- The first part consists of places in the neighbourhood of the Cobalt Building grouped together in 4 categories.  The 4 categories are then set in a 2 row by 2 in each row format.  Each category is shown by an icon and text describing each of 4 categories.  The icon is positioned to the left of the text for desktop/tablet views and switches to center in single columnar format for mobile view.   

- The second section shows an embedded interactive Google Map sitting in a row.  The smallest width of this page is limited by the size of the Google Map.  

<br>

### **History Page**  
<details>
<summary></summary> 

#### **Desktop View**
![screenshot of Desktop History Page](docs/Desktop%20-%20History%20Page.png)  

#### **Mobile View** 
![screenshot of Mobile History Page](docs/Mobile%20-%20History%20Page.png) 
</details>
- A stylised vertical time line is shown here with image and text on either side of a central dot arranged diametrically.  This is for larger screens.  This changes to a single columnar format of text and image for mobile views.  
- The timeline is split into 6 sections from 1 AD.   

<br>

---   


## Desktop & Mobile View  
 
### **Desktop, Tablet & Mobile Differences**  
  
- As most of the website code was imported from Bootstrap there was already good in-built responsivity across various screens. I had to make minimal adjustments to improve this.  
- However, I had to compromise by making some of the elements in the navigation bar, footer and hero image disappear for mobile views as I was not successful in styling these for responsivity.  
- See image below of the website as displayed on desktop, laptop, tablet and mobile screens from [Am I Responsive](https://ui.dev/amiresponsive)     
  
![screenshots of website on Am I Responsive](docs/ui.dev_amiresponsive_.png)

---  
                              

## Future Features  

- For future development, I would like to be able to:
 * show all of the footer and the button to the Leaseholder Portal in the navigation bar on all screen sizes    
 * put an embedded video showing a tour around the present Bridgewater Square
 * show testimonials from site visitors
  
---   
  

## Technologies Used    

### **Languages Used**   

- HTML5
- CSS3

### **Frameworks, Libraries, Technologies & Programs Used**  

- Bootstrap version 5.2.3 – examples and icons – these assisted with styling and responsiveness of website
- Stockoverflow – to look up code
- W3 Schools – to look up code
- Gitpod - used for version control by utilising the Gitpod terminal to commit and push to GitHub
- GitHub - used to save and store all files for this website after being pushed from Gitpod
- Userpersona - to generate typical users of this website and ensure their pain points were alleviated by the website
- Figma – I tried to use it to create wireframes but found it difficult so resorted to pen and paper 
- Coolors – for colour palettes
- Adobe Color – for accessibility contrast ratios
- Canva – for designing the logo
- Google Fonts – font was imported from here 
- Google Dev Tools - to debug and for testing responsiveness 
- Google Lighthouse - for auditing the website
- W3C Validator - for validating the HTML and CSS code 

---   
 

## Deployment

### **How to deploy**  

GitHub was used to deploy the website. These were the steps taken to achieve this:  

1. Login to GitHub account
2. Navigate to the project repository: The-Cobalt-Building-London
3. Click the Settings button near the top of the page
4. In the left-hand menu, find and click on the Pages button
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page

![screenshot of how to deploy site on github](docs/github.com_PriyaDevNow_The-Cobalt-Building-London_settings_pages.png ) 

---  
    

## Testing  

- I had planned for this site to be accessible and legible on all screen sizes. 

- I extensively used Chrome Dev Tools to test, tweak and debug throughout the build phase.  Testing was also done on desktop, laptop, iPhone and Android mobile devices.   
  
The results of feature testing are as follows:  
  
| Page | Test | Pass/Fail |
| :----| :----| :--------:|
| All  | Cobalt Building logo links back to Home Page | Pass |
| All  | Text colour changes to white in navigation bar items when the mouse hovers | Pass |
| All  | Active navigation bar items are off-white text | Pass |
| All  | Navigation links bring the user to relevant page | Pass |
| All  | Footer social media icons bring the user to relevant sites via a new tab | Pass |
| All  | 'Contact' heading has a form and contact card which are responsive and functional | Pass |
| All  | Images and sections are responsive in different media sizes | Pass |
| History | History page text and images are clear and legible | Pass |
| Location | Google Map is interactive and opens in a new tab for a larger map | Pass |

 
### **HTML Validation using W3C Validation**  
<details open>
<summary>Index/landing page HTML validation</summary>  

![screenshot of Home Page w3c html validation](docs/HTML%20validation.png)
</details>   

- All the pages passed the W3C HTML validation.

<br>  

### **CSS Validation using W3C Validation** 

<details open>
<summary>CSS validation</summary>  

![screenshot of CSS validation for the Cobalt Building website](docs/CSS%20Validation.png)
</details>   

<br>  

### **Lighthouse scores via Chrome Developer Tools**   
  
For Desktop   
<details>
<summary>Lighthouse audit for Home page</summary>  

![screenshot of Lighthouse audit for Home Page](docs/Lighthouse%20Desktop%20Home%20Page%20Metric.png)
</details> 

<details >
<summary>Lighthouse audit for Cobalt Building page</summary>  

![screenshot of Lighthouse audit for Cobalt Building page](docs/Lighthouse%20Desktop%20Cobalt%20Building%20Page%20Metric.png)
</details>

<details >
<summary>Lighthouse audit for Location page</summary>  

![screenshot of lighthouse audit for Location page](docs/Lighthouse%20Desktop%20Location%20metric.png)
</details>      

<details >
<summary>Lighthouse audit for History page</summary>  

![screenshot of lighthouse audit for History page](docs/Lighthouse%20Desktop%20History%20metric.png)
</details> 

<br>
  
For Mobile   
<details>
<summary>Lighthouse audit for Home page</summary>  

![screenshot of Lighthouse audit for Home Page](docs/Lighthouse%20Mobile%20Home%20Page%20metric.png)
</details> 

<details >
<summary>Lighthouse audit for Cobalt Building page</summary>  

![screenshot of Lighthouse audit for Cobalt Building page](docs/Lighthouse%20Mobile%20Cobalt%20Building%20metric.png)
</details>

<details >
<summary>Lighthouse audit for Location page</summary>  

![screenshot of lighthouse audit for Location page](docs/Lighthouse%20Mobile%20Location%20metric.png)
</details>      

<details >
<summary>Lighthouse audit for History page</summary>  

![screenshot of lighthouse audit for History page](docs/Lighthouse%20Mobile%20History%20metric.png)
</details>

<br>
  
### **Bugs & Fixes**  
  
  - There were a number of bugs which I fixed during the build phase and the two main ones are as below.

| Bug | Section | Fix |
| :----| :----| :--------:|
| Nesting button element in an anchor element | Navigation Bar | When running the W3C validation test, I discovered that I had made an error by placing a button element inside an anchor element for the Leaseholder Portal button. Semantically, this was incorrect. I was trying to put a hyperlink in a button.  The options to solve this were presented in this [article](https://testbook.com/web-development/how-to-create-an-html-button-that-acts-like-a-link#:~:text=You%20can%20use%20the%20OnClick,to%20define%20the%20link%20address.) and I changed the code as per Option 1.  I re-checked my HTML code with W3C Validator and my site to find the issue resolved. |
| br element in li element  | Footer |  Semantically I made an error by using the br element to make space between the social icons in the footer. On performing the W3C validation test, I became aware of this error. I experimented by (1) putting separate divs for each social media icon and (2) putting each social media item in a separate ul and li combination.  Option (2) worked and the W3C Validator passed my HTML code.|

### **Unsolved Bugs** 

- Some of the Location page masonry images lie on top of the footer when this page is opened first.  I have not managed to understand why this happens so I will keep researching to solve this issue.
- I was not able to make the the Leaseholder Portal button in the navigation bar fully responsive so I had to remove it for smaller screen views.  I will try to find out the reason for this and then find a solution.
- The footer responsiveness also needs to be improved so that all the 4 columns fit for all screen views.  I will continue to look for a solution for this.  

<br>
---  

## Credits  
  
### **Content References**
- All the content for the website has been written by myself, based on my extensive research
- [Code Institute](https://codeinstitute.net/ie/) for their HTML, CSS, & Bootstrap learning material
- [W3Schools](https://www.w3schools.com/) for additional learning material
- [Bootstrap example for masonry](https://getbootstrap.com/docs/5.0/examples/masonry/)
- [Codepen](https://codepen.io/Maxalos/pen/MXXqGj) for the stylish vertical responsive timeline
- Fred Rodgers – a neighbour and long-term Barbican resident who provided his paper on the history of the Barbican Wildlife Garden and pointed out further resources to me
- Jonathan Spengler who pointed me to Caroline Sandes' 2018 academic paper on the THE BARBICAN BEFORE BARBICAN: THE HOUSE, ITS HISTORY AND THE ‘IMAGINARY’ WATCHTOWER
- Amy Richardson - developer of SCOOPS website - for README structure
  
### **Media References**  
  
- [London Metropolitan Archives](https://www.cityoflondon.gov.uk/things-to-do/history-and-heritage/london-metropolitan-archives)
- [British Museum](https://www.britishmuseum.org/)
- [British History Online]( https://www.british-history.ac.uk/)
- [The interactive Ogilby & Morgan Large Scale Map of London as Rebuilt in 1676](https://www.british-history.ac.uk/no-series/london-map-ogilby-morgan/1676) 
- [The interactive MOEM AGAS Map](https://mapoflondon.uvic.ca/map.htm)
- [Old & New London by Thornbury & Edmond book](https://www.british-history.ac.uk/old-new-london/vol1/pp1-16)
- The 1995 Marketing Brochure for the Cobalt Building
- [Dexters estate agents' photos of apartments for rent in Bridgewater Square](https://www.dexters.co.uk/property-lettings/flats-to-rent-in-bridgewater-square)
- [Dreamtime city of London panorama photo](https://www.dreamstime.com/stock-photo-city-london-panorama-image46882167)
- [Google Maps](https://www.google.com/maps) for the map used in this website

### **Acknowledgements** 

- I would like to express my deepest gratitude to our Bootcamp instructor Richey Malhotra for his patience and guidance and most of all for setting me up with the stylised hero image for the home page of this website.
- I am grateful for the support and help given by my Bootcamp cohort colleagues Rob, Rosie and Sharon for debugging and design.   
- I am thankful to WAES and the Code Institute for providing this unique opportunity for me to upskill and learn Digital Skills.
- Last but not least, I am grateful to my sister for looking after our parents so that I have been able to devote time to learning the technology and creating this website.

### **Reflections** 

- This is my first website project from scratch.  
- Initially, I found it a giant task as a) none of my code would work and b) I was researching the subject matter as I wanted to create a meaningful and value-adding publically available website.  However, following the principles as taught on this Bootcamp to date (Jan 2023) and once the home page began to take shape, my confidence in coding and using Bootstrap grew.  I was then able to work through the rest of the website more comfortably.  However, I did decide, to build a demo site first and then copied that across to this site (therefore my commits are fewer here).  
- I have learnt how important patience and systematic thinking are for software development and that such an approach does indeed deliver results.  
- I am also tremendously pleased and excited that the website fully reflects the vision I had of it at the beginning of this project!      