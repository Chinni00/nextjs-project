import Layout from "@/components/layout/Layout"



const MeetupDetails = ({params}) => {
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

    const meet = DUMMY_MEETUPS.find(meet => meet.id==params.meetupId)

  return (
    <Layout>
     
<div class="max-w-xxl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={meet.image} alt="a city pic" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{meet.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{meet.address}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{meet.description}</p>
        
    </div>
</div>

    </Layout>
    
  )
}

export default MeetupDetails