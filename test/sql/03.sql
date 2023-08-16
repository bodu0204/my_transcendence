CREATE TABLE favorite_food(
person_id SMALLINT UNSIGNED,
food VARCHAR(20),
CONSTRAINT PRIMARY KEY (person_id, food), 
CONSTRAINT FOREIGN KEY (person_id)
REFERENCES person (person_id)
);
