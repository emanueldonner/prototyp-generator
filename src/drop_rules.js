export const dropRules = {
	accordion: {
		parents: ["wm-section"],
	},
	carousel: {
		parents: ["main"],
	},
	card: {
		parents: ["wm-stack", "wm-section", "wm-grid"],
		grandparents: true,
	},
	button: {
		parents: ["wm-card", "wm-section"],
	},
	grid: {
		parents: ["wm-section", "main"],
	},
	highlight: {
		parents: ["wm-card", "wm-section"],
	},
	list: {
		parents: ["wm-card", "wm-section"],
	},
	section: {
		parents: ["main"],
	},
	quicklinks: {
		parents: ["wm-section"],
	},
	stack: {
		parents: ["wm-section", "main"],
		grandparents: true,
	},
	stage: {
		parents: ["main"],
		limit: 1,
	},
	"tag-list": {
		parents: ["main"],
	},
}
