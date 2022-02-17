import React from 'react';
import { useParams } from 'react-router-dom';
import Flex from '../../ui/flex/Flex';
import Classes from './TaskList.module.css';
function AddCard(props) {
  const params = useParams();

  return (
    <Flex
      className={Classes.Add_Button}
      onClick={() => {
        var name = prompt('enter name');
        const newCards = [
          ...props.cards,
          {
            createdBy: props.AuthUser.uid,
            assignedTo: [props.AuthUser.uid],
            labelColor: '',
            name: name,
          },
        ];
        props.updateCards(newCards);

        props.backupData.taskList[props.index].cards = newCards;

        props.callUpdate({
          collection: 'boards',
          data: props.backupData,
          id: params.id,
        });
      }}
    >
      AddCard
    </Flex>
  );
}

export default AddCard;
