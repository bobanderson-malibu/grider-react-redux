import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        displayText: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter : {
        displayText: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {displayText, iconName} = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} massive icon icon-left`}></i>
            <h1>{displayText}</h1>
            <i className={`${iconName} massive icon icon-right`}></i>
        </div>
    );
}

export default SeasonDisplay;