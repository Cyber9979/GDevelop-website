import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import TransparentContainer from '../components/Containers/TransparentContainer';
import LandingContainer from '../components/Containers/LandingContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import WhiteBigButton from '../components/WhiteBigButton';
import CenteredBigImage from '../components/CenteredBigImage';
import RightImage from '../components/RightImage';
import ExplanationText from '../components/ExplanationText';

import events from '../img/events.png';
import gamesOnMobileTabletDesktopWeb from '../img/games-on-mobile-tablet-desktop-web.png';
import landingScreen from '../img/landing-screen.png';
import platformerSceneEditor from '../img/platformer-scene-editor.png';
import platformer2SceneEditor from '../img/platformer2-scene-editor.png';
import spaceShooterSceneEditor from '../img/space-shooter-scene-editor.png';
import pathfindingTankSceneEditor from '../img/pathfinding-tank-scene-editor.png';
import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Spacer from '../components/Grid/Spacer';
import CenteredColumn from '../components/Grid/CenteredColumn';
import Carousel from '../components/Carousel';
import MakeGameBanner from '../components/MakeGameBanner';
import config from '../config';
import PageContainer from '../lib/PageContainer';

export default class IndexPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title="GDevelop - Create games without programming - Open source HTML5 and native game creator" />
            <Navbar t={t} />
            <LandingContainer>
              <WhiteBigTitle>{t('Create your own games')}</WhiteBigTitle>
              <Row reverse>
                <CenteredColumn flex={8}>
                  <RightImage src={landingScreen} />
                </CenteredColumn>
                <CenteredColumn flex={5}>
                  <WhiteParagraph textAlign="center">
                    {t(
                      'GDevelop is an open-source, cross-platform game creator designed to be used by everyone - no programming skills required.'
                    )}
                  </WhiteParagraph>
                  <CenteredRow>
                    <WhiteBigButton to={config.onlineEditorUrl}>
                      {t('Try it online')}
                    </WhiteBigButton>
                    <WhiteBigButton to="/download/">
                      {t('Download')}
                    </WhiteBigButton>
                  </CenteredRow>
                </CenteredColumn>
              </Row>
            </LandingContainer>
            <TransparentContainer>
              <BigTitle>{t('Create any game')}</BigTitle>
              <Paragraph>
                {t(
                  "Unleash your creativity with GDevelop and create any kind of game: platformers, puzzles, shoot 'em up, strategy... Go through the examples or start a new project from scratch."
                )}
              </Paragraph>
            </TransparentContainer>
            <TransparentContainer noPadding>
              <Carousel
                buttonsDisabled
                autoPlay
                autoPlayInterval={2500}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                }}
              >
                <img
                  src={platformerSceneEditor}
                  alt={t('Create platformer games with GDevelop')}
                />
                <img
                  src={spaceShooterSceneEditor}
                  alt={t('Create space shooter games with GDevelop')}
                />
                <img
                  src={pathfindingTankSceneEditor}
                  alt={t('Create strategy games with GDevelop')}
                />
                <img
                  src={platformer2SceneEditor}
                  alt={t('Create games with GDevelop')}
                />
              </Carousel>
            </TransparentContainer>
            <TransparentContainer>
              <BigTitle>{t('Events - game creation for everyone')}</BigTitle>
              <Paragraph>
                {t(
                  'What makes GDevelop unique and so easy to use are the events. Events are a powerful way to express the logic of your game, without having to learn a programming language.'
                )}
              </Paragraph>
              <CenteredBigImage maxWidth="800px" src={events} />
              <ExplanationText>
                {t(
                  'When Space is pressed, the character animation and a sound are played. If a bomb touches the character, they are both destroyed.'
                )}
              </ExplanationText>
              <BigTitle>{t('Export your game in one click')}</BigTitle>
              <Paragraph>
                {t(
                  'Publish your games to the web, iOS, Android, Windows, Mac, Linux. Games created with GDevelop run anywhere and you can even do a one-click export to Android from the app.'
                )}
              </Paragraph>
              <CenteredBigImage
                maxWidth="800px"
                src={gamesOnMobileTabletDesktopWeb}
                alt={t('Make games for iOS, Android, Windows, macOS and Linux')}
              />
            </TransparentContainer>
            <Spacer height="50px" />
            <MakeGameBanner
              title={t('Make your first game')}
              text={t(
                'Imagine and publish your games with GDevelop. Bundled with tutorials and examples.'
              )}
            />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
