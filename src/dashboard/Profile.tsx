import Axios from 'axios'
import { useQuery } from '@tanstack/react-query'




const Profile = () => {
 
    const {data} = useQuery({queryKey: [], queryFn: () => {
        return Axios
        .get('https://api.medihaleconsult.com/api/patient/data', {headers: {'Content-Type': 'application/json','Authorization':`Bearer ${'108|O90DWZaKBQJUsgvQelCj8V4wOwT3JRklQVWzmUA27cce62ba'}`}})
        .then((res)=> res.data)
}})

// console.log(localStorage.getItem('LoginToken'))
console.log(data)
    

  return (
    <div>yam</div>
  )
}

export default Profile