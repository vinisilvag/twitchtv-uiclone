import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-left: 14px;
	padding-right: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Avatar = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.5
}))`
  background-color: ${colors.tag};

  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const OnlineStatus = styled.View`
  background-color: ${colors.green};
  width: 11px;
  height: 11px;
  border-radius: 11px;
  border: 1.6px solid ${colors.primary};

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.4
}))`
  margin-left: 20px;
`;
