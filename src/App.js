import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Banner from './components/Banner'
import Rowpost from './components/Rowpost'

import { OriginalsUrl,ActionUrl,ComedyUrl,HorrorUrl,RomanceUrl } from './urls'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost title='Netflix Originals' size='poster' url={OriginalsUrl}/>
      <Rowpost title='Action' size='smallPoster' url={ActionUrl}/>
      <Rowpost title='Romance' size='smallPoster' url={RomanceUrl}/>
      <Rowpost title='Horror' size='smallPoster' url={HorrorUrl}/>
      <Rowpost title='Comedy' size='smallPoster' url={ComedyUrl}/>

    </div>

  )
}

export default App