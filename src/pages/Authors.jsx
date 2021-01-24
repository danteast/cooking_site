import React from 'react';
import { connect } from 'react-redux';

const Authors = ({ users }) => {
    return (
        <>
            <h1>Рейтинг авторов</h1>
            <div className='users'>
                {users.map((user, i) => (
                    <div>
                        <p>
                            {i + 1}: {user.name}. Рейтинг: {user.authorRating}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps)(Authors);
