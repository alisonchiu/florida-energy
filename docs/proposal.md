# Florida Energy System Consortium Proposal

## 1. Objective of the Site Redesign
The [Florida Energy Systems Consortium (FESC)](http://floridaenergy.ufl.edu/) was created by the Florida State government to promote collaboration among the energy experts at its 12 supported universities to share energy-related expertise. Its website is intended to inform users involved or interested in the consortium's efforts by providing the necessary resources and information through a variety of links.

The objective of this redesign is improve the site's user experience. This proposal will evalaute the site's current accessibility, mobile friendliess, performance, functionality and ease of use, followed by what device support may be necessary and recommendations for improvement. The final deliverable will produce a website that is more intuitive, efficient, and accessible.

## 2. State of the Current Site
### A. Accessbility Audit
Using the [Web Accessibility Evaluation Tool (WAVE)](http://wave.webaim.org/) the following evaluation summary of the FESC homepage was produced:
* 11 Errors
* 7 Alerts
* 17 Features
* 8 Structural Elements
* 1 HTML5 and ARIA
* 11 Contrast Errors

The main error are the missing alternative texts, which can impede screen readers or when the image is unavailable. Very low contrast was detected in the primary links at the top of the page and in the footer. This can make reading the text difficult for users with low vision. 

Review the [Full Report](http://wave.webaim.org/report#/http://floridaenergy.ufl.edu/).

### B. Mobile Friendliness
Overall, the FESC site is no mobile friendly. The following 4 issues were produced using Google's [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):
* Viewport not set
* Clickable elements too close together
* Text too small to read
* Content wider than screen

To summarize, the FESC site is non-responsive and does not adapt to smaller screen sizes so the desktop experience is directly translated into the mobile one. This is incredible important because [77% of mobile searches happen at work or home where a desktop or laptop is present](http://www.openvine.com/small-business-internet-blog/why-does-responsive-design-matter).

Review the [Full Report](https://search.google.com/test/mobile-friendly?id=Tv9Qmr6Ps6DZDmQ12_04_g).

### C. Performance
According to a [A Beginner's Guide to Website Speed Optimization](https://firstsiteguide.com/website-speed/), a website speed matters because it affects a site's traffic, page views, conversions, sales and overall reputation. 47% of people expect a site to load in less than two seconds, and 40% are very likely to leave if it takes more than 3 seconds to load. More importantly, a one-second delay can reduce overall conversaion by 7%. While FESC may not be a store selling products, optimizing its performance may yield greater interest in what information it has to offer.

The Pingdom tool produced an overal performance grade of 86 (B), with a load time of 1.89 seconds which makes it faster than 72% of tested sites. The site was tested from NYC, NY. Overall, the site is image heavy as they made up:
* 55.9% of requests made by content type (33/59)
* 43.5% of content size by content type (569.01 KB/1.22 MB)

This has negatively impacted the browser caching because the browser is taking large of amounts of time to load the images. 

Review the [Full Report](https://tools.pingdom.com/#!/cEQOGo/http://floridaenergy.ufl.edu/).

### D. Functionality
The website is functional and does as intended --- inform inteerested users of the FESC's purpose and who is involved. All of the FESC's information is clearly labeled. A user would know where to find information on how to contact the consortium and get involved. The purpose of the site is also clearly displayed. However, it is important to note that [functionality and usability](https://www.qualitestgroup.com/white-papers/functional-testing-vs-usability-testing/) are different.

Additionally, the FESC's informational brochure is unavailable and outdated information (an energy summit from 2017) is still present. The site's copyright has also not been updated since 2015.

### E. Ease of Use
A lot of information is presented to users, which can be both helpful and detrimental. Eight links are included in the horizontal blue navigation bar, and 15 links in the green one for a total of 23. This may be overwhelming for first time visitors as the links may be too specific. The site map also has a 22 categories, wtih some redundancies. For example, the News Archive and FESC User Facilities (FL-CAN) are listed twice.

The newsletter signup is also easy to miss as it only appears on the homepage. As a result, the FESC may be missing the opportunity to connect with more interested users because it is not very noticeable.

## 3. Device Support Necessary
[Screensiz.es](http://screensiz.es/) provides a list of resolutions for various mobile, tablet and desktop. By sorting through each based on popularity, the following should be supported at minimum: 
* Apple iPhone 7/7+ (750x1334)
* Apple iPad Pro (2732x2048)
* Dell XPS 13 (1920x1080)

Each one has a popularity rating of 100. However, the Apple iPad Pro size may be excessive, so a 1024x768 viewport may be more reasonable. 

According to recent statistics presente dby [W3Counter](https://www.w3counter.com/globalstats.php), a 1024x768 resolution is among the top 5 in screen resolutions. It is also important that the site be Chrome compatible first, as it makes up 55.2% of the web browser market share. The next highest is Safari at 13.5%.

## 4. Recommendations for Improvement
The following are recommendations to optimize the Florida Energy Systems Consortium's website so that it will meet industry standards and improve its overall accessibility and user friendlyness.
* **Optimize for responsive design**: the website should include the most common viewports as discussed in section 3 (Device Support Necessary). This will make the site more appealing for users wanting to quickly browse the site and learn more about FESC from their computer or phone. Updates should also include improving clickable elements and allowing the text sizes to readjust depending on the users' viewport.
* **Improve the navigation**: reducing the number of links and simplying the design will make the experience friendlier and easier to use. The sidebar links should either be redesigned or moved as it competes with the horizontal navigation. They also have low color contrast, which should be adjusted for better accessibility and readability. 
* **Reorganize content**: some content may be better suited in the footer like the newsletter and social media links so that they appear on every page. Quick links to important information may be included here as well. 
* **Audit images**: Review what images are necessary and see if svg's can be implemented where possible to reduce the load time. Some images are also missing descriptions so they will need to be added in case of screenreaders or if the image ever breaks.
