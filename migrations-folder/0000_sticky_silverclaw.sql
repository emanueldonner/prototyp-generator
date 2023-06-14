CREATE TABLE `components` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`prototype_id` integer,
	FOREIGN KEY (`prototype_id`) REFERENCES `prototypes`(`id`)
);

CREATE TABLE `prototypes` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);

CREATE UNIQUE INDEX `nameIdx` ON `prototypes` (`name`);