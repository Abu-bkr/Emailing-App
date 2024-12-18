import SingleEmailStrip from "../SingleEmailStrip/SingleEmailStrip"
import { email } from "../SingleEmailStrip/SingleEmailStrip"
const emailList:email[]= [
   {
    "username": "Abubaker",
    "msg": "Hello, how are you?",
    "time": "2 Oct"
  },
  {
    "username": "Lizaz",
    "msg": "I'm good, thank you!",
    "time": "3 Oct"
  },
  {
    "username": "JohnDoe",
    "msg": "When is the next meeting?",
    "time": "4 Oct"
  },
  {
    "username": "JaneDoe",
    "msg": "The meeting is scheduled for tomorrow.",
    "time": "5 Oct"
  }
]


const AllEmailList:React.FC = ()=> {
   
  return (
   <table>
     <thead>
      {emailList.map( (email, index) => <SingleEmailStrip key={index} email={email}/>)}
    </thead>
   </table>
        
  )
}

export default AllEmailList