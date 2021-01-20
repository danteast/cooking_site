import React from 'react'

const RecipeItem = (props) => {

    let { name, author, time, difficuilty, text, image } = props;

    let formatTime = (sourceTime) => {
        let retVal;
        if (sourceTime <= 60) {
            retVal = sourceTime + " мин."
        } else {
            retVal = Math.floor(sourceTime / 60) + ' ч. ' + sourceTime % 60 + ' мин.';
        }
        return retVal;
    }
    
    return (
        <div className = 'recipe-item'>
            <h2 className='recipe-item-header'>{ name }</h2>
            <h4 className='recipe-item-author'>{ author }</h4>
            <div className='recipe-item-info-block'>
                <img src={ image } alt='recipe'></img>
                <div className='recipe-item-info-block-inner'>
                    <div className='recipe-time'><p>{ formatTime(time) }</p></div>
                    <div className='recipe-difficuilty'><p>Сложность: { difficuilty }/10</p></div>
                    <p className='recipe-item-text'>{ text }</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;