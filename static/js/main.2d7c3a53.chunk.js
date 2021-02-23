(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),r=t.n(s),c=(t(13),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/Profile.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements[0]),l.a.createElement("p",null,e.Achievements[1]),l.a.createElement("p",null,e.Achievements[2])))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null),l.a.createElement("h6",null,"Languages:"),"HTML5/CSS3, JavaScript ES6+, C++, Python3 ",l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement("h6",null,"Applications:"),"React.js, Node.js, Express.js, MongoDB, Mongoose, APIs, mySQL, Git/Github, Sequelize",l.a.createElement("p",null))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.href},l.a.createElement("img",{src:"".concat(e.imgurl)}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"icon-plus"})))))}),e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{id:e.modal,className:"popup-modal mfp-hide"},l.a.createElement("img",{src:"".concat(e.imgurl)}),l.a.createElement("div",{className:"description-box"},l.a.createElement("h4",null,e.name),l.a.createElement("p",null,e.description),l.a.createElement("span",{className:"categories"},l.a.createElement("i",{className:"fa fa-tag"}))),l.a.createElement("div",{className:"link-box"},l.a.createElement("a",{href:e.deployed},"Try It Out!"),l.a.createElement("a",{href:e.githuburl},"Github"),l.a.createElement("a",{className:"popup-modal-dismiss"},"Close")))})))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Please feel free to get in touch with me emailing",l.a.createElement("span",null,l.a.createElement("a",{href:"mailto: ikenna.nwagbara@gmail.com"},"ikenna.nwagbara@gmail.com"))))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},"Ikenna Nwagbara",l.a.createElement("br",null),"Atlanta, GA",l.a.createElement("br",null),l.a.createElement("span",null,"(678) 557-2142"))))))}}]),a}(n.Component),b=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={imagebaseurl:"https://rbhatia46.github.io/",name:"Ikenna Nwagbara",role:"Full-stack Developer",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:" I love learning about cutting edge AI technologies and building things. I'm also really into anime and comic books.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/ikenna-nwagbara/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/ItsJustIkenna",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/ItsJustIkenna",className:"fa fa-twitter"}],aboutme:"Full-stack software developer leveraging math and computer science background to build more responsive and functional web experiences. Recently graduated with a computer engineering degree from Hampton University as well as earned a certificate in full-stack development from the Georgia Tech coding bootcamp, with newly developed skills with the MERN stack and python development. Known as an innovative problem solver and passionate about backend development and data science. I\u2019m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.",address:"Atlanta, Georgia",email:"ikenna.nwagbara@gmail.com",education:[{UniversityName:"Hampton University",specialization:"Bachelor's in Engineering",MonthOfPassing:"May",YearOfPassing:"2021",Achievements:["President of the African Student Association","General Member of Association for Computer Machinery","General Member of National Society of Black Engineers"]},{UniversityName:"Georgia Institute of Technology",specialization:"Certificate in Full-Stack Development",MonthOfPassing:"March",YearOfPassing:"2021",Achievements:["","",""]}],work:[{CompanyName:"Home Care Solutions, LLC",specialization:"Administrative Assistant",MonthOfLeaving:"Aug",YearOfLeaving:"2020",Achievements:"Answered phone calls, scheduled meetings and supported visitors and carried out administrative duties such as filing, typing, copying, binding, scanning etc."}],skills:[{skillname:"HTML5"},{skillname:"CSS3"},{skillname:"JavaScript ES6+"},{skillname:"React.js"},{skillname:"Node.js"},{skillname:"Express.js"},{skillname:"MongoDB"},{skillname:"C++"},{skillname:"Python3"}],portfolio:[{href:"#modal-01",modal:"modal-01",name:"Booze-n-tunes",description:"Booze 'n Tunes is an app that recreates the bar experience. Users click from the dropdown menu and select a mood. They are then displayed with a cocktail drink recipe, associated playlist, an associated gif, and a fun little message. The User is then also able to change the playlist or drink within that mood. They can also change the mood itself.",imgurl:"images/portfolio/project_1.PNG",githuburl:"https://github.com/ItsJustIkenna/booze-n-tunes",deployed:"https://spencerv86.github.io/booze-n-tunes/"},{href:"#modal-02",modal:"modal-02",name:"Workout Tracker",description:"An application that allows users to track their daily workouts. This app uses a Mongo database with a Mongoose schema and handles routes with Express. It is also deployed with Heroku. Users are able to log multiple exercises in a workout on a given day. They can track the name, type, weight, sets, reps, and duration of the exercise. If the exercise is a cardio exercise, the user can track the distance traveled.",imgurl:"images/portfolio/Project_2.PNG",githuburl:"https://github.com/ItsJustIkenna/workout-tracker",deployed:"https://warm-falls-63193.herokuapp.com/?id=602339ca97808c0015d8a7d8"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},N=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(f,{resumeData:g}),l.a.createElement(v,{resumeData:g}),l.a.createElement(b,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.2d7c3a53.chunk.js.map