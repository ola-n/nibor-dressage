// @flow
import React from 'react';
import { graphql } from 'gatsby';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { setActivePage } from '@state/navigation/actions';
import { spacing, breakpoints } from '@spec/ui-spec';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import { Banner, MainContainer, Grid } from '@components/Grid';
import { HeroSection } from '@components/sections/hero';
import {
  Display1,
  Display2,
  Display4,
  Intro,
  Body2,
} from '@components/Typography';
import ClippedImage from '@components/ClippedImage';
import { Button } from '@components/Button';

const HeroContent = styled.div({});

const Header = styled(Display1)({
  maxWidth: 441,

  '@media screen and (min-width: 1170px)': {
    maxWidth: 'none',
  },
});

const Lead = styled(Intro)({
  minWidth: 'auto',

  [breakpoints.desktopSmall]: {
    minWidth: 421,
  },
});

const TextContainer = styled.div({});

const ImageContainer = styled.div({
  [breakpoints.tablet]: {
    paddingBottom: 96,
    paddingTop: 52,
  },
  [breakpoints.desktopLarge]: {
    paddingLeft: 64,
    paddingRight: 64,
  },
});

const ServicesGrid = styled(Grid)({
  [breakpoints.tablet]: {
    gridTemplateColumns: '1.5fr 1fr',
  },
});

const imageStyle = css({
  maxHeight: 350,

  [breakpoints.landscapePhone]: {
    maxHeight: 450,
  },

  [breakpoints.tablet]: {
    maxHeight: 550,
  },
  [breakpoints.desktopSmall]: {
    maxHeight: 600,
  },
});

const topImageStyle = css(
  {
    [breakpoints.tablet]: {
      marginBottom: 64,
    },
  },
  imageStyle
);

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class ServicesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.SERVICES) {
      setActivePage(routes.SERVICES);
    }
  }

  render() {
    const {
      heroImageDesktop,
      heroImageMobile,
      losdrift,
      ridhus,
    } = this.props.data;

    return (
      <Layout page={routes.SERVICES}>
        <SEO title="Tjänster" />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <HeroContent>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Tjänster
            </Header>
            <Lead color={colors.primary_blue} mb={spacing.m}>
              Välkommen att kontakta oss med förfrågan om våra tjänster, t.ex
              träning eller ridhusbokning. Läs mer nedan.
            </Lead>

            <Button to={routes.CONTACT} mb={spacing.t}>
              Kontakta oss för tidsbokning
            </Button>
          </HeroContent>
        </HeroSection>
        <Banner>
          <MainContainer pt={spacing.m}>
            <ServicesGrid numberColumns={2}>
              <TextContainer>
                <Display2>Träning</Display2>
                <Body2 mb={spacing.s}>
                  Jag erbjuder träning av ryttare enligt VBR (vertikal
                  balanserad ridning). Fokus på ryttarens sits, tyngdpunkt och
                  bålstabilitet. 300kr/lektion. Sms eller mail för tidsbokning.
                </Body2>

                <Display4>Min filosofi</Display4>
                <Body2 mb={spacing.t}>
                  Min filosofi är att all träning av hästar utgår från ryttaren.
                  Hästen avspeglar sin ryttare och det är alltid ryttarens
                  ansvar att få hästen att lyckas. Hästen vill göra rätt och det
                  är inte den som ska beskyllas när något bli fel, den vill bara
                  säga dig något om vilka signaler du ger den. Ofta ger vi
                  hästen en mängd olika signaler som den ska försöka tolka efter
                  bästa förmåga. En skicklig ryttare är så pass analyserande att
                  den kan koordinera sin position och tyngdpunkt genom
                  kroppskontroll för att kunna arbeta med hästen, inte emot. En
                  känslig, inkännande ryttare resulterar i en känslig häst som
                  reagerar på ryttarens minsta förändring. Mitt mål är att man
                  ska kunna &lsquo;åka häst&lsquo;, dvs hästen gör sitt jobb och
                  ryttaren fokuserar på sin tyngdpunkt och position för att
                  hjälpa hästen att kunna utföra rörelserna på enklast möjliga
                  vis.
                </Body2>
                <Body2 mb={spacing.m}>
                  Viktigt är också att man rider till bettet, inte tvärtom.
                  Handen ska vara mjuk och följsam mot hästens mun, och vara en
                  förlängning av tygeln. Jag eftersträvar alltid att få ett
                  jämnt sug i bettet, lika mycket på båda sidor.
                </Body2>

                <Display2 mb={spacing.t}>Tillridning</Display2>
                <Body2 mb={spacing.m}>
                  I mån av plats tar vi emot hästar för tillridning, tävling och
                  visning. 7500kr/månad inkl. allt.
                </Body2>

                <Display2 mb={spacing.t}>Uthyrning av ridhus</Display2>
                <Body2 mb={spacing.m}>
                  Behöver du öva på att rida med riktiga dressyrstaket? Behöver
                  du miljöträna din häst? Behöver du stora speglar? Att rida i
                  vårt ridhus kostar 100 kr/gång som betalas via swish. Kontakta
                  Mika för bokning.
                </Body2>
              </TextContainer>
              <ImageContainer>
                <ClippedImage
                  image={losdrift}
                  imgStyle={{ objectPosition: `50% 60%` }}
                  desktopSquare
                  paddingReset
                  style={topImageStyle}
                />
                <ClippedImage
                  image={ridhus}
                  imgStyle={{ objectPosition: `20% center` }}
                  desktopSquare
                  paddingReset
                  clipperPos={'br'}
                  style={imageStyle}
                />
              </ImageContainer>
            </ServicesGrid>
          </MainContainer>
        </Banner>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.navigation.currentPage,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setActivePage,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicesPage);

export const query = graphql`
  query ServicesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-tjanster.png" }
    ) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-tjanster.jpg" }
    ) {
      ...fragmentMobile
    }
    losdrift: file(relativePath: { eq: "tjanster/dec.jpg" }) {
      ...fragmentMobile
    }
    ridhus: file(relativePath: { eq: "tjanster/ridhus.jpg" }) {
      ...fragmentMobile
    }
  }
`;
