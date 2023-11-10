import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        (async() => {

            const data = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setData(data.data.movie);
            setLoading(false);
        })();
    }, [id]);

    console.log(data);

    return (
        <>        
            {loading ? 
                <h1>Loading...</h1> : 
                <div>
                    <h2>{data.title}</h2>
                    <hr />    
                    <div>
                        <img alt={data.title_long} src={data.small_cover_image} />
                        <p>{data.year}</p><p>{data.rating}</p>
                        <p>{data.description_full}</p>
                        
                    </div>
                </div>
            } 
        </>    
    );
}
export default Detail;