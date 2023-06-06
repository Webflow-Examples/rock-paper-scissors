import { Game } from "@/components";
import { Header, Footer, PageTitle, Rules } from "@/devlink";

export default function Home() {
  return (
    <>
      <Header 
        playText="Learn the game"
        playLink={{ href: "https://www.roshambo.dev/"}}
        historyLink={{ href: "https://www.roshambo.dev/history"}}
        cultureLink={{ href: "https://www.roshambo.dev/culture"}}
        strategyMath={{ href: "https://www.roshambo.dev/strategy-and-math"}}
        homeLink={{ href: "https://www.roshambo.dev/"}}
        brandLink={{ href: "https://www.roshambo.dev/"}}
      />
      <PageTitle 
        headingTitle="Let's play"
        hidden={true}
        pageSummary="Paper. Rock. Scissors. Paper covers rock. Rock crushes scissors. Scissors cuts paper. That's all."
      />
      <Game />
      <Footer />
    </>
  )
}
