// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import { space } from 'styled-system';

import { spacing, breakpoints, articleWidth } from '@spec/ui-spec';
import { setActivePage } from '@state/navigation/actions';
import { colors } from '@spec/colors/';
import routes from '../routes';

import Layout from '@components/layout';
import SEO from '@components/seo';
import ForSale from '@components/sections/ForSale';
import { HeroSection } from '@components/sections/hero';
import { Banner, MainContainer, Grid, resetStyle } from '@components/Grid';
import { Display1, Display3, Intro, Body2 } from '@components/Typography';
import ClippedImage from '@components/ClippedImage';
import ArrowLink from '@components/ArrowLink';
import Results from '@components/sections/Results';

const ContentWrap = styled.div({});

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

const TextContainer = styled.div({ margin: '0 auto' }, articleWidth);

const HorsesGrid = styled(Grid)(
  {
    gridRowGap: 0,

    [breakpoints.tablet]: {
      gridRowGap: 50,
    },
  },
  ({ paddingReset }) => {
    if (paddingReset) {
      return resetStyle;
    }
  }
);

const HorseCard = styled('div')({
  maxHeight: 570,
});

const HorseName = Intro.withComponent('h2');

const CardText = styled('div')(
  {
    backgroundColor: colors.secondary_white,
    position: 'relative',
    paddingLeft: 16,
    paddingRight: 16,

    [breakpoints.tablet]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
  space
);

const CardLink = styled('div')({
  position: 'absolute',
  right: 14,
  bottom: 24,

  [breakpoints.tablet]: {
    right: 28,
    bottom: 34,
  },
});

type Props = {
  setActivePage: typeof setActivePage,
  currentPage: string,
  data: Object,
};

class HorsesPage extends React.Component<Props> {
  componentDidMount() {
    const { setActivePage, currentPage } = this.props;

    if (currentPage !== routes.HORSES) {
      setActivePage(routes.HORSES);
    }
  }

  render() {
    const { heroImageDesktop, heroImageMobile, horses } = this.props.data;

    return (
      <Layout page={routes.HORSES}>
        <SEO
          title="Hästarna"
          meta={[
            {
              name: `og:url`,
              content: `https://www.nibor.se${routes.HORSES}`,
            },
          ]}
        />
        <HeroSection
          backgroundColor={colors.secondary_white}
          heroImageDesktop={heroImageDesktop}
          heroImageMobile={heroImageMobile}
        >
          <ContentWrap>
            <Header mb={spacing.m} mt={spacing.t} color={colors.primary_blue}>
              Hästarna
            </Header>
            <Lead color={colors.primary_blue} mb={0}>
              Vi har valt att satsa på PRE-hästar med extra hög kvalité både
              gällande hållbarhet och ridbarhet. Hästarna är väl uppföda på
              stora kuperade ytor, röntgade och gås regelbundet igenom av
              veterinär och equiterapeut. Alla rids på varierande underlag och
              är vana vid uteritt och olika miljöer.
            </Lead>
          </ContentWrap>
        </HeroSection>
        {!!horses && (
          <Banner>
            <MainContainer pt={spacing.l}>
              <HorsesGrid numberColumns={2} paddingReset>
                {horses.edges.map((horse, key) => {
                  const {
                    title,
                    coverImage,
                    horsesSlug,
                    gender,
                  } = horse.node.frontmatter;
                  return (
                    <HorseCard key={key}>
                      <Link to={`${routes.HORSES}${horsesSlug}`}>
                        <ClippedImage
                          image={coverImage}
                          imgStyle={{ objectPosition: `center center` }}
                          clipperPos="tr"
                          animated={true}
                        />
                      </Link>
                      <CardText py={spacing.s}>
                        <Link to={`${routes.HORSES}${horsesSlug}`}>
                          <HorseName
                            semiBold
                            mb={0}
                            style={{ display: 'inline-block' }}
                          >
                            {title}
                          </HorseName>
                        </Link>

                        <Body2>{gender}</Body2>

                        <CardLink>
                          <ArrowLink
                            smallText={'true'}
                            to={`${routes.HORSES}${horsesSlug}`}
                          >
                            Läs mer om hästen
                          </ArrowLink>
                        </CardLink>
                      </CardText>
                    </HorseCard>
                  );
                })}
              </HorsesGrid>
            </MainContainer>
          </Banner>
        )}
        <Banner>
          <MainContainer py={spacing.xl}>
            <TextContainer>
              <Display3 mb={spacing.s}>Varför PRE?</Display3>

              <Body2 color={colors.secondary_blue} mb={spacing.s}>
                Redan i den tidiga romerska epoken beskrev författare den
                spanska hästen som vacker, lydig, arrogant och modig - perfekt
                för krig och för de spel som var vanliga vid den tidseran.
                PRE-hästarna användes mest till show medan den besläktade
                Lusitanon mer användes vid tjurfäktning.
              </Body2>
              <Body2 color={colors.secondary_blue} mb={spacing.s}>
                En PRE är intelligent, vänlig, modig, samabetsvillig och väldigt
                lojal. Den är mångsidig och har lätt att anpassa sig i olika
                situationer. Hästen är mycket lyhörd mot sin ryttare och vill
                vara till lags. Vissa PRE-hästar är enmanshästar som väljer ut
                &quot;sin&quot; människa som den gör allt för. De kan också var
                skeptiska mot människor de inte känner men är alltid vänliga om
                än vissa mer försiktiga än andra. Jag brukar säga att det inte
                var fören jag fick min första PRE-häst som jag lärde mig rida på
                riktigt. Alla mina hästar säger vänligt men bestämt till mig när
                jag gör något fel och mycket självranskan krävs för att rida och
                utbilda en riktigt bra PRE.
              </Body2>
              <Body2 color={colors.secondary_blue} mb={spacing.s}>
                En PRE har ofta mjuka bekväma rörelser och är behaglig att sitta
                på. De är också födda &quot;naturligt i form&quot; och du som
                ryttare måste bevara denna mjukhet och medfödda bärighet.
                Hästarna är lätta i handen och har ibland svårt att ta stöd på
                bettet, men genom en mjuk och följsam hand, som går mot bettet,
                kommer hästen tillsist att söka ett lätt stöd. Det brukar räcka
                med några gram i handen, du ska aldrig tvinga en PRE till att ta
                stöd.
              </Body2>
              <Body2 color={colors.secondary_blue}>
                Man får ofta höra att PRE-hästen inte kan utföra en korrekt ökad
                trav men det påståendet är inte sant. Många av dem kan dock inte
                göra det naturligt i ung ålder utan måste genom uppbyggnad och
                styrka lära sig att vila på steget och skapa mer kadens. Därför
                är det viktigt att man inte stressar en PRE, då den enbart
                kommer veva med frambenen, utan att man genom takt och bärighet
                hittar och stärker hästens bakben. Med rätt ridning kan en häst
                som &quot;går som en symaskin&quot; få en fantastisk trav!
              </Body2>
            </TextContainer>
          </MainContainer>
        </Banner>
        <ForSale />
        <Results />
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

export default connect(mapStateToProps, mapDispatchToProps)(HorsesPage);

export const query = graphql`
  query HorsesPageQuery {
    heroImageDesktop: file(
      relativePath: { eq: "hero-images/temp-hastarna.png" }
    ) {
      ...fragmentDesktop
    }
    heroImageMobile: file(
      relativePath: { eq: "hero-images/mobile-hastarna.jpg" }
    ) {
      ...fragmentMobile
    }
    horses: allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "horses" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            horsesSlug
            coverImage {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

            gender
            born
          }
        }
      }
    }
  }
`;
