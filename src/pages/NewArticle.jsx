import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddArticleForm from '../components/Forms/AddArticleForm';

const NewArticle = (props) => {

    let { articles } = props;

    return (
        <>
            <h1>Ваша новая статья</h1>
            <div className='add-recipe'>
                <AddArticleForm id={articles.length + 1} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    articles: state.articles,
    myArticleIds: state.users[0].articlesIds,
});

export default connect(mapStateToProps)(NewArticle);
