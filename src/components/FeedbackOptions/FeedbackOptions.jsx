import PropTypes from "prop-types";
const Feedback = ({ onLeaveFeedback, options }) => {
    return (
        <div>
            {/* <p>Please leave feedback</p> */}
            {Object.keys(options).map((el) => <input key={el} type="button" value={el} onClick={onLeaveFeedback}></input>
            )}

            {/* <input type="button" value="good" onClick={onLeaveFeedback}></input>
    <input type="button" value="neutral" onClick={onLeaveFeedback}></input>
    <input type="button" value="bad" onClick={onLeaveFeedback}></input> */}
        </div>

    );
};
Feedback.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.func
};
export default Feedback;