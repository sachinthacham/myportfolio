import image01 from '../MyImages/hardware project/img01 (2).jpg'
import image02 from '../MyImages/hardware project/img03 (2).jpg'
import image03 from '../MyImages/hardware project/img02 (2).jpg'
import image04 from '../MyImages/hardware project/img04 (2).jpg'
import image05 from '../MyImages/softwareproject/img01.png'
import image06 from '../MyImages/softwareproject/img02.png'
import image07 from '../MyImages/softwareproject/img03.png'
import image08 from '../MyImages/softwareproject/img04.png'
import sample01 from '../MyImages/img01.jpg';
import sample02 from '../MyImages/img02.jpg';
import sample03 from '../MyImages/img03.jpg';




const projects = [
    {
      id: 1,
      img: image01,
      name:"Employee Management System",
      tech:
        ".Net | React | Typescript | MSSQL" ,
    
      descript: " development of a comprehensive company website for  Clipess (Pvt) Ltd, improving communication am by providing timely  insights into project progress, benefiting "
      ,images: [
        { src: image05 },
        { src: image06 },
        { src: image07 },
        { src: image08 }, // Add the fourth image for Project 2
      ],

 



    },
    { id:2,
      img: image02,
      name:"Automated Washroom System",
      tech:
        "Arduino | Easy EDA",
      descript: " This project created an automated system to keep improving communication am by providing timely  insights into project progress, benefiting  "
      ,images: [
        { src: image01 },
        { src: image02 },
        { src: image03 },
        { src: image04 }, // Add the fourth image for Project 2
      ],
    },
    {   id: 3,
        img: image03,
        name:"E- commerce website (for clothes) ",
        tech:
          "Node | React | Express | MongoDB" 

        ,
        descript:  "This project includes features such as user authentication, improving communication am by providing timely  insights into project progress, benefiting "
        ,images: [
          { src: sample01 },
        
        ],



 
 },
      { id:4,
        img: image04,
        name:"Leo project management system",
        tech:
        "Node | React | Express | MongoDB" ,
        descript: " d real-time updates,  improving communication am by providing timely  insights into project progress, benefiting both  management and general members. "
        ,images: [
          { src: sample02 },
         
        ],

 

 },
      {  id:5,
        img: image04,
        name:"Hotel Booking System",
        tech:
          
          "Node | React | Express | MongoDB| Typescript",
  
        descript: "I developed a full-featured hotel booking application,  implementing key functionalities such as user  authentication, hotel management (add, view, and edit), "
        ,images: [
          { src: sample03 },
         
        ],

        },
    
        {  id:6,
          img: image04,
          name:"Hotel Booking System",
          tech:
            
            "Node | React | Express | MongoDB| Typescript",
    
          descript: "I developed a full-featured hotel booking application,  implementing key functionalities such as user  authentication, hotel management (add, view, and edit), "
          ,images: [
            { src: sample03 },
           
          ],
  
          },


      

    
  ]

  export default projects;