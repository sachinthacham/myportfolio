import image01 from '../MyImages/hardware project/img01 (2).jpg'
import image02 from '../MyImages/hardware project/img03 (2).jpg'
import image03 from '../MyImages/hardware project/img02 (2).jpg'
import image04 from '../MyImages/hardware project/img04 (2).jpg'
import image05 from '../MyImages/softwareproject/img01.png'
import image06 from '../MyImages/softwareproject/img02.png'
import image07 from '../MyImages/softwareproject/img03.png'
import image08 from '../MyImages/softwareproject/img04.png'
import HotelImage from '../../Assets/projects/hotel.png'
import BathroomImage from '../../Assets/projects/bath.png'
import employee from '../../Assets/projects/employee.jpg'
import cloth from '../../Assets/projects/cloth.png'
import finance from '../../Assets/projects/finance.jpg'



const projects = [
    {
      id: 1,
      img: employee,
      name:"Employee Management System",
      tech:
        ".Net | React | Typescript | MSSQL" ,
    
      descript: " development of a comprehensive company website for  Clipess (Pvt) Ltd, improving communication am by providing timely  insights into project progress, benefiting "
      ,isdisable:true

 



    },
    { id:2,
      img: BathroomImage,
      name:"Automated Washroom System",
      tech:
        "Arduino | Easy EDA",
      descript: "The Automated Washroom System controls temperature, eliminates bad odors (including cigarette smoke), and ensures a clean, pleasant environment. "
      ,isdisable:true,
      link:""
    },
    {   id: 3,
        img: cloth,
        name:"E- commerce website",
        tech:
          "Node | React | Express | MongoDB" 

        ,
        descript:  "The e-commerce website for clothes offers categorized sections, an easy add-to-cart option, and a seamless shopping experience for users. "
        ,isdisable:false,
        link:"https://github.com/sachinthacham/Ecommerce-website"



 
 },
      { id:4,
        img: cloth,
        name:"Leo project management system",
        tech:
        "Node | React | Express | MongoDB" ,
        descript: " system for managing Leo Club projects that  fosters collaboration and real-time updates, improving communication among all members"
        ,isdisable:true,
        link:""
 
      },

 

 
      {  id:5,
        img: HotelImage,
        name:"Hotel Booking System",
        tech:
          
          "Node | React | Express | MongoDB| Typescript",
  
        descript: "The hotel booking system allows users to add new hotels and easily book available hotels, providing a smooth booking experience."
        ,isdisable:false,
        link:"https://github.com/sachinthacham/hotel-Booking-System"

        },
    
        {  id:6,
          img: finance,
          name:"Finance project",
          tech:
            
            "ASP.Net core 8 | React | MS SQL | Typescript",
    
          descript: "The platform allows users to search favorite stocks, add them to a portfolio, and access income statements, balance sheets, etc. "
          ,isdisable:false,
          link:"https://github.com/sachinthacham/My-Finance-Project"
        }


      

    
  ]

  export default projects;