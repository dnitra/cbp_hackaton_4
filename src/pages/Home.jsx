import { useContent } from "../contexts/ContentContext"
export default function CountriesSelection() {
   
    const content = useContent()

    return (
        <main>
            {content.welcome }
        </main>
    )
}