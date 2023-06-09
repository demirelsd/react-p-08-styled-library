import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Description, DetailContainer, DetailImg, DetailTitle, InfoPart } from './Detail.style'
import defaultImg from '../../assets/book.jpg'

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(id);
  console.log(state);
  //! fetch by id 
  // const [detailData,setDetailData] = useState();
  // const APP_KEY = process.env.REACT_APP_apiKey;

  // const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${APP_KEY}`;

  // const getDetailData = async () =>{
  //   const {data} = await axios.get(url);
  //   setDetailData(data);
  //   console.log(data)
  // }

  // useEffect(()=>{
  //   getDetailData();
  // },[])

  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
          alt={state.volumeInfo.title}
        />
      </DetailImg>

      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        <p>
          {state.volumeInfo.authors?.map((author) => {
            return <span key={author}>{author}</span>;
          })}
        </p>
        <p>
          {state.volumeInfo.publishedDate}{" "}
          {state.volumeInfo.publisher && (
            <span>/ {state.volumeInfo.publisher}</span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
}

export default Detail