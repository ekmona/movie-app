import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        (async() => {

            const data = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setData(data);
        })();
    }, [id]);

    console.log(data);
    return <h1>Detail</h1>;
}
export default Detail;