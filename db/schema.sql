USE yt94br3krryt0sin;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);