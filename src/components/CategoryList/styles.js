import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 11
  }
}))`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6
}))`
  margin-right: 5px;
  margin-left: 5px;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 130px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background-color: ${colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${colors.gray};
  font-family: roboto_500;
`;