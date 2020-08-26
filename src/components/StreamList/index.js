import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
	StreamThumbnail,
	StreamColumn,
	StreamRow,
	StreamHeader,
	StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
	TagRow,
	TagView,
	TagText,
} from './styles';

const StreamList = () => {
	const StreamItem = () => (
		<StreamContainer>
			<StreamThumbnail source={streamThumbnail} />

			<StreamColumn>
				<StreamRow>
					<StreamHeader>
						<StreamAvatar />
						<StreamUsername numberOfLines={1}>vinisilvag</StreamUsername>
					</StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQl
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Ciência e Tecnologia
          </StreamCategory>
				</StreamRow>

				<TagRow>
					<TagView>
						<TagText>Português</TagText>
					</TagView>

					<TagView>
						<TagText>Programação</TagText>
					</TagView>
				</TagRow>
			</StreamColumn>
		</StreamContainer>
	);

	return (
		<List>
			<StreamItem />
			<StreamItem />
			<StreamItem />
			<StreamItem />
		</List>
	);
};

export default StreamList;
