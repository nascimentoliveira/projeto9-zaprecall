import { useState } from 'react';
import styled from 'styled-components';
import play from '../assets/img/seta_play.png';
import turn from '../assets/img/seta_virar.png';
import notRemember from '../assets/img/icone_erro.png';
import almost from '../assets/img/icone_quase.png';
import right from '../assets/img/icone_certo.png';

export default function Card({ card, index, result, setResult }) {
  const statusNames = ['standby', 'question', 'answer', 'answered'];
  const [cardStatus, setCardStatus] = useState(statusNames[0]);

  function nextStatus(curretStatus) {
    return statusNames[statusNames.indexOf(curretStatus) + 1];
  }

  function updateCard(recall) {
    const newResult = [...result];
    newResult[index] = recall;
    setResult(newResult);
    setCardStatus(nextStatus(cardStatus))
  }

  function setColorCard(status) {
    switch (status) {
      case 'notRemember':
        return '#FF3030';
      case 'almostDontRemember':
        return '#FF922E';
      case 'zap':
        return '#2FBE34';
      default:
        return '#333333'
    }
  }

  function setImgAnswered(status) {
    switch (status) {
      case 'notRemember':
        return notRemember;
      case 'almostDontRemember':
        return almost;
      case 'zap':
        return right;
    }
  }

  function setImageText(status) {
    switch (status) {
      case 'standby':
        return ({ text: `Pergunta ${index + 1}`, img: play });
      case 'question':
        return ({ text: card.question, img: turn });
      case 'answer':
        return ({ text: card.answer, img: '' });
      case 'answered':
        return ({ text: `Pergunta ${index + 1}`, img: setImgAnswered(result[index]) });
    }
  }

  function setStyleProps(status) {
    switch (status) {
      case 'standby':
        return ({
          status: 'standby',
          styleText: {
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '19px',
            color: setColorCard(result[index])
          },
          styleImg: {
            width: '20px',
            height: '23px'
          }
        });

      case 'question':
        return ({
          status: 'responding',
          styleText: {
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: setColorCard(result[index])
          },
          styleImg: {
            width: '30px',
            height: '20px',
          }
        });

      case 'answer':
        return ({
          status: 'responding',
          styleText: {
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '22px',
            color: setColorCard(result[index])
          },
          styleImg: {
            width: '0',
            height: '0'
          }
        });

      case 'answered':
        return ({
          status: 'answered',
          styleText: {
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '19px',
            color: setColorCard(result[index])
          },
          styleImg: {
            width: '23px',
            height: '23px'
          }
        });
    }
  }

  const { text, img } = setImageText(cardStatus);

  if (cardStatus !== 'answer') {
    return (
      <CardDisplay styleProps={setStyleProps(cardStatus)}>
        <span>{text}</span>
        <img onClick={() => setCardStatus(nextStatus(cardStatus))} src={img} />
      </CardDisplay>
    );
  } else {
    return (
      <CardDisplay styleProps={setStyleProps(cardStatus)}>
        <span>{text}</span>
        <div>
          <button
            onClick={() => updateCard('notRemember')}
            style={{ backgroundColor: '#FF3030' }}
          >Não lembrei
          </button>
          <button
            onClick={() => updateCard('almostDontRemember')}
            style={{ backgroundColor: '#FF922E' }}
          >Quase não lembrei
          </button>
          <button
            onClick={() => updateCard('zap')}
            style={{ backgroundColor: '#2FBE34' }}
          >Zap!
          </button>
        </div>
      </CardDisplay>
    );
  }
}

const CardDisplay = styled.section`
  width: 300px;
  min-height: ${props => props.styleProps.status === 'responding' ? '130px' : '65px'};
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px 15px 6px 15px;
  display: flex;
  flex-direction: ${props => props.styleProps.status === 'responding' ? 'column' : 'row'};
  margin-bottom: 25px;
  justify-content: space-between;
  align-items: center;
  position: ${props => props.styleProps.status === 'responding' ? 'relative' : 'static'};

  span {
    font-family: 'Recursive', sans-serif;
    font-weight: ${props => props.styleProps.styleText.fontWeight};
    font-size: ${props => props.styleProps.styleText.fontSize};
    line-height: ${props => props.styleProps.styleText.lineHeight};
    text-decoration-line: ${props => props.styleProps.status === 'answered' ? 'line-through' : 'none'};;
    color: ${props => props.styleProps.styleText.color};
    margin: 0px 15px;
  }

  img {
    color: #333333;
    width: ${props => props.styleProps.styleImg.width};
    height: ${props => props.styleProps.styleImg.height};
    margin: 0px 15px;
    position: ${props => props.styleProps.status === 'responding' ? 'absolute' : 'static'};
    right: 0;
    bottom: ${props => props.styleProps.status === 'responding' ? '6px' : '0'};
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: 32%;
      height: 40px;
      border-radius: 5px;
      border: none;
      font-family: 'Recursive';
      font-style: normal;
      font-size: 12px;
      line-height: 14px;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
    }
  }
`;