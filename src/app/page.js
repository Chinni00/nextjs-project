// "use client"
import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
// import { useEffect, useState } from 'react'

const  DUMMY_MEETUPS = [
  {
  id:'m1',
  title : 'A First Meetup',
  image:'https://www.tripsavvy.com/thmb/JM9827K0aY8AUPEa5yq-scIgNmk=/2116x1416/filters:fill(auto,1)/aerial-madrid-5c3befdc46e0fb0001faccf7.jpg',
  address:'some adress , 12345 new Mexico',
  description:'this is the first meetup'
},
{
  id:'m2',
  title : 'A Second Meetup',
  image:'https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/07/Opera_House_with_Sydney.jpg',
  address:'some adress , 0987 Sydney',
  description:'this is the second meetup!!'
}
]

const HomePage = async() => {
  // const [loadedMeetups ,setLoadedMeetups] = useState([])
// useEffect(()=>{
// setLoadedMeetups(DUMMY_MEETUPS)
// },[])


  return (
    <Layout> 
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
   
  )
}


export default HomePage