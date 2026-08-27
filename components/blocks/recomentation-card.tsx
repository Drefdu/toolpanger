import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function RecomendationCard() {
  return (
    <div className="mb-2">
      <h3 className="mb-2 text-xl font-medium">Coderabbit</h3>
      <div className="box-border w-full rounded-lg border-2 border-[#2e2d2d] bg-[#212121]">
        <AspectRatio ratio={16 / 9} className="relative rounded-lg bg-muted">
          <Image
            src="/images/coderabbit.png"
            alt="Photo"
            fill
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute right-2 bottom-2 z-20 flex flex-row justify-end gap-2">
            <Button>
              <span className="text[16px]">Leer más</span>
            </Button>
            <Button>
              <span className="text[16px]">Visitar</span>
            </Button>
          </div>
        </AspectRatio>

        {/* Text content */}
        <div className="w-full px-4 pt-2 pb-4">
          <Badge className="my-2 text-[9px]">CI/CD</Badge>
          <p className="text-[12px]">
            Herramienta para revision de pull request, se configura dentro de
            GitHub o Bitbutcket y realizar revisiones automaticas del codigo.
          </p>
        </div>
      </div>
    </div>
  )
}
