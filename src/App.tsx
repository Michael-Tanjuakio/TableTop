// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { 
  VStack,
  IconButton
} from "@chakra-ui/react"
import YouTube, { YouTubeProps } from 'react-youtube';

// Main page screen
// 1. Hot reload [good]
// 2. Vite 

// Run: npm run dev

function App() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  // const perf = window.performance.getEntriesByType("navigation")[0];
  // const loadTime: number =
  //         (perf as PerformanceNavigationTiming).loadEventEnd -
  //         (perf as PerformanceNavigationTiming).requestStart;
  // console.log(Math.abs(loadTime))

  // https://developers.google.com/youtube/player_parameters
  // h, w: 390, 640

  var width = window.innerWidth * 0.8
  console.log(`Width: ${width}`)

  var height = (window.innerHeight - .1) * 0.8
  console.log(`Height: ${height}`)
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=8BcShXw_CuWtS7pY" */

  const opts: YouTubeProps['opts'] = {
    width: width,
    height: height,
    playerVars: {
      autoplay: 1, 
      controls: 1,
      rel: 0,
      showinfo: 0,
      disablekb: 1,
      loop: 1 
    },
  };

  return (
    <>
      <VStack>
        <YouTube 
          videoId="jfKfPfyJRdk?si=8BcShXw_CuWtS7pY" 
          opts={opts} 
          onReady={onPlayerReady} 
        />
      </VStack>
    </>
  )
}

export default App

/*
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  <h1>Vite + React</h1>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.tsx</code> and save to test HMR
    </p>
  </div>
  <p className="read-the-docs">
    Click on the Vite and React logos to learn more!!
  </p>
*/
