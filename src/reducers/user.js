
const userInitialState = {
    calorieGoal: 2000,
    carbsRatioGoal: 40,
    protRatioGoal: 20,
    fatRatioGoal: 40
};

export default (prevState = userInitialState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : prevState;
        case 'UPDATE_USER':
            localStorage.setItem('user', JSON.stringify(action.user));
            return action.user;
        default:
            return prevState;
    }
};
