import BoardHeader from "@/components/boardHeader"
import BoardContainer from "@/components/boardContainer"

export default function Home() {
  return (
    <main className="min-h-screen pt-[5rem] p-4 w-5/6 absolute overflow-hidden right-0 bg-white">
        <BoardHeader />
        <BoardContainer />
    </main>
  );
}
