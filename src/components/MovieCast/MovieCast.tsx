import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieCastById} from "../../../api.js";

type castType = {
  cast_id: number;
  profile_path: string;
  name: string;
  character: string;
}

const MovieCast = () => {
  const {id} = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCastById(id).then(cast => {
      setCast(cast);
    });

  }, [id])


  return (
    <div className="grid grid-cols-3 gap-4">
      {cast.length > 0 && cast.map((castData: castType) => {
        return (
          <div key={castData.cast_id} className="flex flex-col items-center my-2">
            <div className="mr-2">
              <img width={100} src={`https://image.tmdb.org/t/p/w500/${castData.profile_path}`}
                   alt="Movie Poster"/>
            </div>
            <div className="details">
              <p>
                {castData.name}
              </p>
              <p>
                Character: {castData.character}
              </p>
            </div>
            {/*<hr/>*/}
          </div>
        )
      })}
    </div>)
}

export default MovieCast;