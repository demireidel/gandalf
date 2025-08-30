import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    glb: {
      exterior: "/assets/glb/exterior_low.glb",
      core: ["/assets/glb/core_lod0.glb", "/assets/glb/core_lod1.glb", "/assets/glb/core_lod2.glb"],
      mcr: ["/assets/glb/mcr_lod0.glb", "/assets/glb/mcr_lod1.glb", "/assets/glb/mcr_lod2.glb"]
    },
    credits: [
      { id: "S01", title: "IAEA PRIS — Atucha II", link: "https://pris.iaea.org/PRIS/CountryStatistics/ReactorDetails.aspx?current=5" },
      { id: "S02", title: "World Nuclear Association — Atucha 2", link: "https://world-nuclear.org/nuclear-reactor-database/details/atucha-2" },
      { id: "S03", title: "NA-SA — Atucha II info", link: "https://www.na-sa.com.ar/" }
    ]
  };
  return NextResponse.json(manifest);
}
