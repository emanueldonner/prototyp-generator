import React from "react"
import * as Icons from "@mui/icons-material"
import DashboardIcon from "@mui/icons-material/SpaceDashboard"
const styles = {
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "0.5rem",
		cursor: "pointer",
		background: "#f0efea",
		color: "darkslategrey",
		borderRadius: "0.4rem",
		transition: "opacity 0.2s ease",
		textAlign: "center",
		wordWrap: "break-word",
	},
	materialSymbolsOutlined: {
		width: "24px",
		height: "24px",
		display: "block",
	},
	cardHover: {
		opacity: "0.8",
	},
}

const YourComponent = ({ title, icon }) => {
	const Icon = Icons[icon] ?? DashboardIcon
	return (
		<div style={styles.card}>
			<span
				className="materialSymbolsOutlined"
				style={styles.materialSymbolsOutlined}
			>
				<Icon />
			</span>
			<p>{title}</p>
		</div>
	)
}

export default YourComponent
