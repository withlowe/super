import dynamic from "next/dynamic"

// Dynamically import the client component with SSR disabled
const IndexClient = dynamic(() => import("./client"), {
  ssr: false,
})

export default function IndexPage() {
  return <IndexClient />
}
