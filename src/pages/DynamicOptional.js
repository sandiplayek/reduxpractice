import { useParams } from "react-router-dom"

export default function DynamicOptional(){
    let params = useParams();
    console.log(params)
    return (<><div>Dynamic Optional {params.lang} {params.optionalId}</div></>)
}