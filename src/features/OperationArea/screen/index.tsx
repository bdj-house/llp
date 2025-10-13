'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { EmojiPeople as EmojiPeopleIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { urlFor } from '@/sanity/lib/image';
import { HelperPanel, OpacityCard, ViewContainer } from '@/shared/components';
import { DetailsContent } from '../components';
import { OperationArea } from '../types';
import {
  AreaCardPaper,
  AreaCardWrapper,
  CategoryChip,
  CategoryContainer,
  ContentAreaContainer,
  HeaderAreasWrapper,
  ImageContainer,
  ImageOverlay,
  MainContainer,
  ScrollableContainer,
  TitleContainer,
  TitleSection,
} from './styles';
import tempLogo from '@/assets/logo/temp-logo.png';

interface Props {
  operationAreas: OperationArea[];
  selectedAreaId?: string;
}

const title = 'Áreas de Atuação';
const subject = `Na Idalgo & Cortijo, priorizamos o seu sucesso e bem-estar. Questões
        jurídicas podem ser avassaladoras, por isso oferecemos uma abordagem
        personalizada para cada caso.`;
const subtitle = `Especializações`;

export const OperationAreaScreen = ({ operationAreas, selectedAreaId }: Props) => {
  const [localSelectedId, setLocalSelectedId] = useState<string | null>(selectedAreaId || null);

  useEffect(() => {
    if (!localSelectedId && operationAreas.length > 0) {
      setLocalSelectedId(operationAreas[0]._id);
    }
  }, [localSelectedId, operationAreas]);

  const headerAreas = useMemo(
    () => operationAreas.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).slice(0, 5),
    [operationAreas],
  );

  const selectedArea = useMemo(
    () => operationAreas.find(area => area._id === (localSelectedId || selectedAreaId)),
    [operationAreas, localSelectedId, selectedAreaId],
  );

  const handleAreaClick = (areaId: string) => {
    setLocalSelectedId(areaId);
  };

  return (
    <ViewContainer header={{ title, subtitle, subject }} isPageContainer>
      <MainContainer>
        <HeaderAreasWrapper>
          <ScrollableContainer>
            {headerAreas.map((area, index) => {
              const isSelected = area._id === (localSelectedId || selectedAreaId);

              return (
                <AreaCardWrapper key={area._id}>
                  <OpacityCard index={index}>
                    <AreaCardPaper
                      elevation={0}
                      onClick={() => handleAreaClick(area._id)}
                      isSelected={isSelected}
                    >
                      <ImageContainer>
                        <Image
                          src={area.image ? urlFor(area.image?.asset).url() : tempLogo}
                          alt={area.title ?? ''}
                          fill
                          sizes="(max-width: 600px) 80vw, (max-width: 1200px) 40vw, 280px"
                          style={{ objectFit: 'cover' }}
                        />

                        <ImageOverlay />

                        <CategoryContainer>
                          <CategoryChip label={area.category} size="small" />
                        </CategoryContainer>

                        <TitleContainer>
                          <Typography variant="h6" fontWeight="bold" mb={1}>
                            {area.title}
                          </Typography>
                        </TitleContainer>
                      </ImageContainer>
                    </AreaCardPaper>
                  </OpacityCard>
                </AreaCardWrapper>
              );
            })}
          </ScrollableContainer>
        </HeaderAreasWrapper>

        <ContentAreaContainer>
          {selectedArea && (
            <>
              <TitleSection>
                <Typography variant="h3" fontWeight="bold" color="primary" mb={2}>
                  {selectedArea.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {selectedArea.category}
                </Typography>
              </TitleSection>
              <DetailsContent key={selectedArea._id} operationArea={selectedArea} />
            </>
          )}
        </ContentAreaContainer>

        <HelperPanel
          title="Precisa de Ajuda Jurídica?"
          description="Nossa equipe está pronta para atender você com excelência e dedicação. Entre em contato e agende uma consulta personalizada."
          icon={<EmojiPeopleIcon fontSize="large" color="primary" />}
          buttonLabel="Agendar Consulta"
        />
      </MainContainer>
    </ViewContainer>
  );
};
