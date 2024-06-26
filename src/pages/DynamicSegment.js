import { useParams } from "react-router-dom"

export default function DynamicSegment(){
    let params = useParams();
    console.log(params.dynamicId)
    return (<><div>Dynamic segment {params.dynamicId}</div></>)
}