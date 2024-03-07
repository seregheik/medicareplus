import Axios from 'axios'
import { useQuery } from '@tanstack/react-query'



const Profile = () => {
    const {data} = useQuery({queryKey:'profile'}, () => {
        return Axios
        .get('https://api.medihaleconsult.com/api/patient/data')
        .then((res)=> res.data)
    })

    console.log(data)

  return (
    <div>yam</div>
  )
}

export default Profile