import Axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const Profile = () => {
 
    const {data} = useQuery({queryKey: ['profile'], queryFn: () => {
        return Axios
        .get('https://api.medihaleconsult.com/api/patient/data', {headers: {'Content-Type': 'application/json','Authorization':`Bearer ${localStorage.getItem('MediLoginToken')}`}})
        .then((res)=> res.data)
}})

console.log(data)
    

  return (
    <div>
      <div>Name : {}</div>
    </div>
  )
}

export default Profile