-- techno TABLE
DROP TABLE IF EXISTS `techno`;

CREATE TABLE `techno` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `techno_name` VARCHAR(50) NOT NULL
);

LOCK TABLES `techno` WRITE;

INSERT INTO
  `techno` (techno_name)
VALUES
  ('HTML'),
  ('CSS'),
  ('JavaScript'),
  ('React'),
  ('Node.js'),
  ('Express.js'),
  ('Tailwind'),
  ('SCSS'),
  ('MySQL');

UNLOCK TABLES;

-- roles TABLE
DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(50) NOT NULL
);

LOCK TABLES `roles` WRITE;

INSERT INTO
  `roles` (`role_name`)
VALUES
  ('développeuse front-end'),
  ('développeuse back-end'),
  ('UI designer'),
  ('UX designer'),
  ('scrum master');

UNLOCK TABLES;

-- device TABLE
DROP TABLE IF EXISTS `device`;

CREATE TABLE `device` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `device_name` VARCHAR(50) NOT NULL
);

LOCK TABLES `device` WRITE;

INSERT INTO
  `device` (`device_name`)
VALUES
  ('mobile'),
  ('desktop');

UNLOCK TABLES;

-- project TABLE
DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `pitch` TEXT(10000) NOT NULL,
  `link` VARCHAR(500) NOT NULL
);

LOCK TABLES `project` WRITE;

INSERT INTO
  `project` (`title`, `pitch`, `link`)
VALUES
  (
    'To Do List',
    'description du projet, story telling',
    'https://github.com/MarionbDev/Projet-1-TodoList'
  ),
  (
    'Star Treker',
    'description du projet, story telling',
    'https://github.com/WildCodeSchool/2023-02-JS-LaLoupe-StarTreker'
  ),
  (
    'Jollydays',
    'description du projet, story telling',
    'https://github.com/aliciacqt/hackathon1'
  );

UNLOCK TABLES;

-- projectimage TABLE
DROP TABLE IF EXISTS `projectimage`;

CREATE TABLE `projectimage` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(500) NOT NULL,
  `device_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  CONSTRAINT `fk_projectimage_project` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`),
  CONSTRAINT `fk_projectimage_device` FOREIGN KEY (`device_id`) REFERENCES `device`(`id`)
);

LOCK TABLES `projectimage` WRITE;

INSERT INTO
  `projectimage` (`image`, `device_id`, `project_id`)
VALUES
  (
    '/src/assets/img/1-To Do List/1_mobile1.png',
    '1',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_mobile2.png',
    '1',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_mobile3.png',
    '1',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_mobile4.png',
    '1',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_desktop1.png',
    '2',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_desktop2.png',
    '2',
    '1'
  ),
  (
    '/src/assets/img/1-To Do List/1_desktop3.png',
    '2',
    '1'
  ),
  (
    '/src/assets/img/2-Star Treker/2_mobile1.png',
    '1',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_mobile2.png',
    '1',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_mobile3.png',
    '1',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_mobile4.png',
    '1',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_desktop1.png',
    '2',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_desktop2.png',
    '2',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_desktop3.png',
    '2',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_desktop4.png',
    '2',
    '2'
  ),
  (
    '/src/assets/img/2-Star Treker/2_desktop5.png',
    '2',
    '2'
  ),
  (
    '/src/assets/img/3-Jollydays/3_mobile1.png',
    '1',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_mobile2.png',
    '1',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_mobile3.png',
    '1',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_mobile4.png',
    '1',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_desktop1.png',
    '2',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_desktop2.png',
    '2',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_desktop3.png',
    '2',
    '3'
  ),
  (
    '/src/assets/img/3-Jollydays/3_desktop4.png',
    '2',
    '3'
  );

UNLOCK TABLES;

-- projecttechno TABLE
DROP TABLE IF EXISTS `projecttechno`;

CREATE TABLE `projecttechno` (
  `techno_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  CONSTRAINT `fk_projecttechno_techno` FOREIGN KEY (`techno_id`) REFERENCES `techno`(`id`),
  CONSTRAINT `fk_projecttechno_project` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`)
);

-- projectrole TABLE
DROP TABLE IF EXISTS `projectrole`;

CREATE TABLE `projectrole` (
  `role_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  CONSTRAINT `fk_projectrole_role` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`),
  CONSTRAINT `fk_projectrole_project` FOREIGN KEY (`project_id`) REFERENCES `project`(`id`)
);

-- tool TABLE
DROP TABLE IF EXISTS `tool`;

CREATE TABLE `tool` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tool_name` VARCHAR(50) NOT NULL
);

LOCK TABLES `tool` WRITE;

INSERT INTO
  `tool` (`tool_name`)
VALUES
  ('VS Code'),
  ('Git'),
  ('GitHub'),
  ('Figma'),
  ('Agile'),
  ('Scrum');

UNLOCK TABLES;