let school = [
  {name: 'University of Florida',
   link: 'http://www.ufl.edu/'},

  {name: 'Florida State University',
   link: 'http://www.fsu.edu/'},

  {name: 'University of Central Florida',
   link: 'http://www.ucf.edu/'},

  {name: 'University of South Florida',
   link: 'http://www.usf.edu/'},

  {name: 'Florida A&M Univeristy',
   link: 'http://www.famu.edu/'},

  {name: 'Florida Atlantic Univeristy',
   link: 'http://www.fau.edu/'},

  {name: 'Florida Gulf Coast Univeristy',
   link: 'http://www.fgcu.edu/'},

  {name: 'Florida International Univeristy',
   link: 'http://www.fiu.edu/'},

  {name: 'New College of Florida',
   link: 'http://www.ncf.edu/'},

  {name: 'University of North Florida',
   link: 'http://www.unf.edu/'},

  {name: 'Univeristy of West Florida',
   link: 'http://www.uwf.edu/'},

  {name: 'Florida Polytechnic University',
   link: 'http://www.floridapolytechnic.org/'}
]

document.addEventListener("DOMContentLoaded", function(){

  let footerApp = new Vue({
    el: '#footerApp',
    data: {
      consortium: school
    }
  })

})
