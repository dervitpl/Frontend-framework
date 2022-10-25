import { Posts } from '../src/Components/routes/Posts/posts'
import { Home } from '../src/Components/routes/Home/home'
import { FC } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { GlobalStyle } from './styledHelpers/global'
import { Layout } from './Components/Common/Layout'
import { Pictures } from './Components/routes/pictures/pictures'


export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BrowserRouter>
          <img src='' alt='' />

          <div>
            <Link to='posts'>Posts</Link>
            <p></p>
            <Link to='./'>Home</Link>
            <p></p>
            <Link to='pictures'>Pictures</Link>
          </div>
          <Routes>
            <Route path='posts' element={<Posts />} />

            <Route index element={<Home name='eeeaaa' age={21} arr={[1, 2, 3]} />} />

            <Route path='pictures' element={<Pictures/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}