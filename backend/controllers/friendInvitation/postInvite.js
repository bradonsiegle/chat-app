const postInvite = async (req, res) => {
	const { targetEmail } = req.body;

	return res.send('Controller is working');
};

module.exports = postInvite;
