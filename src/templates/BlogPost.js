import React from 'react';
import { Link, graphql } from 'gatsby';

import PageContainer from '../lib/PageContainer';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import BannerContainer from '../components/Containers/BannerContainer';
import BoxContainer from '../components/Containers/BoxContainer';
import BigGhostButton from '../components/BigGhostButton';
import { renderWebMonetizationMeta } from '../lib/WebMonetization';

const BlogPost = ({ data, pageContext }) => {
  // Add localization settings
  pageContext.stringifiedLocaleMessages = JSON.stringify({
    en: {
      translation: {
        LANG_PATH_PREFIX: '',
        LANG_CODE: 'en',
      },
    },
  });

  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <PageContainer {...pageContext}>
      {(t) => {
        return (
          <React.Fragment>
            <Helmet title={t`GDevelop Blog`}>
              <html lang={pageContext.localeCode} />
              <meta
                name="description"
                content="GDevelop is a game creator bundled with dozens of features to imagine and create any kind of games. No coding skills are required."
              />
              {renderWebMonetizationMeta()}
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
            </BannerContainer>
            <BoxContainer
              title={post.frontmatter.title}
              subtitle={post.frontmatter.date}
            >
              <p dangerouslySetInnerHTML={{ __html: post.html }} />
              <nav>
                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && previous.frontmatter.hidden !== true && (
                      <Link to={'/blog/post' + previous.fields.slug} rel="prev">
                        <BigGhostButton>
                          ← Previous - {previous.frontmatter.title}
                        </BigGhostButton>
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && next.frontmatter.hidden !== true && (
                      <Link to={'/blog/post' + next.fields.slug} rel="next">
                        <BigGhostButton>
                          {next.frontmatter.title} - Next →
                        </BigGhostButton>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </BoxContainer>
          </React.Fragment>
        );
      }}
    </PageContainer>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        hidden
      }
    }
  }
`;
