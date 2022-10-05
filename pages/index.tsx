import type { NextPage } from 'next'
import axios from 'axios'
import { GiAxeInLog } from 'react-icons/gi'

const Home: NextPage = () => {
  return (
    <div className='text-3xl font-bold underline'>
      VIVID
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/post');

  console.log(response.data.name);
  return {
    props:{}
  }
}
export default Home
