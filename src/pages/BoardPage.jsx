import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificData } from '../Api/Database';
import Board from '../components/board/Board';
function BoardPage(props) {
  const [data, updateData] = useState(null);
  const params = useParams();
  useEffect(() => {
    params.id &&
      getSpecificData({ collection: 'boards', id: params?.id }).then((res) =>
        updateData(res)
      );
    !params.id && updateData(null);
  }, [params.id]);
  return <Board AuthUser={props.AuthUser} isUser={props.isUser} data={data} />;
}

export default BoardPage;
