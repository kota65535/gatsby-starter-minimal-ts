import {GatsbyNode} from 'gatsby';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// cf. https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({ actions, stage }) => {
  actions.setWebpackConfig({
    plugins: stage == 'develop-html' ? [] : [new ForkTsCheckerWebpackPlugin()]
  });
};
