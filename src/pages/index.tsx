import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";import { Inter } from 'next/font/google'
import MapboxMap from "@/components/mapbox-map";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <MapboxMap/>
  )
}
