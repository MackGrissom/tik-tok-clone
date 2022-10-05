import type { NextPage } from 'next'
import axios from 'axios'
import {video } from '../types'

interface IProps {
  videos: Video[]
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='text-3xl font-bold underline'>
      VIVID
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data }  = await axios.get('http://localhost:3000/api/post');

  
  return {
    props: {
      videos: data,
    }
  }
}
export default Home
