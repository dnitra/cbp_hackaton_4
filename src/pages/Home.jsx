import { useContent } from "../contexts/ContentContext"
export default function Home() {
   
    const content = useContent()

    return (
        <main>
            {content.welcome }
        </main>
    )
}