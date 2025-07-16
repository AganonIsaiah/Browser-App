import SearchTools from "../components/SearchTools"
import Bookmarks from "../components/Bookmarks"
import Tabs from "../components/Tabs"
import TopTools from "../components/TopTools"
import BotTools from "../components/BotTools"

export default function Sidebar() {


  return (
    <div className="flex flex-col bg-white text-black h-screen w-64">
      <TopTools />
      <SearchTools />
        <div className="flex-1 mx-2">
        <Bookmarks />
        <Tabs />
      </div>
      <BotTools />
    </div>
  )
}