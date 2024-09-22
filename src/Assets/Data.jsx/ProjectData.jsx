import image01 from '../MyImages/img01.jpg'
import image02 from '../MyImages/img02.jpg'
import image03 from '../MyImages/img03.jpg'
import image04 from '../MyImages/img04.jpg'
import image05 from '../MyImages/img05.jpg'
import image06 from '../MyImages/img06.jpg'




const projects = [
    {
      id: 1,
      img: image01,
      name:"Employee Management System",
      tech:
        ".Net | React | Typescript | MSSQL" ,
    
      descript: " development of a comprehensive company website for  Clipess (Pvt) Ltd, with a focus on both static and  dynamic features to address the management and operational needs of the organization in the software sector"


 



    },
    { id:2,
      img: image02,
      name:"Automated Washroom System",
      tech:
        "Arduino | Easy EDA",
      descript: " This project created an automated system to keep  restrooms clean and well-maintained. It includes features  like automatic air fresheners, smoke detectors, and real time toilet paper monitoring. The system also maintains a  reduces the workload for cleaning staff and improves the user experience"
    },
    {   id: 3,
        img: image03,
        name:"E- commerce website",
        tech:
          "Node | React | Express | MongoDB" 

        ,
        descript:  "This project includes features such as user authentication, product management, shopping cart, payment integration, and order tracking, offering a seamless shopping experience from browsing to checkout. Through this project, I gained extensive experience in both frontend and backend development, along with database management."
       



 
 },
      { id:4,
        img: image04,
        name:"Leo project management system",
        tech:
        "Node | React | Express | MongoDB" ,
        descript: " I am developing  a system for managing Leo Club projects that fosters collaboration and real-time updates,  improving communication among all members. This platform enhances transparency by providing timely  insights into project progress, benefiting both  management and general members. "
 

 

 },
      {  id:5,
        img: image04,
        name:"Hotel Booking System",
        tech:
          
          "Node | React | Express | MongoDB| Typescript",
  
        descript: "I developed a full-featured hotel booking application,  implementing key functionalities such as user  authentication, hotel management (add, view, and edit),  search with pagination, sorting, and filtering. The app also  includes booking confirmation with Stripe payment  integration, and all features are backed by automated tests and CI/CD deployments to ensure smooth  operation. "


        },
    
    


      

    
  ]

  export default projects;