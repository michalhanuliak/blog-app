import React from 'react';
import {
  InfoCardContainer,
  InfoCardItem,
  InfoCardItemContainer,
  InfoCardSmallText,
  InfoCardText,
  InfoCardTitle,
} from './infoCard';

const InfoCard = ({ children, ...props }: any) => {
  const {cardTitle, categoryTitle, categoryText} = props;
  const Wrapper = !cardTitle ? React.Fragment : InfoCardContainer;

  return (
    <Wrapper>
      { cardTitle && <InfoCardTitle>{cardTitle}</InfoCardTitle> }
      <InfoCardItemContainer>
        <InfoCardItem>
          <InfoCardSmallText>
            {categoryTitle}
          </InfoCardSmallText>
          <InfoCardText>
            {categoryText}
          </InfoCardText>
          {children}
        </InfoCardItem>
      </InfoCardItemContainer>
    </Wrapper>
  );
};

export default InfoCard;
