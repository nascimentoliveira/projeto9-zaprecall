import styled from 'styled-components';
import notRemember from '../assets/img/icone_erro.png';
import almost from '../assets/img/icone_quase.png';
import right from '../assets/img/icone_certo.png';

export default function Result({ result }) {
  const answered = result.filter(x => x !== 'notOpen');
  const dictImage = { 'notRemember': notRemember, 'almostDontRemember': almost, 'zap': right };
  const dictAlt = { 'notRemember': 'Não lembrei', 'almostDontRemember': 'Quase não lembrei', 'zap': 'Zap!' };
  return (
    <ResultDisplay>
      <span>{`${answered.length}/${result.length} CONCLUÍDOS`}</span>
      <div>
        {answered.map((answer, index) =>
          <img key={index} src={dictImage[answer]} alt={dictAlt[answer]} />
        )}
      </div>
    </ResultDisplay>
  );
}

const ResultDisplay = styled.section`
  width: 100vw;
  min-height: 80px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin: 6px;
  }

  div {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      width: 23px;
      height: 23px;
      margin: 2.5px;
    }
  }
`;