import dynamic from "next/dynamic"

// Component
const Layer1 = dynamic(() => import("../components/LandingPage/Layer1"), { ssr: false })
const Layer2 = dynamic(() => import("../components/LandingPage/Layer2"), { ssr: false })
const Layer3 = dynamic(() => import("../components/LandingPage/Layer3"), { ssr: false })
const Layer4 = dynamic(() => import("../components/LandingPage/Layer4"), { ssr: false })
const Layer5 = dynamic(() => import("../components/LandingPage/Layer5"), { ssr: false })
const Layer6 = dynamic(() => import("../components/LandingPage/Layer6"), { ssr: false })
const Layer7 = dynamic(() => import("../components/LandingPage/Layer7"), { ssr: false })


const Home = () => {

  return (
    <>
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Layer4 />
      <Layer5 />
      <Layer6 />
      <Layer7 />
    </>
  )
}

export default Home