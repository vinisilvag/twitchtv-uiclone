import React from 'react';
import { View, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Wrapper, Container, Main } from './styles';

import colors from '../../styles/colors';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

const Following = () => {
  const { data, indices } = React.useMemo(() => {
    const items = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Seguindo</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Categorias Seguidas</Title>,
        isTitle: true
      },

      {
        key: 'C1',
        render: () => <CategoryList />,
      },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Canais ao Vivo</Title>,
        isTitle: true
      },

      {
        key: 'C2',
        render: () => <StreamList />,
      },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continuar Assistindo</Title>,
        isTitle: true
      },

      {
        key: 'C3',
        render: () => <StreamList />,
      },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Canais Offline</Title>,
        isTitle: true
      },

      {
        key: 'C4',
        render: () => <ChannelList />,
      },
    ];

    const indices = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices
    }
  }, []);

	return (
		<Wrapper>
			<Container>
				<Header />
				<Main>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            refreshControl={
              <RefreshControl
                colors={[`${colors.black}`, `${colors.black}`]}
                refreshing={false}
                onRefresh={() => {}}
              />
            }
          />
        </Main>
			</Container>
		</Wrapper>
	);
};

export default Following;
