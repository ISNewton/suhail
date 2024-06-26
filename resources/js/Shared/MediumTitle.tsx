
interface Props {
    text:any
}
export default function ({text} : Props) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {text}
        </h1>
    )
}
