import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const statusBatHeight =
	Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
	background-color: ${colors.primary};
	padding-top: ${statusBatHeight + 'px'};
	flex: 1;
`;

export const Container = styled.View`
	margin-bottom: 24px;
`;

export const Main = styled.View``;
