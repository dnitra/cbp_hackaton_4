import { useContent } from "../contexts/ContentContext"
export default function Home() {
   
    const content = useContent()

    console.log(content)
    return (
        <main>
            {content.welcome }
        </main>
    )
}