import Button from '@mui/material/Button';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { logout } from '../../shared/utils/auth';

export const DropdownMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				onClick={handleMenuOpen}
				style={{
					color: 'white',
				}}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleMenuClose}
				PaperProps={{
					style: {
						backgroundColor: '#2f3136',
						color: '#dcddde',
					},
				}}
			>
				<MenuItem onClick={logout}>Logout</MenuItem>
			</Menu>
		</div>
	);
};
