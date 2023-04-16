import Head from 'next/head'
import styled from 'styled-components'

const HomeStyle = styled.div`
  background: green;
  height: 100vh;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Jefferson K. - Portfolio</title>
      </Head>
        <h1>Jefferson K.</h1>
        <HomeStyle>
          <div className='test'>
          </div>  
        </HomeStyle>
    </>
  )
}
