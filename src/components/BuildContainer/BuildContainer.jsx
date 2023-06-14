import React, { useEffect, useState, useRef } from "react"
import Sortable from "sortablejs"
import { dropRules } from "../../drop_rules"
import { componentList } from "../../componentList"
import { templates, collections, patterns } from "../../testdata"
import Card from "../Card"

import cx from "classnames"
import styles from "./BuildContainer.module.css"

const BuildContainer = () => {
	const patternsContainer = useRef(null)
	const templatesContainer = useRef(null)
	const collectionsContainer = useRef(null)
	const buildContainer = useRef(null)

	const [isMinimized, setIsMinimized] = useState(false)

	let buildOptions = {}
	// Replace your Sortable.create() calls with useEffect()
	useEffect(() => {
		const groupOptions = {
			name: "shared",
			pull: "clone",
			put: false,
		}

		const dndOptions = {
			group: groupOptions,
			sort: false,
			animation: 150,
			fallbackOnBody: true,
			swapThreshold: 0.65,
			onStart,
			onEnd,
			onAdd,
			onSort,
			onMove,
		}

		buildOptions = {
			name: "build",
			pull: false,
			put: true,
			fallbackOnBody: true,
			swapThreshold: 0.65,
			onStart,
			onEnd,
			onAdd,
			onSort,
			onMove,
		}

		Sortable.create(patternsContainer.current, dndOptions)

		new Sortable(templatesContainer.current, dndOptions)

		new Sortable(collectionsContainer.current, dndOptions)

		new Sortable(buildContainer.current, {
			group: buildOptions,
			animation: 150,
			ghostClass: "sortable-ghost",
			onAdd: function (event) {
				replaceWithComponent(event.item)
			},
		})
	}, [])
	// Replace your toggleClass logic with a React hook
	const toggleMinimized = () => {
		setIsMinimized(!isMinimized)
	}
	function canDrop(itemId, targetListId) {
		// Get the rule for this item type
		const rule = dropRules[itemId]
		console.log("rule:", rule)

		// If no rule is defined for this item, let's be permissive and allow the drop
		if (!rule) {
			return true
		}

		// If the target list is the 'canvas' and 'main' is not a permitted parent, disallow drop
		if (targetListId === "canvas") {
			console.log("canvas")
			if (rule.parents.includes("main")) {
				return true
			} else {
				return false
			}
		}

		// If the rule has a 'parents' field, check that the target list type is allowed
		if (rule.parents && !rule.parents.includes(targetListId)) {
			return false
		}

		// If the rule has a 'limit' field, check that the target list does not already contain the maximum number of items of this type
		if (rule.limit) {
			const numExistingItems = document.querySelectorAll(
				`[data-id=${itemId}]`
			).length
			if (numExistingItems >= rule.limit) {
				return false
			}
		}

		// If none of the checks failed, the drop is allowed
		return true
	}

	function onStart(evt) {
		evt.item.dataset.type = evt.item.getAttribute("data-component-type")
	}

	function onEnd(evt) {
		evt.item.classList.remove("can-drop", "cannot-drop")
	}

	function onAdd(event) {
		replaceWithComponent(event.item)
	}

	function onSort(evt) {
		const itemType = evt.item.dataset.ptype
		const listType = evt.to.dataset.ptype

		if (!canDrop(itemType, listType)) {
			Sortable.active.sortable.cancel()
		}
	}
	function onMove(evt) {
		const itemId = evt.dragged.dataset.id
		const targetListId = evt.to.dataset.id
		console.log("targetListId:", targetListId)

		if (!canDrop(itemId, targetListId)) {
			evt.dragged.classList.add("cannot-drop")
			return false // This will prevent the sort operation.
		} else {
			evt.dragged.classList.add("can-drop")
		}
	}

	const replaceWithComponent = (item) => {
		const tag = item.dataset.tag
		const ptype = item.dataset.ptype
		const id = item.dataset.id
		console.log(item, id, ptype, tag)

		const newElement = document.createElement("div")
		newElement.dataset.ptype = ptype
		newElement.dataset.tag = tag
		newElement.classList.add("sortable-list")
		// Create a unique id based on the old id and a timestamp
		newElement.id = `sortable-list-${id}-${Date.now()}`

		// Add sortable properties to the new element
		new Sortable(newElement, {
			group: buildOptions,
			animation: 150,
			ghostClass: "sortable-ghost",
			fallbackOnBody: true,
			swapThreshold: 0.65,
			onAdd: function (event) {
				replaceWithComponent(event.item)
			},
			onMove: function (evt, originalEvent) {
				return canDrop(evt.dragged.dataset.id, evt.to.id)
			},
		})

		// fetch .html file content and add it to the new element
		fetch(`/blocks/1-${ptype}/${id}/code.html`)
			.then((response) => response.text())
			.then((data) => {
				console.log("data", data)
				newElement.innerHTML = data
				item.parentNode.replaceChild(newElement, item)
			})
	}

	return (
		<div className={styles["main-container"]}>
			<div
				className={cx(styles["parts-container"], {
					[styles["minimized"]]: isMinimized,
				})}
				id="parts-container"
			>
				<div className={styles["parts-container__header"]}>
					{/* button that toggles visibility of parts-container  */}
					<div className={styles["toggle-class"]} onClick={toggleMinimized}>
						<span className={styles["burger"]}></span>
					</div>
				</div>

				<div className={styles["parts-container__body"]}>
					<div
						className={cx(styles["parts-section"], styles["section-templates"])}
					>
						<wm-toggle full open="true">
							<span slot="label">Vorlagen</span>

							<div
								slot="content"
								className={styles["parts-section__body"]}
								id="templates"
								ref={templatesContainer}
							>
								{templates.map((template) => (
									<div
										key={template.id}
										data-id={template.id}
										data-type="template"
									>
										<Card title={template.title} icon={template.icon} />
									</div>
								))}
							</div>
						</wm-toggle>
					</div>

					<div
						className={cx(
							styles["parts-section"],
							styles["section-collections"]
						)}
					>
						<wm-toggle full open="true">
							<span slot="label">Kollektionen</span>

							<div
								slot="content"
								className={styles["parts-section__body"]}
								id="collections"
								ref={collectionsContainer}
							>
								{collections.map((collection) => (
									<div
										key={collection.id}
										data-type="collection"
										data-id={collection.id}
									>
										<Card title={collection.title} icon={collection.icon} />
									</div>
								))}
							</div>
						</wm-toggle>
					</div>
					<div
						className={cx(styles["parts-section"], styles["section-patterns"])}
					>
						<wm-toggle full open="true">
							<span slot="label">Patterns</span>

							<div
								slot="content"
								className={styles["parts-section__body"]}
								id="patterns"
								ref={patternsContainer}
							>
								{componentList.map((pattern) => (
									<div
										key={pattern.name}
										data-ptype={"pattern"}
										data-id={pattern.name}
										data-tag={pattern.tag}
									>
										<Card title={pattern.title} icon="Dashboard" />
									</div>
								))}
							</div>
						</wm-toggle>
					</div>
				</div>
			</div>
			<div
				className={cx(styles["build-container"], styles["sortable-list"])}
				data-id="canvas"
				ref={buildContainer}
			></div>
			<div className={styles["settings-container"]}></div>
		</div>
	)
}

export default BuildContainer
