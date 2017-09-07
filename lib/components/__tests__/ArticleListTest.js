import React from 'react';
import ArticleList from '../ArticleList';

// import renderer from 'react-test-renderer';
import Article from '../Article';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'},
    }
  };
  Article.propTypes = {};
  it('Renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(wrapper.node.props.children.length).toBe(2);

    expect(wrapper).toMatchSnapshot();

    // expect(tree).toMatchSnapshot();
  });
});