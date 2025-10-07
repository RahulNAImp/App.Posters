// Controller for user-related handlers

const getAllUsers = (req, res) => {
	// return a simple JSON response for now
    res.send("Router is running");
};

module.exports = {
	getAllUsers,
};
