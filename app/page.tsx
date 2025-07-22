import Subheader from "@/components/subHeader"
import Boardcontainer from "@/components/boardContainer"

export default function Home() {
  return (
    <main className="min-h-screen pt-[5rem] p-4 w-5/6 absolute overflow-hidden right-0 bg-white">
        <Subheader />
        <Boardcontainer />
    </main>
  );
}
