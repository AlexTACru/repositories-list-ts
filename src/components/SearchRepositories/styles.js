import styled from 'styled-components';

import COLORS from '../../styles/colors';

export const Form = styled.form`
  display: flex;    
`;

export const Input = styled.input`
  padding: 10px 10px;

  border: 1px solid ${COLORS.dark};
  border-radius: 3px 0 0 3px;

  color: ${COLORS.dark};

  flex-grow: 1;
`;

export const Button = styled.button`
  background: ${COLORS.dark};

  border: none;

  color: ${COLORS.light};

  padding: 0 20px;
`;
