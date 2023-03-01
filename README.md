# The Diabeater
[View live project here on GitHub](https://priyadevnow.github.io/The-Cobalt-Building-London/)

The Diabeater is an interactive tool for South Asians to assess their risk of getting Type 2 diabetes and then providing diet and other tips to transform their lifestyle.   

<br>  
  
![screenshot of landing page](docs/Landing_page.png)


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
  * [Card Facts](#card-facts)
  * [Form](#form)
  * [Solutions](#solution)
  * [Footer](#footer)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries, Technologies & Programs Used](#frameworks-libraries-technologies--programs-used)
* [Deployment](#deployment)
  * [How to deploy](#how-to-deploy)
* [Testing](#testing)
  * [HTML Validation using W3C Validation](#html-validation-using-w3c-validation)
  * [CSS Validation using W3C Validation](#css-validation-using-w3c-validation)
  * [JavaScript Validation using JSHint](#js-validation-using-JSHint)
  * [Lighthouse scores via Chrome Developer Tools](#lighthouse-scores-via-chrome-developer-tools)
  * [Bugs & Fixes](#bugs--fixes)
  * [Unsolved Bugs](#unsolved-bugs)
* [Credits](#credits) 

---    

## User Experience (UX)  
  
### **User Stories**  

### **Primary Goal**  
  
The Diabeater is a digital tool for South Asians to diagnose their risk of getting diabetes and the measures they should take to alleviate this risk.

### **Visitor Goals** 

- The website is intended to be accessed by South Asians seeking to make a quick health risk assessment. 
 
- Keeping the above in mind, the website is straight to the point and easy to navigate for those seeking information about the building, its location and the history of the area. 

- The website has been designed to be responsive to allow visitors to view it from a range of devices, especially mobiles and smartphones. 

### **First Time Visitor**
- A user can access the interactive diabetes risk assessment form whic is located halfway down on the landing page.  

### **Returning Visitor**  
- Visitors are encouraged to return to the site and regularly check their diabetes risk assessment.  When the new diet recipe module is up and running the users will be able to generate their weekly diet plans and so engage further with the website.     
  
--- 

## Creation Process  
  
### **1. Strategy**  

- The strategy was to build an easy-to-click & follow, simple, non-intimidatory website that delivers clear information about diabetes and measures that the user should take to prevent it.  
- As the user is required to interact with the tool, the entire website needed to be inviting, with the use of consistent and neat design, graphics, precise wording and colour.  
- Mobile responsiveness is an essential feature required for this website.
  
### **2. Scope**  

- The Diabeater website must be available on a wide range of devices due to the age range of the users being targetted. 
- The site is to contain only essential information presented artistically using the best utility function for each page.  
- Text must be clear and legible on any sized device to allow the user access to all the information.  
- Future development is to include the ability for a user to set up their account on The Diabeater.  Users will then have access to create their weekly diet plans within the parameters suggested by The Diabeater (this requires API integration of the Recipe database from Edamam) and view live prices for a shopping trolley made up of the main ingredients of the recipes in their chosen diet plan (this requires API integration to a major UK supermarket).   
  
### **3. Structure**  

- The website is currrently set up as a single landing page with scroll down simple navigation.  
- The interactive form is halfway down the landing page and designed with Javascript to provide swift feedback to users.  The button on the form is easy to identify, its purpose clearly stated and large size so as to assist users of all ages and improve partipation rates.  sy to identify, clickable buttons and links with a consistent layout have been used in the navigation bar and footer.  
  
### **4. Skeleton**  

- The site was developed to be simple, clear and educational.  
- It is kept to one landing page style only.  
- The navbar contains a centred logo with a tag line underneath it.
- The next section highlights information about diabetes set out in 3 card styles with image top and text bottom - pattern reversed for the middle card.  
- This leads to the form to be completed by the user and empty space which gives feedback.
- The next section sets out examples of diabetes-beating diets and other helpful tips.  
- The landing page ends with the footer, which shows the logo and copyright label on the left and the social media links on the right.
   

### Wireframe 
<details open>
<summary>Wireframe of the landing page</summary>  

![Wireframe](docs/Project2wireframe.jpg)
            

### **5. Surface**  

- A design was created that allowed a simple consistent fluid information flow down the landing page.     
- A palette of colours evoking a healthy diet was chosen as the main method to beat diabetes is through changing one's diet. 
- The Quicksand font is a display sans serif with rounded terminals in regular weight was used which is easy to read gives a soft inviting feel to a subject most people want ignore/put on the bottom shelf.   
  
## Design  

### **Color Scheme**  

- I did a Google search to identify the current vogue 'diet' colors and then used [Adobe Color](https://www.adobe.com/uk/products/color.html) to generate the palette used in The Diabeater.  

![Colour theme swatch](docs/AdobeColor-MyColorTheme.jpg)

- An integrated play of 4 main colours of the colour palette has been made throughout the landing page and one colour reserved as the background colour for the logo.  These pastel colours are soothing and encouraging and totally captivate the user to engage and then spur them to make transformational changes - even those who've only ever had a fleeting thought on how to fight the diabetes disease.  

  
### **Typography**  
  
- [Google Fonts](https://fonts.google.com/) was used to import the font 'Quicksand'.  The Quicksand font is a display sans-serif font so it is eye-catching and draws the user through the page/form and feedback. The regular font weight is used.
  
![Google Fonts Quicksand](docs/fonts.google.com_specimen_Quicksand.png)

        
### **Imagery**  
  
- I have used minimal imagery so as not to visually overload the user and focused mainly on modern universally known icons: 
  *	3 royalty free images 
  * Fontawesome icons
- I have attributed the sources of the images used in the [Credits](#credits) section of this README doc.

---  
  
## Page Features  

### **Navigation Bar**   
<details open>
<summary></summary>  

#### **Desktop View** ![screenshot of Desktop navbar](docs/Navigation_bar.png) 

#### **Mobile View** ![screenshot of Mobile navbar](docs/Project2navigationmobile.png) 
</details>
This remains the same in portrait/landscape and mobile/desktop views.  However, the tagline is only partly responsive in the mobile view as it does not center on the screen.
  
<br>  

### **Card Facts** 

<details open>  
<summary></summary>

#### **Desktop View** 
![screenshot of Desktop view Card Facts](docs/CardfactsProject2.png) 

#### **Mobile View** 
![screenshot of Mobile view Card Facts](docs/cardfactsMobileProject2.png)
</details>
The card facts sections remains the same across all devices, in portrait/landscape and mobile/desktop views.  The columns become slimmer for smaller screens.  

<br> 

### **Form** 

<details open>  
<summary></summary>

#### **Desktop View** 
![screenshot of Desktop view Form](docs/formDesktop.png) 

#### **Mobile View** 
![screenshot of Mobile view Form](docs/formMobile.png) 

The form section requires input in all fields and checking of either one of the radio buttons.  Once the Submit button is pressed, the Javascript code runs which provides the feedback as below:

#### **Desktop View** 
![screenshot of Desktop view of output once Form submitted ](docs/DesktopFormfilled.png) 
<br> 

### **Solutions**
<details open>
<summary></summary>

#### **Desktop View**
![screenshot of Solutions](docs/SolutionsDesktop.png)

#### **Mobile View**
![screenshot of Solutions](docs/SolutionsMobile.png)

The content is the same for portrait/landscape views and for all screen sizes but for repsosnivity it stacks vertically for smaller screens.

### **Footer**  
<details open>
<summary></summary>

#### **Desktop View** 
![screenshot of footer](docs/FooterDesktop.png) 

#### **Mobile View** 
![screenshot of footer](docs/FooterMobile.png) 

</details>
The footer always shows the miniature form of the logo, the copyright label and social media icons and is responsive for all views.    

<br>


---  
                              

## Future Features  

- For future development, I would like to be able to:
 * include the ability for a user to set up their account on The Diabeater.   
 * create functionality so that users will then have access to create their weekly diet plans within the parameters suggested by The Diabeater  - this requires API integration of the Recipe database from Edamam into The Diabeater
 * view live prices for a shopping trolley made up of the main ingredients of the recipes in their chosen recipes in the weekly diet plan  - this requires an API integration from a major UK supermarket.
  
---   
  

## Technologies Used    

### **Languages Used**   

- HTML5
- CSS3
- Javascript

### **Frameworks, Libraries, Technologies & Programs Used**  

- Bootstrap version 5.2.3 – examples and icons – these assisted with styling and responsiveness of website
- Fontawesome icons
- Freesvg icons
- Stockoverflow – to look up code
- W3 Schools – to look up code
- Gitpod - used for version control by utilising the Gitpod terminal to commit and push to GitHub
- GitHub - used to save and store all files for this website after being pushed from Gitpod
- Userpersona - to generate typical users of this website and ensure their pain points were alleviated by the website
- Figma – I did not have the time to use this given the tight project deadline so I sketched the wirteframe using pen and paper 
- Adobe Color – for colour palettes
- Canva – for designing the logo
- Google Fonts – font was imported from here 
- Google Dev Tools - to debug and for testing responsiveness 
- Google Lighthouse - for auditing the website
- W3C Validator - for validating the HTML and CSS code 
- JSHint - for validating the Javascript code

---   
 

## Deployment

### **How to deploy**  

GitHub was used to deploy the website. These were the steps taken to achieve this:  

1. Login to GitHub account
2. Navigate to the project repository: The-Diabeater
3. Click the Settings button near the top of the page
4. In the left-hand menu, find and click on the Pages button
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page

![screenshot of how to deploy site on github](docs/github.com_PriyaDevNow_The-Cobalt-Building-London_settings_pages.png ) 

---  
    

## Testing  

- I had planned for this site to be accessible and legible on all screen sizes, and given its current functionality, expecially on smaller screens of smartphones. 

- I extensively used Chrome Dev Tools to test, tweak and debug throughout the build phase.  Testing was also done on desktop, laptop, iPhone and Android mobile devices.   
  
The results of the form feature testing are as follows:  
  
| Page | Test | Pass/Fail |
| :----| :----| :--------:|
| All  | Form input to be correctly populated | Pass |
| All  | Javascript functionality and calculations being carried out | Pass |
| All  | Feedback provided | Pass |
| All  | Refresh of page resets the form | Pass |

 
### **HTML Validation using W3C Validation**  
<details open>
<summary>Landing page HTML validation</summary>  

![screenshot of HTML5 validation](docs/validator.w3.org_nu_.png)
</details>   
- The W3C HTML validation was passed.

<br>  

### **CSS Validation using W3C Validation** 

<details open>
<summary>CSS validation</summary>  

![screenshot of CSS3 validation](docs/validator.w3.org_nu1.png)
</details>   
 - The W3C CSS validation was passed.

<br>  

### **JavaScript Validation using JSHint** 

<details open>
<summary>Javascript validation</summary>  

![screenshot of JS validation](docs/JSValidator.png)
</details>   
 - The Javascript JSHint validation was passed.

<br>  

### **Lighthouse scores via Chrome Developer Tools**   
  
For Desktop   
<details>
<summary>Lighthouse audit The Diabeater landing page</summary>  

![screenshot of Lighthouse audit for landing page](docs/project2Lighthouse.png)
</details> 
  
<br>
  
### **Bugs & Fixes**  
  
- There were a number of bugs which I fixed during the build phase but I have not been able to resolve the below.
- The form requires either one of the Gender buttons to be checked before submission.  I researched how this would be achieved and came across the following article on Stackoverflow [article]https://stackoverflow.com/questions/22238368/how-can-i-require-at-least-one-checkbox-be-checked-before-a-form-can-be-submitte).  I tried to implement the solution of 7 MArch 2014 but was not successful.  I will work throgh this again to see if I can find the solution for validation of the form for the radio buttons. 
- I also need to do further research so as to imporve the responsivity of some of the aspects of the landing page for the smaller screens.

<br>
---  

## Credits  
  
### **Content References**
- All the content for the website has been written by myself, based on my extensive research
- [Code Institute](https://codeinstitute.net/ie/) for their HTML, CSS, Javascript & Bootstrap learning material
- [W3Schools](https://www.w3schools.com/) for additional learning material
- [Know Diabetes](https://www.knowdiabetes.org.uk/) for the 7 day meal plans

### **Media References**
- Researchgate
- Unsplash

### **Acknowledgement** 

- I would like to express my deepest gratitude to our Bootcamp instructor Richey Malhotra for his patience and help with the Javascript coding.  

    