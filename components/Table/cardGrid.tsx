"use client"
import RecomendationCard from "../recomendationCard"

export default function CardViewer() {

  return (
    <div className="">
      {/* Card container */}
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-5">
        <RecomendationCard />
        <RecomendationCard />
        <RecomendationCard />
        <RecomendationCard />
        <RecomendationCard />
      </div>
    </div>
  )
}
