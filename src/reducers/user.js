
const userInitialState = {
    calorieGoal: 2000,
    carbsRatioGoal: 40,
    protRatioGoal: 20,
    fatRatioGoal: 40
};

export default (prevState = userInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.user;
        default:
            return prevState;
    }
};
