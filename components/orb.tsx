"use client"

import { Warp } from "@paper-design/shaders-react"

const SIZE = 280

export function Orb() {
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: SIZE, height: SIZE }}
    >
      <Warp
        width={SIZE}
        height={SIZE}
        colors={["#a5b4fc", "#e0e7ff", "#4f46e5"]}
        proportion={0.35}
        softness={1}
        distortion={0.32}
        swirl={1}
        swirlIterations={0}
        shape="edge"
        shapeScale={0}
        speed={12.2}
        scale={0.31}
        rotation={176}
        offsetX={0.65}
        offsetY={0.09}
      />
    </div>
  )
}
